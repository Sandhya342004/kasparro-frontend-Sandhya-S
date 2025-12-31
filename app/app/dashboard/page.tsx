'use client';

import { BRANDS, DASHBOARD_DATA } from '@/lib/data/brands';
import { formatRelativeTime } from '@/lib/utils';
import { Eye, Shield, Target, TrendingUp, TrendingDown } from 'lucide-react';

export default function DashboardPage() {
  const data = DASHBOARD_DATA;
  const brand = BRANDS[0];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg">
              <select className="text-sm font-medium text-gray-700 bg-transparent border-none outline-none cursor-pointer">
                <option>{brand.name}</option>
              </select>
            </div>
          </div>
          <p className="text-gray-600">
            Last audit: {formatRelativeTime(data.lastAudit)}
          </p>
        </div>

        {/* Score Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* AI Visibility Score */}
          <ScoreCard
            icon={<Eye className="w-6 h-6" />}
            label="AI Visibility Score"
            score={data.visibilityScore}
            trend={data.trends.visibility}
            color="blue"
          />

          {/* Trust Score */}
          <ScoreCard
            icon={<Shield className="w-6 h-6" />}
            label="Trust Score (E-E-A-T)"
            score={data.trustScore}
            trend={data.trends.trust}
            color="green"
            className="animate-delay-100"
          />

          {/* Keyword Coverage */}
          <ScoreCard
            icon={<Target className="w-6 h-6" />}
            label="Keyword Coverage"
            score={data.keywordCoverage}
            trend={data.trends.keywords}
            color="purple"
            subtitle={`${data.coveredKeywords} of ${data.totalKeywords} keywords`}
            className="animate-delay-200"
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ActionButton
              href="/app/audit"
              title="View Detailed Audit"
              description="Explore module-by-module analysis"
            />
            <ActionButton
              href="/app/architecture"
              title="System Architecture"
              description="Understand how Kasparro analyzes your brand"
            />
          </div>
        </div>

        {/* Brand Info */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Brand Information</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <InfoItem label="Domain" value={brand.domain} />
            <InfoItem label="Industry" value={brand.industry} />
            <InfoItem label="Total Keywords" value={data.totalKeywords.toString()} />
            <InfoItem label="Platforms Tracked" value="6" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Score Card Component
function ScoreCard({
  icon,
  label,
  score,
  trend,
  color,
  subtitle,
  className = ''
}: {
  icon: React.ReactNode;
  label: string;
  score: number;
  trend: number;
  color: 'blue' | 'green' | 'purple';
  subtitle?: string;
  className?: string;
}) {
  const colorClasses: Record<'blue' | 'green' | 'purple', string> = {
    blue: 'text-blue-600 bg-blue-50',
    green: 'text-green-600 bg-green-50',
    purple: 'text-purple-600 bg-purple-50'
  };

  const isPositive = trend > 0;

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fadeIn ${className}`}>
      <div className={`inline-flex p-3 rounded-lg ${colorClasses[color]} mb-4 hover:scale-110 transition-transform`}>
        {icon}
      </div>
      
      <h3 className="text-sm font-medium text-gray-600 mb-2">{label}</h3>
      
      <div className="flex items-end gap-2 mb-2">
        <span className="text-4xl font-bold text-gray-900 animate-float">{score}</span>
        <span className="text-lg text-gray-500 mb-1">/100</span>
      </div>

      {subtitle && (
        <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
      )}

      <div className="flex items-center gap-1 text-sm">
        {isPositive ? (
          <>
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-medium">+{trend}%</span>
          </>
        ) : (
          <>
            <TrendingDown className="w-4 h-4 text-red-600" />
            <span className="text-red-600 font-medium">{trend}%</span>
          </>
        )}
        <span className="text-gray-500 ml-1">vs last audit</span>
      </div>
    </div>
  );
}

// Action Button Component
function ActionButton({
  href,
  title,
  description
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group"
    >
      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600">
        {title} →
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
}

// Info Item Component
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  );
}