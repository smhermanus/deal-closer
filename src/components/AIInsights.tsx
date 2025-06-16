
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target } from "lucide-react";

const insights = [
  {
    type: "recommendation",
    title: "Focus on TechCorp Deal",
    description: "High probability to close this week. Champion activity increased 40%.",
    priority: "high",
    icon: Target,
    action: "Review close plan",
  },
  {
    type: "warning",
    title: "Risk Alert: Global Industries",
    description: "No stakeholder contact in 8 days. Decision timeline may be slipping.",
    priority: "urgent",
    icon: AlertTriangle,
    action: "Schedule check-in",
  },
  {
    type: "opportunity",
    title: "Upsell Opportunity",
    description: "Enterprise Co mentioned expansion needs in last call transcript.",
    priority: "medium",
    icon: Lightbulb,
    action: "Propose add-ons",
  },
  {
    type: "prediction",
    title: "Q4 Forecast Update",
    description: "Based on current trends, 92% chance to hit quarterly target.",
    priority: "info",
    icon: TrendingUp,
    action: "View details",
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'urgent':
      return 'border-red-200 bg-red-50 text-red-700';
    case 'high':
      return 'border-orange-200 bg-orange-50 text-orange-700';
    case 'medium':
      return 'border-yellow-200 bg-yellow-50 text-yellow-700';
    case 'info':
      return 'border-blue-200 bg-blue-50 text-blue-700';
    default:
      return 'border-gray-200 bg-gray-50 text-gray-700';
  }
};

export function AIInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-purple-600" />
          <span>AI Insights</span>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Live
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border ${getPriorityColor(insight.priority)}`}
            >
              <div className="flex items-start space-x-3">
                <insight.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm mb-1">{insight.title}</h4>
                  <p className="text-xs opacity-80 mb-2">{insight.description}</p>
                  <Button size="sm" variant="outline" className="text-xs h-7">
                    {insight.action}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <Button variant="outline" className="w-full text-sm">
            View All AI Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
