'use client'

import { useState } from 'react' // ✅ Needed for click animation
import { motion } from 'framer-motion'
import Link from 'next/link'

type Product = {
  name: string
  description: string
  image: string
}

const products: Product[] = [
  {
    name: "Parsley",
    description: "Fresh, vibrant, and rich in vitamins. Used in culinary and medicinal applications.",
    image: "/images/herbs/parsley.jpg",
  },
  {
    name: "Basil",
    description: "A fragrant herb used in global cuisine, especially for sauces and teas.",
    image: "/images/herbs/basil.jpg",
  },
  {
    name: "Rosemary",
    description: "Earthy and aromatic. Loved in cooking and herbal remedies.",
    image: "/images/herbs/rosemary.jpg",
  },
  {
    name: "Tarragon",
    description: "Sweet and anise-like, ideal for French cuisine and herbal infusions.",
    image: "/images/herbs/tarragon.jpg",
  },
  {
    name: "Marjoram",
    description: "Mild and floral. Used in seasoning blends and wellness products.",
    image: "/images/herbs/marjoram.jpg",
  },
  {
    name: "Mint",
    description: "Cooling and versatile. Found in teas, oils, and desserts.",
    image: "/images/herbs/mint.jpg",
  },
  {
    name: "Giant Sage",
    description: "Known for its bold leaves and calming aroma. Used in teas and rituals.",
    image: "/images/herbs/Sage.jpg",
  },
  {
    name: "Oregano",
    description: "Classic Mediterranean herb used in sauces, oils, and traditional medicine.",
    image: "/images/herbs/oregano.jpg",
  },
  {
    name: "Onions",
    description: "Bold, aromatic bulbs packed with flavor and nutrients.",
    image: "/images/herbs/onions.jpg",
  },
]

type ClickEffect = { id: number; x: number; y: number }

export default function ProductsPage() {
  const [clicks, setClicks] = useState<ClickEffect[]>([])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = Date.now()
    const { clientX: x, clientY: y } = e
    setClicks(prev => [...prev, { id, x, y }])
    setTimeout(() => {
      setClicks(prev => prev.filter(click => click.id !== id))
    }, 1000)
  }

  return (
    <main
      onClick={handleClick}
      className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800 p-10 relative overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-green-800 mb-10 text-center"
      >
        Our Products
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white border border-green-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-all transform hover:scale-[1.03] hover:bg-green-50"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 0.3 }}
          >
            <motion.img
              src={product.image}
              alt={product.name}
              className="rounded-lg h-48 w-full object-cover mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <h2 className="text-xl font-semibold text-green-900 mb-2">{product.name}</h2>
            <p className="text-sm text-gray-700">{product.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* 💥 Click Effects (Leaf Bursts) */}
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

      {/* 🌿 Back to Home Button (Mobile Only) */}
      <div className="mt-10 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow hover:bg-green-800 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
