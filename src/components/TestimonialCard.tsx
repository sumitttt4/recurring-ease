import { Card } from "@/components/ui/card";

export const TestimonialCard = () => {
  return (
    <Card className="p-6 max-w-2xl mx-auto shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <div className="text-2xl">🗣️</div>
        <div className="flex-1">
          <p className="text-muted-foreground italic mb-3">
            "Other apps made me do 8 separate bookings... This tool fixes that in one shot."
          </p>
          <p className="text-sm font-medium text-foreground">
            – Priya, Mindfulness Coach
          </p>
        </div>
      </div>
    </Card>
  );
};