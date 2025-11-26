import { useRouter } from 'next/navigation'
import { useElectionStore } from '@/store/electionStore'
import { useEffect } from 'react'

const useVoteSelect = () => {
  const router = useRouter()
  const { 
    status, 
    hasVotedOsis, 
    hasVotedPramuka 
  } = useElectionStore()

  // Redirect to complete page if all votes are done
  useEffect(() => {
    if (status === 'VOTED_ALL') {
      router.push('/vote/complete')
    }
  }, [status, router])

  const handleVoteOsis = () => {
    if (!hasVotedOsis() && status !== 'VOTED_ALL') {
      router.push('/vote/osis')
    }
  }

  const handleVotePramuka = () => {
    if (!hasVotedPramuka() && status !== 'VOTED_ALL') {
      router.push('/vote/pramuka')
    }
  }

  return {
    status,
    hasVotedOsis: hasVotedOsis(),
    hasVotedPramuka: hasVotedPramuka(),
    isAllVoted: status === 'VOTED_ALL',
    handleVoteOsis,
    handleVotePramuka,
  }
}

export default useVoteSelect