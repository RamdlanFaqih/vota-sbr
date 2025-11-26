'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Home, Users, Award } from 'lucide-react'
import { cn } from '@/lib/utils'
import useComplete from './Complete.hook'

const Complete = () => {
  const { hasVotedOsis, hasVotedPramuka, handleBackToHome } = useComplete()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-2xl w-full text-center space-y-12">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative bg-primary rounded-full p-8 shadow-lg">
                <CheckCircle2 className="w-20 h-20 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Pemilihan Selesai!
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
              Terima kasih telah berpartisipasi dalam pemilihan. Suara Anda telah tercatat dan akan diperhitungkan dalam hasil akhir.
            </p>
          </div>

          {/* Completed Votes Summary */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* OSIS Vote */}
            {hasVotedOsis && (
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ketua OSIS</h3>
                    <p className="text-sm text-gray-500 mt-1">Sudah memilih</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Selesai</span>
                  </div>
                </div>
              </div>
            )}

            {/* Pramuka Vote */}
            {hasVotedPramuka && (
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-amber-700/10 rounded-full">
                    <Award className="w-8 h-8 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pengurus Pramuka</h3>
                    <p className="text-sm text-gray-500 mt-1">Sudah memilih</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Selesai</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Info Message */}
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-sm text-primary font-medium">
              Hasil pemilihan akan diumumkan setelah periode voting berakhir. Terima kasih atas partisipasi Anda!
            </p>
          </div>

          {/* Back to Home Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleBackToHome}
              size="lg"
              className={cn(
                "px-8 py-6 text-base font-semibold min-w-[200px]",
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "hover:shadow-lg hover:shadow-primary/50 transition-all duration-300",
                "hover:scale-105"
              )}
            >
              <Home className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Complete


