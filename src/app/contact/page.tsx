'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800 px-6 py-16 font-sans relative overflow-hidden">
      
      {/* 🍃 Floating Leaves */}
      <motion.img
        src="/images/leaf2.svg"
        alt="leaf"
        className="absolute w-20 top-20 left-10 opacity-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.img
        src="/images/leaf3.svg"
        alt="leaf"
        className="absolute w-28 bottom-20 right-10 opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* ✉️ Contact Form Wrapper */}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-green-800 mb-6 text-center"
        >
          Contact La Satarah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-10 text-lg text-center max-w-2xl mx-auto text-gray-700"
        >
          Have questions about our herbs, export services, or want to partner with us? We’d love to hear from you.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-xl"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold text-green-700">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-green-700">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col">
            <label htmlFor="message" className="mb-2 font-semibold text-green-700">Your Message</label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows={6}
              className="p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-green-700 text-white font-bold rounded-md hover:bg-green-800 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-center text-sm text-gray-600"
        >
          <p>Owned by Ambrose Kimathi Maingi & Eric Munene Maingi</p>
          <p className="mt-1">Located in Nanyuki, Kenya</p>
        </motion.div>
        {/* 🌿 Back to Home Button (Mobile Only) */}
            <a
            href="/"
            className="fixed bottom-6 right-6 z-50 block md:hidden bg-green-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-800 transition transform hover:scale-105"
            >
            ← Home
            </a>

      </div> 

    </main>
  )
}
