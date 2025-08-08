import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/WaitlistForm";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { LaunchTimelineSection } from "@/components/LaunchTimelineSection";
import { Sparkles, Calendar, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Main Hero Card */}
        <Card className="p-8 sm:p-12 lg:p-16 text-center shadow-2xl border-0 bg-white/95 backdrop-blur-xl mb-16 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl"></div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-8 right-8 opacity-20">
            <Sparkles className="w-8 h-8 text-indigo-500 animate-pulse" />
          </div>
          <div className="absolute bottom-8 left-8 opacity-20">
            <Zap className="w-8 h-8 text-purple-500 animate-pulse" />
          </div>
          
          <div className="relative z-10">
            {/* Hero Header */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Stop Wrestling with <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Package Bookings
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                <strong className="text-gray-900">Other Apps forces 8 separate bookings.</strong> <strong className="text-gray-900"> charges more prices.</strong><br />
                We're building a tool that lets clients book entire coaching packages in one simple flow and Cheaper.
              </p>
              
              {/* Social proof badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full text-green-700 font-medium mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>200+ coaches already on the waitlist</span>
              </div>
            </div>

            {/* Waitlist Form */}
            <div className="mb-12">
              <WaitlistForm />
            </div>

            {/* Early Bird Offer */}
            <div className="flex items-center justify-center gap-3 text-indigo-600 font-semibold bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4 rounded-xl border border-indigo-100">
              <span className="text-3xl">🎁</span>
              <span className="text-lg sm:text-xl">Early birds gets special offers when we launch.</span>
            </div>
          </div>
        </Card>

        {/* Problem/Solution Section */}
        <div className="mb-16">
          <ProblemSolutionSection />
        </div>

        {/* Social Proof */}
        <div className="mb-16">
          <SocialProofSection />
        </div>

        {/* Launch Timeline */}
        <div className="mb-16">
          <LaunchTimelineSection />
        </div>

        {/* Original Testimonial */}
        <div className="mb-16">
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
