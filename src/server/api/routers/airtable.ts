import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { FieldSet, Table } from "airtable";
import { base } from "~/lib/utils";
import { z } from "zod";

export class AirtableClient<T extends FieldSet> {
  private table: Table<T>;

  constructor(tableName: string) {
    this.table = base(tableName);
  }

  //get all records
  public async fetchAllRecords(): Promise<T[]> {
    const records: T[] = [];
    return new Promise((resolve, reject) => {
      this.table.select().eachPage(
        (pageRecords, fetchNextPage) => {
          pageRecords.forEach((record) => {
            records.push(record.fields);
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
            console.log(records);
            resolve(records);
          }
        },
      );
    });
  }
  //search by project ref
  public async fetchRecordByProjectRef(projectRef: string): Promise<T | null> {
    return new Promise((resolve, reject) => {
      this.table
        .select({
          filterByFormula: `FIND('${projectRef}', {Project Ref}) > 0`,
        })
        .firstPage((err, records) => {
          if (err) {
            console.error("Error fetching record:", err);
            reject(
              new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: `Error fetching record by Project Ref: ${err}`,
              }),
            );
          } else if (records && records.length > 0) {
            resolve(records[0]?.fields ?? null);
          } else {
            resolve(null);
          }
        });
    });
  }

  //filter the entire table
  public async fetchRecordsByFilter(filterFormula: string): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const records: T[] = [];
      this.table.select({ filterByFormula: filterFormula }).eachPage(
        (pageRecords, fetchNextPage) => {
          pageRecords.forEach((record) => {
            records.push(record.fields);
          });
          fetchNextPage();
        },
        (err) => {
          if (err) {
            console.error("Error fetching records by filter:", err);
            reject(
              new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: `Error fetching records by filter: ${err}`,
              }),
            );
          } else {
            resolve(records);
          }
        },
      );
    });
  }
}

export const airtableRouter = createTRPCRouter({
  fetchRecords: publicProcedure.query(async () => {
    try {
      const airtableClient = new AirtableClient(
        process.env.AIRTABLE_TABLE_ID ?? "",
      );
      const records = await airtableClient.fetchAllRecords();

      return records;
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `An error occurred while fetching data from Airtable: ${(error as Error).message}`,
      });
    }
  }),

  fetchRecordByProjectRef: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      try {
        const airtableClient = new AirtableClient(
          process.env.AIRTABLE_TABLE_ID ?? "",
        );
        const projectRef = "596 Richmond Centre";
        const record = await airtableClient.fetchRecordByProjectRef(projectRef);

        return record;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `An error occurred while fetching data from Airtable by Project Ref: ${(error as Error).message}`,
        });
      }
    }),

  fetchRecordsByFilter: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const airtableClient = new AirtableClient(
        process.env.AIRTABLE_TABLE_ID ?? "",
      );
      const records = await airtableClient.fetchRecordsByFilter(input);
      return records;
    }),
});