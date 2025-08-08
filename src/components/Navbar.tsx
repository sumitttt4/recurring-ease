import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const { user } = useSupabaseAuth();
  const [signingOut, setSigningOut] = useState(false);

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
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <span className="text-base font-semibold text-foreground">RecurringEase</span>
        </Link>

        <div className="flex items-center gap-2">
          {!user ? (
            <>
              <Link to="/auth?mode=signin">
                <Button variant="ghost" size="sm">Sign in</Button>
              </Link>
              <Link to="/auth?mode=signup">
                <Button variant="default" size="sm">Sign up</Button>
              </Link>
            </>
          ) : (
            <Button variant="outline" size="sm" onClick={handleSignOut} disabled={signingOut}>
              {signingOut ? "Signing out..." : "Sign out"}
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
