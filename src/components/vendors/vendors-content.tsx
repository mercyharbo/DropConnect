'use client'

import HeroSection from '@/components/vendors/hero-section'
import VendorsGrid from '@/components/vendors/vendors-grid'
import { useState } from 'react'

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

interface VendorsContentProps {
  initialVendors: Vendor[]
}

export default function VendorsContent({
  initialVendors,
}: VendorsContentProps) {
  const [filteredVendors, setFilteredVendors] =
    useState<Vendor[]>(initialVendors)

  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white relative'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-orange-900/40 to-amber-900/40 mix-blend-multiply' />
      </div>

      {/* Main Content */}
      <main className='relative z-10 flex-1 flex flex-col'>
        <HeroSection
          vendors={initialVendors}
          onFilteredVendors={setFilteredVendors}
        />

        {/* Vendors Grid */}
        <section className='py-8 px-4'>
          <div className='max-w-7xl mx-auto'>
            <VendorsGrid vendors={filteredVendors} />
          </div>
        </section>
      </main>
    </div>
  )
}
