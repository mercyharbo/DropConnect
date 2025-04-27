import backgroundImage from '@/assets/2c4b183a-941b-4e8e-9004-fecec54b81c9.png'
import { Pagination } from '@/components/ui/pagination'
import VendorsContent from '@/components/vendors/vendors-content'
import { Metadata } from 'next'
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

// Mock data - replace with your actual data source
const mockVendors: Vendor[] = [
  {
    id: '1',
    name: 'Fresh Groceries',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    description:
      'Fresh fruits and vegetables delivered daily. We source our produce from local farms to ensure the highest quality and freshness.',
    successRate: 98,
    phone: '+1234567890',
    whatsapp: '+1234567890',
    priceRange: 'mid',
    deliveryTime: 'standard',
    menu: [
      {
        name: 'Fresh Fruits Basket',
        price: '₦5,000',
        description: 'Seasonal fruits assortment',
      },
      {
        name: 'Vegetable Box',
        price: '₦3,500',
        description: 'Mixed vegetables',
      },
      {
        name: 'Organic Salad Pack',
        price: '₦4,200',
        description: 'Pre-washed salad greens',
      },
    ],
  },
  {
    id: '2',
    name: 'Quick Bites',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    description:
      'Fast food and snacks delivered hot and fresh. Perfect for quick meals and office lunches.',
    successRate: 95,
    phone: '+1234567891',
    whatsapp: '+1234567891',
    priceRange: 'budget',
    deliveryTime: 'fast',
    menu: [
      {
        name: 'Jollof Rice',
        price: '₦2,500',
        description: 'Spicy tomato rice with chicken',
      },
      {
        name: 'Amala & Ewedu',
        price: '₦2,000',
        description: 'Traditional yam flour with jute leaves',
      },
      {
        name: 'Burgers',
        price: '₦3,000',
        description: 'Classic beef burger with fries',
      },
    ],
  },
  {
    id: '3',
    name: 'Gourmet Delights',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    description:
      'Premium restaurant quality meals prepared by expert chefs. Perfect for special occasions.',
    successRate: 99,
    phone: '+1234567892',
    whatsapp: '+1234567892',
    priceRange: 'premium',
    deliveryTime: 'scheduled',
    menu: [
      {
        name: 'Seafood Platter',
        price: '₦15,000',
        description: 'Fresh seafood assortment',
      },
      {
        name: 'Steak Dinner',
        price: '₦12,000',
        description: 'Premium cut with sides',
      },
      {
        name: 'Wine Pairing Menu',
        price: '₦20,000',
        description: '5-course meal with wine',
      },
    ],
  },
  {
    id: '4',
    name: 'Bakery Corner',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    description:
      'Freshly baked goods and pastries made with love. Perfect for breakfast and snacks.',
    successRate: 97,
    phone: '+1234567893',
    whatsapp: '+1234567893',
    priceRange: 'mid',
    deliveryTime: 'standard',
    menu: [
      {
        name: 'Bread Basket',
        price: '₦4,500',
        description: 'Assorted fresh breads',
      },
      {
        name: 'Pastry Box',
        price: '₦3,800',
        description: 'Selection of sweet pastries',
      },
      {
        name: 'Cake Slice',
        price: '₦2,500',
        description: 'Daily cake special',
      },
    ],
  },
  {
    id: '5',
    name: 'Meat Masters',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    description:
      'Premium quality meats and poultry. Perfect for your BBQ and special occasions.',
    successRate: 96,
    phone: '+1234567894',
    whatsapp: '+1234567894',
    priceRange: 'premium',
    deliveryTime: 'standard',
    menu: [
      {
        name: 'Beef Selection',
        price: '₦8,000',
        description: 'Premium beef cuts',
      },
      {
        name: 'Chicken Pack',
        price: '₦5,500',
        description: 'Fresh chicken parts',
      },
      {
        name: 'BBQ Combo',
        price: '₦12,000',
        description: 'Mixed meats for BBQ',
      },
    ],
  },
  {
    id: '6',
    name: 'Healthy Bites',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    description:
      'Healthy and nutritious meals prepared with organic ingredients.',
    successRate: 98,
    phone: '+1234567895',
    whatsapp: '+1234567895',
    priceRange: 'mid',
    deliveryTime: 'standard',
    menu: [
      {
        name: 'Salad Bowl',
        price: '₦4,000',
        description: 'Fresh salad with protein',
      },
      {
        name: 'Smoothie Pack',
        price: '₦3,500',
        description: 'Fresh fruit smoothies',
      },
      {
        name: 'Protein Box',
        price: '₦5,000',
        description: 'High-protein meal prep',
      },
    ],
  },
  {
    id: '7',
    name: 'Sweet Treats',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    description:
      'Delicious desserts and sweet treats to satisfy your cravings.',
    successRate: 97,
    phone: '+1234567896',
    whatsapp: '+1234567896',
    priceRange: 'mid',
    deliveryTime: 'fast',
    menu: [
      {
        name: 'Cupcake Box',
        price: '₦3,500',
        description: 'Assorted cupcakes',
      },
      {
        name: 'Cookie Jar',
        price: '₦2,800',
        description: 'Freshly baked cookies',
      },
      {
        name: 'Dessert Platter',
        price: '₦6,000',
        description: 'Mixed dessert selection',
      },
    ],
  },
  {
    id: '8',
    name: 'Spice Kitchen',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    description:
      'Authentic local dishes with rich flavors and traditional recipes.',
    successRate: 96,
    phone: '+1234567897',
    whatsapp: '+1234567897',
    priceRange: 'budget',
    deliveryTime: 'standard',
    menu: [
      {
        name: 'Egusi Soup',
        price: '₦2,500',
        description: 'Traditional melon soup',
      },
      {
        name: 'Ogbono Soup',
        price: '₦2,500',
        description: 'African draw soup',
      },
      { name: 'Pepper Soup', price: '₦3,000', description: 'Spicy meat soup' },
    ],
  },
]

const ITEMS_PER_PAGE = 6

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Vendors - Drop Connect',
    description: 'Find and connect with local vendors for your delivery needs.',
    keywords: ['vendors', 'delivery', 'local businesses', 'services'],
    openGraph: {
      title: 'Vendors - Drop Connect',
      description:
        'Find and connect with local vendors for your delivery needs.',
    },
  }
}

export default async function VendorsPage({ searchParams }: Props) {
  const currentPage = Number((await searchParams).page) || 1
  const totalPages = Math.ceil(mockVendors.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentVendors = mockVendors.slice(startIndex, endIndex)

  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white relative'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={backgroundImage}
          alt='Vendors background'
          fill
          className='object-cover opacity-20'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-br from-orange-900/40 to-amber-900/40 mix-blend-multiply' />
      </div>

      {/* Main Content */}
      <main className='relative z-10 flex-1 flex flex-col gap-8 py-8 px-4 max-w-7xl mx-auto'>
        <VendorsContent vendors={currentVendors} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </main>
    </div>
  )
}
