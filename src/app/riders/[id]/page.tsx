import { Check, Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id
  const rider = await getRider(id)

  if (!rider) {
    return {
      title: 'Rider Not Found | Drop Connect',
    }
  }

  return {
    title: `${rider.name} | Drop Connect`,
    description: rider.description,
    openGraph: {
      title: `${rider.name} | Drop Connect`,
      description: rider.description,
      images: [rider.image],
    },
  }
}

async function getRider(id: string) {
  try {
    const response = await fetch(
      `https://drop-connect-backend.onrender.com/api/riders/${id}`,
      {
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) {
      return null
    }

    return response.json()
  } catch {
    return null
  }
}

export default async function RiderPage({ params }: Props) {
  const id = (await params).id
  const rider = await getRider(id)

  if (!rider) {
    notFound()
  }

  return (
    <div className='min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-900 to-slate-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Rider Profile */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50'>
              <div className='relative h-64'>
                <Image
                  src={rider.image}
                  alt={rider.name}
                  fill
                  className='object-cover'
                />
                {rider.verified && (
                  <div className='absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1'>
                    <Check className='w-4 h-4' />
                    Verified
                  </div>
                )}
              </div>

              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <div>
                    <h1 className='text-2xl font-bold'>{rider.name}</h1>
                    <div className='flex items-center gap-2 text-slate-400 mt-1'>
                      <MapPin className='w-4 h-4' />
                      <span>{rider.location}</span>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-xl font-bold text-blue-400'>
                      {rider.success_rate}%
                    </span>
                    <span className='text-slate-400'>Success Rate</span>
                  </div>
                </div>

                <p className='text-slate-300'>{rider.description}</p>

                <div className='flex items-center gap-4 text-slate-400'>
                  <div className='flex items-center gap-1'>
                    <Clock className='w-4 h-4' />
                    <span>{rider.opening_hours}</span>
                  </div>
                  <span>•</span>
                  <span>{rider.service_type}</span>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {rider.services?.map((service: string, index: number) => (
                    <span
                      key={index}
                      className='bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm'
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className='flex items-center gap-4 pt-4'>
                  <a
                    href={`tel:${rider.phone}`}
                    className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'
                  >
                    <Phone className='w-4 h-4' />
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${rider.whatsapp}`}
                    className='flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors'
                  >
                    <MessageCircle className='w-4 h-4' />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Working Days */}
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50'>
              <h2 className='text-xl font-semibold mb-4'>Working Days</h2>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
                {rider.working_days?.map((day: string) => (
                  <div
                    key={day}
                    className='bg-blue-500/10 text-blue-400 px-3 py-2 rounded-lg text-center'
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className='space-y-6'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50'>
              <h2 className='text-xl font-semibold mb-4'>
                Contact Information
              </h2>
              <div className='space-y-3'>
                <div className='flex items-center gap-2 text-slate-300'>
                  <Phone className='w-4 h-4 text-blue-400' />
                  <span>{rider.phone}</span>
                </div>
                <div className='flex items-center gap-2 text-slate-300'>
                  <MessageCircle className='w-4 h-4 text-green-400' />
                  <span>{rider.whatsapp}</span>
                </div>
              </div>
            </div>

            <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50'>
              <h2 className='text-xl font-semibold mb-4'>Service Details</h2>
              <div className='space-y-3'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Service Type</span>
                  <span className='text-blue-400'>{rider.service_type}</span>
                </div>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Success Rate</span>
                  <span className='text-blue-400'>{rider.success_rate}%</span>
                </div>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Location</span>
                  <span className='text-blue-400'>{rider.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
