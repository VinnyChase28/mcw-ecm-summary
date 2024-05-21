"use client";

import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { useChat } from "ai/react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });
  const [localInput, setLocalInput] = useState(input);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    setLocalInput("");
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`rounded-lg p-2 ${
              message.role === "user"
                ? "self-end bg-blue-100 dark:bg-blue-800"
                : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            <span className="font-bold">
              {message.role === "user" ? "User" : "AI"}:{" "}
            </span>
            {message.role === "user" ? (
              message.content
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.content}
              </ReactMarkdown>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="flex space-x-2">
        <input
          name="prompt"
          value={localInput}
          onChange={(e) => {
            setLocalInput(e.target.value);
            handleInputChange(e);
          }}
          placeholder="Type your question here..."
          className="flex-1 rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
          type="text"
        />
        <Button
          type="submit"
          className="flex items-center justify-center rounded-md bg-primary p-2 text-white hover:bg-secondary"
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}

export default Chat;
