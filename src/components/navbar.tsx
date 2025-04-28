'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from './ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: '/riders',
      label: 'Riders',
    },
    {
      href: '/vendors',
      label: 'Vendors',
    },
  ]

  const menuVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    }),
  }

  return (
    <nav className='border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm relative z-30'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='text-xl font-bold text-white flex gap-1'>
            <span className='font-mono tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent'>
              Drop
            </span>
            <span className='font-mono'>Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-center space-x-4'>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === route.href
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsOpen(!isOpen)}
              className='text-slate-300 hover:bg-slate-800 hover:text-white'
            >
              <Menu className='h-6 w-6' />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className='md:hidden fixed inset-0 bg-black/60 z-40'
              initial='closed'
              animate='open'
              exit='closed'
              variants={overlayVariants}
            />
            <motion.div
              className='md:hidden fixed inset-y-0 left-0 w-[80%] h-screen bg-slate-900 z-50 p-4 py-8 flex flex-col gap-8 space-y-10'
              initial='closed'
              animate='open'
              exit='closed'
              variants={menuVariants}
            >
              <div className='flex items-center justify-between'>
                <Link
                  href='/'
                  className='text-xl font-bold text-white flex gap-1'
                >
                  <span className='font-mono tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent'>
                    Drop
                  </span>
                  <span className='font-mono'>Connect</span>
                </Link>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setIsOpen(false)}
                  className='text-slate-300 text-2xl hover:bg-slate-800 hover:text-white'
                >
                  <X size={24} />
                </Button>
              </div>

              <div className='flex flex-col gap-8 w-full'>
                {routes.map((route, i) => (
                  <motion.div
                    key={route.href}
                    custom={i}
                    variants={itemVariants}
                    initial='closed'
                    animate='open'
                  >
                    <Link
                      href={route.href}
                      className={`block rounded-md text-lg font-medium ${
                        pathname === route.href
                          ? 'bg-blue-600 text-white px-4 py-2'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
