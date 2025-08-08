import { Card } from "@/components/ui/card";

export const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "Other apps don't allow booking both Tuesday & Thursday in one shot. Some do, but they're often much more expensive",
      author: "Sarah K.",
      role: "Fitness Trainer",
      emoji: "💪"
    },
    {
      quote: "I spend 3 hours every week just managing bookings for my 8-week programs. This would be a game-changer.",
      author: "Mike R.",
      role: "Life Coach", 
      emoji: "🎯"
    },
    {
      quote: "My clients get confused with multiple bookings. Half of them book wrong times or miss sessions.",
      author: "Dr. Lisa M.",
      role: "Therapist",
      emoji: "🧠"
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          Join 200+ Coaches Already on the Waitlist
        </h3>
        <p className="text-muted-foreground">
          Here's what coaches are saying about current booking tools:
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-4 h-full">
            <div className="flex flex-col h-full">
              <div className="text-xl mb-3">{testimonial.emoji}</div>
              <p className="text-sm text-muted-foreground italic mb-4 flex-1">
                "{testimonial.quote}"
              </p>
              <div className="text-xs">
                <div className="font-medium text-foreground">{testimonial.author}</div>
                <div className="text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};