import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Statistics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Statistics</h2>
        <p className="text-muted-foreground">
          Comprehensive statistical analysis and reporting
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Statistics Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              Detailed statistics and analytics will be implemented here
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}