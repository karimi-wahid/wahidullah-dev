import { useEffect, useRef } from "react";

export default function MouseCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let animationFrame: number;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `
                translate3d(${mouseX}px, ${mouseY}px, 0)
            `;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.transform = `
                translate3d(${ringX}px, ${ringY}px, 0)
            `;

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("a, button, [data-cursor]")) {
        ring.classList.add("cursor-hover");
        dot.classList.add("cursor-hover-dot");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("a, button, [data-cursor]")) {
        ring.classList.remove("cursor-hover");
        dot.classList.remove("cursor-hover-dot");
      }
    };

    const handleMouseDown = () => {
      dot.classList.add("cursor-click");
      ring.classList.add("cursor-click");
    };

    const handleMouseUp = () => {
      dot.classList.remove("cursor-click");
      ring.classList.remove("cursor-click");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={dotRef}
        className="
                    custom-cursor
                    pointer-events-none
                    fixed
                    left-0
                    top-0
                    z-9999
                    h-2
                    w-2
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-white
                    mix-blend-difference
                "
      />

      {/* Following ring */}
      <div
        ref={ringRef}
        className="
                    custom-cursor
                    pointer-events-none
                    fixed
                    left-0
                    top-0
                    z-9998
                    h-10
                    w-10
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-white/60
                    mix-blend-difference
                    transition-[width,height,background-color]
                    duration-300
                "
      />
    </>
  );
}
