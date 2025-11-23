'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={`bg-white border-b border-gray-200 ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Vota SBR
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              Beranda
            </Link>
            <Link 
              href="/kandidat" 
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              Kenali Kandidat
            </Link>
            <Link 
              href="/tentang" 
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              Tentang
            </Link>
            <Button 
              size="sm"
              className="ml-4"
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              size="sm"
              variant="ghost"
              className="text-gray-700"
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar