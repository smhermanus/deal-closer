
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  Brain, 
  TrendingUp, 
  Zap, 
  BookOpen, 
  Calendar, 
  FileText,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Deal Pipeline",
      description: "AI-powered deal tracking with predictive scoring and automated insights",
      badge: "12 Active",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Stakeholder Maps",
      description: "Visualize decision-makers and influence networks with AI analysis",
      color: "bg-green-500"
    },
    {
      icon: FileText,
      title: "Deal War Rooms",
      description: "Collaborative spaces for complex deals with real-time strategy",
      badge: "3 New",
      color: "bg-purple-500"
    },
    {
      icon: Brain,
      title: "AI Coach",
      description: "Personalized coaching and recommendations powered by machine learning",
      badge: "AI",
      color: "bg-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Forecasting",
      description: "Predictive revenue analytics with confidence intervals",
      color: "bg-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Sales Academy",
      description: "Interactive training modules with skill assessments",
      color: "bg-pink-500"
    }
  ];

  const quickTools = [
    {
      icon: Zap,
      title: "Dealcrafter Engine",
      description: "AI-powered deal strategy generator",
      badge: "NEW"
    },
    {
      icon: Brain,
      title: "Deal Replay AI",
      description: "Analyze past deals to improve future outcomes"
    }
  ];

  const stats = [
    { label: "Revenue Tracked", value: "$2.4M", change: "+15%" },
    { label: "Active Deals", value: "47", change: "+8%" },
    { label: "Win Rate", value: "68%", change: "+12%" },
    { label: "Avg Deal Size", value: "$51K", change: "+23%" }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-blue-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative px-6 py-16 lg:py-24">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold">Deal Closer</h1>
                </div>
                <p className="text-xl lg:text-2xl text-blue-100 mb-4">AI-Powered CRM Platform</p>
                <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
                  Transform your sales process with intelligent deal tracking, stakeholder mapping, 
                  and AI-driven insights that close more deals faster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="px-6 py-8 bg-white border-b">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Complete Sales Command Center
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Everything you need to manage, track, and close deals with the power of artificial intelligence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {features.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          <feature.icon className="w-6 h-6" />
                        </div>
                        {feature.badge && (
                          <Badge variant={feature.badge === "AI" ? "default" : "secondary"}>
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full group-hover:bg-gray-50">
                        Explore <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Tools Section */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">AI-Powered Quick Tools</h3>
                  <p className="text-gray-600">Advanced AI features to supercharge your sales process</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {quickTools.map((tool, index) => (
                    <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                              <tool.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{tool.title}</CardTitle>
                              <CardDescription>{tool.description}</CardDescription>
                            </div>
                          </div>
                          {tool.badge && (
                            <Badge variant="outline" className="bg-white">{tool.badge}</Badge>
                          )}
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="px-6 py-16 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose Deal Closer?</h2>
                <p className="text-xl text-gray-300">
                  Join thousands of sales professionals who trust our AI-powered platform
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Increase Win Rates</h3>
                  <p className="text-gray-300">AI insights help you focus on the right deals at the right time</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                  <p className="text-gray-300">Automate repetitive tasks and get intelligent recommendations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smarter Decisions</h3>
                  <p className="text-gray-300">Data-driven insights powered by advanced machine learning</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="px-6 py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Close More Deals?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Start your free trial today and experience the power of AI-driven sales management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
              <div className="flex items-center justify-center mt-6 space-x-4 text-sm text-blue-200">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  5-star support
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
