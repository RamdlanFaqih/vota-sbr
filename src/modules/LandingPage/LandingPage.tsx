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

const LandingPage = () => {
    const { countdown, handleLogin } = useLandingPage()
    const kandidatComingSoon = useComingSoon()

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="max-w-5xl w-full text-center space-y-12 md:space-y-16">
                    {/* Title & Description */}
                    <div className="space-y-4 md:space-y-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                            Vota Sabilurrosyad
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Pemilu Raya Siswa buat nentuin siapa pemimpin masa depan Sabilurrosyad.
                        </p>
                        <p className="text-base sm:text-lg text-primary font-medium">
                            Klik, pilih, berpengaruh — sesimpel itu.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
                            <span className="text-sm sm:text-base text-gray-500 font-medium">
                                #VotaSabilurrosyad
                            </span>
                            <span className="text-sm sm:text-base text-gray-500 font-medium">
                                #PRS2025
                            </span>
                            <span className="text-sm sm:text-base text-gray-500 font-medium">
                                #GenerasiSBR
                            </span>
                            <span className="text-sm sm:text-base text-gray-500 font-medium">
                                #SuaraKitaMasaDepan
                            </span>
                        </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="mt-16 space-y-6">
                        <div className="flex items-center justify-center gap-2 text-gray-600">
                            <Clock className="w-5 h-5" />
                            <span className="text-sm font-medium">Pemilihan dimulai pada</span>
                        </div>
                        <p className="text-lg font-semibold text-gray-900">
                            15 Desember 2025, 08:00 WIB
                        </p>
                        <div className="flex justify-center gap-3 sm:gap-4">
                            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 min-w-[70px] sm:min-w-[80px] md:min-w-[100px] border border-gray-200">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                                    {String(countdown.days).padStart(2, '0')}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500 mt-2">Hari</div>
                            </div>
                            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 min-w-[70px] sm:min-w-[80px] md:min-w-[100px] border border-gray-200">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                                    {String(countdown.hours).padStart(2, '0')}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500 mt-2">Jam</div>
                            </div>
                            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 min-w-[70px] sm:min-w-[80px] md:min-w-[100px] border border-gray-200">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                                    {String(countdown.minutes).padStart(2, '0')}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500 mt-2">Menit</div>
                            </div>
                            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 min-w-[70px] sm:min-w-[80px] md:min-w-[100px] border border-gray-200 animate-pulse">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                                    {String(countdown.seconds).padStart(2, '0')}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500 mt-2">Detik</div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                        <Button
                            size="lg"
                            className="px-8 py-6 text-base font-semibold min-w-[200px] group"
                            onClick={handleLogin}
                        >
                            <Vote className="w-4 h-4 mr-2" />
                            Mulai / Login
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="px-8 py-6 text-base font-semibold min-w-[200px] group border-gray-300"
                            onClick={kandidatComingSoon.openDialog}
                        >
                            <Users className="w-4 h-4 mr-2" />
                            Kenali Kandidat
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-12 pt-8 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium">100% Digital</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium">Aman & Terpercaya</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium">Hasil Real-time</span>
                        </div>
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