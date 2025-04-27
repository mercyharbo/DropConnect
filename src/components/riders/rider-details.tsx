'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
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

interface RiderDetailsProps {
  rider: Rider
}

export default function RiderDetails({ rider }: RiderDetailsProps) {
  return (
    <div className='min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Rider Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col md:flex-row gap-8 items-center mb-12'
        >
          <div className='relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/20'>
            <Image
              src={rider.image}
              alt={rider.name}
              fill
              className='object-cover'
            />
          </div>
          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-3xl font-bold mb-2'>{rider.name}</h1>
            <p className='text-blue-100/80 mb-4'>{rider.description}</p>
            <div className='flex items-center justify-center md:justify-start gap-4'>
              <div className='flex items-center gap-2'>
                <div className='w-24 h-2 bg-slate-700 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-blue-500 rounded-full'
                    style={{ width: `${rider.successRate}%` }}
                  />
                </div>
                <span className='text-sm text-blue-300'>
                  {rider.successRate}% Success Rate
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12'
        >
          <Button
            className='bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto'
            onClick={() => (window.location.href = `tel:${rider.phone}`)}
          >
            <Phone className='w-4 h-4 mr-2' />
            Call Rider
          </Button>
          <Button
            className='bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto'
            onClick={() =>
              window.open(`https://wa.me/${rider.whatsapp}`, '_blank')
            }
          >
            <MessageCircle className='w-4 h-4 mr-2' />
            WhatsApp
          </Button>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='space-y-6'
        >
          <h2 className='text-2xl font-bold mb-6'>Services Offered</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {rider.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className='bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors'
              >
                <h3 className='text-xl font-semibold mb-2'>{service.name}</h3>
                {service.description && (
                  <p className='text-blue-100/70'>{service.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
