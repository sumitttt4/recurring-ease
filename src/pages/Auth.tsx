import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";

export default function Auth() {
  const [params] = useSearchParams();
  const initialMode = params.get("mode") === "signup" ? "signup" : "signin";
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useSupabaseAuth();

  const title = useMemo(() => mode === "signin" ? "Sign in" : "Create your account", [mode]);

  useEffect(() => {
    document.title = `${title} | RecurringEase`;
  }, [title]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleEmailAuth = async () => {
    if (!email || !password) {
      toast({ title: "Please fill in email and password", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast({ title: "Welcome back!" });
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/` },
        });
        if (error) throw error;
        toast({ title: "Check your inbox to confirm your email" });
      }
    } catch (err: any) {
      toast({ title: err?.message ?? "Authentication error", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin },
      });
      if (error) throw error;
    } catch (err: any) {
      toast({ title: err?.message ?? "Google sign-in failed", variant: "destructive" });
      setLoading(false);
    }
  };

  return (
    <main className="container max-w-md py-10">
      <section aria-labelledby="auth-title">
        <h1 id="auth-title" className="mb-6 text-2xl font-semibold text-foreground">
          {title}
        </h1>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">
              {mode === "signin" ? "Don't have an account?" : "Already have an account?"}
            </span>
            {mode === "signin" ? (
              <button className="text-primary underline-offset-4 hover:underline" onClick={() => setMode("signup")}>Sign up</button>
            ) : (
              <button className="text-primary underline-offset-4 hover:underline" onClick={() => setMode("signin")}>Sign in</button>
            )}
          </div>

          <div className="grid gap-3">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <Button onClick={handleEmailAuth} disabled={loading}>
              {loading ? (mode === "signin" ? "Signing in..." : "Creating account...") : (mode === "signin" ? "Sign in" : "Create account")}
            </Button>
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <Button variant="outline" onClick={handleGoogle} disabled={loading}>
              Continue with Google
            </Button>
          </div>
        </Card>

        <p className="mt-4 text-xs text-muted-foreground">
          By continuing, you agree to our terms and acknowledge our privacy policy.
        </p>

        <p className="mt-6 text-sm text-muted-foreground">
          Prefer email links? <Link to="/auth?mode=signup" className="text-primary underline-offset-4 hover:underline">Create an account</Link> and confirm via email.
        </p>
      </section>
    </main>
  );
}
