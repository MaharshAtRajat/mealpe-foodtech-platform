import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Ways Digital Food Courts Boost Student Satisfaction",
    excerpt: "Discover how universities are transforming dining experiences with smart technology and data-driven insights.",
    author: "MealPe Team",
    date: "Dec 15, 2024",
    readTime: "4 min read",
    category: "University",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "ROI Calculator: The True Cost of Manual Canteen Operations",
    excerpt: "Breaking down hidden costs and calculating potential savings from digitizing your institutional food service.",
    author: "Operations Team",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Business",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Hospital Nutrition Management: Beyond Basic Meal Planning",
    excerpt: "How MedMeals is revolutionizing patient nutrition with AI-powered dietary recommendations and real-time monitoring.",
    author: "Healthcare Team",
    date: "Dec 8, 2024",
    readTime: "5 min read",
    category: "Healthcare",
    image: "/placeholder.svg"
  }
];

export const Blogs = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest trends, tips, and success stories in institutional food service management
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-brand transition-all duration-300 group cursor-pointer bg-card">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="shadow-brand">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};