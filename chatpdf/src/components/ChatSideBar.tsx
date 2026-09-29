'use client'

import React from "react";
import { Button } from "./ui/button";
import { FileText, MessageCircleMore } from "lucide-react";
import FileUpload from "./FileUpload";

// Placeholder entries, chat history is not stored yet
const chats = Array.from({ length: 9 }, () => "PDF Uploaded");

type Props = { onUpload: (fileUrl: string) => void };

const ChatSideBar = ({ onUpload }: Props) => {
  return (
    <div className="w-full h-screen p-6 text-gray-200 bg-gray-900">
      <Button className="w-full font-bold text-lg">
        <FileText className="mr-2 w-4 h-4" />
        Ask PDF
      </Button>

      <div className="flex max-h-screen pb-20 flex-col gap-2 mt-4">
        {chats.map((title, i) => (
          <Button key={i} className="w-full border-dashed border-white border">
            <MessageCircleMore className="mr-2 w-4 h-4" />
            {title}
          </Button>
        ))}
      </div>

      <div className="mt-[-10px] p-2 bg-white rounded-xl">
        <FileUpload onUpload={onUpload} />
      </div>
    </div>
  );
};

export default ChatSideBar;
