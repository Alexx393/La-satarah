'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Product = {
  name: string
  description: string
  image: string
}

const defaultProducts: Product[] = [
  { name: "Parsley", description: "Fresh, vibrant, and rich in vitamins. Used in culinary and medicinal applications.", image: "/images/herbs/parsley.jpg" },
  { name: "Basil", description: "A fragrant herb used in global cuisine, especially for sauces and teas.", image: "/images/herbs/basil.jpg" },
  { name: "Rosemary", description: "Earthy and aromatic. Loved in cooking and herbal remedies.", image: "/images/herbs/rosemary.jpg" },
  { name: "Tarragon", description: "Sweet and anise-like, ideal for French cuisine and herbal infusions.", image: "/images/herbs/tarragon.jpg" },
  { name: "Marjoram", description: "Mild and floral. Used in seasoning blends and wellness products.", image: "/images/herbs/marjoram.jpg" },
  { name: "Mint", description: "Cooling and versatile. Found in teas, oils, and desserts.", image: "/images/herbs/mint.jpg" },
  { name: "Giant Sage", description: "Known for its bold leaves and calming aroma. Used in teas and rituals.", image: "/images/herbs/sage.jpg" },
  { name: "Oregano", description: "Classic Mediterranean herb used in sauces, oils, and traditional medicine.", image: "/images/herbs/oregano.jpg" },
  { name: "Onions", description: "Bold, aromatic bulbs packed with flavor and nutrients.", image: "/images/herbs/onions.jpg" },
]

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts(defaultProducts)
  }, [])

  const handleSecretClick = () => {
    localStorage.setItem('role', 'admin')
    window.location.href = '/admin'
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-950 via-black to-green-950 text-green-100 px-6 py-20 font-sans relative overflow-hidden">

      {/* 🍃 Premium Aura Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-400 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-700 opacity-10 rounded-full blur-2xl animate-pulse pointer-events-none" />

      {/* ✨ Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-green-50 text-center mb-16 drop-shadow"
      >
        Quality Produce 🌿
      </motion.h1>

      {/* 🌿 Herb Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-white/10 border border-green-400/30 backdrop-blur-2xl p-4 rounded-3xl shadow-2xl hover:shadow-green-400/40 transition-all duration-300 overflow-hidden relative"
            style={{
              boxShadow: '0 8px 40px 0 rgba(16, 185, 129, 0.18), 0 1.5px 8px 0 rgba(255,255,255,0.08) inset',
              border: '2px solid rgba(16,185,129,0.22)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(16,185,129,0.10) 100%)',
              backdropFilter: 'blur(22px) saturate(1.25)',
            }}
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none z-10 group-hover:shadow-[0_0_0_4px_rgba(34,197,94,0.45)] transition-all duration-300" />
            <motion.img
              src={product.image}
              alt={product.name}
              className="rounded-2xl w-full h-60 object-cover mb-4 group-hover:brightness-110 group-hover:shadow-[0_0_24px_4px_rgba(34,197,94,0.35)] transition duration-300 border-2 border-transparent group-hover:border-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <h2 className="text-2xl font-semibold text-green-50">{product.name}</h2>
            <p className="text-green-200 text-sm mt-2">{product.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* 🏡 Back Home */}
      <div className="mt-20 text-center z-10 relative">
        <Link
          href="/"
          className="text-green-200 hover:text-white border border-green-400 px-6 py-3 rounded-xl hover:bg-green-800 transition-all duration-300"
        >
          ← Return to Home
        </Link>
      </div>

      {/* 🔐 Hidden Admin Access */}
      <footer className="mt-12 text-center text-sm text-green-200/80 z-10 relative">
        <p>La Satarah Ltd. — Cultivating Premium Quality Produce from Nanyuki to the world 🌍</p>
        <div className="mt-2">
          <span
            onClick={handleSecretClick}
            className="cursor-pointer hover:text-green-100 text-xs"
          >
            Premium Access 🌿
          </span>
        </div>
      </footer>
    </main>
  )
}
