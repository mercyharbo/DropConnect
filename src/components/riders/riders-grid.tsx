'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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

interface RidersGridProps {
  riders: Rider[]
}

export default function RidersGrid({ riders }: RidersGridProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      {riders.map((rider, index) => (
        <Link href={`/riders/${rider.id}`} key={rider.id} className='block'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-1 shadow-lg'
          >
            <div className='relative bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 h-full'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/20'>
                  <Image
                    src={rider.image}
                    alt={rider.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='text-xl font-bold'>{rider.name}</h3>
                  <div className='flex items-center gap-2'>
                    <div className='w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden'>
                      <div
                        className='h-full bg-blue-500 rounded-full'
                        style={{ width: `${rider.successRate}%` }}
                      />
                    </div>
                    <span className='text-sm text-blue-300'>
                      {rider.successRate}%
                    </span>
                  </div>
                </div>
              </div>
              <p className='text-blue-100/70 mb-4 line-clamp-2'>
                {rider.description}
              </p>
              <div className='space-y-2'>
                <h4 className='text-sm font-semibold text-blue-200'>
                  Services Offered:
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {rider.services.map((service, idx) => (
                    <span
                      key={idx}
                      className='text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full'
                    >
                      {service.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}
