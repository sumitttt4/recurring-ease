import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  name: string;
  email: string;
  coachType?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, coachType }: WelcomeEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Package Scheduler <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the Package Scheduler Waitlist! 🎉",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #7c3aed; font-size: 28px; margin-bottom: 10px;">📅 Welcome to the Future of Booking!</h1>
            <p style="color: #6b7280; font-size: 18px;">Hi ${name}, you're officially on the list!</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1f2937; font-size: 20px; margin-bottom: 15px;">🎁 Your Early Bird Benefits</h2>
            <ul style="color: #4b5563; line-height: 1.6;">
              <li><strong>2 FREE months</strong> when we launch</li>
              <li><strong>Priority access</strong> to the beta</li>
              <li><strong>Direct input</strong> on features you need most</li>
              <li><strong>50% savings</strong> vs Acuity ($15-20/month vs $34/month)</li>
            </ul>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #1f2937; font-size: 20px; margin-bottom: 15px;">🚀 What's Coming in 2 Months</h2>
            <div style="color: #4b5563; line-height: 1.6;">
              <p><strong>✅ Package Creation:</strong> Set up 8-week programs, monthly packages, etc.</p>
              <p><strong>✅ Multi-Slot Booking:</strong> Clients book all sessions in one flow</p>
              <p><strong>✅ Stripe Integration:</strong> Get paid upfront for entire packages</p>
              <p><strong>✅ Calendar Sync:</strong> Automatic Google Calendar integration</p>
              <p><strong>✅ Client Dashboard:</strong> Simple interface for managing bookings</p>
            </div>
          </div>

          ${coachType ? `
          <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="color: #1e40af; margin: 0;"><strong>Perfect for ${coachType}s like you!</strong> We're designing features specifically for your coaching style.</p>
          </div>
          ` : ''}

          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #6b7280; font-style: italic;">
              "Finally, a tool that gets it. No more explaining to clients how to book 8 separate sessions!"
            </p>
            <p style="color: #9ca3af; font-size: 14px;">– Sarah K., Fitness Trainer (Beta Tester)</p>
          </div>

          <div style="text-align: center; padding: 20px; background: #fef3c7; border-radius: 8px;">
            <p style="color: #92400e; margin: 0; font-weight: 500;">
              📧 We'll email you first when we launch (targeting 8 weeks from now)
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Questions? Just reply to this email – we read every message!<br>
              <strong>The Package Scheduler Team</strong>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);