import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  hover?: boolean;
}

export function AnimatedCard({ 
  children, 
  className, 
  delay = 0, 
  direction = "up",
  hover = true 
}: AnimatedCardProps) {
  const directionVariants = {
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 }
  };

  const hoverVariants = hover ? {
    scale: 1.03,
    y: -5,
    boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.3)"
  } : {};

  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      whileHover={hoverVariants}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
    >
      <Card className={cn("shadow-card transition-all duration-300", className)}>
        {children}
      </Card>
    </motion.div>
  );
}