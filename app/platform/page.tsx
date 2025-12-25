import Link from 'next/link';
import { AUDIT_MODULES } from '@/lib/data/modules';
import { ArrowRight, Database, Cpu, FileOutput, Eye, Shield, FileText, Network, Link as LinkIcon, Code, TrendingUp } from 'lucide-react';

const iconMap: Record<string, any> = {
  Eye, Shield, FileText, Network, Link: LinkIcon, Code, TrendingUp
};

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Kasparro
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link 
                href="/app/dashboard"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive AI-native intelligence system that analyzes how AI models understand, represent, and communicate about your brand.
          </p>
        </div>
      </section>

      {/* Platform Flow */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Data Flows Through Kasparro
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <FlowCard
              icon={<Database className="w-8 h-8" />}
              title="Input Assembly"
              description="Collect brand data, content, and context from multiple sources"
              color="blue"
            />
            <FlowCard
              icon={<Cpu className="w-8 h-8" />}
              title="Context Pack"
              description="Build comprehensive context for AI analysis across platforms"
              color="purple"
            />
            <FlowCard
              icon={<Network className="w-8 h-8" />}
              title="Audit Modules"
              description="Process through 7 specialized analysis modules"
              color="green"
            />
            <FlowCard
              icon={<FileOutput className="w-8 h-8" />}
              title="Insights"
              description="Generate actionable recommendations and reports"
              color="orange"
            />
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/app/architecture"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
            >
              View Detailed Architecture
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modules Deep Dive */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            7 Specialized Analysis Modules
          </h2>

          <div className="space-y-6">
            {AUDIT_MODULES.map((module, index) => {
              const Icon = iconMap[module.icon];
              return (
                <ModuleDetailCard 
                  key={module.id}
                  module={module}
                  Icon={Icon}
                  index={index + 1}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What You Get
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <OutputCard
              title="Comprehensive Scores"
              description="Quantified metrics across AI visibility, trust, content quality, and technical signals"
            />
            <OutputCard
              title="Detailed Insights"
              description="Deep analysis of how AI models perceive and represent your brand across platforms"
            />
            <OutputCard
              title="Actionable Recommendations"
              description="Prioritized action items with estimated impact to improve AI brand perception"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            See the Platform in Action
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore a live dashboard with real audit data and insights
          </p>
          <Link 
            href="/app/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700"
          >
            View Dashboard
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p className="text-sm">© 2024 Kasparro. AI-Native Brand Intelligence Platform.</p>
        </div>
      </footer>
    </div>
  );
}

function FlowCard({ icon, title, description, color }: any) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200'
  };

  return (
    <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center hover:shadow-lg transition-all">
      <div className={`inline-flex p-4 rounded-lg mb-4 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function ModuleDetailCard({ module, Icon, index }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{module.name}</h3>
            <span className="text-sm font-medium text-gray-500">Module {index}</span>
          </div>
          <p className="text-gray-600">{module.description}</p>
          <div className="mt-3">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700`}>
              {module.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OutputCard({ title, description }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}