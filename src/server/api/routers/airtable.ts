import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { airtableClient } from "~/lib/airtable";
import { z } from "zod";
import { getClientForRegion } from "~/lib/airtable";


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

  // fetch records by a list of record IDs
  fetchRecordsByRegion: publicProcedure
    .input(
      z.object({
        region: z.enum(["Vancouver", "Edmonton", "Calgary"]),
        ids: z.array(z.string()),
      }),
    )
    .query(async ({ input }) => {
      try {
        const client = getClientForRegion(input.region);
        const records = await client.fetchRecordsByProjectIds(input.ids);
        return records;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `An error occurred while fetching records by region from Airtable: ${(error as Error).message}`,
        });
      }
    }),
});