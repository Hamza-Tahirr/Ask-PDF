'use client'
import React from "react";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { Input } from "./ui/input";

const ChatComponent = () => {
  const { input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="relative max-h-screen">
      <div className="sticky top-0 inset-x-0 p-2 h-fit">
        <h3 className="text-xl font-bold">Chat</h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 inset-x-0 px-2 py-4"
      >
        <div className="flex">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask any question..."
            className="w-full"
          />
          <Button className="bg-blue-500 ml-2">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;
