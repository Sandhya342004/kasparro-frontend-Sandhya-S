import Link from 'next/link';
import { ArrowRight, Target, Brain, Zap } from 'lucide-react';

export default function AboutPage() {
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

      {/* Hero */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Kasparro
          </h1>
          <p className="text-xl text-gray-600">
            Building the intelligence layer for AI-first search
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                As AI systems like ChatGPT, Claude, and Perplexity reshape how people discover information, 
                traditional SEO strategies are becoming obsolete. Brands need new intelligence to understand 
                how AI models perceive, reference, and recommend them.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Kasparro exists to provide that intelligence—giving brands visibility into their AI search 
                presence and actionable insights to optimize for the AI-first era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Philosophy</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Native from the Ground Up</h3>
                  <p className="leading-relaxed">
                    We don't retrofit old SEO tools for AI. We built Kasparro specifically for 
                    understanding how AI systems process, understand, and surface brands.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Modular Intelligence</h3>
                  <p className="leading-relaxed">
                    Rather than a single "AI SEO score," we provide granular insights across 7 
                    specialized modules—from visibility to trust signals to technical readiness.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Actionable Over Vanity Metrics</h3>
                  <p className="leading-relaxed">
                    Every insight comes with specific recommendations and estimated impact. 
                    We help brands improve, not just observe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-green-100 rounded-lg">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision for AI-First Search</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We believe that within 3-5 years, the majority of information discovery will happen 
                through conversational AI interfaces rather than traditional search engines.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Brands that optimize for AI understanding today will have a massive advantage tomorrow. 
                Kasparro is building the tools to make that possible—starting with visibility and 
                intelligence, expanding into optimization and automation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                This is the future of brand presence. We're building the infrastructure for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            See Kasparro in Action
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our platform and understand how AI perceives your brand
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