'use client'

import React from 'react'
import useVoteSelect from './VoteSelect.hook'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Users, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

const VoteSelect = () => {
  const { 
    hasVotedOsis, 
    hasVotedPramuka, 
    isAllVoted, 
    handleVoteOsis, 
    handleVotePramuka 
  } = useVoteSelect()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Pilih Kandidat Pilihanmu
          </h1>
          <p className="text-muted-foreground text-lg">
            Pilih Ketua OSIS dan Pengurus Pramuka untuk periode ini
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Ketua OSIS Card */}
          <VoteCard
            title="Ketua OSIS"
            description="Pilih kandidat Ketua OSIS yang akan memimpin organisasi siswa"
            icon={<Users className="w-12 h-12" />}
            gradientFrom="from-blue-500"
            gradientTo="to-blue-600"
            isDisabled={hasVotedOsis || isAllVoted}
            isVoted={hasVotedOsis}
            onClick={handleVoteOsis}
          />

          {/* Pengurus Pramuka Card */}
          <VoteCard
            title="Pengurus Pramuka"
            description="Pilih kandidat Pengurus Pramuka yang akan mengelola kegiatan kepramukaan"
            icon={<Award className="w-12 h-12" />}
            gradientFrom="from-amber-700"
            gradientTo="to-amber-800"
            isDisabled={hasVotedPramuka || isAllVoted}
            isVoted={hasVotedPramuka}
            onClick={handleVotePramuka}
          />
        </div>

        {/* Status Info */}
        {isAllVoted && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Anda telah menyelesaikan semua pemilihan</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface VoteCardProps {
  title: string
  description: string
  icon: React.ReactNode
  gradientFrom: string
  gradientTo: string
  isDisabled: boolean
  isVoted: boolean
  onClick: () => void
}

const VoteCard: React.FC<VoteCardProps> = ({
  title,
  description,
  icon,
  gradientFrom,
  gradientTo,
  isDisabled,
  isVoted,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "group relative h-full transition-all duration-500",
        !isDisabled && "hover:scale-105 hover:-rotate-1",
        isDisabled && "opacity-75"
      )}
    >
      <Card
        className={cn(
          "relative h-full overflow-hidden border-2 transition-all duration-500",
          "bg-gradient-to-br from-card to-card/95",
          !isDisabled && "hover:shadow-2xl hover:shadow-primary/20 cursor-pointer",
          isDisabled && "cursor-not-allowed",
          isVoted && "border-primary/50"
        )}
      >
        {/* Gradient Background Effect */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500",
            `bg-gradient-to-br ${gradientFrom} ${gradientTo}`,
            !isDisabled && "group-hover:opacity-10"
          )}
        />

        {/* Icon with rotation effect */}
        <div
          className={cn(
            "absolute -top-8 -right-8 w-32 h-32 rounded-full transition-transform duration-700",
            `bg-gradient-to-br ${gradientFrom} ${gradientTo}`,
            "opacity-20",
            !isDisabled && "group-hover:rotate-180 group-hover:scale-110"
          )}
        />

        <CardHeader className="relative z-10 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div
              className={cn(
                "p-4 rounded-2xl transition-all duration-500",
                `bg-gradient-to-br ${gradientFrom} ${gradientTo}`,
                "text-white shadow-lg",
                !isDisabled && "group-hover:scale-110 group-hover:rotate-6"
              )}
            >
              {icon}
            </div>
            {isVoted && (
              <div className="flex items-center gap-1 text-primary">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">Sudah Memilih</span>
              </div>
            )}
          </div>
          <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>

        <CardContent className="relative z-10 pt-0">
          <Button
            onClick={onClick}
            disabled={isDisabled}
            size="lg"
            className={cn(
              "w-full text-base font-semibold transition-all duration-300",
              `bg-gradient-to-r ${gradientFrom} ${gradientTo}`,
              "hover:shadow-lg hover:shadow-primary/50",
              !isDisabled && "hover:scale-105",
              isDisabled && "opacity-50"
            )}
          >
            {isVoted ? 'Sudah Memilih' : 'Pilih'}
          </Button>
        </CardContent>

        {/* Shine effect on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none",
            "bg-gradient-to-r from-transparent via-white/20 to-transparent",
            "transform -skew-x-12 translate-x-[-200%]",
            !isDisabled && "group-hover:opacity-100 group-hover:translate-x-[200%] group-hover:transition-transform group-hover:duration-1000"
          )}
        />
      </Card>
    </div>
  )
}

export default VoteSelect