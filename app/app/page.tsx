'use client';
import { Button } from "@/components/ui/button";
import { Pencil } from 'lucide-react';
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-sm flex items-center justify-center">
            <Pencil className="w-5 h-5" />
          </div>
          <span className="text-xl font-semibold">Sketchly</span>
        </div>

        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Eine unendliche Leinwand<br />
            für deine Gedanken
          </h1>

          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Zeichne, skizziere oder erstelle Diagramme ohne Grenzen. Keine Anmeldung erforderlich.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="#draw" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 px-8 py-6 text-base font-medium"
            >
              Jetzt zeichnen
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
