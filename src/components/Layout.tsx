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
  { name: "Tableau de Bord", href: "/", icon: LayoutDashboard },
  { name: "Détenus", href: "/inmates", icon: Users },
  { name: "Visites", href: "/visits", icon: Calendar },
  { name: "Statistiques", href: "/statistics", icon: BarChart3 },
  { name: "Demandes de Grâce", href: "/grace", icon: FileText },
  { name: "Analyse Sécuritaire", href: "/security", icon: Shield },
  { name: "Gestion Utilisateurs", href: "/users", icon: UserCog },
  { name: "Paramètres", href: "/settings", icon: Settings },
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
            <h1 className="text-xl font-semibold">Système National de Gestion Pénitentiaire</h1>
          </div>
          <div className="text-sm">
            Ministère de la Justice | Ministère de l'Intérieur | Présidence
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