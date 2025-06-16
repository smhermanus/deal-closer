
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Plus, Download, Zap } from "lucide-react";

export function DealFilters() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search deals, companies, or contacts..."
                className="pl-10 w-80"
              />
            </div>
            
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                <SelectItem value="qualification">Qualification</SelectItem>
                <SelectItem value="discovery">Discovery</SelectItem>
                <SelectItem value="proposal">Proposal</SelectItem>
                <SelectItem value="negotiation">Negotiation</SelectItem>
                <SelectItem value="closing">Closing</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Health" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Health</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="yellow">Yellow</SelectItem>
                <SelectItem value="red">Red</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              New Deal
            </Button>
            <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
              <Zap className="w-4 h-4 mr-2" />
              AI Insights
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Badge variant="secondary">24 Active Deals</Badge>
          <Badge variant="outline">R18.2M Pipeline Value</Badge>
          <Badge variant="outline" className="text-green-600 border-green-200">
            74% Avg Health Score
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
