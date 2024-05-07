import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { airtableClient } from "~/lib/airtable";
import { z } from "zod";

export const airtableRouter = createTRPCRouter({
  //get all records
  fetchRecords: publicProcedure.query(async () => {
    try {
      const records = await airtableClient.fetchAllRecords();

      return records;
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `An error occurred while fetching data from Airtable: ${(error as Error).message}`,
      });
    }
  }),
  //fetch by a specfied filter
  fetchRecordsByFilter: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const records = await airtableClient.fetchRecordsByFilter(input);
      return records;
    }),
});