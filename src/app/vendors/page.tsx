import backgroundImage from '@/assets/2c4b183a-941b-4e8e-9004-fecec54b81c9.png'
import { Pagination } from '@/components/ui/pagination'
import VendorsContent from '@/components/vendors/vendors-content'
import { Metadata } from 'next'
import Image from 'next/image'

const ITEMS_PER_PAGE = 6

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Vendors - Drop Connect',
    description: 'Find and connect with local vendors for your delivery needs.',
    keywords: ['vendors', 'delivery', 'local businesses', 'services'],
    openGraph: {
      title: 'Vendors - Drop Connect',
      description:
        'Find and connect with local vendors for your delivery needs.',
    },
  }
}

async function getVendors() {
  try {
    const response = await fetch(
      'https://drop-connect-backend.onrender.com/api/vendors',
      {
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    return data
  } catch {
    return []
  }
}

export default async function VendorsPage({ searchParams }: Props) {
  const vendors = await getVendors()
  const currentPage = Number((await searchParams).page) || 1
  const totalPages = Math.ceil(vendors.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentVendors = vendors.slice(startIndex, endIndex)

  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white relative'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={backgroundImage}
          alt='Vendors background'
          fill
          className='object-cover opacity-20'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-br from-orange-900/40 to-amber-900/40 mix-blend-multiply' />
      </div>

      {/* Main Content */}
      <main className='relative z-10 flex-1 flex flex-col gap-8 py-8 w-full px-2 sm:px-4 max-w-7xl sm:mx-auto'>
        <VendorsContent vendors={currentVendors} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </main>
    </div>
  )
}
