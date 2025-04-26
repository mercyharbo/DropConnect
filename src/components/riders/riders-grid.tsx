'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Star } from 'lucide-react'
import Image from 'next/image'

// Mock data for riders
const riders = [
  {
    id: 1,
    name: 'John Adebayo',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    description: 'Fast delivery around Ikeja, 24/7 service',
    successRate: 96,
    phone: '+2348012345678',
    whatsapp: '+2348012345678',
  },
  {
    id: 2,
    name: 'Sarah Okafor',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: 'Reliable deliveries in Victoria Island',
    successRate: 98,
    phone: '+2348023456789',
    whatsapp: '+2348023456789',
  },
  {
    id: 3,
    name: 'Michael Okonkwo',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: 'Express delivery across Lagos Mainland',
    successRate: 95,
    phone: '+2348034567890',
    whatsapp: '+2348034567890',
  },
  {
    id: 4,
    name: 'Grace Adeleke',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    description: 'Professional rider in Lekki Phase 1',
    successRate: 97,
    phone: '+2348045678901',
    whatsapp: '+2348045678901',
  },
  {
    id: 5,
    name: 'Emeka Nwosu',
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
    description: 'Quick dispatch from Surulere to Island',
    successRate: 94,
    phone: '+2348056789012',
    whatsapp: '+2348056789012',
  },
  {
    id: 6,
    name: 'Amara Chukwu',
    image: 'https://randomuser.me/api/portraits/women/66.jpg',
    description: 'Trusted delivery in Yaba and environs',
    successRate: 97,
    phone: '+2348067890123',
    whatsapp: '+2348067890123',
  },
  {
    id: 7,
    name: 'Tunde Balogun',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    description: 'Swift rider between Ikeja and Ogba',
    successRate: 95,
    phone: '+2348078901234',
    whatsapp: '+2348078901234',
  },
  {
    id: 8,
    name: 'Chinwe Eze',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
    description: 'Dependable rider, Victoria Island expert',
    successRate: 98,
    phone: '+2348089012345',
    whatsapp: '+2348089012345',
  },
]

export default function RidersGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {riders.map((rider, index) => (
        <motion.div
          key={rider.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-1 shadow-lg cursor-pointer'
        >
          <motion.div
            className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            initial={false}
          />
          <div className='relative bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col'>
            {/* Rider Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className='relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-500/30 cursor-pointer'
            >
              <Image
                src={rider.image}
                alt={rider.name}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </motion.div>

            {/* Rider Info */}
            <div className='text-center space-y-2 flex-1'>
              <motion.h3
                whileHover={{ scale: 1.02 }}
                className='text-xl font-bold cursor-pointer'
              >
                {rider.name}
              </motion.h3>
              <p className='text-blue-100/70 text-sm'>{rider.description}</p>

              {/* Success Rate */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='flex items-center justify-center gap-1 text-yellow-400 cursor-pointer'
              >
                <Star className='w-4 h-4 fill-current' />
                <span className='text-sm font-medium'>
                  {rider.successRate}% Success Rate
                </span>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className='mt-6 space-y-2'>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Button
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 cursor-pointer'
                  onClick={() =>
                    window.open(`https://wa.me/${rider.whatsapp}`, '_blank')
                  }
                >
                  <MessageCircle className='w-4 h-4' />
                  Contact via WhatsApp
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Button
                  className='w-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 cursor-pointer'
                  onClick={() => window.open(`tel:${rider.phone}`, '_blank')}
                >
                  <Phone className='w-4 h-4' />
                  Call Now
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
