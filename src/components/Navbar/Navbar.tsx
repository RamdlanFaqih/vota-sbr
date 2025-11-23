'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ComingSoon } from '@/components/ComingSoon'
import useComingSoon from '@/components/ComingSoon/ComingSoon.hook'
import Link from 'next/link'
import { Vote } from 'lucide-react'

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const loginComingSoon = useComingSoon()
    const kandidatComingSoon = useComingSoon()
    const tentangComingSoon = useComingSoon()

    return (
        <>
            <nav className={`bg-white border-b border-gray-200 ${className || ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
                            <div className="relative bg-primary p-1.5 sm:p-2 md:p-2.5 rounded-md shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <Vote className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                            </div>
                            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
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
                            <button
                                onClick={kandidatComingSoon.openDialog}
                                className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                            >
                                Kenali Kandidat
                            </button>
                            <button
                                onClick={tentangComingSoon.openDialog}
                                className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                            >
                                Tentang
                            </button>
                            <Button
                                size="sm"
                                className="ml-4"
                                onClick={loginComingSoon.openDialog}
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
                                onClick={loginComingSoon.openDialog}
                            >
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Coming Soon Dialogs */}
            <ComingSoon
                open={loginComingSoon.isOpen}
                onOpenChange={loginComingSoon.setIsOpen}
                title="Fitur Login Sedang Dalam Pengembangan"
                description="Fitur login sedang dalam tahap pengembangan. Kami akan segera meluncurkannya dalam waktu dekat. Terima kasih atas kesabaran Anda!"
            />
            <ComingSoon
                open={kandidatComingSoon.isOpen}
                onOpenChange={kandidatComingSoon.setIsOpen}
                title="Fitur Kenali Kandidat Sedang Dalam Pengembangan"
                description="Fitur untuk melihat profil kandidat sedang dalam tahap pengembangan. Kami akan segera meluncurkannya dalam waktu dekat. Terima kasih atas kesabaran Anda!"
            />
            <ComingSoon
                open={tentangComingSoon.isOpen}
                onOpenChange={tentangComingSoon.setIsOpen}
                title="Fitur Tentang Sedang Dalam Pengembangan"
                description="Halaman tentang sedang dalam tahap pengembangan. Kami akan segera meluncurkannya dalam waktu dekat. Terima kasih atas kesabaran Anda!"
            />
        </>
    )
}

export default Navbar