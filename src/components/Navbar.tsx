import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useEffect, useState } from "react";
import { Menu, Calendar, Sparkles, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group transition-transform hover:scale-105"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                RecurringEase
              </span>
              <span className="text-xs text-gray-500 -mt-1">Package Bookings Made Simple</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                Pricing
              </Link>
              <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border-orange-200">
                <Sparkles className="w-3 h-3 mr-1" />
                Early Access
              </Badge>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              {!user && !onAuthPage ? (
                <>
                  <Link to="/auth?mode=signin">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Link to="/auth?mode=signup">
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
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
                  className="border-gray-300 hover:border-red-300 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                >
                  {signingOut ? "Signing out..." : "Sign out"}
                </Button>
              ) : null}
            </div>
          </div>

          {/* Mobile Menu */}
          {!onAuthPage && (
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    aria-label="Open menu"
                    className="relative w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-80 bg-white/95 backdrop-blur-xl border-l border-gray-200/50"
                >
                  <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between mb-8 pt-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          RecurringEase
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-8 h-8"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col space-y-4 mb-8">
                      <Link 
                        to="/" 
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-gray-700 font-medium">Home</span>
                      </Link>
                      <Link 
                        to="/features" 
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-gray-700 font-medium">Features</span>
                      </Link>
                      <Link 
                        to="/pricing" 
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-gray-700 font-medium">Pricing</span>
                      </Link>
                      <div className="flex items-center space-x-3 p-3">
                        <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border-orange-200">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Early Access
                        </Badge>
                      </div>
                    </div>

                    {/* Mobile Auth Buttons */}
                    <div className="mt-auto space-y-3">
                      {!user ? (
                        <>
                          <Link to="/auth?mode=signin" onClick={() => setMobileMenuOpen(false)}>
                            <Button 
                              variant="outline" 
                              className="w-full border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
                            >
                              Sign in
                            </Button>
                          </Link>
                          <Link to="/auth?mode=signup" onClick={() => setMobileMenuOpen(false)}>
                            <Button 
                              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg transition-all duration-200"
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
                          className="w-full border-gray-300 hover:border-red-300 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
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
    </header>
  );
}
