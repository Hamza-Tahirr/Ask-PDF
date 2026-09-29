'use client'

import React from "react";
import { Button } from "./ui/button";
import { PlusCircle, FileText, MessageCircleMore, Inbox } from "lucide-react";
import FileUpload from "./FileUpload";

type Props = {}

const ChatSideBar = (props : Props) => {
          
    return (
        <div className="w-full h-screen p-6 text-gray-200 bg-gray-900">
            <Button className="w-full font-bold text-lg">
                <FileText className="mr-2 w-4 h-4" />
                Ask PDF
            </Button>
            <div className="flex max-h-screen pb-20 flex-col gap-2 mt-4">
            <Button className="w-full border-dashed border-white border">
                <MessageCircleMore className="mr-2 w-4 h-4" />
                PDF Uploaded
            </Button>
            <Button className="w-full border-dashed border-white border">
                <MessageCircleMore className="mr-2 w-4 h-4" />
                PDF Uploaded
            </Button>
            <Button className="w-full border-dashed border-white border">
                <MessageCircleMore className="mr-2 w-4 h-4" />
                PDF Uploaded
            </Button>
            <Button className="w-full border-dashed border-white border">
                <MessageCircleMore className="mr-2 w-4 h-4" />
                PDF Uploaded
            </Button>
            <Button className="w-full border-dashed border-white border gap-2">
                <MessageCircleMore className="mr-2 w-4 h-4" />
                PDF Uploaded
            </Button>
            <Button className="w-full border-dashed border-white border gap-2">
                <MessageCircleMore className="mr-2 w-4 h-4" />
                PDF Uploaded
            </Button>
            <Button className="w-full border-dashed border-white border gap-2">
                <MessageCircleMore className="mr-2 w-4 h-4" />
                PDF Uploaded
            </Button>
            <Button className="w-full border-dashed border-white border gap-2">
                <MessageCircleMore className="mr-2 w-4 h-4" />
                PDF Uploaded
            </Button>
            <Button className="w-full border-dashed border-white border gap-2">
                <MessageCircleMore className="mr-2 w-4 h-4" />
                PDF Uploaded
            </Button>
            
            </div>
            <div className="mt-[-10px] p-2 bg-white rounded-xl">
                 
                  <FileUpload/>
                </div>
                
            </div>
            
            
          
    );
}
export default ChatSideBar