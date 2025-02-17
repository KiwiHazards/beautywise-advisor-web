
import { Sparkles, Star, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-beauty-warm">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20">
        <div className="text-center space-y-6 animate-fade-in">
          <span className="px-4 py-2 bg-beauty-rose bg-opacity-30 rounded-full text-sm inline-block">
            AI-Powered Beauty Advice
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Your Personal Beauty Expert
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized skincare and makeup recommendations powered by advanced AI technology.
          </p>
          <button className="mt-8 px-8 py-4 bg-beauty-pink text-white rounded-full font-medium transform transition hover:scale-105 hover:shadow-lg">
            Try AI Advisor Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-white bg-opacity-50 backdrop-blur-sm border border-white border-opacity-20 hover:shadow-xl transition duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-10 h-10 text-beauty-pink mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container px-4 py-20 bg-beauty-rose bg-opacity-10">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-beauty-pink text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Beauty Routine?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied users who have discovered their perfect beauty routine with our AI advisor.
          </p>
          <button className="px-8 py-4 bg-beauty-pink text-white rounded-full font-medium transform transition hover:scale-105 hover:shadow-lg">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Personalized Advice",
    description: "Get tailored recommendations based on your unique skin type and concerns.",
    icon: Sparkles,
  },
  {
    title: "Smart Analysis",
    description: "Advanced AI technology analyzes your skin conditions and needs.",
    icon: Zap,
  },
  {
    title: "Product Matching",
    description: "Find the perfect products that match your skin type and preferences.",
    icon: Heart,
  },
  {
    title: "Expert Results",
    description: "Achieve professional-level results with AI-powered guidance.",
    icon: Star,
  },
];

const steps = [
  {
    title: "Take the Quiz",
    description: "Answer a few questions about your skin type, concerns, and beauty goals.",
  },
  {
    title: "Get Your Plan",
    description: "Receive a personalized beauty routine tailored to your needs.",
  },
  {
    title: "See Results",
    description: "Follow your custom plan and watch your skin transform.",
  },
];

export default Index;
