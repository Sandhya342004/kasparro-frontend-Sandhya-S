import Link from 'next/link';
import { Home, LayoutDashboard, Search, Network } from 'lucide-react';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Kasparro
            </Link>
            
            <div className="flex items-center gap-6">
              <NavLink href="/app/dashboard" icon={<LayoutDashboard className="w-4 h-4" />}>
                Dashboard
              </NavLink>
              <NavLink href="/app/audit" icon={<Search className="w-4 h-4" />}>
                Audit
              </NavLink>
              <NavLink href="/app/architecture" icon={<Network className="w-4 h-4" />}>
                Architecture
              </NavLink>
              <Link 
                href="/" 
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {children}
    </div>
  );
}

function NavLink({ 
  href, 
  icon, 
  children 
}: { 
  href: string; 
  icon: React.ReactNode; 
  children: React.ReactNode;
}) {
  return (
    <Link 
      href={href}
      className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
    >
      {icon}
      {children}
    </Link>
  );
}