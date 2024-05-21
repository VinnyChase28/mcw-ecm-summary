import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { datasets } from "@/components/products";
// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages) {
      throw new Error("Messages array is missing in the request body");
    }

    // Include datasets in the messages array
    const response = await openai.createChatCompletion({
      model: "gpt-4o",
      stream: true,
      messages: [
        ...messages,
        {
          content: JSON.stringify(datasets),
          role: "system",
        },
        {
          content:
            "You are an expert engineer who has vast knowledge of sustainable products for the construction industry. These are products that have been selected for this project. Explain why they were selected, and do a cost analysis.",
          role: "system",
        },
      ],
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
