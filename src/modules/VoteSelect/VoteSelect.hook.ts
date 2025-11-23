import { useRouter } from 'next/navigation'
import { useElectionStore } from '@/store/electionStore'

const useVoteSelect = () => {
  const router = useRouter()
  const { 
    status, 
    voteOsis, 
    votePramuka, 
    hasVotedOsis, 
    hasVotedPramuka 
  } = useElectionStore()

  const handleVoteOsis = () => {
    if (!hasVotedOsis() && status !== 'VOTED_ALL') {
      voteOsis()
      router.push('/vote/osis')
    }
  }

  const handleVotePramuka = () => {
    if (!hasVotedPramuka() && status !== 'VOTED_ALL') {
      votePramuka()
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