import backgroundImage from '@/assets/2c4b183a-941b-4e8e-9004-fecec54b81c9.png'
import HeroSection from '@/components/riders/hero-section'
import RidersGrid from '@/components/riders/riders-grid'
import { Pagination } from '@/components/ui/pagination'
import { Metadata } from 'next'
import Image from 'next/image'

interface Service {
  name: string
  description?: string
}

interface Rider {
  id: string
  name: string
  image: string
  description: string
  successRate: number
  phone: string
  whatsapp: string
  services: Service[]
}

// Mock data - replace with your actual data source
const mockRiders: Rider[] = [
  {
    id: '1',
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    description:
      'Experienced delivery rider with 5 years of service. Specializes in food and package delivery.',
    successRate: 98,
    phone: '+1234567890',
    whatsapp: '+1234567890',
    services: [
      {
        name: 'Food Delivery',
        description: 'Quick and reliable food delivery service',
      },
      {
        name: 'Package Delivery',
        description: 'Secure package delivery with real-time tracking',
      },
      {
        name: 'Bike Delivery',
        description: 'Fast and efficient bike delivery service',
      },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    description:
      'Professional rider with expertise in express deliveries and special handling.',
    successRate: 95,
    phone: '+1234567891',
    whatsapp: '+1234567891',
    services: [
      {
        name: 'Express Delivery',
        description: 'Priority delivery service for urgent items',
      },
      {
        name: 'Special Handling',
        description: 'Careful handling of fragile and valuable items',
      },
      {
        name: 'Bulk Delivery',
        description: 'Efficient delivery of multiple items',
      },
    ],
  },
]

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

export default async function RidersPage({ searchParams }: Props) {
  const currentPage = Number((await searchParams).page) || 1
  const totalPages = Math.ceil(mockRiders.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentRiders = mockRiders.slice(startIndex, endIndex)

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
