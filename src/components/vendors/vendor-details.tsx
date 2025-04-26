'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'

interface MenuItem {
  name: string
  price?: string
  description?: string
}

interface Vendor {
  id: string
  name: string
  image: string
  description: string
  successRate: number
  phone: string
  whatsapp: string
  priceRange?: 'budget' | 'mid' | 'premium'
  deliveryTime?: 'fast' | 'standard' | 'scheduled'
  menu?: MenuItem[]
}

interface VendorDetailsProps {
  vendor: Vendor
}

export default function VendorDetails({ vendor }: VendorDetailsProps) {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 space-y-8'>
      {/* Vendor Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col md:flex-row gap-8 items-center md:items-start'
      >
        {/* Vendor Image */}
        <div className='relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-orange-500/20'>
          <Image
            src={vendor.image}
            alt={vendor.name}
            fill
            className='object-cover'
          />
        </div>

        {/* Vendor Info */}
        <div className='flex-1 text-center md:text-left space-y-4'>
          <div>
            <h1 className='text-3xl font-bold text-white'>{vendor.name}</h1>
            <p className='text-orange-100/70 mt-2'>{vendor.description}</p>
          </div>

          {/* Success Rate */}
          <div className='flex items-center justify-center md:justify-start space-x-2'>
            <div className='w-32 bg-slate-700/50 rounded-full h-2'>
              <div
                className='bg-orange-500 h-2 rounded-full transition-all duration-300'
                style={{ width: `${vendor.successRate}%` }}
              />
            </div>
            <span className='text-sm font-medium text-orange-500'>
              {vendor.successRate}% Success Rate
            </span>
          </div>

          {/* Action Buttons */}
          <div className='flex justify-center md:justify-start space-x-4'>
            <Button
              variant='outline'
              className='bg-slate-800/50 border-orange-500/20 text-white hover:bg-orange-500/20'
              onClick={() =>
                window.open(`https://wa.me/${vendor.whatsapp}`, '_blank')
              }
            >
              <MessageCircle className='w-4 h-4 mr-2' />
              WhatsApp
            </Button>
            <Button
              variant='outline'
              className='bg-slate-800/50 border-orange-500/20 text-white hover:bg-orange-500/20'
              onClick={() => window.open(`tel:${vendor.phone}`, '_blank')}
            >
              <Phone className='w-4 h-4 mr-2' />
              Call
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Menu Section */}
      {vendor.menu && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='bg-slate-800/50 rounded-xl p-6 border border-orange-500/20'
        >
          <h2 className='text-2xl font-semibold text-white mb-6'>
            Menu & Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {vendor.menu.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className='bg-slate-900/50 rounded-lg p-4 border border-orange-500/10 hover:border-orange-500/20 transition-colors duration-300'
              >
                <h3 className='text-lg font-medium text-white'>{item.name}</h3>
                {item.price && (
                  <p className='text-orange-500 font-medium mt-1'>
                    {item.price}
                  </p>
                )}
                {item.description && (
                  <p className='text-orange-100/70 text-sm mt-2'>
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
