import { useEffect, useState, useRef, ReactNode } from "react";
import microscopeSketch from "@assets/stock_images/microscope_pen_sketc_4ee82a49.jpg";
import sequencerSketch from "@assets/stock_images/dna_sequencer_machin_d877004d.jpg";

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function ScrollRevealSection({ children, className = "", id }: ScrollRevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      // 0 = section entering viewport, 1 = section fully in view
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Progress from 0 to 1 as section scrolls into view
      let progress = 0;
      if (sectionTop < viewportHeight) {
        progress = Math.min(1, (viewportHeight - sectionTop) / (viewportHeight * 0.7));
      }
      
      setScrollProgress(progress);
    };

    const scrollContainer = document.querySelector('.h-screen.overflow-y-scroll');
    const target = scrollContainer || window;
    
    target.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => target.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transform values based on scroll progress
  const leftImageTransform = -100 + (scrollProgress * 100); // Starts at -100%, moves to 0%
  const rightImageTransform = 100 - (scrollProgress * 100); // Starts at 100%, moves to 0%
  const contentOpacity = scrollProgress;

  return (
    <section 
      ref={sectionRef}
      id={id}
      className={`relative ${className}`}
    >
      {/* Left microscope image - slides in from left */}
      <div
        className="absolute inset-y-0 left-0 w-1/3 pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"
        style={{
          transform: `translateX(${leftImageTransform}%)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src={microscopeSketch}
          alt=""
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
          style={{
            filter: "grayscale(100%) contrast(1.2)",
          }}
        />
      </div>

      {/* Right sequencer image - slides in from right */}
      <div
        className="absolute inset-y-0 right-0 w-1/3 pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"
        style={{
          transform: `translateX(${rightImageTransform}%)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src={sequencerSketch}
          alt=""
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
          style={{
            filter: "grayscale(100%) contrast(1.2)",
          }}
        />
      </div>

      {/* Content with fade-in effect */}
      <div
        className="relative z-10"
        style={{
          opacity: contentOpacity,
          transition: "opacity 0.2s ease-out",
        }}
      >
        {children}
      </div>
    </section>
  );
}
