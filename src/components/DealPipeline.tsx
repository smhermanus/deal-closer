
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const deals = [
  {
    id: 1,
    company: "TechCorp Solutions",
    value: "R1,850,000",
    stage: "Proposal",
    health: "green",
    probability: 85,
    owner: "Sarah Chen",
    daysInStage: 5,
    nextAction: "Follow up on proposal",
    aiScore: 92,
  },
  {
    id: 2,
    company: "Global Industries",
    value: "R1,125,000",
    stage: "Discovery",
    health: "yellow",
    probability: 65,
    owner: "Mike Johnson",
    daysInStage: 12,
    nextAction: "Schedule stakeholder meeting",
    aiScore: 78,
  },
  {
    id: 3,
    company: "StartupXYZ",
    value: "R675,000",
    stage: "Negotiation",
    health: "red",
    probability: 40,
    owner: "Lisa Park",
    daysInStage: 18,
    nextAction: "Address pricing concerns",
    aiScore: 54,
  },
  {
    id: 4,
    company: "Enterprise Co",
    value: "R2,950,000",
    stage: "Qualification",
    health: "green",
    probability: 75,
    owner: "John Doe",
    daysInStage: 3,
    nextAction: "Send capability presentation",
    aiScore: 88,
  },
];

const getHealthIcon = (health: string) => {
  switch (health) {
    case 'green':
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    case 'yellow':
      return <Clock className="w-4 h-4 text-yellow-500" />;
    case 'red':
      return <AlertTriangle className="w-4 h-4 text-red-500" />;
    default:
      return null;
  }
};

const getHealthColor = (health: string) => {
  switch (health) {
    case 'green':
      return 'border-l-green-500 bg-green-50';
    case 'yellow':
      return 'border-l-yellow-500 bg-yellow-50';
    case 'red':
      return 'border-l-red-500 bg-red-50';
    default:
      return 'border-l-gray-500 bg-gray-50';
  }
};

export function DealPipeline() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Active Deal Pipeline</CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">12 Active Deals</Badge>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`p-4 rounded-lg border-l-4 ${getHealthColor(deal.health)} hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {getHealthIcon(deal.health)}
                  <div>
                    <h3 className="font-semibold">{deal.company}</h3>
                    <p className="text-sm text-muted-foreground">{deal.value} • {deal.stage}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      deal.aiScore >= 80 ? 'border-green-200 text-green-700' :
                      deal.aiScore >= 60 ? 'border-yellow-200 text-yellow-700' :
                      'border-red-200 text-red-700'
                    }`}
                  >
                    AI Score: {deal.aiScore}
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Close Probability</p>
                  <div className="flex items-center space-x-2">
                    <Progress value={deal.probability} className="flex-1 h-2" />
                    <span className="text-sm font-medium">{deal.probability}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Owner</p>
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face`} />
                      <AvatarFallback className="text-xs">
                        {deal.owner.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{deal.owner}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Days in Stage</p>
                  <span className="text-sm font-medium">{deal.daysInStage} days</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Next Action: {deal.nextAction}
                </p>
                <Button size="sm" variant="outline">
                  View Deal
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
