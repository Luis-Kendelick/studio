
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PlansPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Here you can manage your plans.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
