/**
 * Returns true if the animation should be skipped entirely.
 * No session storage — loader runs on every page load.
 * Only skipped for users who prefer reduced motion or are on a very slow connection.
 */
export function shouldSkipAnimation(): boolean {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  const conn = (navigator as Navigator & { connection?: { effectiveType: string } }).connection;
  if (conn && ["2g", "slow-2g"].includes(conn.effectiveType)) return true;
  return false;
}

/** Lock body scroll during loader. Returns an idempotent unlock function. */
export function lockScroll(): () => void {
  const prev = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  let done = false;
  return () => {
    if (done) return;
    done = true;
    document.body.style.overflow = prev;
  };
}
