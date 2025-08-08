import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Calendar, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  Star, 
  AlertTriangle,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Background */}
      <div className="absolute inset-0 z-0">
        {/* Soft gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #f8f9ff 0%, #e8eaff 50%, #f0f4ff 100%)"
          }}
        />
        
        {/* Abstract floating blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#7B61FF]/10 to-[#A17CFF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#FF7AC6]/8 to-[#7AE1FF]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-[#A17CFF]/6 to-[#FF7AC6]/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Glassmorphism Hero Card */}
            <Card 
              className="p-8 sm:p-12 lg:p-16 text-center mb-16 relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '24px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Floating decorative elements */}
              <div className="absolute top-8 right-8 opacity-20 animate-float">
                <Sparkles className="w-8 h-8 text-[#7B61FF]" />
              </div>
              <div className="absolute bottom-8 left-8 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
                <Zap className="w-8 h-8 text-[#FF7AC6]" />
              </div>
              
              <div className="relative z-10">
                {/* Hero Icon */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #7B61FF 0%, #A17CFF 50%, #FF7AC6 100%)'
                      }}
                    >
                      <Calendar className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#7AE1FF] to-[#FF7AC6] rounded-full animate-pulse flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Main Heading */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-[#7B61FF]" />
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
                      className="bg-gradient-to-r from-[#7B61FF] via-[#A17CFF] to-[#FF7AC6] bg-clip-text text-transparent"
                      style={{
                        backgroundSize: '200% 200%',
                        animation: 'gradient-shift 3s ease-in-out infinite'
                      }}
                    >
                      with Package Bookings
                    </span>
            </h1>
                </div>
                
                {/* Subheading */}
                <p 
                  className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <strong className="text-gray-900">Other Apps forces 8 separate bookings.</strong> <strong className="text-gray-900"> charges more prices.</strong><br />
                  We're building a tool that lets clients book entire coaching packages in one simple flow and Cheaper.
                </p>
                
                {/* Waitlist Badge */}
                <div 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.15)'
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

                {/* Waitlist Form */}
                <div className="mb-12">
            <WaitlistForm />
          </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link to="/features">
                    <Button 
                      size="lg"
                      className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                      style={{
                        background: 'linear-gradient(135deg, #7B61FF 0%, #A17CFF 100%)',
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
                      className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-[#7B61FF]/5 transition-all duration-300 flex items-center gap-2"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        borderColor: 'rgba(123, 97, 255, 0.3)'
                      }}
                    >
                      See How It Works
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                {/* Early Bird Offer */}
                <div 
                  className="flex items-center justify-center gap-3 text-[#7B61FF] font-semibold px-6 py-4 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(123, 97, 255, 0.1) 0%, rgba(161, 124, 255, 0.1) 100%)',
                    border: '1px solid rgba(123, 97, 255, 0.2)'
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
          </div>
                </section>

        {/* Demo Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                See It in Action (60s)
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                A quick walkthrough of booking a package in one flow
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
              <div className="aspect-video bg-black">
                {/* Replace with your own Loom or YouTube embed */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="RecurringEase Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
 
        {/* Comparison Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Card - Problems with Other Apps */}
              <Card 
                className="p-8 relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Gradient border */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: 'linear-gradient(90deg, #ef4444 0%, #f97316 50%, #ec4899 100%)'
                  }}
                />
                
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)'
                    }}
                  >
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h2 
                    className="text-2xl font-bold text-red-600"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Problems with Other Apps
                  </h2>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Manual scheduling takes 2-3 hours per client",
                    "Clients abandon bookings when forced to book session by session",
                    "Premium apps charge $30+ monthly for basic features",
                    "Complicated booking processes mean lost revenue"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span 
                        className="text-gray-700"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Right Card - RecurringEase Solution */}
              <Card 
                className="p-8 relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Gradient border */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: 'linear-gradient(90deg, #7B61FF 0%, #A17CFF 50%, #7AE1FF 100%)'
                  }}
                />
                
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #7B61FF 0%, #A17CFF 100%)'
                    }}
                  >
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h2 
                    className="text-2xl font-bold text-[#7B61FF]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    RecurringEase Solution
                  </h2>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "One-click package booking saves 2-3 hours per client",
                    "Clients book entire programs in 2 minutes, not 15+",
                    "Premium features for just $15/month",
                    "Simple booking flow increases conversion rates"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span 
                        className="text-gray-700"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                What Coaches Are Saying
              </h2>
              <p 
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Join hundreds of coaches who've already simplified their booking process
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "💪",
                  quote: "This is exactly what I've been looking for! My clients can now book their entire 8-week program in one go.",
                  name: "Sarah Johnson",
                  role: "Fitness Coach"
                },
                {
                  icon: "🧠",
                  quote: "The booking process is so smooth. My clients love how easy it is to schedule their coaching sessions.",
                  name: "Mike Chen",
                  role: "Life Coach"
                },
                {
                  icon: "🎯",
                  quote: "Finally, a tool that understands how coaches actually work. This has saved me hours every week.",
                  name: "Emma Rodriguez",
                  role: "Business Coach"
                }
              ].map((testimonial, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  {/* Gradient top border */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                    style={{
                      background: 'linear-gradient(90deg, #7B61FF 0%, #A17CFF 50%, #FF7AC6 100%)'
                    }}
                  />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                      style={{
                        background: 'linear-gradient(135deg, #7B61FF 0%, #A17CFF 100%)'
                      }}
                    >
                      {testimonial.icon}
                    </div>
                  </div>
                  
                  <blockquote 
                    className="text-gray-700 mb-4 italic"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div>
                    <div 
                      className="font-semibold text-gray-900"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {testimonial.name}
                    </div>
                    <div 
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {testimonial.role}
                    </div>
          </div>
        </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer 
          className="py-16 px-4"
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #7B61FF 0%, #A17CFF 100%)'
                    }}
                  >
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span 
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    RecurringEase
                  </span>
                </div>
                <p 
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Package bookings made simple for coaches who want to focus on what matters most.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h3 
                  className="text-white font-semibold mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Navigation
                </h3>
                <ul className="space-y-2">
                  {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link 
                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 
                  className="text-white font-semibold mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Contact
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300 text-sm">
                    <Mail className="w-4 h-4" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>hello@recurringease.com</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300 text-sm">
                    <Phone className="w-4 h-4" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}></span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>Bengaluru</span>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 
                  className="text-white font-semibold mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Twitter, href: '#' },
                    { icon: Linkedin, href: '#' },
                    { icon: Instagram, href: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, #7B61FF 0%, #A17CFF 100%)'
                      }}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div 
              className="pt-8 border-t"
              style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p 
                  className="text-gray-400 text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  © 2025 RecurringEase. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <Link 
                    to="/privacy"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/terms"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
      </div>
          </div>
        </footer>
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
