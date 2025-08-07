-- Create waitlist signups table
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  coach_type TEXT,
  current_tool TEXT,
  session_volume TEXT,
  biggest_challenge TEXT,
  referral_source TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public waitlist)
CREATE POLICY "Anyone can sign up for waitlist" 
ON public.waitlist_signups 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading (admin only)
CREATE POLICY "No public read access to waitlist" 
ON public.waitlist_signups 
FOR SELECT 
USING (false);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_waitlist_signups_updated_at
  BEFORE UPDATE ON public.waitlist_signups
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();