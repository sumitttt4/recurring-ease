import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSupabaseAuth();
  const [signingOut, setSigningOut] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
      className={`sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${scrolled ? "shadow-sm" : ""}`}
    >
      <nav className="container flex h-14 items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <span className="text-base font-semibold text-foreground">RecurringEase</span>
        </Link>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          {!user && !onAuthPage ? (
            <>
              <Link to="/auth?mode=signin">
                <Button variant="ghost" size="sm">Sign in</Button>
              </Link>
              <Link to="/auth?mode=signup">
                <Button variant="default" size="sm">Sign up</Button>
              </Link>
            </>
          ) : null}
          {user ? (
            <Button variant="outline" size="sm" onClick={handleSignOut} disabled={signingOut}>
              {signingOut ? "Signing out..." : "Sign out"}
            </Button>
          ) : null}
        </div>

        {/* Mobile menu */}
        {!onAuthPage && (
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="mt-8 flex flex-col gap-3">
                  {!user ? (
                    <>
                      <Link to="/auth?mode=signin">
                        <Button variant="ghost" className="w-full">Sign in</Button>
                      </Link>
                      <Link to="/auth?mode=signup">
                        <Button className="w-full">Sign up</Button>
                      </Link>
                    </>
                  ) : (
                    <Button variant="outline" onClick={handleSignOut} disabled={signingOut} className="w-full">
                      {signingOut ? "Signing out..." : "Sign out"}
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </nav>
    </header>
  );
}
