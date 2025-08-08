import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useEffect, useState } from "react";
import { Menu, Calendar, Sparkles, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSupabaseAuth();
  const [signingOut, setSigningOut] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const onAuthPage = location.pathname.startsWith("/auth");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      await supabase.auth.signOut();
      navigate("/");
    } finally {
      setSigningOut(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      {/* Clean glass effect background */}
      {scrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/85 to-white/90 backdrop-blur-xl" />
      )}

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex h-16 items-center justify-between">
          {/* Clean Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div 
                className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)'
                }}
              >
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span 
                className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease-in-out infinite'
                }}
              >
                RecurringEase
              </span>
              <span className="text-xs text-gray-500 -mt-1 font-medium">Package Bookings Made Simple</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Clean Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                className={`transition-all duration-300 font-medium px-4 py-2 rounded-lg ${
                  location.pathname === '/' 
                    ? 'bg-white/60 backdrop-blur-sm text-indigo-600 border border-white/50 shadow-md' 
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-white/40 hover:backdrop-blur-sm'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className={`transition-all duration-300 font-medium px-4 py-2 rounded-lg ${
                  location.pathname === '/features' 
                    ? 'bg-white/60 backdrop-blur-sm text-indigo-600 border border-white/50 shadow-md' 
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-white/40 hover:backdrop-blur-sm'
                }`}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className={`transition-all duration-300 font-medium px-4 py-2 rounded-lg ${
                  location.pathname === '/pricing' 
                    ? 'bg-white/60 backdrop-blur-sm text-indigo-600 border border-white/50 shadow-md' 
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-white/40 hover:backdrop-blur-sm'
                }`}
              >
                Pricing
              </Link>
              <Badge 
                className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 text-orange-700 border-orange-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 2s ease-in-out infinite'
                }}
              >
                <Sparkles className="w-3 h-3 mr-1.5 animate-pulse" />
                Early Access
              </Badge>
            </div>

            {/* Clean Auth Buttons */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              {!user && !onAuthPage ? (
                <>
                  <Link to="/auth?mode=signin">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-gray-700 hover:text-indigo-600 hover:bg-white/40 hover:backdrop-blur-sm transition-all duration-300 font-medium px-4 py-2 rounded-lg"
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Link to="/auth?mode=signup">
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-2 rounded-lg font-semibold"
                      style={{
                        backgroundSize: '200% 200%',
                        animation: 'gradient-shift 3s ease-in-out infinite'
                      }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </>
              ) : null}
              {user ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleSignOut} 
                  disabled={signingOut}
                  className="border-gray-300 hover:border-red-300 hover:bg-red-50 hover:text-red-600 transition-all duration-300 rounded-lg px-4 py-2"
                >
                  {signingOut ? "Signing out..." : "Sign out"}
                </Button>
              ) : null}
            </div>
          </div>

          {/* Clean Mobile Menu */}
          {!onAuthPage && (
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    aria-label="Open menu"
                    className="relative w-10 h-10 rounded-lg hover:bg-white/40 hover:backdrop-blur-sm transition-all duration-300 group"
                  >
                    <Menu className="h-5 w-5 text-gray-700 group-hover:text-indigo-600 transition-colors duration-300" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-80 bg-white/90 backdrop-blur-xl border-l border-white/30 shadow-xl"
                >
                  <div className="flex flex-col h-full">
                    {/* Clean Mobile Menu Header */}
                    <div className="flex items-center justify-between mb-8 pt-4">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-8 h-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg"
                          style={{
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)'
                          }}
                        >
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <span 
                          className="text-lg font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                          style={{
                            backgroundSize: '200% 200%',
                            animation: 'gradient-shift 3s ease-in-out infinite'
                          }}
                        >
                          RecurringEase
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-8 h-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Clean Mobile Navigation Links */}
                    <div className="flex flex-col space-y-2 mb-8">
                      <Link 
                        to="/" 
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                          location.pathname === '/' 
                            ? 'bg-white/60 backdrop-blur-sm text-indigo-600 border border-white/50 shadow-md' 
                            : 'hover:bg-white/40 hover:backdrop-blur-sm text-gray-700'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-medium">Home</span>
                        {location.pathname === '/' && (
                          <div className="ml-auto w-2 h-2 bg-indigo-500 rounded-full"></div>
                        )}
                      </Link>
                      <Link 
                        to="/features" 
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                          location.pathname === '/features' 
                            ? 'bg-white/60 backdrop-blur-sm text-indigo-600 border border-white/50 shadow-md' 
                            : 'hover:bg-white/40 hover:backdrop-blur-sm text-gray-700'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-medium">Features</span>
                        {location.pathname === '/features' && (
                          <div className="ml-auto w-2 h-2 bg-indigo-500 rounded-full"></div>
                        )}
                      </Link>
                      <Link 
                        to="/pricing" 
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                          location.pathname === '/pricing' 
                            ? 'bg-white/60 backdrop-blur-sm text-indigo-600 border border-white/50 shadow-md' 
                            : 'hover:bg-white/40 hover:backdrop-blur-sm text-gray-700'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-medium">Pricing</span>
                        {location.pathname === '/pricing' && (
                          <div className="ml-auto w-2 h-2 bg-indigo-500 rounded-full"></div>
                        )}
                      </Link>
                                          <div className="p-3 flex items-center gap-3">
                      <Badge 
                        className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 text-orange-700 border-orange-200 shadow-sm"
                        style={{
                          backgroundSize: '200% 200%',
                          animation: 'gradient-shift 2s ease-in-out infinite'
                        }}
                      >
                        <Sparkles className="w-3 h-3 mr-1.5 animate-pulse" />
                        Early Access
                      </Badge>
                      <ThemeToggle />
                    </div>
                  </div>

                  {/* Clean Mobile Auth Buttons */}
                    <div className="mt-auto space-y-3">
                      {!user ? (
                        <>
                          <Link to="/auth?mode=signin" onClick={() => setMobileMenuOpen(false)}>
                            <Button 
                              variant="outline" 
                              className="w-full border-gray-300 hover:border-indigo-300 hover:bg-white/40 hover:backdrop-blur-sm transition-all duration-300 rounded-lg py-3"
                            >
                              Sign in
                            </Button>
                          </Link>
                          <Link to="/auth?mode=signup" onClick={() => setMobileMenuOpen(false)}>
                            <Button 
                              className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg transition-all duration-300 rounded-lg py-3 font-semibold"
                              style={{
                                backgroundSize: '200% 200%',
                                animation: 'gradient-shift 3s ease-in-out infinite'
                              }}
                            >
                              Get Started
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            handleSignOut();
                            setMobileMenuOpen(false);
                          }} 
                          disabled={signingOut}
                          className="w-full border-gray-300 hover:border-red-300 hover:bg-red-50 hover:text-red-600 transition-all duration-300 rounded-lg py-3"
                        >
                          {signingOut ? "Signing out..." : "Sign out"}
                        </Button>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </nav>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </header>
  );
}