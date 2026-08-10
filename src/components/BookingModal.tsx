import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { site } from "@/lib/site";

type BookingContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within <BookingProvider>");
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-foreground/60 p-4 backdrop-blur-sm sm:items-center"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-8 w-full max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-9"
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close booking widget"
                className="absolute right-4 top-4 grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X size={20} />
              </button>
              <p className="eyebrow">Reservations</p>
              <h2 id="booking-modal-title" className="mt-3 text-2xl sm:text-3xl">
                Book your stay
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Send your dates to {site.shortName} and our reservations team will confirm
                availability. Live online booking is coming soon.
              </p>
              <div className="mt-7">
                <BookingForm />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}

export function BookNowButton({
  className,
  children = "Book Now",
}: {
  className?: string;
  children?: ReactNode;
}) {
  const { open } = useBooking();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
