"use client";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  return (
    <div className="min-h-screen md:pl-10">
      <div className="h-screen" data-testid="tldraw-editor">
        <Tldraw persistenceKey="tldraw-demo" />
      </div>
    </div>
  );
}
