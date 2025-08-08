import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/WaitlistForm";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { LaunchTimelineSection } from "@/components/LaunchTimelineSection";
import { Sparkles, Calendar, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
          }}
        />
        
        {/* Floating Blob Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle Wavy Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,200 Q300,100 600,200 T1200,200 L1200,800 L0,800 Z" fill="url(#wave1)"/>
            <path d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z" fill="url(#wave2)"/>
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Main Hero Card */}
        <Card 
          className="p-8 sm:p-12 lg:p-16 text-center mb-16 relative overflow-hidden animate-fade-in"
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '24px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl"></div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-8 right-8 opacity-20 animate-float">
            <Sparkles className="w-8 h-8 text-indigo-500" />
          </div>
          <div className="absolute bottom-8 left-8 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
            <Zap className="w-8 h-8 text-purple-500" />
          </div>
          
          <div className="relative z-10">
            {/* Hero Header */}
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)'
                    }}
                  >
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-indigo-600" />
                <h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  <span className="text-gray-900">Stop Wrestling</span>
                  <br />
                  <span 
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent"
                    style={{
                      backgroundSize: '200% 200%',
                      animation: 'gradient-shift 3s ease-in-out infinite'
                    }}
                  >
                    with Package Bookings
                  </span>
                </h1>
              </div>
              
              <p 
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <strong className="text-gray-900">Other Apps forces 8 separate bookings.</strong> <strong className="text-gray-900"> charges more prices.</strong><br />
                We're building a tool that lets clients book entire coaching packages in one simple flow and Cheaper.
              </p>
              
              {/* Social proof badge */}
              <div 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 animate-fade-in-up"
                style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  animationDelay: '0.4s'
                }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span 
                  className="text-green-700 font-semibold"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  200+ coaches already on the waitlist
                </span>
              </div>
            </div>

            {/* Waitlist Form */}
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <WaitlistForm />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link to="/features">
                <Button 
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/features">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-indigo-50 transition-all duration-300 flex items-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  See How It Works
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Early Bird Offer */}
            <div 
              className="flex items-center justify-center gap-3 text-indigo-600 font-semibold px-6 py-4 rounded-xl animate-fade-in-up"
              style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                animationDelay: '1s'
              }}
            >
              <span className="text-3xl">🎁</span>
              <span 
                className="text-lg sm:text-xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Early birds gets special offers when we launch.
              </span>
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

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
