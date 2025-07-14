import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UserManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Gestion des Utilisateurs</h2>
        <p className="text-muted-foreground">
          Gérer les utilisateurs du système, rôles et permissions
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>User Management System</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              User management interface will be implemented here
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}