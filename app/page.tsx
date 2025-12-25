import Link from 'next/link';
import { AUDIT_MODULES } from '@/lib/data/modules';
import { Eye, Shield, FileText, Network, Link as LinkIcon, Code, TrendingUp, ArrowRight, Sparkles, Brain, Database } from 'lucide-react';

const iconMap: Record<string, any> = {
  Eye, Shield, FileText, Network, Link: LinkIcon, Code, TrendingUp
};

export default function HomePage() {
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
              <Link href="/platform" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Platform
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

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">AI-Native SEO Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Understand How AI<br />Sees Your Brand
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Kasparro analyzes how AI platforms like ChatGPT, Claude, and Perplexity understand and represent your brand across billions of queries.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link 
              href="/app/dashboard"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              View Live Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/platform"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why AI-SEO is Different */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why AI-SEO is Different from Traditional SEO
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional SEO */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional SEO</h3>
              <ul className="space-y-3">
                <ComparisonItem text="Focus on keyword rankings" />
                <ComparisonItem text="Optimize for search engine crawlers" />
                <ComparisonItem text="Track position in search results" />
                <ComparisonItem text="Link building for PageRank" />
                <ComparisonItem text="Meta tags and on-page factors" />
              </ul>
            </div>

            {/* AI-SEO */}
            <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Native SEO</h3>
              <ul className="space-y-3">
                <ComparisonItem text="Focus on mention frequency & context" highlight />
                <ComparisonItem text="Optimize for AI model understanding" highlight />
                <ComparisonItem text="Track presence in AI responses" highlight />
                <ComparisonItem text="Build trust signals (E-E-A-T)" highlight />
                <ComparisonItem text="Semantic relevance & entity relationships" highlight />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              7 Core Analysis Modules
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI brand intelligence across every dimension that matters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUDIT_MODULES.map((module) => {
              const Icon = iconMap[module.icon];
              return (
                <ModuleCard key={module.id} module={module} Icon={Icon} />
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Kasparro Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PipelineStep
              number="1"
              icon={<Database className="w-8 h-8" />}
              title="Data Collection"
              description="Gather signals from AI platforms, knowledge graphs, and content sources"
            />
            <PipelineStep
              number="2"
              icon={<Brain className="w-8 h-8" />}
              title="AI Analysis"
              description="Process through 7 specialized modules to understand AI perception"
            />
            <PipelineStep
              number="3"
              icon={<Sparkles className="w-8 h-8" />}
              title="Actionable Insights"
              description="Receive prioritized recommendations to improve AI visibility"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to See How AI Understands Your Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our platform and see real AI-native brand intelligence in action
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

// Module Card Component
function ModuleCard({ module, Icon }: { module: any; Icon: any }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
      <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.name}</h3>
      <p className="text-sm text-gray-600">{module.description}</p>
    </div>
  );
}

// Comparison Item Component
function ComparisonItem({ text, highlight }: { text: string; highlight?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      <span className={`mt-1 ${highlight ? 'text-blue-600' : 'text-gray-400'}`}>•</span>
      <span className={highlight ? 'text-gray-900 font-medium' : 'text-gray-600'}>{text}</span>
    </li>
  );
}

// Pipeline Step Component
function PipelineStep({ 
  number, 
  icon, 
  title, 
  description 
}: { 
  number: string; 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 text-2xl font-bold">
        {number}
      </div>
      <div className="mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}