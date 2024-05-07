import { FieldSet, Table } from "airtable";
import { base } from "~/lib/utils";
import { TRPCError } from "@trpc/server";

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
            resolve(records);
          }
        },
      );
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
