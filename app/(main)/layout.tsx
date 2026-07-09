import React from 'react'
import Navbar from '@/components/landing/Navbar'
import { AuthModal } from '@/components/auth/auth-modal'
import Footer from '@/components/landing/Footer'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <AuthModal />
      <Footer />
    </div>
  )
}
