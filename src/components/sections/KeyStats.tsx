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
      value: "5L+",
      label: "Orders Processed"
    },
    {
      value: "35+",
      label: "Use Cases"
    },
    {
      value: "30%+",
      label: "Reduction in Food Wastage"
    },
    {
      value: "50+",
      label: "Vendor Partners PAN India"
    }
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-border/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  <CountUp end={stat.value} />
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">
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