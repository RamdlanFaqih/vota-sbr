'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import useVoteOsis from './VoteOsis.hook'

// Dummy data - will be replaced with Firestore data
const CANDIDATES = [
  {
    id: '1',
    name: 'Ahmad Fauzi',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad',
  },
  {
    id: '2',
    name: 'Siti Nurhaliza',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti',
  },
  {
    id: '3',
    name: 'Budi Santoso',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi',
  },
]

const VoteOsis = () => {
  const {
    selectedCandidate,
    isSubmitting,
    canSubmit,
    handleSelectCandidate,
    handleSubmitVote,
  } = useVoteOsis()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Pilih Ketua OSIS
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pilih satu kandidat yang akan menjadi Ketua OSIS periode ini
            </p>
          </div>

          {/* Candidates Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {CANDIDATES.map((candidate, index) => {
              const isSelected = selectedCandidate === candidate.id
              const candidateNumber = index + 1
              return (
                <div
                  key={candidate.id}
                  className={cn(
                    "group relative transition-all duration-300",
                    isSelected && "scale-[1.02]"
                  )}
                >
                  <Card
                    className={cn(
                      "relative h-full overflow-hidden border transition-all duration-300 cursor-pointer",
                      "bg-white border-gray-200 shadow-md",
                      "hover:shadow-xl hover:shadow-primary/20",
                      isSelected
                        ? "border-primary shadow-xl shadow-primary/30 bg-primary/5"
                        : "hover:border-primary/50"
                    )}
                    onClick={() => handleSelectCandidate(candidate.id)}
                  >
                    {/* Nomor Urut Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div
                        className={cn(
                          "flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg transition-all duration-300",
                          isSelected
                            ? "bg-primary text-primary-foreground shadow-lg scale-110"
                            : "bg-gray-100 text-gray-600 group-hover:bg-primary/20 group-hover:text-primary"
                        )}
                      >
                        {candidateNumber}
                      </div>
                    </div>

                    {/* Selected indicator */}
                    {isSelected && (
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                      </div>
                    )}

                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 z-0">
                      <div
                        className={cn(
                          "absolute inset-0 transition-opacity duration-300",
                          isSelected
                            ? "bg-gradient-to-br from-primary/10 to-primary/5 opacity-100"
                            : "bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 group-hover:opacity-50"
                        )}
                      />
                    </div>

                    <CardHeader className="relative z-10 pb-6 pt-8">
                      <div className="flex flex-col items-center">
                        {/* Photo */}
                        <div
                          className={cn(
                            "relative w-36 h-36 rounded-full overflow-hidden mb-6",
                            "border-4 transition-all duration-300 shadow-lg",
                            isSelected
                              ? "border-primary shadow-primary/50 scale-105 ring-4 ring-primary/20"
                              : "border-gray-200 group-hover:border-primary/50 group-hover:scale-105"
                          )}
                        >
                          <img
                            src={candidate.photo}
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                          {/* Shine effect */}
                          <div
                            className={cn(
                              "absolute inset-0 opacity-0 transition-opacity duration-500",
                              "bg-gradient-to-r from-transparent via-white/30 to-transparent",
                              "transform -skew-x-12 translate-x-[-200%]",
                              "group-hover:opacity-100 group-hover:translate-x-[200%] group-hover:transition-transform group-hover:duration-1000"
                            )}
                          />
                        </div>

                        {/* Name */}
                        <CardTitle className="text-2xl font-bold text-center mb-2 text-gray-900">
                          {candidate.name}
                        </CardTitle>
                        <p className="text-sm text-gray-500 text-center">
                          Kandidat No. {candidateNumber}
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 pt-0 pb-6">
                      {/* Radio button visual */}
                      <div className="flex flex-col items-center gap-3">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center",
                            isSelected
                              ? "border-primary bg-primary shadow-lg"
                              : "border-gray-300 group-hover:border-primary/50"
                          )}
                        >
                          {isSelected && (
                            <div className="w-4 h-4 rounded-full bg-white" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-sm font-medium transition-colors duration-300",
                            isSelected
                              ? "text-primary"
                              : "text-gray-600"
                          )}
                        >
                          {isSelected ? 'Terpilih' : 'Klik untuk memilih'}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={handleSubmitVote}
              disabled={!canSubmit}
              size="lg"
              className={cn(
                "px-12 py-6 text-base font-semibold min-w-[240px]",
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "hover:shadow-lg hover:shadow-primary/50 transition-all duration-300",
                !canSubmit && "opacity-50 cursor-not-allowed",
                canSubmit && "hover:scale-105"
              )}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Mengirim...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Submit Vote
                </>
              )}
            </Button>

            {/* Info */}
            {!selectedCandidate && (
              <p className="text-sm text-gray-500 text-center">
                Pilih salah satu kandidat di atas untuk melanjutkan
              </p>
            )}
            {selectedCandidate && (
              <p className="text-sm text-primary font-medium text-center">
                Anda telah memilih kandidat, klik tombol di atas untuk mengirim suara
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoteOsis