import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { getClientForRegion } from "~/lib/airtable";
import { z } from "zod";

export const airtableRouter = createTRPCRouter({
  // Fetch all records with an optional filter
  fetchRecords: publicProcedure
    .input(
      z.object({
        region: z.enum(["Vancouver", "Edmonton", "Calgary"]),
        filter: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      try {
        const client = getClientForRegion(input.region);
        const records = await client.fetchAllRecords(input.filter);
        return records;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `An error occurred while fetching data from Airtable: ${(error as Error).message}`,
        });
      }
    }),

  // Fetch records by a list of record IDs and region
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
