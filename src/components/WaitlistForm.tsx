import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
  name: string;
  email: string;
  coachType: string;
  currentTool: string;
  sessionVolume: string;
  biggestChallenge: string;
  referralSource: string;
}

export const WaitlistForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    coachType: "",
    currentTool: "",
    sessionVolume: "",
    biggestChallenge: "",
    referralSource: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.email.includes("@")) {
      toast({
        title: "Please fill in your name and a valid email",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist_signups')
        .insert({
          name: formData.name,
          email: formData.email,
          coach_type: formData.coachType || null,
          current_tool: formData.currentTool || null,
          session_volume: formData.sessionVolume || null,
          biggest_challenge: formData.biggestChallenge || null,
          referral_source: formData.referralSource || null,
        });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "You're already on the list!",
            description: "We'll notify you when we launch (with your 2 free months).",
          });
        } else {
          throw error;
        }
      } else {
        // Send welcome email
        try {
          await supabase.functions.invoke('send-welcome-email', {
            body: {
              name: formData.name,
              email: formData.email,
              coachType: formData.coachType
            }
          });
        } catch (emailError) {
          console.error('Welcome email failed:', emailError);
          // Don't show error to user - the signup was successful
        }

        toast({
          title: "You're on the list! 🎉",
          description: "Check your email for a welcome message with your early bird benefits!",
        });
      }
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        coachType: "",
        currentTool: "",
        sessionVolume: "",
        biggestChallenge: "",
        referralSource: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
      <div className="grid sm:grid-cols-2 gap-3">
        <Input
          type="text"
          placeholder="Your name *"
          value={formData.name}
          onChange={(e) => updateFormData('name', e.target.value)}
          className="h-12 text-base"
          disabled={isSubmitting}
          required
        />
        <Input
          type="email"
          placeholder="Your email *"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className="h-12 text-base"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <Select value={formData.coachType} onValueChange={(value) => updateFormData('coachType', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="What type of coach?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fitness">Fitness Trainer</SelectItem>
            <SelectItem value="life">Life Coach</SelectItem>
            <SelectItem value="therapy">Therapist/Counselor</SelectItem>
            <SelectItem value="tutor">Tutor/Teacher</SelectItem>
            <SelectItem value="music">Music Teacher</SelectItem>
            <SelectItem value="nutrition">Nutritionist</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>

        <Select value={formData.currentTool} onValueChange={(value) => updateFormData('currentTool', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Current booking tool?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="square">Square</SelectItem>
            <SelectItem value="simplybook">SimplyBook.me</SelectItem>
            <SelectItem value="manual">Manual/Email</SelectItem>
            <SelectItem value="none">No system yet</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <Select value={formData.sessionVolume} onValueChange={(value) => updateFormData('sessionVolume', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Sessions per month?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1-10 sessions</SelectItem>
            <SelectItem value="11-25">11-25 sessions</SelectItem>
            <SelectItem value="26-50">26-50 sessions</SelectItem>
            <SelectItem value="51-100">51-100 sessions</SelectItem>
            <SelectItem value="100+">100+ sessions</SelectItem>
          </SelectContent>
        </Select>

        <Select value={formData.referralSource} onValueChange={(value) => updateFormData('referralSource', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="How did you find us?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="google">Google Search</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
            <SelectItem value="friend">Friend/Colleague</SelectItem>
            <SelectItem value="forum">Reddit/Forum</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Input
        type="text"
        placeholder="What's your biggest booking challenge? (optional)"
        value={formData.biggestChallenge}
        onChange={(e) => updateFormData('biggestChallenge', e.target.value)}
        className="h-12 text-base"
        disabled={isSubmitting}
      />

      <Button 
        type="submit" 
        variant="hero"
        size="lg"
        disabled={isSubmitting}
        className="w-full h-12 text-base font-semibold"
      >
        {isSubmitting ? "Joining the Waitlist..." : "Join the Waitlist →"}
      </Button>
    </form>
  );
};