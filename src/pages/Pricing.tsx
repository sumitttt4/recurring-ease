import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Users, Calendar, CreditCard, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the plan that fits your coaching business. No hidden fees, no surprises.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full text-green-700 font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Early birds get 2 free months on Pro plan</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Free Tier */}
          <Card className="p-8 shadow-xl border-2 border-gray-200 bg-white/95 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Perfect for getting started</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Up to 3 coaching packages</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Basic package booking flow</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Email notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Google Calendar sync</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Basic client dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Community support</span>
              </div>
            </div>

            <Link to="/auth?mode=signup">
              <Button 
                variant="outline" 
                className="w-full h-12 text-base font-semibold border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
              >
                Get Started Free
              </Button>
            </Link>
          </Card>

          {/* Pro Tier */}
          <Card className="p-8 shadow-2xl border-2 border-indigo-500 bg-white/95 backdrop-blur-xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 shadow-lg">
                <Sparkles className="w-4 h-4 mr-1" />
                Most Popular
              </Badge>
            </div>

            {/* Gradient Background Effect */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$15</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">For growing coaching businesses</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Everything in Free</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Unlimited coaching packages</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Advanced booking customization</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Stripe payment integration</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Client progress tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Automated reminders</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Priority support</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Analytics & reporting</span>
              </div>
            </div>

            <Link to="/auth?mode=signup">
              <Button 
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
              >
                Start Pro Trial
              </Button>
            </Link>
          </Card>
        </div>

        {/* Feature Comparison */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-2xl border-0">
            <div className="divide-y divide-gray-100">
              {/* Package Management */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center">
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-indigo-600" />
                      Package Management
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Create and manage coaching packages</div>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-600">3 packages</span>
                  </div>
                  <div className="text-center">
                    <span className="text-green-600 font-semibold">Unlimited</span>
                  </div>
                </div>
              </div>

              {/* Payment Processing */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center">
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-indigo-600" />
                      Payment Processing
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Accept payments for packages</div>
                  </div>
                  <div className="text-center">
                    <span className="text-red-500">Not available</span>
                  </div>
                  <div className="text-center">
                    <span className="text-green-600 font-semibold">Stripe integration</span>
                  </div>
                </div>
              </div>

              {/* Client Management */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center">
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      <Users className="w-5 h-5 text-indigo-600" />
                      Client Management
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Track client progress and history</div>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-600">Basic dashboard</span>
                  </div>
                  <div className="text-center">
                    <span className="text-green-600 font-semibold">Advanced tracking</span>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center">
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-indigo-600" />
                      Support
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Get help when you need it</div>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-600">Community</span>
                  </div>
                  <div className="text-center">
                    <span className="text-green-600 font-semibold">Priority support</span>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center">
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-indigo-600" />
                      Analytics & Reports
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Track your business performance</div>
                  </div>
                  <div className="text-center">
                    <span className="text-red-500">Not available</span>
                  </div>
                  <div className="text-center">
                    <span className="text-green-600 font-semibold">Full analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <Card className="p-6 shadow-lg border-0 bg-white/95 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I upgrade or downgrade anytime?</h3>
              <p className="text-gray-600">Yes! You can change your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.</p>
            </Card>
            
            <Card className="p-6 shadow-lg border-0 bg-white/95 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees! You can start using RecurringEase immediately with our free plan, and upgrade when you're ready.</p>
            </Card>
            
            <Card className="p-6 shadow-lg border-0 bg-white/95 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards (Visa, Mastercard, American Express) and PayPal for Pro plan subscriptions.</p>
            </Card>
            
            <Card className="p-6 shadow-lg border-0 bg-white/95 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I cancel anytime?</h3>
              <p className="text-gray-600">Absolutely! You can cancel your subscription at any time with no penalties. Your account will remain active until the end of your billing period.</p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 sm:p-12 text-center shadow-2xl border-0 bg-gradient-to-r from-indigo-50 to-purple-50 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Booking Process?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of coaches who've already simplified their package bookings with RecurringEase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth?mode=signup">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </Button>
            </Link>
            <Link to="/features">
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
              >
                View Features
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
