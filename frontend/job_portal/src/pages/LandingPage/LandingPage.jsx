import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Analytics from './components/Analytics'
import Footer from './components/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <Hero />
        <Features />
        <Analytics />
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage