import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Settings</h2>
        <p className="text-muted-foreground">
          System configuration and preferences
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>System Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              System settings and configuration options will be implemented here
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}