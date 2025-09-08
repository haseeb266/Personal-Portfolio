import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export function AnimatedText({ children, className, delay = 0, stagger = false }: AnimatedTextProps) {
  if (stagger && typeof children === 'string') {
    const letters = children.split('');
    
    return (
      <motion.div className={className}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + (index * 0.05),
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}