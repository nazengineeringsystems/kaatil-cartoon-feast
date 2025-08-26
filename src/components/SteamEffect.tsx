import { useEffect, useState } from "react";

interface SteamLineProps {
  delay?: number;
  left?: string;
}

const SteamLine = ({ delay = 0, left = "50%" }: SteamLineProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <div
      className="steam-line w-1 h-8 bg-gray-300 rounded-full"
      style={{ left, animationDelay: `${delay}ms` }}
    />
  );
};

interface SteamEffectProps {
  className?: string;
}

export const SteamEffect = ({ className = "" }: SteamEffectProps) => {
  return (
    <div className={`relative ${className}`}>
      <SteamLine left="20%" delay={0} />
      <SteamLine left="40%" delay={300} />
      <SteamLine left="60%" delay={600} />
      <SteamLine left="80%" delay={900} />
    </div>
  );
};