import { Skeleton } from '@/components/ui/skeleton'

export default function VendorsGridSkeleton() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className='bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50'
        >
          <Skeleton className='h-48 w-full' />
          <div className='p-6 space-y-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-start justify-between gap-2'>
                <div className='min-w-0 flex-1'>
                  <Skeleton className='h-6 w-3/4 mb-2' />
                  <Skeleton className='h-4 w-1/2' />
                </div>
                <div className='flex flex-col items-end gap-1'>
                  <Skeleton className='h-6 w-12' />
                  <Skeleton className='h-4 w-16' />
                </div>
              </div>
            </div>

            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-2/3' />

            <div className='flex flex-wrap gap-2'>
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className='h-6 w-20 rounded-full' />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
