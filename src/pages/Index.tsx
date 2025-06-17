
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  DollarSign,
  Activity,
  Clock
} from "lucide-react";

const Index = () => {
  const stats = [
    { 
      title: "Total Revenue", 
      value: "$45,231", 
      change: "+20.1%", 
      icon: DollarSign,
      color: "text-green-600"
    },
    { 
      title: "Active Deals", 
      value: "47", 
      change: "+15%", 
      icon: Target,
      color: "text-blue-600"
    },
    { 
      title: "Win Rate", 
      value: "68%", 
      change: "+8.2%", 
      icon: Activity,
      color: "text-purple-600"
    },
    { 
      title: "Avg Close Time", 
      value: "23 days", 
      change: "-12%", 
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  const recentDeals = [
    { company: "TechCorp Inc", value: "$85,000", stage: "Negotiation", probability: "85%" },
    { company: "StartupXYZ", value: "$42,000", stage: "Proposal", probability: "65%" },
    { company: "Enterprise Co", value: "$120,000", stage: "Discovery", probability: "45%" },
    { company: "Growth LLC", value: "$28,000", stage: "Closing", probability: "95%" }
  ];

  const quickActions = [
    { title: "Add New Deal", icon: Target, description: "Create a new deal opportunity" },
    { title: "Schedule Meeting", icon: Calendar, description: "Book a call with prospects" },
    { title: "View Pipeline", icon: BarChart3, description: "Analyze your deal pipeline" },
    { title: "AI Insights", icon: Brain, description: "Get AI-powered recommendations" }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          
          <div className="flex-1 space-y-6 p-6">
            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-600">{stat.change}</span> from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Recent Deals */}
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Recent Deals</CardTitle>
                  <CardDescription>Your latest deal opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentDeals.map((deal, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{deal.company}</p>
                          <p className="text-sm text-muted-foreground">{deal.stage}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{deal.value}</p>
                          <Badge variant="outline">{deal.probability}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {quickActions.map((action, index) => (
                      <Button key={index} variant="outline" className="w-full justify-start h-auto p-3">
                        <action.icon className="h-4 w-4 mr-3" />
                        <div className="text-left">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-xs text-muted-foreground">{action.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-orange-600" />
                  AI Insights & Recommendations
                </CardTitle>
                <CardDescription>Powered by machine learning analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">High-Value Deal Alert</p>
                      <p className="text-sm text-muted-foreground">
                        TechCorp Inc shows strong buying signals. Consider accelerating this deal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Pipeline Optimization</p>
                      <p className="text-sm text-muted-foreground">
                        Your Q4 forecast looks strong. Focus on closing 3 key deals this month.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Follow-up Reminder</p>
                      <p className="text-sm text-muted-foreground">
                        5 prospects haven't been contacted in over a week. Schedule follow-ups.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
