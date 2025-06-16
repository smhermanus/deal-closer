
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Crown, 
  Shield, 
  AlertTriangle, 
  Users, 
  Star,
  ArrowRight,
  Zap
} from "lucide-react";

export function StakeholderNetwork() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Stakeholder Network - Acme Corp Deal
          </CardTitle>
          <Button variant="outline" size="sm">
            <Zap className="w-4 h-4 mr-2" />
            AI Analysis
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Network Visualization */}
          <div className="min-h-[600px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 relative overflow-hidden">
            
            {/* CEO - Top Center */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="bg-white rounded-full p-4 shadow-lg border-2 border-yellow-400">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face" />
                    <AvatarFallback>DM</AvatarFallback>
                  </Avatar>
                </div>
                <Crown className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 bg-white rounded-full p-1" />
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md p-2 min-w-max">
                  <p className="font-semibold text-sm">David Miller</p>
                  <p className="text-xs text-muted-foreground">CEO - Decision Maker</p>
                  <Badge variant="outline" className="mt-1 bg-red-100 text-red-800 border-red-200">
                    High Power
                  </Badge>
                </div>
              </div>
            </div>

            {/* CTO - Champion */}
            <div className="absolute top-32 left-20">
              <div className="relative">
                <div className="bg-white rounded-full p-3 shadow-lg border-2 border-blue-400">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=48&h=48&fit=crop&crop=face" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                </div>
                <Shield className="absolute -top-1 -right-1 w-5 h-5 text-blue-600 bg-white rounded-full p-0.5" />
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md p-2 min-w-max">
                  <p className="font-semibold text-sm">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">CTO - Champion</p>
                  <Badge variant="outline" className="mt-1 bg-red-100 text-red-800 border-red-200">
                    High Power
                  </Badge>
                </div>
              </div>
            </div>

            {/* VP Finance - Blocker */}
            <div className="absolute top-32 right-20">
              <div className="relative">
                <div className="bg-white rounded-full p-3 shadow-lg border-2 border-red-400">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                </div>
                <AlertTriangle className="absolute -top-1 -right-1 w-5 h-5 text-red-600 bg-white rounded-full p-0.5" />
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md p-2 min-w-max">
                  <p className="font-semibold text-sm">Michael Chen</p>
                  <p className="text-xs text-muted-foreground">VP Finance - Blocker</p>
                  <Badge variant="outline" className="mt-1 bg-red-100 text-red-800 border-red-200">
                    High Power
                  </Badge>
                </div>
              </div>
            </div>

            {/* Senior Developer - Supporter */}
            <div className="absolute bottom-32 left-1/3">
              <div className="relative">
                <div className="bg-white rounded-full p-2 shadow-md border-2 border-green-400">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" />
                    <AvatarFallback>EW</AvatarFallback>
                  </Avatar>
                </div>
                <Star className="absolute -top-1 -right-1 w-4 h-4 text-green-600 bg-white rounded-full p-0.5" />
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md p-2 min-w-max">
                  <p className="font-semibold text-sm">Emma Williams</p>
                  <p className="text-xs text-muted-foreground">Senior Dev - Supporter</p>
                  <Badge variant="outline" className="mt-1 bg-yellow-100 text-yellow-800 border-yellow-200">
                    Medium Power
                  </Badge>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* CEO to CTO */}
              <line x1="50%" y1="120" x2="180" y2="200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
              {/* CEO to VP Finance */}
              <line x1="50%" y1="120" x2="calc(100% - 180px)" y2="200" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
              {/* CTO to Developer */}
              <line x1="180" y1="250" x2="33%" y2="calc(100% - 180px)" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
            </svg>

            {/* Influence Flow Indicators */}
            <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-100 rounded-full p-2">
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </div>
            </div>

            {/* AI Insights Panel */}
            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="font-semibold text-sm">AI Insights</span>
              </div>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>• Strong champion relationship with CTO</li>
                <li>• Need to address VP Finance concerns</li>
                <li>• Developer support can influence technical team</li>
                <li>• 67% stakeholder coverage score</li>
              </ul>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-yellow-500" />
              <span>Decision Maker</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Champion</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Blocker</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-green-600" />
              <span>Supporter</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-blue-500 border-dashed"></div>
              <span>Positive Influence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-red-500 border-dashed"></div>
              <span>Negative Influence</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
