
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StakeholderGrid } from "@/components/StakeholderGrid";
import { StakeholderNetwork } from "@/components/StakeholderNetwork";
import { InfluenceMatrix } from "@/components/InfluenceMatrix";
import { 
  Users, 
  Network, 
  Grid3x3, 
  TrendingUp, 
  Crown, 
  Shield, 
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

export function StakeholderMapView() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-sm text-muted-foreground">Decision Makers</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Champions</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm text-muted-foreground">Blockers</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Coverage Score</p>
                <p className="text-2xl font-bold">87%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="network" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="network" className="flex items-center gap-2">
            <Network className="w-4 h-4" />
            Network View
          </TabsTrigger>
          <TabsTrigger value="grid" className="flex items-center gap-2">
            <Grid3x3 className="w-4 h-4" />
            Grid View
          </TabsTrigger>
          <TabsTrigger value="matrix" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Influence Matrix
          </TabsTrigger>
        </TabsList>

        <TabsContent value="network">
          <StakeholderNetwork />
        </TabsContent>

        <TabsContent value="grid">
          <StakeholderGrid />
        </TabsContent>

        <TabsContent value="matrix">
          <InfluenceMatrix />
        </TabsContent>
      </Tabs>
    </div>
  );
}
