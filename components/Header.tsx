'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              Professional Company
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Case Studies
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Team
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Testimonials
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="btn-primary">
              Get Started
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/case-studies" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                href="#team" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="#testimonials" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}