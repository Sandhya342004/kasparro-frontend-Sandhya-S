// components/ui/AuditItem.tsx
import React from "react";
import { Issue, Insight, Recommendation } from "@/lib/types";

interface AuditItemProps {
  insight: Insight;
  issue?: Issue;
  recommendations?: Recommendation[];
  showSeverity?: boolean;
}

export default function AuditItem({ insight, issue, recommendations = [], showSeverity = false }: AuditItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-green-400 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fadeIn">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{insight.title}</h3>
        {showSeverity && issue && (
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            issue.severity === "critical" ? "bg-red-100 text-red-700 border border-red-200" :
            issue.severity === "warning" ? "bg-yellow-100 text-yellow-700 border border-yellow-200" :
            "bg-blue-100 text-blue-700 border border-blue-200"
          }`}>
            {issue.severity.toUpperCase()}
          </span>
        )}
        {insight.impact && (
          <span className={`px-2 py-1 rounded text-xs font-medium border ${
            insight.impact === "high" ? "bg-green-100 text-green-700 border-green-200" :
            insight.impact === "medium" ? "bg-blue-100 text-blue-700 border-blue-200" :
            "bg-gray-100 text-gray-700 border-gray-200"
          }`}>
            {insight.impact.toUpperCase()}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600">{insight.description}</p>
      {recommendations.length > 0 && (
        <ul className="list-disc pl-5 mt-2">
          {recommendations.map((rec, idx) => (
            <li key={idx} className="text-gray-700 text-sm">{rec.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
