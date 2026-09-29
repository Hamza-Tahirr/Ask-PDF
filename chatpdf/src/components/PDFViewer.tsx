import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// The worker version has to match the pdfjs-dist version in package.json
const WORKER_URL = "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

type Props = { fileUrl: string | null };

const PDFViewer = ({ fileUrl }: Props) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  if (!fileUrl) {
    return (
      <div className="flex h-full items-center justify-center text-gray-500">
        No PDF file selected
      </div>
    );
  }

  return (
    <Worker workerUrl={WORKER_URL}>
      <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
    </Worker>
  );
};

export default PDFViewer;
