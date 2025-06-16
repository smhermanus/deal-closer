
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Crown, 
  Shield, 
  AlertTriangle, 
  Star,
  Zap
} from "lucide-react";

const stakeholders = [
  { name: "David Miller", role: "CEO", power: 95, influence: 90, sentiment: "positive", type: "decision_maker", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" },
  { name: "Sarah Johnson", role: "CTO", power: 85, influence: 95, sentiment: "positive", type: "champion", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=32&h=32&fit=crop&crop=face" },
  { name: "Michael Chen", role: "VP Finance", power: 80, influence: 60, sentiment: "neutral", type: "blocker", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" },
  { name: "Emma Williams", role: "Senior Developer", power: 40, influence: 70, sentiment: "positive", type: "supporter", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" },
  { name: "Robert Taylor", role: "IT Manager", power: 60, influence: 45, sentiment: "neutral", type: "neutral", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" },
  { name: "Lisa Anderson", role: "Head of Procurement", power: 70, influence: 35, sentiment: "negative", type: "blocker", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=32&h=32&fit=crop&crop=face" },
];

const getIcon = (type: string) => {
  switch (type) {
    case "decision_maker": return <Crown className="w-4 h-4 text-yellow-500" />;
    case "champion": return <Shield className="w-4 h-4 text-blue-600" />;
    case "blocker": return <AlertTriangle className="w-4 h-4 text-red-600" />;
    case "supporter": return <Star className="w-4 h-4 text-green-600" />;
    default: return null;
  }
};

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case "positive": return "bg-green-100 border-green-300";
    case "negative": return "bg-red-100 border-red-300";
    case "neutral": return "bg-yellow-100 border-yellow-300";
    default: return "bg-gray-100 border-gray-300";
  }
};

export function InfluenceMatrix() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Power vs Influence Matrix
          </CardTitle>
          <Button variant="outline" size="sm">
            <Zap className="w-4 h-4 mr-2" />
            Generate Strategy
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Matrix Chart */}
          <div className="w-full h-96 bg-gradient-to-tr from-gray-50 to-blue-50 rounded-lg border relative overflow-hidden">
            
            {/* Grid Lines */}
            <svg className="absolute inset-0 w-full h-full">
              {/* Vertical lines */}
              <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2" />
              {/* Horizontal lines */}
              <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2" />
            </svg>

            {/* Quadrant Labels */}
            <div className="absolute top-4 left-4 bg-white/80 rounded px-2 py-1 text-xs font-medium">
              High Power, Low Influence
            </div>
            <div className="absolute top-4 right-4 bg-white/80 rounded px-2 py-1 text-xs font-medium">
              High Power, High Influence
            </div>
            <div className="absolute bottom-4 left-4 bg-white/80 rounded px-2 py-1 text-xs font-medium">
              Low Power, Low Influence
            </div>
            <div className="absolute bottom-4 right-4 bg-white/80 rounded px-2 py-1 text-xs font-medium">
              Low Power, High Influence
            </div>

            {/* Stakeholder Dots */}
            {stakeholders.map((stakeholder, index) => (
              <div
                key={index}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${getSentimentColor(stakeholder.sentiment)} rounded-full border-2 p-2 hover:scale-110 transition-transform cursor-pointer group`}
                style={{
                  left: `${stakeholder.influence}%`,
                  top: `${100 - stakeholder.power}%`,
                }}
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src={stakeholder.avatar} />
                  <AvatarFallback>{stakeholder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                {/* Icon overlay */}
                <div className="absolute -top-1 -right-1">
                  {getIcon(stakeholder.type)}
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                  <div className="bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                    <div className="font-semibold">{stakeholder.name}</div>
                    <div>{stakeholder.role}</div>
                    <div>Power: {stakeholder.power}% | Influence: {stakeholder.influence}%</div>
                    <div className="text-center">
                      <div className="w-2 h-2 bg-black transform rotate-45 mx-auto -mb-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Axis Labels */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600">
              Influence Level →
            </div>
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-600">
              Power Level →
            </div>
          </div>

          {/* Strategy Recommendations */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">High Priority Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Address VP Finance Concerns</p>
                    <p className="text-xs text-muted-foreground">Schedule ROI discussion with Michael Chen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Leverage CTO Champion</p>
                    <p className="text-xs text-muted-foreground">Use Sarah's technical influence to support proposal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Coverage Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">High Power Stakeholders</span>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    3/4 Covered
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Champion Support</span>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800">
                    Strong
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Risk Level</span>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                    Medium
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
