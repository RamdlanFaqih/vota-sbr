'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import useVotePramuka, { Gender, Position } from './VotePramuka.hook'

// Dummy data - will be replaced with Firestore data
const CANDIDATES_PUTRA = [
  { id: 'L1', name: 'Ahmad Fauzi', gender: 'L' as Gender, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad' },
  { id: 'L2', name: 'Budi Santoso', gender: 'L' as Gender, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi' },
  { id: 'L3', name: 'Cahyo Pratama', gender: 'L' as Gender, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cahyo' },
  { id: 'L4', name: 'Dedi Kurniawan', gender: 'L' as Gender, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dedi' },
]

const CANDIDATES_PUTRI = [
  { id: 'P1', name: 'Siti Nurhaliza', gender: 'P' as Gender, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti' },
  { id: 'P2', name: 'Rina Wati', gender: 'P' as Gender, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rina' },
  { id: 'P3', name: 'Maya Sari', gender: 'P' as Gender, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya' },
  { id: 'P4', name: 'Dewi Lestari', gender: 'P' as Gender, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dewi' },
]

const POSITIONS = ['Pradana', 'Kerani', 'Juang', 'Pangdat'] as const

const VotePramuka = () => {
  const {
    totalVotes,
    isSubmitting,
    error,
    canSubmit,
    getCandidatePosition,
    isPositionAvailable,
    handleSelectPosition,
    handleSubmitVote,
  } = useVotePramuka()

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
              Pilih Pengurus Pramuka
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pilih kandidat untuk setiap posisi. Setiap kandidat hanya dapat dipilih untuk satu posisi.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="flex items-center gap-2 text-destructive">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">{error}</span>
              </div>
            </div>
          )}

          {/* Pengurus Putra Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pengurus Putra</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CANDIDATES_PUTRA.map((candidate) => {
                const selectedPosition = getCandidatePosition(candidate.id, 'L')
                return (
                  <Card
                    key={candidate.id}
                    className={cn(
                      "relative border transition-all duration-300",
                      "bg-white border-gray-200 shadow-md",
                      selectedPosition && "border-primary shadow-lg shadow-primary/20 bg-primary/5"
                    )}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex flex-col items-center">
                        {/* Photo */}
                        <div
                          className={cn(
                            "relative w-32 h-32 rounded-full overflow-hidden mb-4",
                            "border-4 transition-all duration-300 shadow-lg",
                            selectedPosition
                              ? "border-primary shadow-primary/50 scale-105 ring-4 ring-primary/20"
                              : "border-gray-200"
                          )}
                        >
                          <img
                            src={candidate.photo}
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Name */}
                        <CardTitle className="text-xl font-bold text-center text-gray-900">
                          {candidate.name}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Position Select Dropdown */}
                      <div className="space-y-2">
                        <Label htmlFor={`position-${candidate.id}`} className="text-sm font-medium text-gray-700">
                          Pilih Jabatan
                        </Label>
                        <Select
                          id={`position-${candidate.id}`}
                          value={selectedPosition || ''}
                          onChange={(e) => {
                            const value = e.target.value
                            handleSelectPosition(candidate.id, 'L', (value ? value as Position : null))
                          }}
                          className="w-full"
                        >
                          <option value="">-- Pilih Jabatan --</option>
                          {POSITIONS.map((position) => {
                            const isAvailable = isPositionAvailable(position, 'L', candidate.id)
                            return (
                              <option
                                key={position}
                                value={position}
                                disabled={!isAvailable}
                              >
                                {position}
                                {!isAvailable && selectedPosition !== position && ' (Sudah dipilih)'}
                              </option>
                            )
                          })}
                        </Select>
                      </div>

                      {/* Selected Position Info */}
                      {selectedPosition && (
                        <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-md">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">
                            {selectedPosition}
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Pengurus Putri Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pengurus Putri</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CANDIDATES_PUTRI.map((candidate) => {
                const selectedPosition = getCandidatePosition(candidate.id, 'P')
                return (
                  <Card
                    key={candidate.id}
                    className={cn(
                      "relative border transition-all duration-300",
                      "bg-white border-gray-200 shadow-md",
                      selectedPosition && "border-primary shadow-lg shadow-primary/20 bg-primary/5"
                    )}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex flex-col items-center">
                        {/* Photo */}
                        <div
                          className={cn(
                            "relative w-32 h-32 rounded-full overflow-hidden mb-4",
                            "border-4 transition-all duration-300 shadow-lg",
                            selectedPosition
                              ? "border-primary shadow-primary/50 scale-105 ring-4 ring-primary/20"
                              : "border-gray-200"
                          )}
                        >
                          <img
                            src={candidate.photo}
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Name */}
                        <CardTitle className="text-xl font-bold text-center text-gray-900">
                          {candidate.name}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Position Select Dropdown */}
                      <div className="space-y-2">
                        <Label htmlFor={`position-${candidate.id}`} className="text-sm font-medium text-gray-700">
                          Pilih Jabatan
                        </Label>
                        <Select
                          id={`position-${candidate.id}`}
                          value={selectedPosition || ''}
                          onChange={(e) => {
                            const value = e.target.value
                            handleSelectPosition(candidate.id, 'P', (value ? value as Position : null))
                          }}
                          className="w-full"
                        >
                          <option value="">-- Pilih Jabatan --</option>
                          {POSITIONS.map((position) => {
                            const isAvailable = isPositionAvailable(position, 'P', candidate.id)
                            return (
                              <option
                                key={position}
                                value={position}
                                disabled={!isAvailable}
                              >
                                {position}
                                {!isAvailable && selectedPosition !== position && ' (Sudah dipilih)'}
                              </option>
                            )
                          })}
                        </Select>
                      </div>

                      {/* Selected Position Info */}
                      {selectedPosition && (
                        <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-md">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">
                            {selectedPosition}
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={handleSubmitVote}
              disabled={!canSubmit || isSubmitting}
              size="lg"
              className={cn(
                "px-12 py-6 text-base font-semibold min-w-[240px]",
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "hover:shadow-lg hover:shadow-primary/50 transition-all duration-300",
                (!canSubmit || isSubmitting) && "opacity-50 cursor-not-allowed",
                canSubmit && !isSubmitting && "hover:scale-105"
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

            {/* Error Actions */}
            {error && (
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="border-gray-300"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Halaman
                </Button>
                <Button
                  variant="outline"
                  onClick={handleSubmitVote}
                  disabled={isSubmitting}
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Coba Lagi
                </Button>
              </div>
            )}

            {/* Info */}
            {!canSubmit && (
              <p className="text-sm text-gray-500 text-center">
                Pilih setidaknya satu kandidat untuk melanjutkan
              </p>
            )}
            {canSubmit && !error && (
              <p className="text-sm text-primary font-medium text-center">
                {totalVotes} jabatan telah dipilih
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VotePramuka