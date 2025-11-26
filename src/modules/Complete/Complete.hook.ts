import { useRouter } from 'next/navigation'
import { useElectionStore } from '@/store/electionStore'
import { useEffect } from 'react'

const useComplete = () => {
  const router = useRouter()
  const { status, hasVotedOsis, hasVotedPramuka } = useElectionStore()

  // Redirect to /vote if not all votes are completed
  useEffect(() => {
    if (status !== 'VOTED_ALL') {
      router.push('/vote')
    }
  }, [status, router])

  const handleBackToHome = () => {
    router.push('/')
  }

  return {
    hasVotedOsis: hasVotedOsis(),
    hasVotedPramuka: hasVotedPramuka(),
    handleBackToHome,
  }
}

export default useComplete


