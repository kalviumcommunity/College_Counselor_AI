import { Link } from "react-router-dom";
import { ArrowRight, Brain, Clock, Users, Sparkles, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Academic Guidance
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
            Your Personal
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}College Guide
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Navigate your academic journey with confidence. Get instant, personalized guidance 
            for university choices, career paths, and everything in between.
          </p>

          {/* CTA Button */}
        <div className="flex justify-center items-center mb-16">
          <Link 
            to="/chat"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-slate-600">Always Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-slate-600">Universities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-slate-600">Students Helped</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Choose Our AI Counselor?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the future of academic guidance with personalized, instant, and comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="absolute top-6 right-6 w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">
                Smart Guidance
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our AI understands your unique situation and provides tailored advice for your academic and career goals.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn More →
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="absolute top-6 right-6 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">
                Instant Answers
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                No more waiting for appointments. Get immediate responses to all your academic questions, day or night.
              </p>
              <div className="text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Try Now →
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="absolute top-6 right-6 w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">
                Comprehensive Support
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                From course selection to career planning, we cover every aspect of your educational journey.
              </p>
              <div className="text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Explore →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Three simple steps to unlock your academic potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Ask Your Question</h3>
              <p className="text-slate-600">
                Simply type your academic concerns, career questions, or university queries.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Get AI Analysis</h3>
              <p className="text-slate-600">
                Our AI analyzes your situation and provides personalized, data-driven guidance.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Take Action</h3>
              <p className="text-slate-600">
                Follow the tailored recommendations to make confident academic decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their perfect academic path with our AI counselor.
          </p>
          <Link 
            to="/chat"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Start Chatting Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}