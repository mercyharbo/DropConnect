export interface Service {
  name: string
  image: string
  price: number
}

export interface Vendor {
  id: number
  name: string
  image: string
  service_type: string
  verified: boolean
  description: string
  services: Service[]
  opening_hours: string
  working_days: string[]
  location: string
  success_rate: number
  phone: string
  whatsapp: string
  created_at: string
}
