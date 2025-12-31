'use client';

import { Database, Cpu, Box, FileOutput, ArrowRight, Eye, Shield, FileText, Network, Link, Code, TrendingUp } from 'lucide-react';
import StatusBadge from '@/components/ui/StatusBadge';
import { AUDIT_MODULES } from '@/lib/data/modules';
import { ModuleIcon } from '@/lib/types';

type ColorType = 'blue' | 'purple' | 'green' | 'orange';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">System Architecture</h1>
          <p className="text-gray-600">How Kasparro processes and analyzes AI brand intelligence</p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Data Processing Pipeline</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <ArchitectureNode
              icon={<Database className="w-8 h-8" />}
              title="Input Assembler"
              description="Collects brand data, content, and signals"
              color="blue"
            />
            
            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
            
            <ArchitectureNode
              icon={<Cpu className="w-8 h-8" />}
              title="Context Pack"
              description="Builds comprehensive analysis context"
              color="purple"
            />
            
            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
            
            <ArchitectureNode
              icon={<Box className="w-8 h-8" />}
              title="Audit Modules"
              description="7 specialized analysis engines"
              color="green"
            />
            
            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
            
            <ArchitectureNode
              icon={<FileOutput className="w-8 h-8" />}
              title="Output Surface"
              description="Insights, scores, and recommendations"
              color="orange"
            />
          </div>
        </div>

        {/* Module Overview */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Analysis Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUDIT_MODULES.map((module) => {
              const iconMap: Record<ModuleIcon, React.ComponentType<{ className?: string }>> = {
                Eye, Shield, FileText, Network, Link, Code, TrendingUp
              };
              const Icon = iconMap[module.icon as ModuleIcon] || Eye;
              
              return (
                <div key={module.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <StatusBadge 
                    color={module.color as "blue" | "purple" | "green" | "orange"} 
                    icon={<Icon className="w-6 h-6" />} 
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">{module.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                  <span className="inline-block px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-700">
                    {module.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Component Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentCard
            title="Input Assembler"
            description="The Input Assembler collects and normalizes data from multiple sources including website content, social media, knowledge graphs, and API endpoints."
            features={[
              'Web content scraping and parsing',
              'API data collection',
              'Knowledge graph queries',
              'Metadata extraction'
            ]}
          />

          <ComponentCard
            title="Context Pack"
            description="The Context Pack builds a comprehensive understanding of the brand including entity relationships, content themes, and competitive positioning."
            features={[
              'Entity recognition and mapping',
              'Topic modeling',
              'Competitive analysis',
              'Semantic relationship building'
            ]}
          />

          <ComponentCard
            title="Audit Modules"
            description="Seven specialized modules each focus on a specific dimension of AI brand perception, from visibility to trust signals."
            features={[
              'AI Visibility Analysis',
              'E-E-A-T Trust Evaluation',
              'Content Intelligence',
              'Entity Coverage Mapping',
              'Citation Analysis',
              'Technical Signal Monitoring',
              'Brand Sentiment Assessment'
            ]}
          />

          <ComponentCard
            title="Output Surface"
            description="Results are synthesized into actionable insights with quantified scores, detailed findings, and prioritized recommendations."
            features={[
              'Comprehensive scoring',
              'Detailed insights generation',
              'Issue identification',
              'Prioritized recommendations',
              'Trend analysis'
            ]}
          />
        </div>

        {/* Technical Details */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Technical Characteristics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Processing Model</p>
              <p className="font-semibold text-gray-900">Modular Pipeline Architecture</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Analysis Approach</p>
              <p className="font-semibold text-gray-900">Multi-dimensional AI Perception</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Data Sources</p>
              <p className="font-semibold text-gray-900">AI Platforms + Knowledge Graphs</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Update Frequency</p>
              <p className="font-semibold text-gray-900">On-demand Audits</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Module Count</p>
              <p className="font-semibold text-gray-900">7 Specialized Modules</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Output Format</p>
              <p className="font-semibold text-gray-900">Structured JSON + Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureNode({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: ColorType }) {
  const colorClasses: Record<ColorType, string> = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200'
  };

  return (
    <div className="flex-1 text-center">
      <div className={`inline-flex p-4 rounded-xl mb-3 border-2 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function ComponentCard({ title, description, features }: { title: string; description: string; features: string[] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-blue-600 mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  );
}