
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Clock, 
  Users,
  AlertTriangle,
  CheckCircle,
  Zap
} from "lucide-react";

const analyticsData = {
  conversionRates: [
    { stage: "Qualification to Discovery", rate: 78, trend: "up", change: "+5.2%" },
    { stage: "Discovery to Proposal", rate: 65, trend: "up", change: "+3.1%" },
    { stage: "Proposal to Negotiation", rate: 82, trend: "down", change: "-2.4%" },
    { stage: "Negotiation to Close", rate: 71, trend: "up", change: "+8.7%" }
  ],
  riskAnalysis: [
    { risk: "Long sales cycles", deals: 8, impact: "High", color: "red" },
    { risk: "Missing stakeholders", deals: 12, impact: "Medium", color: "yellow" },
    { risk: "Budget constraints", deals: 5, impact: "High", color: "red" },
    { risk: "Competitor threat", deals: 7, impact: "Medium", color: "yellow" }
  ],
  dealcrafterMetrics: [
    { metric: "Framework Adherence", score: 87, target: 90 },
    { metric: "Stakeholder Mapping", score: 94, target: 85 },
    { metric: "Pain Articulation", score: 78, target: 80 },
    { metric: "Value Proposition", score: 91, target: 85 }
  ]
};

export function DealAnalytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Conversion Rates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Stage Conversion Rates
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {analyticsData.conversionRates.map((conversion, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{conversion.stage}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{conversion.rate}%</span>
                  <div className={`flex items-center text-xs ${
                    conversion.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {conversion.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {conversion.change}
                  </div>
                </div>
              </div>
              <Progress value={conversion.rate} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Risk Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
            Risk Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {analyticsData.riskAnalysis.map((risk, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  risk.color === 'red' ? 'bg-red-500' : 'bg-yellow-500'
                }`} />
                <div>
                  <p className="text-sm font-medium">{risk.risk}</p>
                  <p className="text-xs text-muted-foreground">{risk.deals} deals affected</p>
                </div>
              </div>
              <Badge 
                variant="outline" 
                className={`${
                  risk.impact === 'High' ? 'border-red-200 text-red-700' : 'border-yellow-200 text-yellow-700'
                }`}
              >
                {risk.impact}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Dealcrafter Framework Metrics */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="w-5 h-5 mr-2 text-orange-500" />
            Dealcrafter Framework™ Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsData.dealcrafterMetrics.map((metric, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{metric.metric}</span>
                  {metric.score >= metric.target ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Clock className="w-4 h-4 text-yellow-500" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Current: {metric.score}%</span>
                    <span className="text-muted-foreground">Target: {metric.target}%</span>
                  </div>
                  <Progress value={metric.score} className="h-2" />
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.score >= metric.target ? (
                    <span className="text-green-600">✓ Target achieved</span>
                  ) : (
                    <span className="text-yellow-600">
                      {metric.target - metric.score}% below target
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
