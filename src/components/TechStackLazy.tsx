import { lazy, Suspense, useEffect, useRef, useState } from "react";

const TechStack = lazy(() => import("./TechStack"));

/**
 * Defers downloading Rapier + postprocessing (~2MB+ JS) until the user
 * scrolls near this section; initial load focuses on the hero + 3D character.
 */
const TechStackLazy = () => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setMount(true);
          obs.disconnect();
        }
      },
      { rootMargin: "320px 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden
        style={{ height: 1, width: "100%", overflow: "hidden" }}
      />
      {mount ? (
        <Suspense
          fallback={
            <div
              className="techstack techstack-skeleton"
              style={{ pointerEvents: "none" }}
            >
              <h2>Stack &amp; tools</h2>
            </div>
          }
        >
          <TechStack />
        </Suspense>
      ) : (
        <div
          className="techstack techstack-skeleton"
          aria-hidden
          style={{ pointerEvents: "none" }}
        >
          <h2>Stack &amp; tools</h2>
        </div>
      )}
    </>
  );
};

export default TechStackLazy;
