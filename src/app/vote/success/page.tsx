'use client'

import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useElectionStore } from '@/store/electionStore'

const VoteSuccessPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'osis'
  const { status } = useElectionStore()

  useEffect(() => {
    // Auto redirect after 3 seconds
    const timer = setTimeout(() => {
      // If all votes are completed, redirect to complete page
      if (status === 'VOTED_ALL') {
        router.push('/vote/complete')
      } else {
        router.push('/vote')
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [router, status])

  const handleContinue = () => {
    // If all votes are completed, redirect to complete page
    if (status === 'VOTED_ALL') {
      router.push('/vote/complete')
    } else {
      router.push('/vote')
    }
  }

  const getTitle = () => {
    if (type === 'osis') return 'Vote OSIS Berhasil!'
    if (type === 'pramuka') return 'Vote Pramuka Berhasil!'
    return 'Vote Berhasil!'
  }

  const getDescription = () => {
    if (type === 'osis') {
      if (status === 'VOTED_ALL') {
        return 'Terima kasih telah memilih Ketua OSIS. Anda telah menyelesaikan semua pemilihan.'
      }
      return 'Terima kasih telah memilih Ketua OSIS. Anda akan diarahkan ke halaman pemilihan untuk melanjutkan memilih Pengurus Pramuka.'
    }
    if (type === 'pramuka') {
      return 'Terima kasih telah memilih Pengurus Pramuka. Anda telah menyelesaikan semua pemilihan.'
    }
    return 'Terima kasih telah berpartisipasi dalam pemilihan.'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative bg-primary rounded-full p-6 shadow-lg">
              <CheckCircle2 className="w-16 h-16 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            {getTitle()}
          </h1>
          <p className="text-muted-foreground text-lg">
            {getDescription()}
          </p>
        </div>

        {/* Auto redirect info */}
        <div className="text-sm text-muted-foreground">
          {status === 'VOTED_ALL' 
            ? 'Mengarahkan ke halaman selesai dalam 3 detik...'
            : 'Mengarahkan ke halaman pemilihan dalam 3 detik...'}
        </div>

        {/* Continue Button */}
        <Button
          onClick={handleContinue}
          size="lg"
          className={cn(
            "px-8 py-6 text-base font-semibold min-w-[200px]",
            "bg-gradient-to-r from-blue-500 to-blue-600",
            "hover:shadow-lg hover:shadow-primary/50 transition-all duration-300",
            "hover:scale-105"
          )}
        >
          Lanjutkan
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default VoteSuccessPage

