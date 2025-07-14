import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";
import { AlertTriangle, TrendingUp, TrendingDown, MapPin, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const monthlyTrendData = [
  { month: "Jan", crimes: 245, incidents: 12, alerts: 8 },
  { month: "Feb", crimes: 198, incidents: 15, alerts: 6 },
  { month: "Mar", crimes: 312, incidents: 18, alerts: 11 },
  { month: "Apr", crimes: 289, incidents: 9, alerts: 7 },
  { month: "May", crimes: 267, incidents: 14, alerts: 9 },
  { month: "Jun", crimes: 223, incidents: 11, alerts: 5 },
  { month: "Jul", crimes: 345, incidents: 22, alerts: 15 },
  { month: "Aug", crimes: 301, incidents: 17, alerts: 12 },
  { month: "Sep", crimes: 278, incidents: 13, alerts: 8 },
  { month: "Oct", crimes: 234, incidents: 10, alerts: 6 },
  { month: "Nov", crimes: 289, incidents: 16, alerts: 10 },
  { month: "Dec", crimes: 267, incidents: 14, alerts: 9 }
];

const regionalData = [
  { region: "Cairo", crimes: 1247, change: "+5.2%", hotspots: 8, riskLevel: "High" },
  { region: "Alexandria", crimes: 892, change: "-2.1%", hotspots: 5, riskLevel: "Medium" },
  { region: "Giza", crimes: 734, change: "+12.8%", hotspots: 6, riskLevel: "High" },
  { region: "Luxor", crimes: 456, change: "-8.3%", hotspots: 3, riskLevel: "Low" },
  { region: "Aswan", crimes: 234, change: "+3.1%", hotspots: 2, riskLevel: "Low" },
  { region: "Sharm El Sheikh", crimes: 189, change: "-15.2%", hotspots: 1, riskLevel: "Low" }
];

const crimeTypeDistribution = [
  { type: "Theft", count: 1247, percentage: 35 },
  { type: "Drug Offenses", count: 998, percentage: 28 },
  { type: "Assault", count: 642, percentage: 18 },
  { type: "Fraud", count: 428, percentage: 12 },
  { type: "Vandalism", count: 249, percentage: 7 }
];

const recentAlerts = [
  {
    id: "ALR-2024-001",
    type: "High Activity",
    location: "Cairo Downtown",
    time: "2 hours ago",
    severity: "High",
    description: "Unusual spike in theft reports"
  },
  {
    id: "ALR-2024-002",
    type: "Prison Incident",
    location: "Alexandria Central Prison",
    time: "4 hours ago",
    severity: "Medium",
    description: "Minor altercation resolved"
  },
  {
    id: "ALR-2024-003",
    type: "Pattern Detection",
    location: "Giza Region",
    time: "6 hours ago",
    severity: "Low",
    description: "Recurring crime pattern identified"
  }
];

export default function SecurityDashboard() {
  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case "High": return "destructive";
      case "Medium": return "default";
      case "Low": return "secondary";
      default: return "secondary";
    }
  };

  const getRiskVariant = (risk: string) => {
    switch (risk) {
      case "High": return "destructive";
      case "Medium": return "default";
      case "Low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Security Analytics Dashboard</h2>
        <p className="text-muted-foreground">
          Real-time security monitoring for the Ministry of Interior
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">3,564</p>
                <p className="text-sm text-muted-foreground">Total Crimes This Month</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-destructive" />
                  <span className="text-xs text-destructive">+8.2% from last month</span>
                </div>
              </div>
              <AlertTriangle className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-warning">25</p>
                <p className="text-sm text-muted-foreground">Active Hotspots</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="h-3 w-3 text-success" />
                  <span className="text-xs text-success">-3 from last week</span>
                </div>
              </div>
              <MapPin className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-info">167</p>
                <p className="text-sm text-muted-foreground">Prison Incidents</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="h-3 w-3 text-success" />
                  <span className="text-xs text-success">-12% from last month</span>
                </div>
              </div>
              <Activity className="h-8 w-8 text-info" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-success">94.2%</p>
                <p className="text-sm text-muted-foreground">Case Resolution Rate</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-success" />
                  <span className="text-xs text-success">+2.1% from last month</span>
                </div>
              </div>
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Crime Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Crime Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="crimes" 
                  stroke="#1e40af" 
                  fill="#1e40af" 
                  fillOpacity={0.1}
                  name="Total Crimes"
                />
                <Area 
                  type="monotone" 
                  dataKey="incidents" 
                  stroke="#dc2626" 
                  fill="#dc2626" 
                  fillOpacity={0.1}
                  name="Prison Incidents"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Crime Type Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Crime Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={crimeTypeDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#1e40af" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Regional Analysis and Recent Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Regional Crime Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Regional Crime Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalData.map((region, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{region.region}</h4>
                      <Badge variant={getRiskVariant(region.riskLevel)}>
                        {region.riskLevel} Risk
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {region.crimes} crimes | {region.hotspots} active hotspots
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${
                      region.change.startsWith('+') ? 'text-destructive' : 'text-success'
                    }`}>
                      {region.change}
                    </div>
                    <p className="text-xs text-muted-foreground">vs last month</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Security Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Security Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                  <div className={`p-2 rounded-full ${
                    alert.severity === "High" ? "bg-destructive/10 text-destructive" :
                    alert.severity === "Medium" ? "bg-warning/10 text-warning" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{alert.type}</h4>
                      <Badge variant={getSeverityVariant(alert.severity)}>
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{alert.location}</span>
                      <span>•</span>
                      <span>{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>National Security Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-lg font-medium text-muted-foreground">Interactive Security Map</p>
              <p className="text-sm text-muted-foreground">
                Real-time visualization of crime hotspots and security incidents across regions
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}