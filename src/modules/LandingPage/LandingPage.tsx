'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComingSoon } from '@/components/ComingSoon'
import useLandingPage from './LandingPage.hook'
import useComingSoon from '@/components/ComingSoon/ComingSoon.hook'
import {
    Vote,
    Users,
    Clock,
    CheckCircle2,
    ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const LandingPage = () => {
    const { countdown, handleLogin } = useLandingPage()
    const kandidatComingSoon = useComingSoon()

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
                <div className="max-w-5xl w-full text-center space-y-12 md:space-y-16">
                    {/* Title & Description */}
                    <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight relative group">
                            <span className="relative inline-block">
                                Vota Sabilurrosyad
                                {/* Shine effect on hover */}
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] group-hover:transition-transform group-hover:duration-1000" />
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Pemilu Raya Siswa buat nentuin siapa pemimpin masa depan Sabilurrosyad.
                        </p>
                        <p className="text-base sm:text-lg text-primary font-medium animate-pulse">
                            Klik, pilih, berpengaruh — sesimpel itu.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
                            {['#VotaSabilurrosyad', '#PRS2025', '#GenerasiSBR', '#SuaraKitaMasaDepan'].map((tag) => (
                                <span
                                    key={tag}
                                    className={cn(
                                        "text-sm sm:text-base text-gray-500 font-medium px-3 py-1 rounded-full",
                                        "bg-white/80 backdrop-blur-sm border border-gray-200/50",
                                        "transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-primary/30",
                                        "cursor-default"
                                    )}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="mt-16 space-y-6">
                        <div className="flex items-center justify-center gap-2 text-gray-600 group">
                            <Clock className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
                            <span className="text-sm font-medium">Pemilihan dimulai pada</span>
                        </div>
                        <p className="text-lg font-semibold text-gray-900">
                            15 Desember 2025, 08:00 WIB
                        </p>
                        <div className="flex justify-center gap-3 sm:gap-4">
                            {[
                                { value: countdown.days, label: 'Hari' },
                                { value: countdown.hours, label: 'Jam' },
                                { value: countdown.minutes, label: 'Menit' },
                                { value: countdown.seconds, label: 'Detik', isPulsing: true }
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className={cn(
                                        "group relative flex flex-col items-center bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6",
                                        "min-w-[70px] sm:min-w-[80px] md:min-w-[100px] border border-gray-200",
                                        "transition-all duration-500 hover:scale-110 hover:-rotate-1 hover:shadow-xl",
                                        "hover:border-primary/30 overflow-hidden",
                                        item.isPulsing && "animate-pulse"
                                    )}
                                >
                                    {/* Shine effect on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] group-hover:transition-transform group-hover:duration-1000" />
                                    
                                    {/* Background glow effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5 rounded-lg" />
                                    
                                    <div className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                                        {String(item.value).padStart(2, '0')}
                                    </div>
                                    <div className="relative z-10 text-xs sm:text-sm text-gray-500 mt-2">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                        <div className="relative group">
                            <Button
                                size="lg"
                                className={cn(
                                    "px-8 py-6 text-base font-semibold min-w-[200px] relative overflow-hidden",
                                    "transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                )}
                                onClick={handleLogin}
                            >
                                {/* Shine effect */}
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] group-hover:transition-transform group-hover:duration-1000" />
                                
                                <Vote className="w-4 h-4 mr-2 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                                <span className="relative z-10">Mulai / Login</span>
                                <ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </div>
                        
                        <div className="relative group">
                            <Button
                                size="lg"
                                variant="outline"
                                className={cn(
                                    "px-8 py-6 text-base font-semibold min-w-[200px] relative overflow-hidden",
                                    "border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg",
                                    "hover:border-primary/50 hover:bg-primary/5"
                                )}
                                onClick={kandidatComingSoon.openDialog}
                            >
                                {/* Shine effect */}
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] group-hover:transition-transform group-hover:duration-1000" />
                                
                                <Users className="w-4 h-4 mr-2 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                                <span className="relative z-10">Kenali Kandidat</span>
                                <ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-12 pt-8 border-t border-gray-200">
                        {[
                            { icon: CheckCircle2, text: '100% Digital' },
                            { icon: CheckCircle2, text: 'Aman & Terpercaya' },
                            { icon: CheckCircle2, text: 'Hasil Real-time' }
                        ].map((item) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={item.text}
                                    className={cn(
                                        "group flex items-center gap-2 text-gray-600",
                                        "px-4 py-2 rounded-lg transition-all duration-300",
                                        "hover:bg-white hover:shadow-md hover:scale-105",
                                        "cursor-default"
                                    )}
                                >
                                    <Icon className="w-4 h-4 text-green-500 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                                    <span className="text-sm font-medium">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
            <ComingSoon
                open={kandidatComingSoon.isOpen}
                onOpenChange={kandidatComingSoon.setIsOpen}
                title="Fitur Kenali Kandidat Sedang Dalam Pengembangan"
                description="Fitur untuk melihat profil kandidat sedang dalam tahap pengembangan. Kami akan segera meluncurkannya dalam waktu dekat. Terima kasih atas kesabaran Anda!"
            />
        </div>
    )
}

export default LandingPage