
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StudentsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Students</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Here you can manage your students.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
