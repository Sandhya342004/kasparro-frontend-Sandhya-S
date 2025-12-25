import { Brand, DashboardSnapshot } from '../types';

export const BRANDS: Brand[] = [
  {
    id: 'brand-1',
    name: 'Acme Corporation',
    domain: 'acmecorp.com',
    industry: 'Technology',
    lastAuditDate: '2024-12-20T10:30:00Z'
  },
  {
    id: 'brand-2',
    name: 'TechStart Inc',
    domain: 'techstart.io',
    industry: 'SaaS',
    lastAuditDate: '2024-12-18T14:20:00Z'
  },
  {
    id: 'brand-3',
    name: 'Global Solutions',
    domain: 'globalsolutions.com',
    industry: 'Consulting',
    lastAuditDate: '2024-12-15T09:15:00Z'
  }
];

export const DASHBOARD_DATA: DashboardSnapshot = {
  brandId: 'brand-1',
  visibilityScore: 87,
  trustScore: 92,
  keywordCoverage: 67,
  totalKeywords: 234,
  coveredKeywords: 157,
  lastAudit: '2024-12-20T10:30:00Z',
  trends: {
    visibility: 5,
    trust: 3,
    keywords: 8
  }
};