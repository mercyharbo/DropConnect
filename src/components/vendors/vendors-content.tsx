'use client'

import { Vendor } from '@/types/vendor'
import { useState } from 'react'
import HeroSection from './hero-section'
import VendorsGrid from './vendors-grid'

interface VendorsContentProps {
  vendors: Vendor[]
}

export default function VendorsContent({ vendors }: VendorsContentProps) {
  const [filteredVendors, setFilteredVendors] = useState<Vendor[]>(vendors)

  return (
    <div className='space-y-8'>
      <HeroSection vendors={vendors} onFilteredVendors={setFilteredVendors} />
      <VendorsGrid vendors={filteredVendors} />
    </div>
  )
}
