import { useEffect, useState, useRef } from "react";
import sequencerImage from "@assets/stock_images/hiseq_2500_dna_seque_70ebf703.jpg";

export function SequencerExplodedView() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress: 0 when section enters viewport, 1 when it exits
      const progress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));
      setScrollProgress(progress);
    };

    const scrollContainer = document.querySelector('.h-screen.overflow-y-scroll');
    const target = scrollContainer || window;
    
    target.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => target.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate separation distances based on scroll progress
  const separation = scrollProgress * 400; // Max 400px separation

  return (
    <section 
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-background snap-start snap-always overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Repurposed Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The HiSeq 2500 DNA sequencer transformed into a versatile automation platform
          </p>
        </div>

        {/* Exploded view container */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Left section - Front panel */}
          <div 
            className="absolute transition-all duration-300 ease-out"
            style={{
              transform: `translateX(${-separation}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            <div className="w-48 h-96 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg border-2 border-primary/30 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 mx-auto mb-3" />
                <div className="space-y-2">
                  <div className="h-2 bg-primary/30 rounded" />
                  <div className="h-2 bg-primary/30 rounded w-3/4 mx-auto" />
                  <div className="h-2 bg-primary/30 rounded w-1/2 mx-auto" />
                </div>
                <p className="text-xs text-primary font-semibold mt-4">Control Panel</p>
              </div>
            </div>
          </div>

          {/* Center section - Main body with image */}
          <div 
            className="absolute"
            style={{
              transform: `scale(${1 - scrollProgress * 0.2})`,
              opacity: 1 - scrollProgress * 0.2,
            }}
          >
            <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-2xl border-4 border-primary/40">
              <img 
                src={sequencerImage} 
                alt="HiSeq 2500 Sequencer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-semibold">HiSeq 2500</p>
                <p className="text-xs opacity-90">Main Unit</p>
              </div>
            </div>
          </div>

          {/* Right section - Flow cell compartment */}
          <div 
            className="absolute transition-all duration-300 ease-out"
            style={{
              transform: `translateX(${separation}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            <div className="w-48 h-96 bg-gradient-to-l from-secondary/20 to-secondary/10 rounded-lg border-2 border-secondary/30 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="w-16 h-20 bg-secondary/20 rounded border border-secondary/40" />
                  <div className="w-16 h-20 bg-secondary/20 rounded border border-secondary/40" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-secondary/30 rounded" />
                  <div className="h-2 bg-secondary/30 rounded w-2/3 mx-auto" />
                </div>
                <p className="text-xs text-secondary font-semibold mt-4">Flow Cell Bay</p>
              </div>
            </div>
          </div>

          {/* Top section - Optics & Imaging */}
          <div 
            className="absolute transition-all duration-300 ease-out"
            style={{
              transform: `translateY(${-separation * 0.8}px)`,
              opacity: 1 - scrollProgress * 0.4,
            }}
          >
            <div className="w-56 h-32 bg-gradient-to-b from-accent/20 to-accent/10 rounded-lg border-2 border-accent/30 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-4">
                <div className="flex gap-2 justify-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-accent/30 border-2 border-accent/50" />
                  <div className="w-8 h-8 rounded-full bg-accent/30 border-2 border-accent/50" />
                  <div className="w-8 h-8 rounded-full bg-accent/30 border-2 border-accent/50" />
                </div>
                <p className="text-xs text-accent font-semibold">Imaging System</p>
              </div>
            </div>
          </div>

          {/* Bottom section - Fluidics */}
          <div 
            className="absolute transition-all duration-300 ease-out"
            style={{
              transform: `translateY(${separation * 0.8}px)`,
              opacity: 1 - scrollProgress * 0.4,
            }}
          >
            <div className="w-56 h-32 bg-gradient-to-t from-primary/15 to-primary/5 rounded-lg border-2 border-primary/20 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-4">
                <div className="flex gap-1 justify-center mb-2">
                  <div className="w-3 h-16 bg-primary/20 rounded-full" />
                  <div className="w-3 h-16 bg-primary/20 rounded-full" />
                  <div className="w-3 h-16 bg-primary/20 rounded-full" />
                  <div className="w-3 h-16 bg-primary/20 rounded-full" />
                </div>
                <p className="text-xs text-primary font-semibold">Fluidics System</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            Scroll to explore the components
          </p>
        </div>
      </div>
    </section>
  );
}
