
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users,
  Plus
} from "lucide-react";

const stages = [
  { name: "Qualification", deals: 3, value: "R4.2M" },
  { name: "Discovery", deals: 5, value: "R6.8M" },
  { name: "Proposal", deals: 4, value: "R5.1M" },
  { name: "Negotiation", deals: 2, value: "R2.1M" },
  { name: "Closing", deals: 1, value: "R800K" }
];

const sampleDeals = [
  {
    id: 1,
    company: "TechCorp Solutions",
    value: "R1,850,000",
    health: "green",
    probability: 85,
    owner: "Sarah Chen",
    aiScore: 92,
    stakeholders: 8
  },
  {
    id: 2,
    company: "Global Industries", 
    value: "R1,125,000",
    health: "yellow",
    probability: 65,
    owner: "Mike Johnson",
    aiScore: 78,
    stakeholders: 5
  }
];

const getHealthIcon = (health: string) => {
  switch (health) {
    case 'green':
      return <CheckCircle className="w-3 h-3 text-green-500" />;
    case 'yellow':
      return <Clock className="w-3 h-3 text-yellow-500" />;
    case 'red':
      return <AlertTriangle className="w-3 h-3 text-red-500" />;
    default:
      return null;
  }
};

export function DealKanban() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {stages.map((stage) => (
        <div key={stage.name} className="space-y-4">
          <Card className="bg-gray-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">{stage.name}</CardTitle>
                <Button variant="ghost" size="icon" className="w-6 h-6">
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{stage.deals} deals</span>
                <span className="font-medium">{stage.value}</span>
              </div>
            </CardHeader>
          </Card>

          <div className="space-y-3 min-h-96">
            {sampleDeals.map((deal) => (
              <Card key={deal.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-sm">{deal.company}</h4>
                    {getHealthIcon(deal.health)}
                  </div>
                  
                  <p className="text-sm font-medium text-green-600 mb-2">{deal.value}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{deal.stakeholders}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {deal.probability}%
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-5 h-5">
                        <AvatarFallback className="text-xs">
                          {deal.owner.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{deal.owner}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      AI: {deal.aiScore}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
