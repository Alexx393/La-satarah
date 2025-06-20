'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-950 via-black to-green-950 text-green-100 px-6 py-20 font-sans relative overflow-hidden">

      {/* 🍃 Floating Decor */}
      <motion.img
        src="/images/leaf2.svg"
        alt="leaf"
        className="absolute w-24 left-10 top-20 opacity-10 pointer-events-none"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.img
        src="/images/leaf3.svg"
        alt="leaf"
        className="absolute w-32 right-0 top-1/2 opacity-10 pointer-events-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* 🌱 Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center mb-14 drop-shadow"
      >
        Who We Are
      </motion.h1>

      {/* 🔍 Story & Image */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.img
          src="/images/herbs/parsley.jpg"
          alt="Fresh herbs"
          className="rounded-2xl shadow-2xl w-full h-auto object-cover"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="space-y-6 text-lg text-green-100"
        >
          <p>
            <strong className="text-green-300">La Satarah Ltd.</strong> was born in the rich soil of <span className="text-green-200 font-semibold">Nanyuki, Kenya</span>, where traditional farming meets premium global herbal export.
          </p>
          <p>
            Our mission: preserve purity, deliver excellence. Every harvest is a promise kept — to our land, to our people, to the world.
          </p>
          <motion.p
            className="italic border-l-4 border-green-400 pl-4 text-green-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            “Every herb tells a story. Ours begins in Nanyuki.” – Nancy & Mercy
          </motion.p>
        </motion.div>
      </div>

      {/* 🌟 Company Values */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {[
          { label: "Certified Organic", icon: "🌿" },
          { label: "Sustainable & Fair", icon: "🌍" },
          { label: "Global Export Grade", icon: "🚚" },
        ].map(({ label, icon }, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-green-800/20 p-6 rounded-xl shadow-md border border-green-300 hover:shadow-xl transition backdrop-blur-sm"
          >
            <div className="text-3xl mb-2">{icon}</div>
            <h3 className="text-xl font-semibold">{label}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* 🧑🏽‍🌾 Founders Section */}
      <section className="mt-28 max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-green-100 mb-12"
        >
          Meet the Founders
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              name: "Nancy K. Kimathi",
              title: "Co-Founder",
              img: "/images/founders/Nancy.jpg", // Add actual image to /public/images/founders/
              quote: "Rooted in Nanyuki, thriving globally.",
            },
            {
              name: "Mercy Munene",
              title: "Co-Founder",
              img: "/images/founders/Mercy.jpg", // Add actual image to /public/images/founders/
              quote: "Driven by purpose, delivering purity.",
            },
          ].map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/5 border border-green-200/20 backdrop-blur-lg rounded-3xl p-6 text-center shadow-lg hover:shadow-green-400/20 transition duration-300"
            >
              <img
                src={founder.img}
                alt={founder.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-green-500 shadow-md object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-green-100">{founder.name}</h3>
              <p className="text-sm text-green-300 mb-2">{founder.title}</p>
              <p className="italic text-green-200 text-sm">“{founder.quote}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔙 Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="mt-16 text-center"
      >
        <Link
          href="/"
          className="text-green-300 hover:text-white border border-green-400 px-5 py-2 rounded-lg hover:bg-green-800 transition-all duration-300"
        >
          ← Back Home
        </Link>
      </motion.div>
    </main>
  )
}
