import React from 'react'
import Link from 'next/link'

interface FooterProps {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`bg-gray-800 text-white py-8 px-4 ${className || ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-2">Vota SBR</h3>
            <p className="text-gray-400 text-sm">
              Web Pemilu Raya Siswa Sabilurrosyad
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link 
                  href="/kandidat" 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Kenali Kandidat
                </Link>
              </li>
              <li>
                <Link 
                  href="/tentang" 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Tentang
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact/Info */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Informasi</h4>
            <p className="text-gray-400 text-sm">
              Pemilu Raya Siswa Sabilurrosyad
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Vota SBR. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Dibuat dengan ❤️ oleh Ramfaq
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer