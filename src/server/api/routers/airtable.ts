import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

// Correctly set these in your .env.local file
const BASE_ID = process.env.AIRTABLE_BASE_ID;
const TABLE_ID = process.env.AIRTABLE_TABLE_ID;
const API_KEY = process.env.AIRTABLE_PAT;
const AIRTABLE_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;

export const airtableRouter = createTRPCRouter({
  fetchRecords: publicProcedure.query(async () => {
    try {
      const response = await fetch(AIRTABLE_URL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Failed to fetch data from Airtable: ${response.status} ${response.statusText}`,
        });
      }

      const data = await response.json();
      return data.records;
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `An error occurred while fetching data from Airtable: ${(error as Error).message}`,
      });
    }
  }),
});