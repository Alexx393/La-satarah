'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'


export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800 px-6 py-16 font-sans relative overflow-hidden">
      
      {/* 🍃 Animated Background Leaves */}
      <motion.img
        src="/images/leaf2.svg"
        alt="leaf"
        className="absolute w-24 left-10 top-20 opacity-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.img
        src="/images/leaf3.svg"
        alt="leaf"
        className="absolute w-32 right-0 top-1/2 opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* 🌱 Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-green-800 mb-12 text-center"
      >
        Who We Are
      </motion.h1>

      {/* 🪞 Split layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 mb-16">
        {/* 📸 Image */}
        <motion.img
          src="/images/herbs/parsley.jpg"
          alt="Farm field"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        />

        {/* 📝 Story */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700">
            <strong>La Satarah Ltd.</strong> was born in the rich soil of <span className="font-semibold text-green-700">Nanyuki, Kenya</span>, where tradition meets innovation.
            What started as a simple herb garden has grown into a leading exporter of premium organic herbs — loved by chefs, healers, and global markets.
          </p>
          <p className="text-lg text-gray-700">
            Our roots go deep. We cultivate with integrity, harvest with respect, and ship with care — because we believe every leaf matters.
          </p>
          <p className="text-md italic text-green-700 border-l-4 border-green-400 pl-4">
            “From the land to the world, our hands stay green.” – Ambrose & Eric
          </p>
        </motion.div>
      </div>

      {/* 🌍 Company Values */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {["Certified Organic", "Sustainable & Fair", "Global Export Grade"].map((value, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-green-800">{value}</h3>
          </motion.div>
        ))}
        {/* 🌿 Back to Home Button (Mobile Only) */}
        <Link href="/">Home</Link>


      </div>

      {/* 🧑🏽‍🌾 Founders Highlight */}
      <div className="mt-20 text-center text-sm text-gray-600">
        <p>Founded and led by <strong>Ambrose Kimathi Maingi</strong> & <strong>Eric Munene Maingi</strong></p>
        <p className="mt-1">Rooted in Nanyuki, inspired by nature, powered by purpose.</p>
      </div>

    </main>
  )
}
