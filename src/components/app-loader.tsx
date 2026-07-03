"use client";

import { useCallback, useEffect, useState } from "react";
import Loader from "@/components/Loader";

/**
 * Full-screen loading overlay shown on first paint until all page assets have
 * loaded. Locks body scroll while active, then fades out and unmounts.
 */
export function AppLoader() {
  const [complete, setComplete] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleComplete = useCallback(() => setComplete(true), []);

  // Lock scroll while the loader is on screen.
  useEffect(() => {
    if (hidden) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [hidden]);

  // After the fade-out transition finishes, remove the overlay entirely.
  useEffect(() => {
    if (!complete) return;
    const t = setTimeout(() => setHidden(true), 600);
    return () => clearTimeout(t);
  }, [complete]);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] transition-opacity duration-500 ease-out ${
        complete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Loader onComplete={handleComplete} />
    </div>
  );
}

export default AppLoader;
