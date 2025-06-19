'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [glowOnce, setGlowOnce] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setShowNavbar(currentY < lastScrollY || currentY < 80)
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (glowOnce) {
      const timer = setTimeout(() => setGlowOnce(false), 1800)
      return () => clearTimeout(timer)
    }
  }, [glowOnce])

  const toggleMenu = () => setMobileOpen(prev => !prev)
  const closeMenu = () => setMobileOpen(false)

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          key="navbar"
          initial={{
            y: -80,
            opacity: 0,
            boxShadow: '0 0 0 0 rgba(34,197,94,0)',
            filter: 'brightness(1) blur(0px)'
          }}
          animate={
            glowOnce
              ? {
                  y: 0,
                  opacity: 1,
                  boxShadow: [
                    '0 0 0 0 rgba(34,197,94,0)',
                    '0 8px 32px 0 rgba(34,197,94,0.18)',
                    '0 0 24px 4px rgba(34,197,94,0.25)',
                    '0 8px 32px 0 rgba(34,197,94,0.18)',
                    '0 0 0 0 rgba(34,197,94,0)'
                  ],
                  filter: [
                    'brightness(1) blur(0px)',
                    'brightness(1.08) blur(0.5px)',
                    'brightness(1.12) blur(1px)',
                    'brightness(1.08) blur(0.5px)',
                    'brightness(1) blur(0px)'
                  ]
                }
              : {
                  y: 0,
                  opacity: 1,
                  boxShadow: '0 0 0 0 rgba(34,197,94,0)',
                  filter: 'brightness(1) blur(0px)'
                }
          }
          transition={{
            duration: glowOnce ? 1.8 : 0.7,
            type: 'easeInOut'
          }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-gradient-to-b from-green-950/90 via-black/70 to-green-950/80 border-b border-green-400/10 shadow-lg transition-shadow duration-300"
        >
          {/* Static aura behind navbar */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 h-2 bg-green-400/30 blur-lg rounded-full" />
            <div className="absolute left-0 top-0 w-1/3 h-2 bg-green-700/20 blur-2xl rounded-full" />
            <div className="absolute right-0 top-0 w-1/3 h-2 bg-green-300/20 blur-2xl rounded-full" />
          </div>
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative z-10">
            {/* 👑 Logo and Company Name aligned to far left */}
            <div className="flex items-center gap-3 justify-start flex-shrink-0">
              <img
                src="logo.png"
                alt="La Satarah Logo"
                className="w-10 h-10 rounded-full shadow-md border border-green-400 bg-white/10"
              />
              <Link href="/" className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-100 to-white">
                La Satarah
              </Link>
            </div>
            {/* 🧭 Desktop Nav */}
            <div className="hidden md:flex gap-8 text-sm font-semibold text-green-100">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-2 transition-all duration-200 hover:text-green-300 ${
                    pathname === item.href ? 'text-green-300' : ''
                  } group`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Animated underline */}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 bottom-[-7px] h-[3px] w-full bg-gradient-to-r from-green-300 via-green-400 to-green-200 rounded-full shadow-[0_0_12px_2px_rgba(34,197,94,0.25)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {/* Shimmer bar on hover - animation removed */}
                  <span
                    className="absolute left-0 bottom-[-7px] h-[3px] w-full bg-gradient-to-r from-green-400/0 via-green-400/60 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none"
                  />
                </Link>
              ))}
            </div>
            {/* 📱 Mobile Menu Icon */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-green-100 text-2xl hover:text-green-400 transition-all focus:outline-none"
              >
                <span className="inline-block">
                  {mobileOpen ? <HiX /> : <HiMenu />}
                </span>
              </button>
            </div>
          </div>
          {/* 📱 Slide-down Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden flex flex-col gap-5 px-6 py-6 bg-black/80 backdrop-blur-xl border-t border-green-400/10"
              >
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`text-lg font-medium transition-colors ${
                      pathname === item.href ? 'text-green-300' : 'text-green-100'
                    } hover:text-green-300`}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
