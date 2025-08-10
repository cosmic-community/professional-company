import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Company
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-primary-600 transition-colors">
              Team
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#case-studies" className="text-gray-700 hover:text-primary-600 transition-colors">
              Case Studies
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}