import { AuditModule } from '../types';

export const AUDIT_MODULES: AuditModule[] = [
  {
    id: 'ai-visibility',
    name: 'AI Visibility',
    description: 'Measures how frequently and prominently your brand appears in AI-generated responses across different platforms and query types.',
    icon: 'Eye',
    category: 'visibility',
    color: 'blue'
  },
  {
    id: 'eeat-trust',
    name: 'E-E-A-T & Trust Signals',
    description: 'Evaluates Experience, Expertise, Authoritativeness, and Trustworthiness signals that influence AI model confidence in your brand.',
    icon: 'Shield',
    category: 'trust',
    color: 'green'
  },
  {
    id: 'content-intelligence',
    name: 'Content Intelligence',
    description: 'Analyzes content quality, relevance, and semantic alignment with AI understanding and user intent patterns.',
    icon: 'FileText',
    category: 'content',
    color: 'purple'
  },
  {
    id: 'entity-coverage',
    name: 'Entity Coverage',
    description: 'Maps your brand entities, relationships, and knowledge graph presence across AI training data and real-time sources.',
    icon: 'Network',
    category: 'content',
    color: 'orange'
  },
  {
    id: 'citation-analysis',
    name: 'Citation & Source Analysis',
    description: 'Tracks when and how AI models cite your content, including attribution accuracy and source authority metrics.',
    icon: 'Link',
    category: 'visibility',
    color: 'cyan'
  },
  {
    id: 'technical-signals',
    name: 'Technical Signals',
    description: 'Monitors technical factors like structured data, API accessibility, and machine-readable content that AI systems rely on.',
    icon: 'Code',
    category: 'technical',
    color: 'gray'
  },
  {
    id: 'brand-sentiment',
    name: 'Brand Sentiment & Positioning',
    description: 'Assesses how AI models perceive and describe your brand, including sentiment, context, and competitive positioning.',
    icon: 'TrendingUp',
    category: 'visibility',
    color: 'pink'
  }
];