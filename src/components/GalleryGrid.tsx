import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/content";

export function GalleryGrid({ items }: { items: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const move = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, move]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((img, i) => (
          <motion.button
            key={`${img.src}-${i}`}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            onClick={() => setIndex(i)}
            className="zoom-media group block w-full break-inside-avoid rounded-2xl border border-border bg-card shadow-soft"
            aria-label={`Open image: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-card/15 text-card transition-colors hover:bg-card/30"
            >
              <X size={22} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 grid size-11 place-items-center rounded-full bg-card/15 text-card transition-colors hover:bg-card/30 sm:left-6"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
              aria-label="Next image"
              className="absolute right-3 grid size-11 place-items-center rounded-full bg-card/15 text-card transition-colors hover:bg-card/30 sm:right-6"
            >
              <ChevronRight size={24} />
            </button>
            <motion.figure
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[86vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[index]?.src}
                alt={items[index]?.alt ?? ""}
                className="max-h-[76vh] w-full rounded-2xl object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-card/85">
                {items[index]?.alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
