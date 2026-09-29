# Ask PDF

Ask PDF is the front end of a "chat with your PDF" web app, built with Next.js and TypeScript. You upload a PDF, read it in the browser and type questions about it in a chat panel.

This repository contains the user interface only. The chat panel sends messages to an `/api/chat` endpoint through the Vercel AI SDK, but that endpoint (and the PDF processing and language model behind it) is not included here, so the chat will not return answers until a backend route is added.

## Features

- Three-column layout: sidebar, PDF viewer and chat panel
- PDF upload from the sidebar, with a check that only PDF files are accepted
- In-browser PDF viewing with the default layout of React PDF Viewer (toolbar, page thumbnails, search, zoom)
- Chat input built on the `useChat` hook from the Vercel AI SDK
- Sidebar with placeholder entries for a chat history list

## Tech stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS with shadcn/ui style `Button` and `Input` components
- React PDF Viewer (`@react-pdf-viewer/core`, `@react-pdf-viewer/default-layout`) on top of `pdfjs-dist` 3.4.120
- Vercel AI SDK (`ai`)
- lucide-react icons

## Project structure

```
chatpdf/
  src/app/                 root layout, global styles and the home page
  src/components/
    ChatPage.tsx           three-column page, holds the selected PDF
    ChatSideBar.tsx        sidebar with the chat list and upload form
    FileUpload.tsx         file input that reads the PDF in the browser
    PDFViewer.tsx          PDF viewer for the uploaded file
    ChatComponent.tsx      chat input wired to useChat
    ui/                    Button and Input components
  src/lib/utils.ts         cn() helper for Tailwind class names
```

## Getting started

Requirements: Node.js 18.17 or later and npm.

```bash
cd chatpdf
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # run ESLint
```

No environment variables are needed to run the UI.

The PDF.js worker is loaded from unpkg, so the viewer needs an internet connection. If you change the `pdfjs-dist` version in `package.json`, update the worker URL in `src/components/PDFViewer.tsx` to the same version.

## License

MIT, see [LICENSE](LICENSE).
