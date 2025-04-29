'use client'

import { Button } from '@/components/ui/button'
import { Vendor } from '@/types/vendor'
import { motion } from 'framer-motion'
import { Filter, Search } from 'lucide-react'
import { useEffect, useState } from 'react'

interface HeroSectionProps {
  vendors: Vendor[]
  onFilteredVendors: (vendors: Vendor[]) => void
}

export default function HeroSection({
  vendors,
  onFilteredVendors,
}: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState<string>('')
  const [deliveryTime, setDeliveryTime] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('')

  useEffect(() => {
    let filtered = [...vendors]

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (vendor) =>
          vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Apply price range filter
    if (priceRange) {
      filtered = filtered.filter((vendor) => {
        const price = vendor.services?.[0]?.price || 0
        switch (priceRange) {
          case 'budget':
            return price <= 1000
          case 'mid':
            return price > 1000 && price <= 5000
          case 'premium':
            return price > 5000
          default:
            return true
        }
      })
    }

    // Apply delivery time filter
    if (deliveryTime) {
      filtered = filtered.filter((vendor) => {
        switch (deliveryTime) {
          case 'fast':
            return (
              vendor.opening_hours.includes('24/7') ||
              vendor.opening_hours.includes('Early')
            )
          case 'standard':
            return vendor.opening_hours.includes('Standard')
          case 'scheduled':
            return vendor.opening_hours.includes('Scheduled')
          default:
            return true
        }
      })
    }

    // Apply sorting
    if (sortBy) {
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'successRate':
            return b.success_rate - a.success_rate
          case 'priceLow':
            return (a.services?.[0]?.price || 0) - (b.services?.[0]?.price || 0)
          case 'priceHigh':
            return (b.services?.[0]?.price || 0) - (a.services?.[0]?.price || 0)
          default:
            return 0
        }
      })
    }

    onFilteredVendors(filtered)
  }, [
    vendors,
    searchQuery,
    priceRange,
    deliveryTime,
    sortBy,
    onFilteredVendors,
  ])

  return (
    <div className='space-y-6 flex flex-col items-center gap-5 xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl mx-auto'>
      <div className='flex flex-col w-full items-center justify-center sm:flex-row gap-4'>
        <div className='relative mx-auto flex justify-center items-center gap-5 w-full'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
          <input
            type='text'
            placeholder='Search vendors...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full h-14 pl-10 pr-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 focus:border-blue-500/50 focus:outline-none text-white placeholder:text-slate-400'
          />
        </div>
        <div className='flex gap-2 w-full sm:w-auto flex-1'>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='h-14 px-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 focus:border-blue-500/50 focus:outline-none text-white w-1/2 sm:w-auto'
          >
            <option value=''>Sort by</option>
            <option value='successRate'>Success Rate</option>
            <option value='priceLow'>Price: Low to High</option>
            <option value='priceHigh'>Price: High to Low</option>
          </select>
          <Button
            variant='outline'
            onClick={() => setShowFilters(!showFilters)}
            className='h-14 flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 text-white w-1/2 sm:w-auto'
          >
            <Filter className='w-4 h-4' />
            Filters
          </Button>
        </div>
      </div>

      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 w-full border border-slate-700/50 space-y-6'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div>
              <h3 className='text-sm font-medium text-slate-400 mb-2'>
                Price Range
              </h3>
              <div className='flex flex-wrap gap-2'>
                {['budget', 'mid', 'premium'].map((range) => (
                  <button
                    key={range}
                    onClick={() =>
                      setPriceRange(priceRange === range ? '' : range)
                    }
                    className={`px-3 py-1 rounded-full text-sm capitalize ${
                      priceRange === range
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700/70'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-sm font-medium text-slate-400 mb-2'>
                Delivery Time
              </h3>
              <div className='flex flex-wrap gap-2'>
                {['fast', 'standard', 'scheduled'].map((time) => (
                  <button
                    key={time}
                    onClick={() =>
                      setDeliveryTime(deliveryTime === time ? '' : time)
                    }
                    className={`px-3 py-1 rounded-full text-sm capitalize ${
                      deliveryTime === time
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700/70'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
