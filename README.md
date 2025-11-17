# Modul 324 - Sketchly

Kennst du das? Du brauchst schnell eine Skizze, ein Diagramm oder möchtest einfach eine Idee visualisieren aber komplizierte Tools stehen dir im Weg. Genau hier setzen wir an!
Unsere Drawing App ist die perfekte Lösung für alle, die unkompliziert und intuitiv zeichnen möchten. Keine Installation nötig, keine Registrierung, keine Cloud einfach Browser öffnen und loslegen! Egal ob du Brainstorming Sessions dokumentierst, technische Skizzen erstellst oder einfach deine Kreativität auslebst, alle deine Zeichnungen bleiben sicher bei dir auf dem Gerät gespeichert.

## Features

- Auf einem Canvas zeichen
- Canvas verwalten
- Zeichungen in einer Übersicht anzeigen
- Zeichungen im Local Storage speichern
- Zeichungen
  - erstellen
  - löschen
  - bearbeiten

## Technologien im Einsatz

- Next.js (Typescript)
- TailwindCSS
- Tldraw
- AWS

## Lokale Entwicklung

Das Projekt kann lokal geklont werden. Die Dateien welche zur entwicklung relevant sind, befinden sich im ./app Order befinden.

### Projekt aufsetzen

1. Abhängigkeiten installieren:

```bash
npm install
```

2. Entwicklungs-Server starten:

```bash
npm run dev
```

Öffnen sie [http://localhost:3000](http://localhost:3000) mit dem Browser um das Resultat zu sehen.

### Verfügbare npm-Skripte

| Script                 | Zweck                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------- |
| `npm run dev`          | Startet den Next.js Entwicklungs-Server mit Hot Reloading.                             |
| `npm run build`        | Erstellt ein optimiertes Produktions-Build.                                            |
| `npm run start`        | Startet den Produktions-Server (zuerst `npm run build` ausführen).                     |
| `npm run lint`         | Führt ESLint über das Projekt aus.                                                     |
| `npm run lint:ci`      | Führt ESLint mit JSON-Report (`eslint_report.json`) aus – für CI-Pipelines.            |
| `npm run format`       | Formatiert den gesamten Code mit Prettier.                                             |
| `npm run format:check` | Prüft, ob der Code den Prettier-Konventionen entspricht, ohne Änderungen zu schreiben. |
| `npm run lint:fix`     | Führt `npm run lint -- --fix` aus und formatiert anschliessend den Code.               |

Dieses Projekt verwendet [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) um automatisch eine neue font family von Vercel, [Geist](https://vercel.com/font), zu laden und optimisieren.
