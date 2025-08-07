import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/WaitlistForm";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { LaunchTimelineSection } from "@/components/LaunchTimelineSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero py-8 px-4">
      <div className="w-full max-w-5xl mx-auto">
        {/* Main Hero Card */}
        <Card className="p-8 sm:p-12 text-center shadow-hero border-border/50 bg-card/95 backdrop-blur-sm mb-12">
          <div className="mb-8">
            <div className="text-4xl mb-4">📅</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Stop Wrestling with <br />
              <span className="text-primary">Package Bookings</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              <strong className="text-foreground">Calendly forces 8 separate bookings.</strong> <strong className="text-foreground">Acuity charges $34/month.</strong><br />
              We're building a tool that lets clients book entire coaching packages in one simple flow — for just $15-20/month.
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

        {/* Problem/Solution Section */}
        <ProblemSolutionSection />

        {/* Social Proof */}
        <SocialProofSection />

        {/* Launch Timeline */}
        <LaunchTimelineSection />

        {/* Original Testimonial */}
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Index;
