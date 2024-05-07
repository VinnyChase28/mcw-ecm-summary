import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { AirtableClient } from "~/lib/airtable";
import { z } from "zod";

export const airtableRouter = createTRPCRouter({
  //get all records
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