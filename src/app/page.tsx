/* eslint-disable @next/next/no-html-link-for-pages */
/* eint-disable @next/next/no-html-link-for-pages */
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const herbs = [
  "/images/herbs/Mint.jpg",
  "/images/herbs/rosemary.jpg",
  "/images/herbs/Basil.jpg",
  "/images/herbs/parsley.jpg",
  "/images/herbs/Tarragon.jpg",
  "/images/herbs/sage.jpg",
  "/images/herbs/Thyme.jpg",
  "/images/herbs/marjoram.jpg"
]

type ClickEffect = { id: number; x: number; y: number }

function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white focus:outline-none"
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-green-800 text-white flex flex-col items-center py-4 space-y-4 z-40 shadow-md">
          <a href="/" className="hover:text-green-300" onClick={() => setOpen(false)}>Home</a>
          <a href="/about" className="hover:text-green-300" onClick={() => setOpen(false)}>About</a>
          <a href="/products" className="hover:text-green-300" onClick={() => setOpen(false)}>Products</a>
          <a href="/contact" className="hover:text-green-300" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </div>
  )
}


export default function Home() {
  const [clicks, setClicks] = useState<ClickEffect[]>([])
  const [loading, setLoading] = useState(true)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = Date.now()
    const { clientX: x, clientY: y } = e
    setClicks(prev => [...prev, { id, x, y }])

    setTimeout(() => {
      setClicks(prev => prev.filter(click => click.id !== id))
    }, 1000)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen bg-green-900">
        <motion.img
          src="/logo.png"
          alt="Loading La Satarah"
          className="w-50 h-32"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
        />
      </main>
    )
  }

  return (
    <main onClick={handleClick} className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/farm.mp4"
      />

      {/* 🧭 NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-md bg-green-900/70 text-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">La Satarah Ltd.</h1>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          <a href="/" className="hover:text-green-300 transition">Home</a>
          <a href="/about" className="hover:text-green-300 transition">About</a>
          <a href="/products" className="hover:text-green-300 transition">Products</a>
          <a href="/contact" className="hover:text-green-300 transition">Contact</a>
        </div>

        {/* Mobile Hamburger Menu */}
        <MobileMenu />
      </nav>

      {/* 🟢 HERO SECTION */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center py-40 px-4 backdrop-blur-sm">
        <motion.img
          src="/logo.png"
          alt="La Satarah Logo"
          className="w-64 h-auto mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ rotate: 3, scale: 1.1 }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl font-extrabold text-green-100 drop-shadow-lg mb-4"
        >
          Nurturing Nature, Feeding Generations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.3 }}
          className="text-lg max-w-2xl text-green-200"
        >
          Rooted in Nanyuki, La Satarah exports Kenya’s finest herbs to the world — with care in every leaf.
        </motion.p>
      </section>

      {/* 🌿 HERB SPOTLIGHT BELT (Responsive & Scrollable) */}
      <div className="relative z-10 mt-[-2rem] mb-20 px-4 overflow-x-auto scrollbar-hide">
        <motion.div
          className="inline-flex gap-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl min-w-max"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {herbs.map((src, idx) => (
            <motion.img
              whileHover={{ scale: 1.2, rotate: 1 }}
              key={idx}
              src={src}
              alt="herb"
              className="w-36 h-36 rounded-xl object-cover shadow-md transition-transform duration-300"
            />
          ))}
        </motion.div>
      </div>



      {/* 🍃 FLOATING BACKGROUND LEAVES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.img
          src="/images/leaf.svg"
          alt="leaf"
          className="w-6 h-6 absolute top-10 left-10 opacity-80"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.img
          src="/images/leaf2.svg"
          alt="leaf"
          className="w-6 h-6 absolute top-40 right-10 opacity-60"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.img
          src="/images/leaf3.svg"
          alt="leaf"
          className="w-8 h-8 absolute bottom-10 left-1/2 opacity-25"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* 🌿 LEAF CLICK EFFECTS */}
      {clicks.map(({ id, x, y }) => (
        <motion.img
          key={id}
          src="/images/leaf2.svg"
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 0, scale: 2, rotate: 180 }}
          transition={{ duration: 1 }}
          className="pointer-events-none fixed w-10 h-10"
          style={{ top: y - 20, left: x - 20 }}
        />
      ))}

    </main>
  )
}
