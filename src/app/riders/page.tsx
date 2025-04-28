import backgroundImage from '@/assets/2c4b183a-941b-4e8e-9004-fecec54b81c9.png'
import HeroSection from '@/components/riders/hero-section'
import RidersGrid from '@/components/riders/riders-grid'
import { Pagination } from '@/components/ui/pagination'
import { Metadata } from 'next'
import Image from 'next/image'

const ITEMS_PER_PAGE = 6

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Find Riders | Drop Connect',
    description:
      'Connect with reliable delivery riders for all your delivery needs.',
    keywords: [
      'riders',
      'delivery',
      'courier',
      'express delivery',
      'package delivery',
    ],
    openGraph: {
      title: 'Find Riders | Drop Connect',
      description:
        'Connect with reliable delivery riders for all your delivery needs.',
      type: 'website',
    },
  }
}

async function getRiders() {
  try {
    const response = await fetch(
      'https://drop-connect-backend.onrender.com/api/riders',
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

export default async function RidersPage({ searchParams }: Props) {
  const riders = await getRiders()
  const currentPage = Number((await searchParams).page) || 1
  const totalPages = Math.ceil(riders.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentRiders = riders.slice(startIndex, endIndex)

  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white relative'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={backgroundImage}
          alt='Delivery riders background'
          fill
          className='object-cover opacity-20'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/40 to-emerald-900/40 mix-blend-multiply' />
      </div>

      {/* Main Content */}
      <main className='relative z-10 flex-1 flex flex-col'>
        <HeroSection />

        {/* Riders Grid */}
        <section className='py-8 px-4 max-w-7xl mx-auto flex flex-col gap-8'>
          <RidersGrid riders={currentRiders} />
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </section>
      </main>
    </div>
  )
}
