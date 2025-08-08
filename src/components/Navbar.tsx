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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-md bg-background/80 border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div 
                className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow"
              >
                <Calendar className="w-4.5 h-4.5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span 
                className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                RecurringEase
              </span>
              <span className="text-xs text-muted-foreground -mt-0.5">Package Bookings Made Simple</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Link 
                to="/" 
                className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  location.pathname === '/' 
                    ? 'text-foreground bg-muted' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  location.pathname === '/features' 
                    ? 'text-foreground bg-muted' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  location.pathname === '/pricing' 
                    ? 'text-foreground bg-muted' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                Pricing
              </Link>
            </div>

            {/* Right-side Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {!user && !onAuthPage ? (
                <>
                  <Link to="/auth?mode=signin">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Link to="/auth?mode=signup">
                    <Button 
                      size="sm"
                      className="px-5"
                    >
                      Join Waitlist
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
                >
                  {signingOut ? "Signing out..." : "Sign out"}
                </Button>
              ) : null}
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          {!onAuthPage && (
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    aria-label="Open menu"
                    className="rounded-lg"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-80 bg-background border-l border-border"
                >
                  <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between mb-6 pt-2">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center"
                        >
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <span 
                          className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                        >
                          RecurringEase
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-lg"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col space-y-2 mb-6">
                      <Link 
                        to="/" 
                        className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                          location.pathname === '/' 
                            ? 'text-foreground bg-muted' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-medium">Home</span>
                      </Link>
                      <Link 
                        to="/features" 
                        className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                          location.pathname === '/features' 
                            ? 'text-foreground bg-muted' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-medium">Features</span>
                      </Link>
                      <Link 
                        to="/pricing" 
                        className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                          location.pathname === '/pricing' 
                            ? 'text-foreground bg-muted' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-medium">Pricing</span>
                      </Link>
                      <div className="px-3 flex items-center gap-3">
                        <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                          <Sparkles className="w-3 h-3 mr-1.5" />
                          Early Access
                        </Badge>
                        <ThemeToggle />
                      </div>
                    </div>

                    {/* Mobile Auth Buttons */}
                    <div className="mt-auto space-y-3">
                      {!user ? (
                        <>
                          <Link to="/auth?mode=signin" onClick={() => setMobileMenuOpen(false)}>
                            <Button 
                              variant="outline" 
                              className="w-full"
                            >
                              Sign in
                            </Button>
                          </Link>
                          <Link to="/auth?mode=signup" onClick={() => setMobileMenuOpen(false)}>
                            <Button 
                              className="w-full"
                            >
                              Join Waitlist
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
                          className="w-full"
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