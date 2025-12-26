import { AuditResult } from '../types';

export const AUDIT_RESULTS: Record<string, AuditResult> = {
  'ai-visibility': {
    moduleId: 'ai-visibility',
    moduleName: 'AI Visibility',
    score: 87,
    status: 'excellent',
    summary: 'Your brand has strong visibility across AI platforms with consistent mention patterns in relevant query categories.',
    insights: [
      {
        id: 'ins-1',
        title: 'High GPT-4 Visibility',
        description: 'Your brand appears in 73% of relevant ChatGPT responses, significantly above industry average of 45%.',
        impact: 'high'
      },
      {
        id: 'ins-2',
        title: 'Strong Product Category Association',
        description: 'AI models correctly associate your brand with primary product categories 89% of the time.',
        impact: 'high'
      },
      {
        id: 'ins-3',
        title: 'Emerging in Perplexity AI',
        description: 'Growing mention rate in Perplexity AI responses, up 34% from last audit.',
        impact: 'medium'
      }
    ],
    issues: [
      {
        id: 'iss-1',
        title: 'Inconsistent Positioning in Comparison Queries',
        description: 'When users ask "X vs Y", your brand appears in only 42% of responses despite being a market leader.',
        severity: 'warning',
        affectedEntities: ['Product Comparisons', 'Alternative Queries']
      },
      {
        id: 'iss-2',
        title: 'Low Visibility in Claude AI',
        description: 'Mention rate in Claude responses is 28% below expected levels for your market position.',
        severity: 'info',
        affectedEntities: ['Claude AI', 'Anthropic Platform']
      }
    ],
    recommendations: [
      {
        id: 'rec-1',
        title: 'Optimize Comparison Content',
        description: 'Create structured comparison content that highlights your competitive advantages in direct comparison scenarios.',
        priority: 'high',
        estimatedImpact: '+18% visibility in comparison queries',
        actionItems: [
          'Create detailed comparison landing pages',
          'Add structured data for competitive features',
          'Publish third-party comparison reviews'
        ]
      },
      {
        id: 'rec-2',
        title: 'Enhance Entity Relationships',
        description: 'Build stronger entity connections between your brand and key industry terms in your content.',
        priority: 'medium',
        estimatedImpact: '+12% contextual mentions',
        actionItems: [
          'Update knowledge base with entity markup',
          'Create topic cluster content',
          'Improve internal linking structure'
        ]
      }
    ],
    metrics: [
      { label: 'Overall Visibility Score', value: '87/100', change: 5, changeLabel: 'vs last audit' },
      { label: 'Mention Frequency', value: '68%', change: 8, changeLabel: 'vs industry avg' },
      { label: 'AI Platforms Tracked', value: 6 },
      { label: 'Query Categories Analyzed', value: 23 }
    ]
  },
  
  'eeat-trust': {
    moduleId: 'eeat-trust',
    moduleName: 'E-E-A-T & Trust Signals',
    score: 92,
    status: 'excellent',
    summary: 'Your brand demonstrates exceptional trust signals with strong expertise and authority markers across digital properties.',
    insights: [
      {
        id: 'ins-3',
        title: 'High Author Authority',
        description: 'Your content creators have verified expertise credentials recognized by AI models.',
        impact: 'high'
      },
      {
        id: 'ins-4',
        title: 'Strong Backlink Profile',
        description: 'Citations from authoritative domains significantly boost AI model confidence in your content.',
        impact: 'high'
      },
      {
        id: 'ins-5',
        title: 'Active Expertise Signals',
        description: 'Regular publication of research and thought leadership content maintains expertise positioning.',
        impact: 'medium'
      }
    ],
    issues: [
      {
        id: 'iss-3',
        title: 'Missing Author Bios on Some Pages',
        description: '23% of your content pages lack detailed author credentials that AI systems look for.',
        severity: 'warning',
        affectedEntities: ['Blog Posts', 'Resource Center']
      }
    ],
    recommendations: [
      {
        id: 'rec-3',
        title: 'Complete Author Profiles',
        description: 'Add comprehensive author bios with credentials to all content pages to maximize E-E-A-T signals.',
        priority: 'medium',
        estimatedImpact: '+6% trust score',
        actionItems: [
          'Audit all content for missing author info',
          'Create detailed author profile pages',
          'Add structured data for author credentials'
        ]
      }
    ],
    metrics: [
      { label: 'Trust Score', value: '92/100', change: 3, changeLabel: 'vs last audit' },
      { label: 'Authoritative Citations', value: 156, change: 12, changeLabel: 'new this month' },
      { label: 'Expert Contributors', value: 8 },
      { label: 'Verified Credentials', value: '94%' }
    ]
  },

  'content-intelligence': {
    moduleId: 'content-intelligence',
    moduleName: 'Content Intelligence',
    score: 78,
    status: 'good',
    summary: 'Your content shows good semantic alignment but has opportunities to improve depth and coverage in key topic areas.',
    insights: [
      {
        id: 'ins-6',
        title: 'Strong Topic Relevance',
        description: 'Content aligns well with user intent patterns identified in AI query analysis.',
        impact: 'high'
      },
      {
        id: 'ins-7',
        title: 'Effective Use of Examples',
        description: 'Practical examples in your content are frequently referenced by AI models in responses.',
        impact: 'medium'
      }
    ],
    issues: [
      {
        id: 'iss-4',
        title: 'Content Gaps in Advanced Topics',
        description: 'Missing in-depth coverage of 12 advanced topics that AI systems frequently query.',
        severity: 'warning',
        affectedEntities: ['Technical Documentation', 'Advanced Guides']
      },
      {
        id: 'iss-5',
        title: 'Outdated Content Detected',
        description: '18 pages contain information that AI models flag as potentially outdated.',
        severity: 'warning',
        affectedEntities: ['Product Features', 'Pricing Pages']
      }
    ],
    recommendations: [
      {
        id: 'rec-4',
        title: 'Create Advanced Topic Content',
        description: 'Develop comprehensive guides for advanced topics to capture high-intent queries.',
        priority: 'high',
        estimatedImpact: '+15% topic coverage',
        actionItems: [
          'Research top 20 advanced query patterns',
          'Create detailed technical guides',
          'Add code examples and use cases'
        ]
      },
      {
        id: 'rec-5',
        title: 'Content Refresh Program',
        description: 'Implement quarterly content audits to keep information current and AI-friendly.',
        priority: 'high',
        estimatedImpact: '+8% content quality score',
        actionItems: [
          'Identify all outdated content',
          'Update statistics and examples',
          'Add "last updated" timestamps'
        ]
      }
    ],
    metrics: [
      { label: 'Content Quality Score', value: '78/100', change: -2, changeLabel: 'vs last audit' },
      { label: 'Topic Coverage', value: '67%', change: 3, changeLabel: 'vs competitors' },
      { label: 'Content Pieces Analyzed', value: 234 },
      { label: 'Average Content Depth', value: '2,340 words' }
    ]
  },

  'entity-coverage': {
    moduleId: 'entity-coverage',
    moduleName: 'Entity Coverage',
    score: 85,
    status: 'excellent',
    summary: 'Strong entity recognition with well-established brand entities and relationships in AI knowledge graphs.',
    insights: [
      {
        id: 'ins-8',
        title: 'Primary Entity Well-Established',
        description: 'Your main brand entity is correctly identified and linked across major knowledge bases.',
        impact: 'high'
      },
      {
        id: 'ins-9',
        title: 'Good Product Entity Coverage',
        description: 'Core product entities are recognized with accurate attributes and relationships.',
        impact: 'medium'
      }
    ],
    issues: [
      {
        id: 'iss-6',
        title: 'Missing Sub-Brand Entities',
        description: 'Three sub-brands lack proper entity definitions in knowledge graphs.',
        severity: 'info',
        affectedEntities: ['Sub-Brand A', 'Sub-Brand B', 'Sub-Brand C']
      }
    ],
    recommendations: [
      {
        id: 'rec-6',
        title: 'Establish Sub-Brand Entities',
        description: 'Create dedicated entity pages and structured data for all sub-brands.',
        priority: 'medium',
        estimatedImpact: '+7% entity coverage',
        actionItems: [
          'Create Wikipedia entries if eligible',
          'Add Wikidata entries for sub-brands',
          'Implement Organization schema markup'
        ]
      }
    ],
    metrics: [
      { label: 'Entity Coverage Score', value: '85/100', change: 4, changeLabel: 'vs last audit' },
      { label: 'Recognized Entities', value: 47 },
      { label: 'Entity Relationships', value: 128 },
      { label: 'Knowledge Graph Presence', value: '89%' }
    ]
  },

  'citation-analysis': {
    moduleId: 'citation-analysis',
    moduleName: 'Citation & Source Analysis',
    score: 81,
    status: 'excellent',
    summary: 'Good citation performance with opportunities to increase attribution accuracy and source diversity.',
    insights: [
      {
        id: 'ins-10',
        title: 'Frequent Content Citations',
        description: 'Your content is cited as a source in 64% of relevant AI responses.',
        impact: 'high'
      }
    ],
    issues: [
      {
        id: 'iss-7',
        title: 'Limited Citation Diversity',
        description: 'Citations are concentrated in 3 main content areas, missing opportunities in others.',
        severity: 'info',
        affectedEntities: ['Product Documentation', 'Case Studies']
      }
    ],
    recommendations: [
      {
        id: 'rec-7',
        title: 'Expand Citable Content',
        description: 'Create more authoritative, citable content across diverse topic areas.',
        priority: 'medium',
        estimatedImpact: '+10% citation diversity',
        actionItems: [
          'Publish original research reports',
          'Create comprehensive data resources',
          'Develop authoritative guides'
        ]
      }
    ],
    metrics: [
      { label: 'Citation Score', value: '81/100', change: 2, changeLabel: 'vs last audit' },
      { label: 'Direct Citations', value: 89 },
      { label: 'Indirect References', value: 234 },
      { label: 'Attribution Accuracy', value: '91%' }
    ]
  },

  'technical-signals': {
    moduleId: 'technical-signals',
    moduleName: 'Technical Signals',
    score: 74,
    status: 'good',
    summary: 'Solid technical foundation with some areas requiring optimization for better AI crawlability.',
    insights: [
      {
        id: 'ins-11',
        title: 'Good Structured Data Coverage',
        description: 'Schema markup is implemented on 78% of key pages.',
        impact: 'medium'
      }
    ],
    issues: [
      {
        id: 'iss-8',
        title: 'API Documentation Gaps',
        description: 'Some API endpoints lack machine-readable documentation.',
        severity: 'warning',
        affectedEntities: ['API Docs', 'Developer Resources']
      }
    ],
    recommendations: [
      {
        id: 'rec-8',
        title: 'Complete API Documentation',
        description: 'Ensure all API endpoints have OpenAPI specifications.',
        priority: 'high',
        estimatedImpact: '+12% technical score',
        actionItems: [
          'Generate OpenAPI specs for all endpoints',
          'Add interactive API documentation',
          'Implement API sandbox environment'
        ]
      }
    ],
    metrics: [
      { label: 'Technical Score', value: '74/100', change: 1, changeLabel: 'vs last audit' },
      { label: 'Structured Data Coverage', value: '78%' },
      { label: 'Page Load Speed', value: '1.2s' },
      { label: 'Mobile Compatibility', value: '96%' }
    ]
  },

  'brand-sentiment': {
    moduleId: 'brand-sentiment',
    moduleName: 'Brand Sentiment & Positioning',
    score: 89,
    status: 'excellent',
    summary: 'Positive brand sentiment with strong competitive positioning in AI-generated content.',
    insights: [
      {
        id: 'ins-12',
        title: 'Positive Sentiment Dominance',
        description: '86% of brand mentions in AI responses have positive or neutral sentiment.',
        impact: 'high'
      },
      {
        id: 'ins-13',
        title: 'Strong Innovation Association',
        description: 'Your brand is frequently mentioned in innovation and leadership contexts.',
        impact: 'high'
      }
    ],
    issues: [
      {
        id: 'iss-9',
        title: 'Occasional Competitor Favoritism',
        description: 'In direct comparisons, competitors are favored 23% of the time.',
        severity: 'info',
        affectedEntities: ['Competitive Comparisons']
      }
    ],
    recommendations: [
      {
        id: 'rec-9',
        title: 'Strengthen Competitive Narrative',
        description: 'Develop content that clearly articulates your competitive advantages.',
        priority: 'medium',
        estimatedImpact: '+5% positive sentiment',
        actionItems: [
          'Create competitive differentiation content',
          'Publish case studies with measurable results',
          'Highlight unique value propositions'
        ]
      }
    ],
    metrics: [
      { label: 'Sentiment Score', value: '89/100', change: 4, changeLabel: 'vs last audit' },
      { label: 'Positive Mentions', value: '86%' },
      { label: 'Competitive Position', value: '2nd in category' },
      { label: 'Brand Association Strength', value: '82%' }
    ]
  }
};