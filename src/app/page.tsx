'use client'

import backgroundImage from '@/assets/2c4b183a-941b-4e8e-9004-fecec54b81c9.png'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Package, Store } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: custom * 0.2 + 0.6,
      },
    }),
    hover: {
      y: -8,
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <div className='h-full flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white relative z-10'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={backgroundImage}
          alt='Delivery and home services background'
          fill
          className='object-cover opacity-20'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/40 to-emerald-900/40 mix-blend-multiply' />
      </div>

      {/* Hero Section */}
      <main className='relative z-10 flex-1 flex flex-col'>
        <section className='flex-1 flex flex-col items-center justify-center px-4 text-center'>
          <motion.div
            className='max-w-4xl mx-auto space-y-6'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.h1
              className='text-3xl sm:text-2xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 leading-tight'
              variants={itemVariants}
            >
              Connect with Trusted Delivery & Home Service Experts
            </motion.h1>

            <motion.p
              className='text-xl sm:text-2xl text-blue-100/80 max-w-2xl mx-auto'
              variants={itemVariants}
            >
              Instantly find reliable riders for your deliveries and skilled
              vendors for all your home service needs.
            </motion.p>

            {/* Action Cards */}
            <div className='grid sm:grid-cols-2 gap-6 mt-12 w-full max-w-2xl mx-auto'>
              <motion.div
                className='group relative cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-1 shadow-lg'
                variants={cardVariants}
                custom={0}
                initial='hidden'
                animate='visible'
                whileHover='hover'
              >
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0'
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className='relative bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col items-center justify-center'>
                  <Package className='h-12 w-12 mb-4 text-blue-300' />
                  <h3 className='text-xl font-bold mb-2'>Find a Rider</h3>
                  <p className='text-blue-100/70 mb-4 text-sm'>
                    Quick delivery services at your fingertips
                  </p>
                  <Button className='bg-blue-600 hover:bg-blue-700 text-white w-full'>
                    Get Started
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className='group relative overflow-hidden cursor-pointer rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-1 shadow-lg'
                variants={cardVariants}
                custom={1}
                initial='hidden'
                animate='visible'
                whileHover='hover'
              >
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-0'
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className='relative bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col items-center justify-center'>
                  <Store className='h-12 w-12 mb-4 text-emerald-300' />
                  <h3 className='text-xl font-bold mb-2'>Find a Vendor</h3>
                  <p className='text-emerald-100/70 mb-4 text-sm'>
                    Home services from trusted providers
                  </p>
                  <Button className='bg-emerald-600 hover:bg-emerald-700 text-white w-full'>
                    Explore Services
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
