"use client";

import CanvasCard from "@/components/canvas-card/canvas-card";
import { DeleteDrawingDialog } from "@/components/overview/delete-drawing-dialog";
import { EditDrawingDialog } from "@/components/overview/edit-drawing-dialog";
import { Drawing } from "@/lib/types/drawings";
import { canvasStorageService } from "@/services/canvasStorage.service";
import { PencilLine } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LOADING_DELAY_MS = 350;

export default function OverviewPage() {
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingDrawing, setEditingDrawing] = useState<Drawing | null>(null);
  const [deletingDrawing, setDeletingDrawing] = useState<Drawing | null>(null);
  const [titleInput, setTitleInput] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDrawings(canvasStorageService.getAll());
      setIsLoading(false);
    }, LOADING_DELAY_MS);

    return () => clearTimeout(timeout);
  }, []);

  const hasDrawings = drawings.length > 0;

  const openEditDialog = (drawing: Drawing) => {
    setEditingDrawing(drawing);
    setTitleInput((drawing.title ?? "").trim());
  };

  const closeDialog = () => {
    setEditingDrawing(null);
    setTitleInput("");
  };

  const openDeleteDialog = (drawing: Drawing) => {
    setDeletingDrawing(drawing);
  };

  const closeDeleteDialog = () => {
    setDeletingDrawing(null);
  };

  const confirmDelete = () => {
    if (!deletingDrawing) return;
    canvasStorageService.deleteCanvas(deletingDrawing.id);
    setDrawings(canvasStorageService.getAll());
    closeDeleteDialog();
  };

  const saveTitle = () => {
    if (!editingDrawing) return;
    const trimmed = titleInput.trim();
    canvasStorageService.editTitle(editingDrawing.id, trimmed || null);
    setDrawings(canvasStorageService.getAll());
    closeDialog();
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs uppercase tracking-widest text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            <PencilLine className="size-4" />
            Übersicht
          </div>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              Gespeicherte Zeichnungen
            </h1>
          </div>
        </header>
        {isLoading && <LoadingGrid />}
        {!isLoading && hasDrawings && (
          <div className="grid gap-4 sm:grid-cols-2">
            {drawings.map((drawing) => (
              <CanvasCard
                key={drawing.id}
                drawing={drawing}
                onOpen={(id) => router.push(`/draw/${id}`)}
                onEdit={(current) => openEditDialog(current)}
                onDelete={(current) => openDeleteDialog(current)}
              />
            ))}
          </div>
        )}
        {!isLoading && !hasDrawings && (
          <div className="flex justify-center mt-40">
            <div className="text-xl border p-4 rounded-lg text-neutral-500">
              <p>Keine Zeichnungen vorhanden</p>
            </div>
          </div>
        )}
      </div>

      <EditDrawingDialog
        drawing={editingDrawing}
        title={titleInput}
        onTitleChange={(value) => setTitleInput(value)}
        onClose={closeDialog}
        onSave={saveTitle}
      />

      <DeleteDrawingDialog
        drawing={deletingDrawing}
        onClose={closeDeleteDialog}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

function LoadingGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="h-38 animate-pulse rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40"
          data-testid="overview-skeleton"
        />
      ))}
    </div>
  );
}
