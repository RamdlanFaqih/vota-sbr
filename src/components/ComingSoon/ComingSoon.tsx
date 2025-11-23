'use client'

import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface ComingSoonProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
}

const ComingSoon = ({ 
  open, 
  onOpenChange, 
  title = 'Fitur Sedang Dalam Pengembangan',
  description = 'Fitur ini sedang dalam tahap pengembangan. Kami akan segera meluncurkannya dalam waktu dekat. Terima kasih atas kesabaran Anda!'
}: ComingSoonProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='sm:justify-center sm:items-center'>
          <AlertDialogAction onClick={() => onOpenChange(false)}>
            Mengerti
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ComingSoon

