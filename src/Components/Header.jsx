import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center gap-2">
            <a href="home" className="flex items-center gap-2">
              <img
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Company Logo"
              />
              <span className="text-lg font-bold text-indigo-600">Lexi</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="home" className="text-gray-700 font-semibold hover:text-indigo-600">
              Home
            </a>
            <a href="about" className="text-gray-700 font-semibold hover:text-indigo-600">
              About
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <a href="home" className="block text-gray-700 font-semibold hover:text-indigo-600">
              Home
            </a>
            <a href="about" className="block text-gray-700 font-semibold hover:text-indigo-600">
              About
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
