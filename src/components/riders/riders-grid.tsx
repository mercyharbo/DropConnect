'use client'

import { motion } from 'framer-motion'
import { Check, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Service {
  name: string
  image: string
  price: number
}

interface Rider {
  id: number
  name: string
  image: string
  service_type: string
  verified: boolean
  description: string
  services: Service[]
  opening_hours: string
  working_days: string[]
  location: string
  success_rate: number
  phone: string
  whatsapp: string
  created_at: string
}

interface RidersGridProps {
  riders: Rider[]
}

export default function RidersGrid({ riders }: RidersGridProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {riders.map((rider) => (
        <Link href={`/riders/${rider.id}`} key={rider.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='group bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-colors'
          >
            <div className='relative h-48'>
              <Image
                src={rider.image}
                alt={rider.name}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-300'
              />
              {rider.verified && (
                <div className='absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1'>
                  <Check className='w-4 h-4' />
                  Verified
                </div>
              )}
            </div>

            <div className='p-6 space-y-4'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-start justify-between gap-2'>
                  <div className='min-w-0 flex-1'>
                    <h3 className='text-lg font-bold group-hover:text-blue-400 transition-colors truncate'>
                      {rider.name}
                    </h3>
                    <div className='flex items-center gap-1 text-slate-400 mt-1'>
                      <MapPin className='w-3 h-3 flex-shrink-0' />
                      <span className='text-sm truncate'>{rider.location}</span>
                    </div>
                  </div>
                  <div className='flex flex-col items-end gap-1'>
                    <span className='text-lg font-bold text-blue-400 whitespace-nowrap'>
                      {rider.success_rate}%
                    </span>
                    <span className='text-xs text-slate-400 whitespace-nowrap'>
                      Success Rate
                    </span>
                  </div>
                </div>
              </div>

              <p className='text-sm text-slate-300 line-clamp-2'>
                {rider.description}
              </p>

              <div className='flex flex-wrap gap-2'>
                {rider.services
                  ?.slice(0, 3)
                  .map((service: Service, index: number) => (
                    <span
                      key={index}
                      className='text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full'
                    >
                      {service.name}
                    </span>
                  ))}
                {rider.services?.length > 3 && (
                  <span className='text-xs bg-slate-700/50 text-slate-400 px-2 py-1 rounded-full'>
                    +{rider.services.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}
