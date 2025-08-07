import { Card } from "@/components/ui/card";

export const ProblemSolutionSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {/* Problem Section */}
      <Card className="p-6 border-destructive/20 bg-destructive/5">
        <div className="text-center mb-4">
          <div className="text-3xl mb-2">😤</div>
          <h3 className="text-xl font-semibold text-destructive mb-4">
            The Current Booking Nightmare
          </h3>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="text-destructive">❌</span>
            <span>Calendly forces 8 separate bookings for an 8-week program</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-destructive">❌</span>
            <span>Acuity charges $34/month for basic package features</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-destructive">❌</span>
            <span>2-3 hours wasted per client signup</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-destructive">❌</span>
            <span>Clients abandon complex booking flows</span>
          </div>
        </div>
      </Card>

      {/* Solution Section */}
      <Card className="p-6 border-primary/20 bg-primary/5">
        <div className="text-center mb-4">
          <div className="text-3xl mb-2">✨</div>
          <h3 className="text-xl font-semibold text-primary mb-4">
            Our Simple Solution
          </h3>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="text-primary">✅</span>
            <span>Book entire 8-week programs in one flow</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary">✅</span>
            <span>Only $15-20/month (50% cheaper than Acuity)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary">✅</span>
            <span>5-minute setup, not 5 hours</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary">✅</span>
            <span>Clients love the simple booking experience</span>
          </div>
        </div>
      </Card>
    </div>
  );
};