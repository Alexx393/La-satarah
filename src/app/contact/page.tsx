'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-950 via-black to-green-950 text-green-100 font-sans px-6 py-24 relative overflow-hidden">

      {/* 🌿 Floating Leaves */}
      <motion.div
        className="absolute left-10 top-24 w-20 opacity-10 pointer-events-none"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <Image
          src="/images/leaf2.svg"
          alt="Leaf"
          width={80}
          height={80}
          style={{ width: '100%', height: 'auto' }}
        />
      </motion.div>
      <motion.div
        className="absolute right-8 bottom-16 w-24 opacity-10 pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        <Image
          src="/images/leaf3.svg"
          alt="Leaf"
          width={96}
          height={96}
          style={{ width: '100%', height: 'auto' }}
        />
      </motion.div>

      {/* 📬 Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-green-100 drop-shadow mb-4">Let’s Connect</h1>
        <p className="text-lg text-green-300 max-w-xl mx-auto">
          Whether it&apos;s a large order, a partnership, or just to say hello — we&apos;re listening.
        </p>
      </motion.div>

      {/* 💌 Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-16 max-w-4xl mx-auto bg-white/5 border border-green-200/20 backdrop-blur-xl shadow-2xl rounded-3xl p-10 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-green-200 mb-2">Full Name</label>
            <motion.input
              type="text"
              id="name"
              placeholder="Jane Muthoni"
              whileFocus={{ scale: 1.02 }}
              className="w-full rounded-lg border border-green-400/30 bg-green-100/10 text-green-100 px-4 py-3 placeholder-green-300 outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-green-200 mb-2">Email Address</label>
            <motion.input
              type="email"
              id="email"
              placeholder="you@lasatarah.com"
              whileFocus={{ scale: 1.02 }}
              className="w-full rounded-lg border border-green-400/30 bg-green-100/10 text-green-100 px-4 py-3 placeholder-green-300 outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-green-200 mb-2">Your Message</label>
          <motion.textarea
            id="message"
            rows={6}
            placeholder="Tell us what’s on your mind..."
            whileFocus={{ scale: 1.01 }}
            className="w-full rounded-lg border border-green-400/30 bg-green-100/10 text-green-100 px-4 py-3 placeholder-green-300 outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition"
        >
          📩 Send Message
        </motion.button>
      </motion.form>

      {/* 📍 Location + Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-14 text-green-300 text-sm"
      >
        <p>📍 Nanyuki, Kenya — Open Mon to Sat, 8 AM – 5 PM</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="mailto:hello@lasatarah.com" className="hover:underline">Email</a>
          <a href="https://wa.me/2547xxxxxxxx" className="hover:underline">WhatsApp</a>
          <a href="https://instagram.com/lasatarah" className="hover:underline">Instagram</a>
        </div>
      </motion.div>

      {/* 🔙 Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="text-center mt-10"
      >
        <Link
          href="/"
          className="inline-block text-green-300 hover:text-white border border-green-400 px-5 py-2 rounded-lg hover:bg-green-800 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </motion.div>

      {/* 🌟 Glow Orbs */}
      <motion.div
        className="absolute top-[-80px] left-[-40px] w-80 h-80 bg-green-400/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-80px] right-[-40px] w-72 h-72 bg-green-600/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
    </main>
  )
}
