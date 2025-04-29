import { Skeleton } from '@/components/ui/skeleton'

export default function VendorDetailSkeleton() {
  return (
    <div className='min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-900 to-slate-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Vendor Profile Skeleton */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50'>
              <Skeleton className='h-64 w-full' />
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <div>
                    <Skeleton className='h-8 w-48 mb-2' />
                    <Skeleton className='h-5 w-32' />
                  </div>
                  <div className='flex items-center gap-2'>
                    <Skeleton className='h-8 w-16' />
                    <Skeleton className='h-5 w-24' />
                  </div>
                </div>

                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-3/4' />

                <div className='flex items-center gap-4'>
                  <Skeleton className='h-5 w-32' />
                  <Skeleton className='h-5 w-24' />
                </div>

                <div className='flex flex-wrap gap-2'>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className='h-6 w-24 rounded-full' />
                  ))}
                </div>

                <div className='flex items-center gap-4 pt-4'>
                  <Skeleton className='h-10 w-24 rounded-lg' />
                  <Skeleton className='h-10 w-32 rounded-lg' />
                </div>
              </div>
            </div>

            {/* Business Hours Skeleton */}
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50'>
              <Skeleton className='h-7 w-32 mb-4' />
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
                {Array.from({ length: 7 }).map((_, i) => (
                  <Skeleton key={i} className='h-10 w-full rounded-lg' />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info Skeleton */}
          <div className='space-y-6'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50'>
              <Skeleton className='h-7 w-40 mb-4' />
              <div className='space-y-3'>
                <Skeleton className='h-5 w-full' />
                <Skeleton className='h-5 w-full' />
              </div>
            </div>

            <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50'>
              <Skeleton className='h-7 w-32 mb-4' />
              <div className='space-y-3'>
                <Skeleton className='h-5 w-full' />
                <Skeleton className='h-5 w-full' />
                <Skeleton className='h-5 w-full' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
