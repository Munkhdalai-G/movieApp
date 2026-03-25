"use client";
import { Play } from "lucide-react";

export default function TrailerButton({
  trailerUrl,
}: {
  trailerUrl: string | null;
}) {
  if (!trailerUrl) return null;

  return (
    <button
      onClick={() => window.open(trailerUrl, "_blank")}
      className="flex items-center gap-3 "
    >
      <div className="border rounded-3xl p-2 bg-black/40 text-white dark:border-white">
        <Play className="stroke-1" size={17} />
      </div>
      <div className="text-white font-medium">Play trailer</div>
    </button>
  );
}
