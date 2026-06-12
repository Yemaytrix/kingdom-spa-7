"use client";

import { useState, useEffect } from "react";

type ScrollDirection = "up" | "down" | "idle";

export function useScrollDirection(threshold = 8): ScrollDirection {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>("idle");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - prevScrollY;

      if (Math.abs(delta) < threshold) return;

      setScrollDir(delta > 0 ? "down" : "up");
      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", updateScrollDir, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, [prevScrollY, threshold]);

  return scrollDir;
}

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
}
