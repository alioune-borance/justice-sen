import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Building, Calendar, FileText } from "lucide-react";

const overviewData = [
  {
    title: "Total Détenus",
    value: "45 284",
    change: "+2,5%",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Prisons Actives",
    value: "127",
    change: "Aucun changement",
    icon: Building,
    color: "text-info"
  },
  {
    title: "Visites Programmées Aujourd'hui",
    value: "1 847",
    change: "+8,2%",
    icon: Calendar,
    color: "text-warning"
  },
  {
    title: "Candidats à la Grâce en Attente",
    value: "342",
    change: "-1,1%",
    icon: FileText,
    color: "text-success"
  }
];

const crimeTypesData = [
  { name: "Vol", value: 35, color: "#1e40af" },
  { name: "Infractions Drogue", value: 28, color: "#3b82f6" },
  { name: "Agression", value: 18, color: "#60a5fa" },
  { name: "Fraude", value: 12, color: "#93c5fd" },
  { name: "Autres", value: 7, color: "#dbeafe" }
];

const recidivismData = [
  { region: "Nord", rate: 23 },
  { region: "Sud", rate: 31 },
  { region: "Est", rate: 18 },
  { region: "Ouest", rate: 27 },
  { region: "Centre", rate: 25 }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Tableau de Bord</h2>
        <p className="text-muted-foreground">
          Vue d'ensemble du système national de gestion pénitentiaire
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
                {item.change} par rapport au mois dernier
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
            <CardTitle>Répartition des Types de Crimes</CardTitle>
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
            <CardTitle>Taux de Récidive par Région</CardTitle>
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
          <CardTitle>Activité Récente du Système</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: "10h30", action: "Nouvelle admission de détenu", location: "Prison Centrale" },
              { time: "9h45", action: "Visite approuvée", location: "Établissement Régional Nord" },
              { time: "9h15", action: "Demande de grâce soumise", location: "Centre Correctionnel Est" },
              { time: "8h30", action: "Alerte sécurité résolue", location: "Complexe Pénitentiaire Ouest" }
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