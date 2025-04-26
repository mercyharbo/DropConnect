import ogImage from '@/assets/2c4b183a-941b-4e8e-9004-fecec54b81c9.png'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Drop Connect - Find Riders & Vendors Near You',
  description:
    'Connect with trusted delivery and home service providers. Find riders for quick deliveries and vendors for home services in your area.',
  keywords:
    'delivery services, home services, riders, vendors, local services, delivery app',
  authors: [{ name: 'Code With Mercy' }],
  openGraph: {
    title: 'Drop Connect - Find Riders & Vendors Near You',
    description:
      'Connect with trusted delivery and home service providers. Find riders for quick deliveries and vendors for home services in your area.',
    type: 'website',
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: 'Drop Connect - Find Riders & Vendors Near You',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`}
      >
        <Navbar />
        <main className='min-h-[calc(100vh-4rem)]'>{children}</main>
      </body>
    </html>
  )
}
