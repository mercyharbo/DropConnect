export interface Vendor {
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