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
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl mx-auto">
      {/* Required Fields */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="Your name *"
          value={formData.name}
          onChange={(e) => updateFormData('name', e.target.value)}
          className="h-14 text-base border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          disabled={isSubmitting}
          required
        />
        <Input
          type="email"
          placeholder="Your email *"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className="h-14 text-base border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          disabled={isSubmitting}
          required
        />
      </div>

      {/* Coach Type and Current Tool */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Select value={formData.coachType} onValueChange={(value) => updateFormData('coachType', value)}>
          <SelectTrigger className="h-14 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500">
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
          <SelectTrigger className="h-14 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500">
            <SelectValue placeholder="Current booking tool?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="calendly">Calendly</SelectItem>
            <SelectItem value="acuity">Acuity</SelectItem>
            <SelectItem value="square">Square</SelectItem>
            <SelectItem value="simplybook">SimplyBook.me</SelectItem>
            <SelectItem value="manual">Manual/Email</SelectItem>
            <SelectItem value="none">No system yet</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Session Volume and Referral Source */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Select value={formData.sessionVolume} onValueChange={(value) => updateFormData('sessionVolume', value)}>
          <SelectTrigger className="h-14 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500">
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
          <SelectTrigger className="h-14 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500">
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

      {/* Biggest Challenge */}
      <Input
        type="text"
        placeholder="What's your biggest booking challenge? (optional)"
        value={formData.biggestChallenge}
        onChange={(e) => updateFormData('biggestChallenge', e.target.value)}
        className="h-14 text-base border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
        disabled={isSubmitting}
      />

      {/* Submit Button */}
      <Button 
        type="submit" 
        size="lg"
        disabled={isSubmitting}
        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Joining the Waitlist...
          </div>
        ) : (
          "Join the Waitlist →"
        )}
      </Button>
    </form>
  );
};