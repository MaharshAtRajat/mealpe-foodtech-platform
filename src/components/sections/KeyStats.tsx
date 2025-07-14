import { Card, CardContent } from "@/components/ui/card";

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
                  {stat.value}
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