
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, FileText, Calendar, Zap, BookOpen, Brain } from "lucide-react";

const actions = [
  {
    title: "New Deal",
    description: "Start tracking a new opportunity",
    icon: Plus,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "Map Stakeholders",
    description: "Identify decision makers",
    icon: Users,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Create War Room",
    description: "Collaborate on deal strategy",
    icon: FileText,
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    title: "Schedule Follow-up",
    description: "Book next customer meeting",
    icon: Calendar,
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    title: "Run Dealcrafter",
    description: "Apply framework to deal",
    icon: Zap,
    color: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    title: "Sales Training",
    description: "Access learning modules",
    icon: BookOpen,
    color: "bg-indigo-500 hover:bg-indigo-600",
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2 hover:shadow-md transition-shadow"
            >
              <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center`}>
                <action.icon className="w-4 h-4 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">{action.title}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t">
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Brain className="w-4 h-4 mr-2" />
            Ask AI Coach
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
