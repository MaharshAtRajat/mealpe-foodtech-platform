import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Users, TrendingDown } from "lucide-react";

export const ProblemStatement = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Operational Chaos",
      points: [
        "Manual meal planning disasters",
        "Vendor management nightmares", 
        "Zero real-time visibility",
        "Paper-based inefficiency"
      ]
    },
    {
      icon: Users,
      title: "User Frustration",
      points: [
        "Endless cafeteria queues",
        "Limited payment options",
        "No pre-ordering capability",
        "Poor food availability info"
      ]
    },
    {
      icon: TrendingDown,
      title: "Financial Waste",
      points: [
        "Unpredictable demand forecasting",
        "Food wastage up to 30%",
        "Manual billing errors",
        "No consumption analytics"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Current Challenges in{" "}
            <span className="text-destructive">Institutional Food Service</span>
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="glass-card border-destructive/20 hover:border-destructive/40 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {problem.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {problem.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Traditional food service operations are broken.{" "}
            <span className="text-primary font-semibold">MealPe fixes them.</span>
          </p>
        </div>
      </div>
    </section>
  );
};