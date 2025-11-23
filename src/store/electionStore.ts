import { create } from 'zustand'

export type ElectionStatus = 
  | 'NOT_VOTED'
  | 'VOTED_OSIS_ONLY'
  | 'VOTED_PRAMUKA_ONLY'
  | 'VOTED_ALL'

interface ElectionState {
  status: ElectionStatus
  setStatus: (status: ElectionStatus) => void
  voteOsis: () => void
  votePramuka: () => void
  hasVotedOsis: () => boolean
  hasVotedPramuka: () => boolean
}

export const useElectionStore = create<ElectionState>((set, get) => ({
  status: 'NOT_VOTED', // Dummy data - will be replaced with Firestore data
  
  setStatus: (status) => set({ status }),
  
  voteOsis: () => {
    const currentStatus = get().status
    if (currentStatus === 'NOT_VOTED') {
      set({ status: 'VOTED_OSIS_ONLY' })
    } else if (currentStatus === 'VOTED_PRAMUKA_ONLY') {
      set({ status: 'VOTED_ALL' })
    }
  },
  
  votePramuka: () => {
    const currentStatus = get().status
    if (currentStatus === 'NOT_VOTED') {
      set({ status: 'VOTED_PRAMUKA_ONLY' })
    } else if (currentStatus === 'VOTED_OSIS_ONLY') {
      set({ status: 'VOTED_ALL' })
    }
  },
  
  hasVotedOsis: () => {
    const status = get().status
    return status === 'VOTED_OSIS_ONLY' || status === 'VOTED_ALL'
  },
  
  hasVotedPramuka: () => {
    const status = get().status
    return status === 'VOTED_PRAMUKA_ONLY' || status === 'VOTED_ALL'
  },
}))

