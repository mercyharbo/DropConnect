'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Filter, Search } from 'lucide-react'
import { useEffect, useState } from 'react'

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
}

interface HeroSectionProps {
  vendors: Vendor[]
  onFilteredVendors: (vendors: Vendor[]) => void
}

export default function HeroSection({
  vendors,
  onFilteredVendors,
}: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('success')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState('all')
  const [deliveryTime, setDeliveryTime] = useState('all')

  useEffect(() => {
    let filteredVendors = [...vendors]

    // Apply search filter
    if (searchQuery) {
      filteredVendors = filteredVendors.filter(
        (vendor) =>
          vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Apply price range filter
    if (priceRange !== 'all') {
      filteredVendors = filteredVendors.filter(
        (vendor) => vendor.priceRange === priceRange
      )
    }

    // Apply delivery time filter
    if (deliveryTime !== 'all') {
      filteredVendors = filteredVendors.filter(
        (vendor) => vendor.deliveryTime === deliveryTime
      )
    }

    // Apply sorting
    filteredVendors.sort((a, b) => {
      switch (sortBy) {
        case 'success':
          return b.successRate - a.successRate
        case 'popularity':
          // Assuming popularity is based on success rate for now
          return b.successRate - a.successRate
        case 'rating':
          // Assuming rating is based on success rate for now
          return b.successRate - a.successRate
        case 'distance':
          // Assuming distance is based on success rate for now
          return b.successRate - a.successRate
        default:
          return 0
      }
    })

    onFilteredVendors(filteredVendors)
  }, [
    searchQuery,
    sortBy,
    priceRange,
    deliveryTime,
    vendors,
    onFilteredVendors,
  ])

  return (
    <section className='pt-24 pb-12 px-4 text-center'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-3xl mx-auto space-y-8'
      >
        <div className='space-y-4'>
          <h1 className='text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100'>
            Find Trusted Vendors
          </h1>
          <p className='text-xl text-orange-100/80 max-w-2xl mx-auto'>
            Connect with trusted vendors in your area. Fresh food, groceries,
            and more delivered to your doorstep.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className='flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto'>
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-200/50' />
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search vendors by name or location...'
              className='w-full h-14 pl-10 pr-4 rounded-lg bg-slate-800/50 border border-orange-500/20 text-white placeholder:text-orange-200/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50'
            />
          </div>

          <div className='flex gap-2 w-full sm:w-auto'>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='flex-1 sm:w-[180px] h-14 rounded-lg bg-slate-800/50 border border-orange-500/20 text-white px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50'
            >
              <option value='success'>Success Rate</option>
              <option value='popularity'>Popularity</option>
              <option value='rating'>Rating</option>
              <option value='distance'>Distance</option>
            </select>

            <Button
              variant='outline'
              className='h-14 bg-slate-800/50 border-orange-500/20 text-white hover:bg-orange-500/20'
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className='w-4 h-4 mr-2' />
              Filters
            </Button>
          </div>
        </div>

        {/* Additional Filters Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-2xl mx-auto p-4 bg-slate-800/50 rounded-lg border border-orange-500/20'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-orange-100/70 mb-2'>
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className='w-full h-14 rounded-lg bg-slate-900/50 border border-orange-500/20 text-white px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50'
                >
                  <option value='all'>All Prices</option>
                  <option value='budget'>Budget Friendly</option>
                  <option value='mid'>Mid Range</option>
                  <option value='premium'>Premium</option>
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-orange-100/70 mb-2'>
                  Delivery Time
                </label>
                <select
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className='w-full h-14 rounded-lg bg-slate-900/50 border border-orange-500/20 text-white px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50'
                >
                  <option value='all'>Any Time</option>
                  <option value='fast'>Fast (Under 30min)</option>
                  <option value='standard'>Standard (30-60min)</option>
                  <option value='scheduled'>Scheduled</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
