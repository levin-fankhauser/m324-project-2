"use client";
import { useParams } from "next/navigation";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const { id } = useParams();

  if (!id || typeof id !== "string") {
    return <div>Invalid canvas ID</div>;
  }

  return (
    <div className="min-h-screen md:pl-10">
      <div className="h-screen" data-testid="tldraw-editor">
        {id && typeof id === "string" && <Tldraw persistenceKey={id} />}
      </div>
    </div>
  );
}
