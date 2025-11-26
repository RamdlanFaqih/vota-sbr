import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useElectionStore } from '@/store/electionStore'

export type Gender = 'L' | 'P'
export type Position = 'Pradana' | 'Kerani' | 'Juang' | 'Pangdat'

export interface PramukaVote {
  position: Position
  gender: Gender
  candidateId: string
}

const GENDERS: Gender[] = ['L', 'P']

const useVotePramuka = () => {
  const router = useRouter()
  const { votePramuka } = useElectionStore()
  // votes structure: { candidateId: position } untuk setiap gender
  const [votes, setVotes] = useState<Record<string, Record<string, Position | null>>>({
    L: {},
    P: {},
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Get all selected positions for a gender
  const getSelectedPositions = (gender: Gender) => {
    return Object.values(votes[gender]).filter((pos): pos is Position => pos !== null)
  }

  // Get position for a candidate
  const getCandidatePosition = (candidateId: string, gender: Gender): Position | null => {
    return votes[gender][candidateId] || null
  }

  // Check if a position is available for selection (not selected by another candidate of same gender)
  const isPositionAvailable = (position: Position, gender: Gender, currentCandidateId: string) => {
    // Position is always available for the current candidate
    if (votes[gender][currentCandidateId] === position) return true
    
    // Check if position is selected by any other candidate of the same gender
    return !getSelectedPositions(gender).includes(position)
  }

  // Handle position selection for a candidate
  const handleSelectPosition = (candidateId: string, gender: Gender, position: Position | null) => {
    setVotes((prev) => {
      const newVotes = { ...prev }
      
      // If selecting a position that's already selected by another candidate, clear that candidate first
      if (position) {
        Object.keys(newVotes[gender]).forEach((cid) => {
          if (cid !== candidateId && newVotes[gender][cid] === position) {
            newVotes[gender][cid] = null
          }
        })
      }
      
      // Set the new selection
      newVotes[gender] = {
        ...newVotes[gender],
        [candidateId]: position,
      }
      
      return newVotes
    })
    setError(null) // Clear error when user makes a selection
  }

  // Get total votes count
  const totalVotes = useMemo(() => {
    const lPositions = Object.values(votes.L).filter((pos): pos is Position => pos !== null)
    const pPositions = Object.values(votes.P).filter((pos): pos is Position => pos !== null)
    return lPositions.length + pPositions.length
  }, [votes])

  // Handle submit vote
  const handleSubmitVote = async () => {
    setIsSubmitting(true)
    setError(null)

    try {
      // Convert votes to pramuka object format
      const pramukaVotes: PramukaVote[] = []
      
      GENDERS.forEach((gender) => {
        Object.entries(votes[gender]).forEach(([candidateId, position]) => {
          if (position) {
            pramukaVotes.push({
              position,
              gender,
              candidateId,
            })
          }
        })
      })

      // TODO: Save pramukaVotes to Firestore userVotes collection
      console.log('Pramuka votes to save:', pramukaVotes)

      // Simulate API call - will be replaced with Firestore
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate 10% failure rate for testing
          if (Math.random() < 0.1) {
            reject(new Error('Gagal menyimpan data. Silakan coba lagi.'))
          } else {
            resolve(true)
          }
        }, 1000)
      })

      // Update store
      votePramuka()

      // Redirect to success page
      router.push('/vote/success?type=pramuka')
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan saat menyimpan data.'
      setError(errorMessage)
      setIsSubmitting(false)
    }
  }

  // Check if can submit (at least one vote selected)
  const canSubmit = totalVotes > 0

  return {
    votes,
    totalVotes,
    isSubmitting,
    error,
    canSubmit,
    getCandidatePosition,
    isPositionAvailable,
    handleSelectPosition,
    handleSubmitVote,
  }
}

export default useVotePramuka