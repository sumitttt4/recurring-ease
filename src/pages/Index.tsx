import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/WaitlistForm";
import { TestimonialCard } from "@/components/TestimonialCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Main Hero Card */}
        <Card className="p-8 sm:p-12 text-center shadow-hero border-border/50 bg-card/95 backdrop-blur-sm mb-8">
          <div className="mb-6">
            <div className="text-4xl mb-4">📅</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              A Better Way to Book <br />
              <span className="text-primary">Recurring Clients</span> Is Coming
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Tired of scheduling one session at a time? Join 200+ coaches on the waitlist for a simpler way to manage package bookings — without the hefty monthly fees.
            </p>
          </div>

          <div className="mb-8">
            <WaitlistForm />
          </div>

          <div className="flex items-center justify-center gap-2 text-primary font-medium">
            <span className="text-2xl">🎁</span>
            <span className="text-base sm:text-lg">Early birds get 2 free months when we launch.</span>
          </div>
        </Card>

        {/* Testimonial */}
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Index;
