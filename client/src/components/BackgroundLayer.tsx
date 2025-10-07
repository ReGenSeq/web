import { useEffect, useState } from "react";
import { HiSeq2500Outline } from "./HiSeq2500Outline";

interface BackgroundLayerProps {
  sectionIndex: number;
}

export function BackgroundLayer({ sectionIndex }: BackgroundLayerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const translateY = sectionIndex * -150;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -1,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out text-foreground/10"
        style={{
          transform: `translateY(${translateY}px) scale(2.5)`,
          willChange: "transform",
        }}
      >
        <HiSeq2500Outline />
      </div>
    </div>
  );
}
