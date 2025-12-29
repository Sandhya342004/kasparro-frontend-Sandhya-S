// components/ui/ModuleCard.tsx
import React from "react";
import StatusBadge from "./StatusBadge";
import { AuditResult } from "@/lib/types";

interface ModuleCardProps {
  result: AuditResult;
  onClick?: () => void;
  isSelected?: boolean;
}

export default function ModuleCard({ result, onClick, isSelected }: ModuleCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg mb-2 transition-all ${
        isSelected
          ? 'bg-blue-50 border-2 border-blue-500 shadow-sm'
          : 'bg-white border border-gray-200 hover:border-blue-300 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg transition-all ${isSelected ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
          {result.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-sm text-gray-900">{result.title}</h3>
            <span className="text-lg font-bold text-gray-900">{result.score}</span>
          </div>
          <p className="text-xs text-gray-600 line-clamp-2">{result.description}</p>
          <div className="mt-2">
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
              {result.category || 'general'}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
