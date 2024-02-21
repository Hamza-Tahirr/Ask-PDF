'use client'
import { Inbox } from "lucide-react";
import React from "react";
import { useDropzone } from "react-dropzone";

type Props = {}

const FileUpload = (props : Props) => {
    const {getRootProps, getInputProps} = useDropzone({
        accept: { "application/pdf": [".pdf"] },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
        console.log(acceptedFiles);
        const file = acceptedFiles[0]
        },
    });
          
    return (
        <div className="p-2 bg-white rounded-xl">
            <div {...getRootProps(
                {
                    className: 'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-5 flex justify-center items-center flex-col', 
                }
            )}>
                <input {...getInputProps()}/>
                <>
                <Inbox className="w-10 h-10 text-blue-500"/>
                <p className="mt-2 text-sm text-slate-400">Drop Pdf Here</p>
                </>
            </div>
        </div>
    );
}
export default FileUpload