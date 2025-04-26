'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className='pt-24 pb-12 px-4 text-center'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-3xl mx-auto space-y-4'
      >
        <h1 className='text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100'>
          Find a Rider Near You
        </h1>
        <p className='text-xl text-blue-100/80 max-w-2xl mx-auto'>
          Connect with trusted delivery riders in your area. Fast, reliable, and
          professional service at your fingertips.
        </p>
      </motion.div>
    </section>
  )
}
