
import {
  ArrowLeft,
  Calendar,
  CreditCard,
  File,
  LogOut,
  PanelLeft,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import * as React from "react";

export const Icons = {
  logo: React.forwardRef<
    React.SVGElement,
    React.SVGProps<SVGSVGElement>
  >(({ className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      className={className}
      {...props}
    >
      <mask id="mask0_101_602" style={{ maskType: "alpha" }}>
        <rect width="32" height="32" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_101_602)">
        <path
          fill="#4A90E2"
          d="M24.899 12.419c1.753-1.01 3.777-1.553 5.873-1.553 5.246 0 7.746 4.966 4.829 9.278-1.553 2.246-4.36 3.585-7.36 3.585-1.94 0-3.733-.486-5.34-.973 2.537-3.952 2.02-9.257-1.009-10.337zm-17.716 0c1.753-1.01 3.777-1.553 5.873-1.553 5.246 0 7.746 4.966 4.829 9.278-1.553 2.246-4.36 3.585-7.36 3.585-1.94 0-3.733-.486-5.34-.973 2.537-3.952 2.02-9.257-1.009-10.337z"
        />
        <path
          fill="#4A90E2"
          d="M16.476 4.687c5.554 0 10.084 4.53 10.084 10.084 0 5.554-4.53 10.084-10.084 10.084-5.554 0-10.084-4.53-10.084-10.084 0-5.554 4.53-10.084 10.084-10.084z"
        />
      </g>
    </svg>
  )) as React.FC<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >,
  arrowLeft: ArrowLeft,
  student: User,
  addStudent: UserPlus,
  users: Users,
  calendar: Calendar,
  file: File,
  creditCard: CreditCard,
  logout: LogOut,
  settings: Settings,
  panelLeft: PanelLeft,
};
