import React, { useState } from "react";
import { Button } from "./ui/button";

type Props = { onUpload: (fileUrl: string) => void };

const FileUpload = ({ onUpload }: Props) => {
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const [pdfFileError, setPdfFileError] = useState("");

  const handlePdfFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      setPdfFile(null);
      setPdfFileError("Please select a valid PDF file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPdfFile(reader.result as string);
      setPdfFileError("");
    };
    reader.readAsDataURL(selectedFile);
  };

  const handlePdfFileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pdfFile) onUpload(pdfFile);
  };

  return (
    <form onSubmit={handlePdfFileSubmit} className="flex flex-col gap-2 text-gray-900">
      <input
        type="file"
        accept="application/pdf"
        required
        onChange={handlePdfFileChange}
        className="text-sm"
      />
      {pdfFileError && <p className="text-sm text-red-500">{pdfFileError}</p>}
      <Button type="submit" className="bg-blue-500">
        Upload
      </Button>
    </form>
  );
};

export default FileUpload;
