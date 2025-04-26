'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '../ui/separator'

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
  menu?: {
    name: string
    price?: string
    description?: string
  }[]
}

interface VendorsGridProps {
  vendors: Vendor[]
}

export default function VendorsGrid({ vendors }: VendorsGridProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
      {vendors.map((vendor, index) => (
        <Link href={`/vendors/${vendor.id}`} key={vendor.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='group h-full bg-slate-800/50 rounded-xl overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer flex flex-col'
          >
            <div className='p-6 flex flex-col gap-3'>
              {/* Vendor Image */}
              <div className='relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-orange-500/20 mb-4'>
                <Image
                  src={vendor.image}
                  alt={vendor.name}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Vendor Info */}
              <div className='text-center flex flex-col gap-2'>
                <h3 className='text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300'>
                  {vendor.name}
                </h3>
                <p className='text-orange-100/70 line-clamp-2'>
                  {vendor.description}
                </p>
              </div>

              {/* Success Rate */}
              <div className='flex items-center justify-center space-x-2 mt-4'>
                <div className='w-full bg-slate-700/50 rounded-full h-2'>
                  <div
                    className='bg-orange-500 h-2 rounded-full transition-all duration-300'
                    style={{ width: `${vendor.successRate}%` }}
                  />
                </div>
                <span className='text-sm font-medium text-orange-500'>
                  {vendor.successRate}%
                </span>
              </div>

              {/* Price Range and Delivery Time */}
              <div className='flex justify-center gap-4 text-sm mt-4'>
                {vendor.priceRange && (
                  <span className='text-orange-100/70'>
                    {vendor.priceRange.charAt(0).toUpperCase() +
                      vendor.priceRange.slice(1)}{' '}
                    Price
                  </span>
                )}
                {vendor.deliveryTime && (
                  <span className='text-orange-100/70'>
                    {vendor.deliveryTime.charAt(0).toUpperCase() +
                      vendor.deliveryTime.slice(1)}{' '}
                    Delivery
                  </span>
                )}
              </div>

              <Separator className='text-gray-200 opacity-25 my-4' />

              {/* Menu Preview */}
              {vendor.menu && vendor.menu.length > 0 && (
                <div className='flex flex-col gap-4'>
                  <h4 className='text-sm font-medium text-orange-100/70 mb-2'>
                    Popular Items
                  </h4>
                  <div className='flex flex-wrap justify-start gap-2'>
                    {vendor.menu.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className='text-xs bg-slate-900/50 text-orange-100/70 px-2 py-1 rounded-full'
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}
