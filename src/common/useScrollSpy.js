import { useEffect, useState } from "react";

/**
 * Scroll-spy based on IntersectionObserver: the active section is whichever
 * crosses a thin band in the upper-middle of the viewport. The percentage
 * rootMargin scales to any viewport height, and at most one section can
 * occupy the band at a time, so exactly one nav item is highlighted.
 *
 * @param {string[]} sectionIds - stable array of section element ids,
 *   in document order
 */
export const useScrollSpy = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // The last section can be too short to reach the band — force it active
    // once the page is scrolled to the bottom.
    const handleScroll = () => {
      // Ignore synthetic scrolls while a modal has the body locked —
      // scrollHeight collapses to viewport height and falsifies the check.
      if (document.body.style.position === "fixed") return;
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        setActiveId(sectionIds[sectionIds.length - 1]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeId;
};
