import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Building, Calendar, FileText } from "lucide-react";

const overviewData = [
  {
    title: "Total Inmates",
    value: "45,284",
    change: "+2.5%",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Active Prisons",
    value: "127",
    change: "No change",
    icon: Building,
    color: "text-info"
  },
  {
    title: "Scheduled Visits Today",
    value: "1,847",
    change: "+8.2%",
    icon: Calendar,
    color: "text-warning"
  },
  {
    title: "Pending Grace Candidates",
    value: "342",
    change: "-1.1%",
    icon: FileText,
    color: "text-success"
  }
];

const crimeTypesData = [
  { name: "Theft", value: 35, color: "#1e40af" },
  { name: "Drug Offenses", value: 28, color: "#3b82f6" },
  { name: "Assault", value: 18, color: "#60a5fa" },
  { name: "Fraud", value: 12, color: "#93c5fd" },
  { name: "Other", value: 7, color: "#dbeafe" }
];

const recidivismData = [
  { region: "North", rate: 23 },
  { region: "South", rate: 31 },
  { region: "East", rate: 18 },
  { region: "West", rate: 27 },
  { region: "Central", rate: 25 }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of the national prison management system
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewData.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.title}
              </CardTitle>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{item.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {item.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Crime Types Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Crime Types Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={crimeTypesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {crimeTypesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {crimeTypesData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recidivism Rate by Region */}
        <Card>
          <CardHeader>
            <CardTitle>Recidivism Rate by Region</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={recidivismData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, "Recidivism Rate"]} />
                <Bar dataKey="rate" fill="#1e40af" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent System Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: "10:30 AM", action: "New inmate admission", location: "Central Prison" },
              { time: "9:45 AM", action: "Visit approved", location: "North Regional Facility" },
              { time: "9:15 AM", action: "Grace request submitted", location: "East Correctional Center" },
              { time: "8:30 AM", action: "Security alert resolved", location: "West Prison Complex" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{activity.action}</span>
                  <span className="text-xs text-muted-foreground">{activity.location}</span>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}