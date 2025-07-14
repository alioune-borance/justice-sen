import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  BarChart3, 
  FileText, 
  Shield, 
  UserCog, 
  Settings,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Inmates", href: "/inmates", icon: Users },
  { name: "Visits", href: "/visits", icon: Calendar },
  { name: "Statistics", href: "/statistics", icon: BarChart3 },
  { name: "Grace Requests", href: "/grace", icon: FileText },
  { name: "Security Analytics", href: "/security", icon: Shield },
  { name: "User Management", href: "/users", icon: UserCog },
  { name: "Settings", href: "/settings", icon: Settings },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-primary-foreground hover:bg-primary/90"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <h1 className="text-xl font-semibold">National Prison Management System</h1>
          </div>
          <div className="text-sm">
            Ministry of Justice | Ministry of Interior | Presidency
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={cn(
          "bg-card border-r border-border transition-all duration-300",
          sidebarOpen ? "w-64" : "w-0 overflow-hidden"
        )}>
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}