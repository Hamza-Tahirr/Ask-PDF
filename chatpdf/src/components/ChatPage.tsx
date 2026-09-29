'use client'

import React, { useState } from "react";
import ChatSideBar from "./ChatSideBar";
import PDFViewer from "./PDFViewer";
import ChatComponent from "./ChatComponent";

const ChatPage = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <div className="flex w-full max-h-screen">
        <div className="flex-[1] max-w-xs">
          <ChatSideBar onUpload={setPdfUrl} />
        </div>

        <div className="h-screen p-4 overflow-auto flex-[5]">
          <PDFViewer fileUrl={pdfUrl} />
        </div>

        <div className="flex-[3] border-l-4 border-l-slate-200">
          <ChatComponent />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
