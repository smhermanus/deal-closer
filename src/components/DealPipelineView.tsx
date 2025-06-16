
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MoreHorizontal, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  Calendar,
  TrendingUp,
  MessageSquare,
  FileText,
  Phone
} from "lucide-react";

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
    stakeholders: 8,
    lastActivity: "2 hours ago",
    closeDate: "2024-07-15",
    dealcrafterScore: 94,
    riskFactors: [],
    recentActivity: "Proposal sent to procurement team"
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
    stakeholders: 5,
    lastActivity: "1 day ago",
    closeDate: "2024-08-30",
    dealcrafterScore: 72,
    riskFactors: ["Missing decision maker contact"],
    recentActivity: "Demo completed with technical team"
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
    stakeholders: 3,
    lastActivity: "5 days ago",
    closeDate: "2024-06-25",
    dealcrafterScore: 48,
    riskFactors: ["Budget concerns", "Competing solution", "Silent period"],
    recentActivity: "Price negotiation stalled"
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
    stakeholders: 12,
    lastActivity: "30 minutes ago",
    closeDate: "2024-09-15",
    dealcrafterScore: 91,
    riskFactors: [],
    recentActivity: "Initial discovery call completed"
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

export function DealPipelineView() {
  return (
    <div className="space-y-4">
      {deals.map((deal) => (
        <Card key={deal.id} className={`border-l-4 ${getHealthColor(deal.health)} hover:shadow-md transition-shadow`}>
          <CardContent className="p-6">
            {/* Header Row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getHealthIcon(deal.health)}
                <div>
                  <h3 className="font-semibold text-lg">{deal.company}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{deal.value} • {deal.stage}</span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Close: {new Date(deal.closeDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    deal.dealcrafterScore >= 80 ? 'border-green-200 text-green-700 bg-green-50' :
                    deal.dealcrafterScore >= 60 ? 'border-yellow-200 text-yellow-700 bg-yellow-50' :
                    'border-red-200 text-red-700 bg-red-50'
                  }`}
                >
                  Dealcrafter™: {deal.dealcrafterScore}
                </Badge>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    deal.aiScore >= 80 ? 'border-blue-200 text-blue-700 bg-blue-50' :
                    deal.aiScore >= 60 ? 'border-yellow-200 text-yellow-700 bg-yellow-50' :
                    'border-red-200 text-red-700 bg-red-50'
                  }`}
                >
                  AI Score: {deal.aiScore}
                </Badge>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Risk Factors */}
            {deal.riskFactors.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-red-700">Risk Factors</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {deal.riskFactors.map((risk, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-red-200 text-red-700">
                      {risk}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Close Probability</p>
                <div className="flex items-center space-x-2">
                  <Progress value={deal.probability} className="flex-1 h-2" />
                  <span className="text-sm font-medium">{deal.probability}%</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Deal Owner</p>
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
                <p className="text-xs text-muted-foreground mb-1">Stakeholders</p>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{deal.stakeholders} mapped</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Days in Stage</p>
                <span className="text-sm font-medium">{deal.daysInStage} days</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Recent Activity</span>
                </div>
                <span className="text-xs text-muted-foreground">{deal.lastActivity}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{deal.recentActivity}</p>
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium text-orange-700">Next Action:</span>
                <span className="text-sm">{deal.nextAction}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  War Room
                </Button>
                <Button size="sm" variant="outline">
                  <Users className="w-4 h-4 mr-1" />
                  Stakeholders
                </Button>
                <Button size="sm" variant="outline">
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </Button>
                <Button size="sm">
                  <FileText className="w-4 h-4 mr-1" />
                  View Deal
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
