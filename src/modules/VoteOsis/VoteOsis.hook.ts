import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useElectionStore } from '@/store/electionStore'

const useVoteOsis = () => {
  const router = useRouter()
  const { voteOsis, hasVotedOsis } = useElectionStore()
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSelectCandidate = (candidateId: string) => {
    setSelectedCandidate(candidateId)
  }

  const handleSubmitVote = async () => {
    if (!selectedCandidate || isSubmitting) return

    setIsSubmitting(true)
    
    try {
      // Simulate API call - will be replaced with Firestore
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Update store
      voteOsis()
      
      // Redirect to success page
      router.push('/vote/success?type=osis')
    } catch (error) {
      console.error('Error submitting vote:', error)
      setIsSubmitting(false)
    }
  }

  return {
    selectedCandidate,
    isSubmitting,
    canSubmit: !!selectedCandidate && !isSubmitting,
    hasVoted: hasVotedOsis(),
    handleSelectCandidate,
    handleSubmitVote,
  }
}

export default useVoteOsis