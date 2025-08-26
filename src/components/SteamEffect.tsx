import { useEffect, useState } from "react";

interface SteamLineProps {
  delay?: number;
  left?: string;
  index?: number;
}

const SteamLine = ({ delay = 0, left = "50%", index = 0 }: SteamLineProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }
    
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay, reducedMotion]);

  if (!isVisible) return null;

  return (
    <div
      className={`steam-line w-1 h-6 sm:h-8 bg-gray-300/70 rounded-full ${
        reducedMotion ? 'opacity-40' : ''
      }`}
      style={{ 
        left, 
        animationDelay: reducedMotion ? '0ms' : `${delay}ms`,
        animationDuration: reducedMotion ? '0ms' : '2s'
      }}
      aria-hidden="true"
    />
  );
};

interface SteamEffectProps {
  className?: string;
  intensity?: 'light' | 'normal' | 'heavy';
}

export const SteamEffect = ({ className = "", intensity = 'normal' }: SteamEffectProps) => {
  const steamLines = {
    light: [
      { left: "40%", delay: 0 },
      { left: "60%", delay: 500 }
    ],
    normal: [
      { left: "20%", delay: 0 },
      { left: "40%", delay: 300 },
      { left: "60%", delay: 600 },
      { left: "80%", delay: 900 }
    ],
    heavy: [
      { left: "15%", delay: 0 },
      { left: "30%", delay: 200 },
      { left: "45%", delay: 400 },
      { left: "60%", delay: 600 },
      { left: "75%", delay: 800 },
      { left: "85%", delay: 1000 }
    ]
  };

  return (
    <div 
      className={`relative pointer-events-none ${className}`}
      role="img"
      aria-label="Steam effect"
    >
      {steamLines[intensity].map((line, index) => (
        <SteamLine 
          key={index}
          left={line.left} 
          delay={line.delay} 
          index={index}
        />
      ))}
    </div>
  );
};
