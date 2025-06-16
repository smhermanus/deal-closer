
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Users, Building, TrendingUp } from "lucide-react";

export function StakeholderFilters() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search stakeholders, companies, or roles..."
                className="pl-10 w-80"
              />
            </div>
            
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Deal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Deals</SelectItem>
                <SelectItem value="acme-corp">Acme Corp</SelectItem>
                <SelectItem value="techflow">TechFlow Ltd</SelectItem>
                <SelectItem value="global-solutions">Global Solutions</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Power Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="high">High Power</SelectItem>
                <SelectItem value="medium">Medium Power</SelectItem>
                <SelectItem value="low">Low Power</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Influence Analysis
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            47 Stakeholders
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Building className="w-3 h-3" />
            12 Organizations
          </Badge>
          <Badge variant="outline" className="text-green-600 border-green-200">
            8 Champions Identified
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
