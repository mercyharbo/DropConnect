'use client'

import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

interface PaginationProps {
  currentPage: number
  totalPages: number
  className?: string
}

export function Pagination({
  currentPage,
  totalPages,
  className,
}: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      <Link
        href={createPageURL(currentPage - 1)}
        className={cn(
          'inline-flex items-center justify-center rounded-md border border-blue-500/20 bg-slate-800/50 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500/20 disabled:pointer-events-none disabled:opacity-50',
          currentPage === 1 && 'pointer-events-none opacity-50'
        )}
      >
        <ChevronLeft className='h-4 w-4' />
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          className={cn(
            'inline-flex items-center justify-center rounded-md border border-blue-500/20 bg-slate-800/50 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500/20',
            page === currentPage && 'bg-blue-600 hover:bg-blue-700'
          )}
        >
          {page}
        </Link>
      ))}

      <Link
        href={createPageURL(currentPage + 1)}
        className={cn(
          'inline-flex items-center justify-center rounded-md border border-blue-500/20 bg-slate-800/50 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500/20 disabled:pointer-events-none disabled:opacity-50',
          currentPage === totalPages && 'pointer-events-none opacity-50'
        )}
      >
        <ChevronRight className='h-4 w-4' />
      </Link>
    </div>
  )
}
