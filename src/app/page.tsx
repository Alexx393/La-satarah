'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const herbs = [
  "/images/herbs/Mint.jpg",
  "/images/herbs/rosemary.jpg",
  "/images/herbs/Basil.jpg",
  "/images/herbs/parsley.jpg",
  "/images/herbs/Tarragon.jpg",
  "/images/herbs/sage.jpg",
  "/images/herbs/Thyme.jpg",
  "/images/herbs/marjoram.jpg",
  "/images/herbs/oregano.jpg"
]

type ClickEffect = { id: number; x: number; y: number }

export default function Home() {
  const [clicks, setClicks] = useState<ClickEffect[]>([])
  const [loading, setLoading] = useState(true)
  const [showSparkle, setShowSparkle] = useState(true)
  const [paused, setPaused] = useState(false)
  const sparkleTimeout = useRef<NodeJS.Timeout | null>(null)
  const conveyorRef = useRef<HTMLDivElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = Date.now()
    setClicks(prev => [...prev, { id, x: e.clientX, y: e.clientY }])
    setTimeout(() => setClicks(prev => prev.filter(c => c.id !== id)), 1000)
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showSparkle) {
      sparkleTimeout.current = setTimeout(() => setShowSparkle(false), 1800)
    }
    return () => {
      if (sparkleTimeout.current) clearTimeout(sparkleTimeout.current)
    }
  }, [showSparkle])

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen bg-green-900">
        <motion.img
          src="/logo.png"
          alt="Loading"
          className="w-48 h-32"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
        />
      </main>
    )
  }

  return (
    <main onClick={handleClick} className="min-h-screen text-white font-inter relative overflow-hidden">

      {/* 🌿 HERO SECTION with VIDEO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center py-40 px-4 overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline src="/videos/farm.mp4" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-green-950/60 z-0 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-400 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none z-10"/>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-700 opacity-10 rounded-full blur-2xl animate-pulse pointer-events-none z-10"/>
        <motion.div className="relative z-20 bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-green-100/20 max-w-xl w-full text-center">
          {showSparkle && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 1.2, duration: 1.5 }}
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/70 to-transparent blur-lg" />
            </motion.div>
          )}
          <motion.img src="/logo.png" alt="Logo" className="mx-auto w-64 h-auto mb-6" whileHover={{ rotate: 3, scale: 1.1 }} />
          <motion.h2 className="text-4xl md:text-5xl font-extrabold text-green-100 drop-shadow-lg mb-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            Nurturing Nature, Feeding Generations
          </motion.h2>
          <motion.p className="text-lg text-green-100/80 max-w-xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.3 }}>
            Rooted in Nanyuki, La Satarah exports Kenya’s finest herbs to the world — with care in every leaf.
          </motion.p>
        </motion.div>
      </section>

      {/* 🧊 GRID SECTION with conveyor belt effect */}
      <section className="relative z-20 py-24 px-6 bg-gradient-to-b from-green-950 via-black to-green-950">
        <motion.h3 className="text-center text-4xl md:text-5xl font-bold text-green-100 mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          Flowing With Nature’s Finest
        </motion.h3>
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          {/* 🔁 Conveyor Grid */}
          <motion.div
            ref={conveyorRef}
            className="flex gap-8 w-max cursor-grab"
            animate={paused ? {} : { x: ['0%', '-50%'] }}
            transition={{
              duration: paused ? 0 : 32,
              repeat: paused ? 0 : Infinity,
              ease: 'linear'
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {[...herbs, ...herbs].map((src, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-3xl border border-white/20 shadow-xl bg-white/10 backdrop-blur-2xl transition-all duration-300 relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.04))',
                  boxShadow: '0 8px 40px rgba(255,255,255,0.12), inset 0 1px 4px rgba(255,255,255,0.08)',
                  border: '2px solid rgba(255,255,255,0.18)',
                }}
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  filter: 'brightness(1.1) saturate(1.2)',
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-48 h-48 object-cover rounded-2xl border-2 border-white/20"
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🍃 Floating Leaves */}
      <motion.img src="/images/leaf2.svg" className="absolute bottom-12 right-10 w-10 opacity-30 z-30" animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity }} />

      {/* ✨ Click Sparkles */}
      {clicks.map(({ id, x, y }) => (
        <motion.img key={id} src="/images/leaf2.svg" initial={{ opacity: 1, scale: 0 }} animate={{ opacity: 0, scale: 2, rotate: 180 }} transition={{ duration: 1 }} className="pointer-events-none fixed w-10 h-10" style={{ top: y - 20, left: x - 20 }} />
      ))}
    </main>
  )
}
