'use client';

import { useState } from 'react';
import { AUDIT_MODULES } from '@/lib/data/modules';
import { AUDIT_RESULTS } from '@/lib/data/audit-data';
import { getStatusColor } from '@/lib/utils';
import { 
  Eye, Shield, FileText, Network, Link, Code, TrendingUp,
  AlertCircle, CheckCircle2, AlertTriangle, Info, ChevronRight, Search, Filter
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, any> = {
  Eye, Shield, FileText, Network, Link, Code, TrendingUp
};

export default function AuditPage() {
  const [selectedModuleId, setSelectedModuleId] = useState('ai-visibility');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const selectedResult = AUDIT_RESULTS[selectedModuleId];

  // Filter modules based on search and category
  const filteredModules = AUDIT_MODULES.filter(module => {
    const matchesSearch = module.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || module.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Module List */}
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Audit Modules</h1>
          <p className="text-sm text-gray-600 mt-1">Select a module to view details</p>
          
          {/* Search Box - UNIQUE FEATURE */}
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Buttons - UNIQUE FEATURE */}
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <FilterButton 
              label="All" 
              active={filterCategory === 'all'} 
              onClick={() => setFilterCategory('all')}
            />
            <FilterButton 
              label="Visibility" 
              active={filterCategory === 'visibility'} 
              onClick={() => setFilterCategory('visibility')}
            />
            <FilterButton 
              label="Trust" 
              active={filterCategory === 'trust'} 
              onClick={() => setFilterCategory('trust')}
            />
            <FilterButton 
              label="Content" 
              active={filterCategory === 'content'} 
              onClick={() => setFilterCategory('content')}
            />
            <FilterButton 
              label="Technical" 
              active={filterCategory === 'technical'} 
              onClick={() => setFilterCategory('technical')}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {filteredModules.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p className="text-sm">No modules found</p>
            </div>
          ) : (
            filteredModules.map((module) => {
              const isSelected = selectedModuleId === module.id;
              const result = AUDIT_RESULTS[module.id];
              const Icon = iconMap[module.icon];

              return (
                <button
                  key={module.id}
                  onClick={() => setSelectedModuleId(module.id)}
                  className={`w-full text-left p-4 rounded-lg mb-2 transition-all ${
                    isSelected
                      ? 'bg-blue-50 border-2 border-blue-500 shadow-sm'
                      : 'bg-white border border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg transition-all ${isSelected ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-sm text-gray-900">{module.name}</h3>
                        {result && (
                          <span className="text-lg font-bold text-gray-900">{result.score}</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">{module.description}</p>
                      <div className="mt-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                          {module.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </aside>

      {/* Main Content - Module Details */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-8">
          {selectedResult && <ModuleDetails result={selectedResult} />}
        </div>
      </main>
    </div>
  );
}

// Filter Button Component - UNIQUE
function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
        active 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
}

// Module Details Component (JSON-driven) - ENHANCED
function ModuleDetails({ result }: { result: typeof AUDIT_RESULTS[string] }) {
  const statusColor = getStatusColor(result.status);
  const [expandedRec, setExpandedRec] = useState<string | null>(null);

  return (
    <div>
      {/* Header with animation */}
      <div className="mb-8 animate-fadeIn">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="text-5xl font-bold text-gray-900">{result.score}</div>
            <div>
              <div className="text-sm text-gray-500">Score</div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                {result.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{result.moduleName}</h1>
        <p className="text-lg text-gray-600">{result.summary}</p>
      </div>

      {/* Metrics with hover effect */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 hover:shadow-lg transition-shadow">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {result.metrics.map((metric, idx) => (
            <MetricCard key={idx} metric={metric} />
          ))}
        </div>
      </div>

      {/* Insights */}
      {result.insights.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Insights ({result.insights.length})
            </h2>
          </div>
          <div className="space-y-3">
            {result.insights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      )}

      {/* Issues */}
      {result.issues.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Issues ({result.issues.length})
            </h2>
          </div>
          <div className="space-y-3">
            {result.issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        </div>
      )}

      {/* Recommendations with expand/collapse */}
      {result.recommendations.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Recommendations ({result.recommendations.length})
            </h2>
          </div>
          <div className="space-y-4">
            {result.recommendations.map((rec) => (
              <RecommendationCard 
                key={rec.id} 
                recommendation={rec}
                isExpanded={expandedRec === rec.id}
                onToggle={() => setExpandedRec(expandedRec === rec.id ? null : rec.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Enhanced components with animations
function MetricCard({ metric }: { metric: any }) {
  return (
    <div className="group">
      <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
      <p className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{metric.value}</p>
      {metric.change !== undefined && (
        <p className={`text-sm mt-1 font-medium ${metric.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {metric.change > 0 ? '+' : ''}{metric.change}% {metric.changeLabel}
        </p>
      )}
    </div>
  );
}

function InsightCard({ insight }: { insight: any }) {
  const impactColors = {
    high: 'bg-green-100 text-green-700 border-green-200',
    medium: 'bg-blue-100 text-blue-700 border-blue-200',
    low: 'bg-gray-100 text-gray-700 border-gray-200'
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-green-400 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{insight.title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium border ${impactColors[insight.impact]}`}>
          {insight.impact.toUpperCase()}
        </span>
      </div>
      <p className="text-sm text-gray-600">{insight.description}</p>
    </div>
  );
}

function IssueCard({ issue }: { issue: any }) {
  const severityConfig = {
    critical: { icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
    warning: { icon: AlertTriangle, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
    info: { icon: Info, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' }
  };

  const config = severityConfig[issue.severity];
  const Icon = config.icon;

  return (
    <div className={`border rounded-lg p-4 ${config.border} ${config.bg} hover:shadow-md transition-all`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 ${config.color}`} />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{issue.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
          {issue.affectedEntities.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {issue.affectedEntities.map((entity: string, idx: number) => (
                <span key={idx} className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-700 hover:border-gray-400 transition-colors">
                  {entity}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Enhanced Recommendation with expand/collapse - UNIQUE FEATURE
function RecommendationCard({ 
  recommendation, 
  isExpanded,
  onToggle 
}: { 
  recommendation: any;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const priorityColors = {
    high: 'bg-red-100 text-red-700 border-red-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    low: 'bg-blue-100 text-blue-700 border-blue-200'
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{recommendation.title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium border ${priorityColors[recommendation.priority]}`}>
          {recommendation.priority.toUpperCase()} PRIORITY
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{recommendation.description}</p>
      <p className="text-sm font-medium text-blue-600 mb-3">
        Estimated Impact: {recommendation.estimatedImpact}
      </p>
      
      {recommendation.actionItems.length > 0 && (
        <div>
          <button
            onClick={onToggle}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1 mb-2"
          >
            <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
            Action Items ({recommendation.actionItems.length})
          </button>
          
          {isExpanded && (
            <ul className="space-y-1 ml-5 animate-fadeIn">
              {recommendation.actionItems.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}