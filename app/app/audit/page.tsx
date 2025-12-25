'use client';

import React, { useState } from 'react';
import {
  Eye,
  Shield,
  FileText,
  Network,
  Link as LinkIcon,
  Code,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Info,
  ChevronRight,
  Search,
} from 'lucide-react';
import { AUDIT_RESULTS } from '@/lib/data/audit-data';
import { getStatusColor } from '@/lib/utils';

/* ------------------ Types ------------------ */

type ModuleCategory = 'visibility' | 'trust' | 'content' | 'technical';

interface AuditResult {
  id: string;
  module: string;
  score: number;
  insights: string[];
  issues: string[];
  recommendations: string[];
  category: ModuleCategory;
}

interface AuditModuleCardProps {
  result: AuditResult;
}

interface FilterState {
  searchQuery: string;
  category: ModuleCategory | 'all';
}

/* ------------------ Icon Mapping ------------------ */

const iconMap: Record<string, React.ReactNode> = {
  Eye,
  Shield,
  FileText,
  Network,
  Link: LinkIcon,
  Code,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Info,
  ChevronRight,
  Search,
};

/* ------------------ Page ------------------ */

export default function AuditPage() {
  const [filter, setFilter] = useState<FilterState>({
    searchQuery: '',
    category: 'all',
  });

  const filteredResults = AUDIT_RESULTS.filter((result) => {
    const matchesSearch = result.module
      .toLowerCase()
      .includes(filter.searchQuery.toLowerCase());
    const matchesCategory =
      filter.category === 'all' || result.category === filter.category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Audit Modules</h1>
          <p className="text-gray-600">
            Module-based analysis of brand AI perception
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search modules..."
            className="flex-1 p-2 border rounded-md"
            value={filter.searchQuery}
            onChange={(e) =>
              setFilter({ ...filter, searchQuery: e.target.value })
            }
          />
          <select
            value={filter.category}
            className="p-2 border rounded-md"
            onChange={(e) =>
              setFilter({
                ...filter,
                category: e.target.value as ModuleCategory | 'all',
              })
            }
          >
            <option value="all">All Categories</option>
            <option value="visibility">Visibility</option>
            <option value="trust">Trust</option>
            <option value="content">Content</option>
            <option value="technical">Technical</option>
          </select>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredResults.map((result) => (
            <AuditModuleCard key={result.id} result={result} />
          ))}
          {filteredResults.length === 0 && (
            <p className="text-gray-500 col-span-full">No modules found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------ Components ------------------ */

function AuditModuleCard({ result }: AuditModuleCardProps) {
  const color = getStatusColor(result.score);

  return (
    <div className={`bg-white p-6 rounded-xl border-2 border-gray-200`}>
      <div
        className={`inline-flex p-4 rounded-xl mb-3 border-2 ${color} justify-center`}
      >
        {iconMap[result.module.split(' ')[0]] || <FileText />}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{result.module}</h3>
      <p className="text-sm text-gray-600 mb-2">Score: {result.score}</p>

      <div className="mb-2">
        <p className="font-medium text-gray-800">Insights:</p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {result.insights.map((insight, idx) => (
            <li key={idx}>{insight}</li>
          ))}
        </ul>
      </div>

      <div className="mb-2">
        <p className="font-medium text-gray-800">Issues:</p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {result.issues.map((issue, idx) => (
            <li key={idx}>{issue}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-medium text-gray-800">Recommendations:</p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {result.recommendations.map((rec, idx) => (
            <li key={idx}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
