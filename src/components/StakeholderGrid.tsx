
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Phone, 
  Mail, 
  Building, 
  Crown, 
  Shield, 
  AlertTriangle, 
  Users,
  Star,
  MessageCircle
} from "lucide-react";

const stakeholders = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "Acme Corp",
    email: "sarah.johnson@acme.com",
    phone: "+27 11 123 4567",
    powerLevel: "high",
    influence: "champion",
    sentiment: "positive",
    lastContact: "2 days ago",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=32&h=32&fit=crop&crop=face",
    notes: "Strong technical background, loves our solution's scalability features"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "VP Finance",
    company: "Acme Corp",
    email: "m.chen@acme.com",
    phone: "+27 11 123 4568",
    powerLevel: "high",
    influence: "blocker",
    sentiment: "neutral",
    lastContact: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    notes: "Concerned about ROI timeline, needs detailed financial projections"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Senior Developer",
    company: "Acme Corp",
    email: "emma.w@acme.com",
    phone: "+27 11 123 4569",
    powerLevel: "medium",
    influence: "supporter",
    sentiment: "positive",
    lastContact: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    notes: "End user, excited about developer experience improvements"
  },
  {
    id: 4,
    name: "David Miller",
    role: "CEO",
    company: "Acme Corp",
    email: "david.miller@acme.com",
    phone: "+27 11 123 4570",
    powerLevel: "high",
    influence: "decision_maker",
    sentiment: "positive",
    lastContact: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    notes: "Final decision maker, focused on strategic impact and team productivity"
  }
];

const getPowerLevelColor = (level: string) => {
  switch (level) {
    case "high": return "bg-red-100 text-red-800 border-red-200";
    case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "low": return "bg-green-100 text-green-800 border-green-200";
    default: return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getInfluenceIcon = (influence: string) => {
  switch (influence) {
    case "champion": return <Shield className="w-4 h-4 text-blue-600" />;
    case "blocker": return <AlertTriangle className="w-4 h-4 text-red-600" />;
    case "decision_maker": return <Crown className="w-4 h-4 text-yellow-600" />;
    case "supporter": return <Star className="w-4 h-4 text-green-600" />;
    default: return <Users className="w-4 h-4 text-gray-600" />;
  }
};

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case "positive": return "text-green-600";
    case "negative": return "text-red-600";
    case "neutral": return "text-yellow-600";
    default: return "text-gray-600";
  }
};

export function StakeholderGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stakeholders.map((stakeholder) => (
        <Card key={stakeholder.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={stakeholder.avatar} />
                  <AvatarFallback>{stakeholder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{stakeholder.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{stakeholder.role}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Building className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{stakeholder.company}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                {getInfluenceIcon(stakeholder.influence)}
                <Badge variant="outline" className={getPowerLevelColor(stakeholder.powerLevel)}>
                  {stakeholder.powerLevel} power
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="truncate">{stakeholder.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{stakeholder.phone}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Sentiment:</span>
              <span className={`font-medium ${getSentimentColor(stakeholder.sentiment)}`}>
                {stakeholder.sentiment}
              </span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Last contact:</span>
              <span className="font-medium">{stakeholder.lastContact}</span>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">{stakeholder.notes}</p>
            </div>
            
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="flex-1">
                <MessageCircle className="w-4 h-4 mr-1" />
                Contact
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
