import RiderDetails from '@/components/riders/rider-details'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

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

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const rider = mockRiders.find((r) => r.id === id)

  if (!rider) {
    return {
      title: 'Rider Not Found | Drop Connect',
      description: 'The requested rider could not be found.',
    }
  }

  return {
    title: `${rider.name} | Drop Connect`,
    description: rider.description,
    openGraph: {
      title: `${rider.name} | Drop Connect`,
      description: rider.description,
      type: 'website',
      images: [
        {
          url: rider.image,
          width: 1200,
          height: 630,
          alt: rider.name,
        },
      ],
    },
  }
}

export default async function RiderPage({ params }: Props) {
  const { id } = await params
  const rider = mockRiders.find((r) => r.id === id)

  if (!rider) {
    notFound()
  }

  return <RiderDetails rider={rider} />
}
