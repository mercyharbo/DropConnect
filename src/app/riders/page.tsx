import backgroundImage from '@/assets/2c4b183a-941b-4e8e-9004-fecec54b81c9.png'
import HeroSection from '@/components/riders/hero-section'
import RidersGrid from '@/components/riders/riders-grid'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Find Delivery Riders Near You | Drop Connect',
  description:
    'Connect with trusted delivery riders in your area. Fast, reliable, and professional service at your fingertips. Find riders for quick deliveries in Lagos.',
  keywords:
    'delivery riders, Lagos delivery, quick delivery, reliable riders, delivery service, motorcycle delivery, express delivery',
  openGraph: {
    title: 'Find Delivery Riders Near You | Drop Connect',
    description:
      'Connect with trusted delivery riders in your area. Fast, reliable, and professional service at your fingertips.',
    type: 'website',
    images: [
      {
        url: backgroundImage.src,
        width: 1200,
        height: 630,
        alt: 'Drop Connect - Find Delivery Riders',
      },
    ],
  },
}

export default function RidersPage() {
  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white relative'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={backgroundImage}
          alt='Delivery riders background'
          fill
          className='object-cover opacity-20'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/40 to-emerald-900/40 mix-blend-multiply' />
      </div>

      {/* Main Content */}
      <main className='relative z-10 flex-1 flex flex-col'>
        <HeroSection />

        {/* Riders Grid */}
        <section className='py-8 px-4'>
          <div className='max-w-7xl mx-auto'>
            <RidersGrid />
          </div>
        </section>
      </main>
    </div>
  )
}
