import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CountUp = ({ end, duration = 2 }: { end: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const numericEnd = parseInt(end.replace(/\D/g, ''));
  
  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * numericEnd));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [numericEnd, duration]);

  return (
    <span>
      {end.includes('L') ? `${count}L+` : 
       end.includes('%') ? `${count}%+` : 
       `${count}+`}
    </span>
  );
};

export const KeyStats = () => {
  const stats = [
    {
      value: "5000000+",
      display: "5L+",
      label: "Orders Processed"
    },
    {
      value: "35+",
      display: "35+",
      label: "Use Cases"
    },
    {
      value: "30+",
      display: "30%+",
      label: "Reduction in Food Wastage"
    },
    {
      value: "50+",
      display: "50+",
      label: "Vendor Partners PAN India"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-border/50 text-center">
              <CardContent className="p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.display}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};