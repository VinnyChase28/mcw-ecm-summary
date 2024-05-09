import type { FieldSet, Table } from "airtable";
import Airtable from "airtable";
import { TRPCError } from "@trpc/server";

export const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(
  process.env.AIRTABLE_BASE_ID ?? "",
);

export class AirtableClient<T extends FieldSet> {
  private table: Table<T>;

  constructor(tableName: string) {
    this.table = base(tableName);
  }

  //get all records
  public async fetchAllRecords(): Promise<{ id: string; fields: T }[]> {
    const records: { id: string; fields: T }[] = [];
    return new Promise((resolve, reject) => {
      this.table.select().eachPage(
        (pageRecords, fetchNextPage) => {
          pageRecords.forEach((record) => {
            records.push({ id: record.id, fields: record.fields });
          });
          fetchNextPage();
        },
        (err) => {
          if (err) {
            console.error("Error fetching records:", err);
            reject(
              new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: `Error fetching records: ${err}`,
              }),
            );
          } else {
            resolve(records);
          }
        },
      );
    });
  }

  //fetch by Project Id's (parent to Project Ref)
  public async fetchRecordsByProjectIds(
    projectIds: string[],
  ): Promise<{ id: string; fields: T }[]> {
    const filterFormula = projectIds
      .map((id) => `FIND('${id}', LEFT({Project Number}, 4)) > 0`)
      .join(", ");

    return new Promise((resolve, reject) => {
      const recordsMap = new Map<string, { id: string; fields: T }>();
      this.table.select({ filterByFormula: `OR(${filterFormula})` }).eachPage(
        (pageRecords, fetchNextPage) => {
          pageRecords.forEach((record) => {
            const projectRefKey = record?.fields["Project Ref"]
              ?.toString()
              .substring(0, 4);
            if (projectRefKey !== undefined) {
              if (!recordsMap.has(projectRefKey)) {
                recordsMap.set(projectRefKey, {
                  id: record.id,
                  fields: record.fields,
                });
              }
            }
          });
          fetchNextPage();
        },
        (err) => {
          if (err) {
            console.error("Error fetching records by project IDs:", err);
            reject(
              new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: `Error fetching records by project IDs: ${err}`,
              }),
            );
          } else {
            resolve(Array.from(recordsMap.values()));
          }
        },
      );
    });
  }
}

export function getClientForRegion(region: string): AirtableClient<FieldSet> {
  const tableMap: Record<string, string | undefined> = {
    Vancouver: process.env.AIRTABLE_VANCOUVER ?? "",
    Edmonton: process.env.AIRTABLE_EDMONTON ?? "",
    Calgary: process.env.AIRTABLE_CALGARY ?? "",
  };

  const tableName = tableMap[region];
  if (tableName === undefined) {
    throw new Error(`No table name found for region: ${region}`);
  }
  return new AirtableClient(tableName);
}

export const airtableClient = new AirtableClient(
  process.env.AIRTABLE_VANCOUVER ?? "",
);
