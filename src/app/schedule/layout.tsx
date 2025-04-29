
import { DashboardLayout } from "@/components/dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
