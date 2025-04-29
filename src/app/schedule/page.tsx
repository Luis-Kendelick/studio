
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SchedulePage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Here you can manage your schedule.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
