import { useEffect, useState } from "react";
import dnaImage from "@assets/stock_images/dna_double_helix_str_dfd0fdda.jpg";
import microscopeImage from "@assets/stock_images/laboratory_microscop_e8e82979.jpg";
import sequencerImage from "@assets/stock_images/dna_sequencing_machi_ea099a44.jpg";

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-background" />
      
      <div
        className="absolute opacity-[0.35] dark:opacity-[0.25]"
        style={{
          right: `${20 - scrollY * 0.15}%`,
          top: "10%",
          width: "400px",
          height: "400px",
          transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
        }}
      >
        <img 
          src={dnaImage} 
          alt="" 
          className="w-full h-full object-contain drop-shadow-lg"
          style={{ filter: 'saturate(0.7) brightness(0.9)' }}
        />
      </div>

      <div
        className="absolute opacity-[0.3] dark:opacity-[0.22]"
        style={{
          right: `${65 - scrollY * 0.25}%`,
          top: "28%",
          width: "450px",
          height: "450px",
          transform: `translateY(${scrollY * 0.08}px) rotate(${-scrollY * 0.03}deg)`,
        }}
      >
        <img 
          src={microscopeImage} 
          alt="" 
          className="w-full h-full object-contain drop-shadow-xl"
          style={{ filter: 'saturate(0.7) brightness(0.9)' }}
        />
      </div>

      <div
        className="absolute opacity-[0.32] dark:opacity-[0.24]"
        style={{
          right: `${40 - scrollY * 0.2}%`,
          top: "55%",
          width: "520px",
          height: "380px",
          transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * 0.02}deg)`,
        }}
      >
        <img 
          src={sequencerImage} 
          alt="" 
          className="w-full h-full object-contain drop-shadow-lg"
          style={{ filter: 'saturate(0.7) brightness(0.9)' }}
        />
      </div>

      <div
        className="absolute opacity-[0.35] dark:opacity-[0.25]"
        style={{
          right: `${-25 - scrollY * 0.18}%`,
          top: "85%",
          width: "380px",
          height: "380px",
          transform: `translateY(${scrollY * 0.09}px) rotate(${scrollY * 0.04}deg)`,
        }}
      >
        <img 
          src={dnaImage} 
          alt="" 
          className="w-full h-full object-contain drop-shadow-lg"
          style={{ filter: 'saturate(0.7) brightness(0.9)' }}
        />
      </div>

      <div
        className="absolute opacity-[0.28] dark:opacity-[0.2]"
        style={{
          right: `${15 - scrollY * 0.22}%`,
          top: "115%",
          width: "470px",
          height: "470px",
          transform: `translateY(${scrollY * 0.07}px) rotate(${-scrollY * 0.06}deg)`,
        }}
      >
        <img 
          src={sequencerImage} 
          alt="" 
          className="w-full h-full object-contain drop-shadow-xl"
          style={{ filter: 'saturate(0.7) brightness(0.9)' }}
        />
      </div>

      <div
        className="absolute opacity-[0.3] dark:opacity-[0.22]"
        style={{
          right: `${55 - scrollY * 0.17}%`,
          top: "145%",
          width: "500px",
          height: "360px",
          transform: `translateY(${scrollY * 0.11}px) rotate(${scrollY * 0.03}deg)`,
        }}
      >
        <img 
          src={microscopeImage} 
          alt="" 
          className="w-full h-full object-contain drop-shadow-lg"
          style={{ filter: 'saturate(0.7) brightness(0.9)' }}
        />
      </div>

      <div
        className="absolute opacity-[0.35] dark:opacity-[0.25]"
        style={{
          right: `${-15 - scrollY * 0.19}%`,
          top: "175%",
          width: "360px",
          height: "360px",
          transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
        }}
      >
        <img 
          src={dnaImage} 
          alt="" 
          className="w-full h-full object-contain drop-shadow-lg"
          style={{ filter: 'saturate(0.7) brightness(0.9)' }}
        />
      </div>

      <div
        className="absolute opacity-[0.3] dark:opacity-[0.22]"
        style={{
          right: `${35 - scrollY * 0.16}%`,
          top: "210%",
          width: "440px",
          height: "440px",
          transform: `translateY(${scrollY * 0.08}px) rotate(${-scrollY * 0.04}deg)`,
        }}
      >
        <img 
          src={microscopeImage} 
          alt="" 
          className="w-full h-full object-contain drop-shadow-xl"
          style={{ filter: 'saturate(0.7) brightness(0.9)' }}
        />
      </div>
    </div>
  );
}
