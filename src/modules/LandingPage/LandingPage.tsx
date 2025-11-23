'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComingSoon } from '@/components/ComingSoon'
import useLandingPage from './LandingPage.hook'
import useComingSoon from '@/components/ComingSoon/ComingSoon.hook'

const LandingPage = () => {
  const { countdown } = useLandingPage()
  const loginComingSoon = useComingSoon()
  const kandidatComingSoon = useComingSoon()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Vota Sabilurrosyad
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Web pemilu raya siswa untuk memilih pemimpin yang tepat bagi masa depan Sabilurrosyad.
            Suarakan pilihanmu dan wujudkan perubahan yang lebih baik.
          </p>

          {/* Countdown Timer */}
          <div className="mt-12 mb-8">
            <p className="text-sm md:text-base text-gray-500 mb-6">
              Pemilihan dimulai pada:
            </p>
            <p className="text-base md:text-lg font-semibold text-gray-700 mb-4">
              15 Desember 2025, 08:00 WIB
            </p>
            <div className="flex justify-center gap-4 md:gap-6">
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 md:p-6 min-w-[80px] md:min-w-[100px] border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {String(countdown.days).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-2">Hari</div>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 md:p-6 min-w-[80px] md:min-w-[100px] border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {String(countdown.hours).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-2">Jam</div>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 md:p-6 min-w-[80px] md:min-w-[100px] border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {String(countdown.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-2">Menit</div>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 md:p-6 min-w-[80px] md:min-w-[100px] border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {String(countdown.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-2">Detik</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              className="px-8 py-6 text-base md:text-lg font-semibold"
              onClick={loginComingSoon.openDialog}
            >
              Mulai / Login
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-6 text-base md:text-lg font-semibold"
              onClick={kandidatComingSoon.openDialog}
            >
              Kenali Kandidat
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
    </div>
  )
}

export default LandingPage