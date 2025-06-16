
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Target, Clock, Award } from "lucide-react";

const metrics = [
  {
    title: "Pipeline Value",
    value: "R12.4M",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "Total weighted pipeline",
  },
  {
    title: "Close Rate",
    value: "73%",
    change: "+8.2%",
    trend: "up",
    icon: Target,
    description: "Deals closed this quarter",
  },
  {
    title: "Avg. Deal Size",
    value: "R650K",
    change: "-3.1%",
    trend: "down",
    icon: Award,
    description: "Average deal value",
  },
  {
    title: "Sales Cycle",
    value: "42 days",
    change: "-15%",
    trend: "up",
    icon: Clock,
    description: "Average time to close",
  },
];

export function RevenueMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Revenue Metrics
          <Badge variant="outline" className="text-green-600 border-green-200">
            Q4 2024
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div key={metric.title} className="p-4 rounded-lg border bg-card">
              <div className="flex items-center justify-between mb-2">
                <metric.icon className="w-5 h-5 text-muted-foreground" />
                <div className={`flex items-center text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
