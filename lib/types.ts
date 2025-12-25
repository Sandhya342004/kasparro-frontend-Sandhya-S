// ============================================
// BRAND TYPES
// ============================================

export interface Brand {
  id: string;
  name: string;
  domain: string;
  industry: string;
  lastAuditDate: string;
}

// ============================================
// AUDIT MODULE TYPES
// ============================================

export interface AuditModule {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'visibility' | 'trust' | 'content' | 'technical';
  color: string;
}

// ============================================
// AUDIT RESULT TYPES (JSON-driven detail view)
// ============================================

export interface AuditResult {
  moduleId: string;
  moduleName: string;
  score: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  summary: string;
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
  metrics: Metric[];
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  severity: 'critical' | 'warning' | 'info';
  affectedEntities: string[];
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  estimatedImpact: string;
  actionItems: string[];
}

export interface Metric {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
}

// ============================================
// DASHBOARD SNAPSHOT TYPES
// ============================================

export interface DashboardSnapshot {
  brandId: string;
  visibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
  totalKeywords: number;
  coveredKeywords: number;
  lastAudit: string;
  trends: {
    visibility: number;
    trust: number;
    keywords: number;
  };
}

// ============================================
// PIPELINE ARCHITECTURE TYPES
// ============================================

export interface PipelineStage {
  id: string;
  name: string;
  description: string;
  components: string[];
}

// ============================================
// HELPER TYPES
// ============================================

export type ScoreStatus = 'excellent' | 'good' | 'warning' | 'critical';
export type Priority = 'high' | 'medium' | 'low';
export type Severity = 'critical' | 'warning' | 'info';