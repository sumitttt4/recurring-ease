import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, DollarSign, Clock, Target, Zap, Sparkles, Calendar, Users, Shield } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Why RecurringEase?
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Finally, a scheduling solution built specifically for coaches who sell session packages
          </p>
        </div>

        {/* Problem Statement */}
        <Card className="p-8 sm:p-12 text-center shadow-2xl border-0 bg-white/95 backdrop-blur-xl mb-16">
          <div className="text-6xl mb-6">😤</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            The Problem Every Coach Faces
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Current scheduling apps force you to choose between expensive solutions or making your clients jump through hoops to book multiple sessions.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg text-left">
              <h4 className="text-red-700 font-semibold mb-2">Manual Scheduling Hell</h4>
              <p className="text-gray-600 text-sm">Spending 2-3 hours coordinating each client's 8-session program manually</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg text-left">
              <h4 className="text-red-700 font-semibold mb-2">Client Booking Frustration</h4>
              <p className="text-gray-600 text-sm">Clients abandon bookings when forced to schedule sessions one by one</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg text-left">
              <h4 className="text-red-700 font-semibold mb-2">Expensive "Solutions"</h4>
              <p className="text-gray-600 text-sm">Premium apps charge $30+ monthly just for multi-session booking features</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg text-left">
              <h4 className="text-red-700 font-semibold mb-2">Lost Revenue</h4>
              <p className="text-gray-600 text-sm">Complicated booking processes mean fewer package sales and unhappy clients</p>
            </div>
          </div>
        </Card>

        {/* Comparison Table */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See how RecurringEase stacks up against other scheduling apps
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-2xl border-0">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 font-semibold text-lg">
                <div>Feature</div>
                <div className="text-center">Other Basic Apps</div>
                <div className="text-center">Premium Apps</div>
                <div className="text-center">RecurringEase</div>
              </div>
            </div>
            
            {/* Table Rows */}
            <div className="divide-y divide-gray-100">
              <div className="p-6 sm:p-8 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Multi-Session Package Booking</div>
                    <div className="text-sm text-gray-600 mt-1">Book entire programs (8 weeks, 12 sessions) at once</div>
                  </div>
                  <div className="flex justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 text-amber-600 font-semibold">
                      <DollarSign className="w-4 h-4" />
                      $34/mo
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      $15/mo
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Coach-Specific Templates</div>
                    <div className="text-sm text-gray-600 mt-1">Pre-built templates for fitness, therapy, music lessons</div>
                  </div>
                  <div className="flex justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex justify-center">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Built-in
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
                  <div>
                    <div className="font-semibold text-gray-900">5-Minute Setup</div>
                    <div className="text-sm text-gray-600 mt-1">Create packages and start booking immediately</div>
                  </div>
                  <div className="flex justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex justify-center">
                    <div className="text-red-500 font-semibold">Complex</div>
                  </div>
                  <div className="flex justify-center">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Super Simple
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Upfront Package Payment</div>
                    <div className="text-sm text-gray-600 mt-1">Collect full payment when clients book their package</div>
                  </div>
                  <div className="flex justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex justify-center">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Stripe Ready
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Client Program Dashboard</div>
                    <div className="text-sm text-gray-600 mt-1">Track client progress through their coaching program</div>
                  </div>
                  <div className="flex justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex justify-center">
                    <div className="text-red-500 font-semibold">Generic</div>
                  </div>
                  <div className="flex justify-center">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Coach-Focused
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Unique Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600">
              Built by coaches, for coaches - not adapted from generic booking software
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <Card className="p-8 shadow-xl border-0 bg-white/95 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">One-Click Package Booking</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your clients select their entire coaching program and book all sessions in a single, smooth workflow. No more booking session by session.
              </p>
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                Save 2-3 hours per client signup
              </Badge>
            </Card>

            <Card className="p-8 shadow-xl border-0 bg-white/95 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coach-First Design</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dashboard shows "Sarah's 8-Week Program (Week 3)" not "Sarah - Appointment #4". Language and features designed specifically for coaching relationships.
              </p>
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                Professional coaching experience
              </Badge>
            </Card>

            <Card className="p-8 shadow-xl border-0 bg-white/95 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Setup</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Create your first coaching package and share your booking link in under 5 minutes. No complex workflows or dozens of settings to configure.
              </p>
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                Start booking clients today
              </Badge>
            </Card>

            <Card className="p-8 shadow-xl border-0 bg-white/95 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get premium multi-session booking features at 40-50% less cost than expensive alternatives. Perfect pricing for growing coaching businesses.
              </p>
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                More profit per client
              </Badge>
            </Card>
          </div>
        </div>

        {/* Client Journey Comparison */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Client Experience
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 shadow-xl border-0 bg-white/95 backdrop-blur-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-2">With Other Apps</h3>
                <Badge className="bg-red-50 text-red-700 border-red-200 px-4 py-2">
                  <Clock className="w-4 h-4 mr-1" />
                  15+ minutes, Multiple steps
                </Badge>
              </div>
              
              <div className="space-y-4">
                {[
                  "Find coach's booking link",
                  "Book first session → Pay → Get confirmation",
                  "Go back, book second session → Pay again",
                  "Repeat process 6 more times...",
                  "Finally finish, feeling exhausted"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-red-50 transition-colors">
                    <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-red-50 text-red-700 rounded-lg text-center font-semibold">
                Result: Frustrated client, 8 separate transactions, high abandonment rate
              </div>
            </Card>

            <Card className="p-8 shadow-xl border-0 bg-white/95 backdrop-blur-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-green-600 mb-2">With RecurringEase</h3>
                <Badge className="bg-green-50 text-green-700 border-green-200 px-4 py-2">
                  <Clock className="w-4 h-4 mr-1" />
                  2 minutes, Done!
                </Badge>
              </div>
              
              <div className="space-y-4">
                {[
                  "Click coach's package link",
                  "Select \"8-Week Coaching Program\"",
                  "Pick all 16 time slots in one flow",
                  "Pay once for entire program",
                  "Get confirmation with all dates"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-green-50 transition-colors">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-green-50 text-green-700 rounded-lg text-center font-semibold">
                Result: Happy client, single transaction, high conversion rate
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
