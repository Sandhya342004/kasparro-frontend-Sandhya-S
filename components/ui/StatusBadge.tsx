// components/ui/StatusBadge.tsx
import React from "react";

type Color = "blue" | "purple" | "green" | "orange";

interface StatusBadgeProps {
  color: Color;
  icon: React.ReactElement;
}

const colorClasses: Record<Color, string> = {
  blue: "border-blue-500 bg-blue-100",
  purple: "border-purple-500 bg-purple-100",
  green: "border-green-500 bg-green-100",
  orange: "border-orange-500 bg-orange-100",
};

export default function StatusBadge({ color, icon }: StatusBadgeProps) {
  return (
    <div className={`inline-flex p-4 rounded-xl mb-3 border-2 ${colorClasses[color]}`}>
      {icon}
    </div>
  );
}
