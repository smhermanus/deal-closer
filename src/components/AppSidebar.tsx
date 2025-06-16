
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart3,
  Target,
  Users,
  BookOpen,
  Settings,
  Zap,
  TrendingUp,
  Brain,
  Calendar,
  FileText,
} from "lucide-react";

const navigationItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Deal Pipeline",
    url: "#",
    icon: Target,
    badge: "12 Active",
  },
  {
    title: "Stakeholder Maps",
    url: "#",
    icon: Users,
  },
  {
    title: "Deal War Rooms",
    url: "#",
    icon: FileText,
    badge: "3 New",
  },
  {
    title: "Sales Academy",
    url: "#",
    icon: BookOpen,
  },
  {
    title: "AI Coach",
    url: "#",
    icon: Brain,
    badge: "AI",
  },
  {
    title: "Forecasting",
    url: "#",
    icon: TrendingUp,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
];

const quickTools = [
  {
    title: "Dealcrafter Engine",
    icon: Zap,
    badge: "NEW",
  },
  {
    title: "Deal Replay AI",
    icon: Brain,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Deal Closer</h1>
            <p className="text-xs text-muted-foreground">AI-Powered CRM</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge variant={item.badge === "AI" ? "default" : "secondary"} className="text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Quick Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quickTools.map((tool) => (
                <SidebarMenuItem key={tool.title}>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <tool.icon className="w-4 h-4" />
                        <span className="text-sm">{tool.title}</span>
                      </div>
                      {tool.badge && (
                        <Badge variant="outline" className="text-xs">
                          {tool.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">Sales Manager</p>
          </div>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
