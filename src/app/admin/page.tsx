'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

type Product = {
  name: string
  quantity: number
}

export default function AdminPage() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [newProduct, setNewProduct] = useState({ name: '', quantity: '' })

  useEffect(() => {
    const role = localStorage.getItem('role')
    if (role === 'admin') {
      setIsAdmin(true)
      const saved = localStorage.getItem('la_satarah_products')
      setProducts(saved ? JSON.parse(saved) : [])
    } else {
      setIsAdmin(false)
      router.replace('/')
    }
  }, [router])

  useEffect(() => {
    if (isAdmin) {
      localStorage.setItem('la_satarah_products', JSON.stringify(products))
    }
  }, [products, isAdmin])

  const handleQuantityChange = (index: number, value: string) => {
    const newProducts = [...products]
    newProducts[index].quantity = parseInt(value) || 0
    setProducts(newProducts)
  }

  const handleAddProduct = () => {
    if (!newProduct.name.trim()) return
    const exists = products.find(
      p => p.name.toLowerCase() === newProduct.name.toLowerCase()
    )
    if (exists) return alert('Product already exists!')
    setProducts(prev => [
      ...prev,
      { name: newProduct.name.trim(), quantity: parseInt(newProduct.quantity) || 0 },
    ])
    setNewProduct({ name: '', quantity: '' })
  }

  if (isAdmin === null) {
    return <p className="p-10 text-center text-gray-500">Checking admin status...</p>
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-950 via-black to-green-950 text-white py-16 px-6 font-sans relative overflow-hidden">
      
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-green-100 mb-12 drop-shadow-xl"
      >
        🌿 Admin Dashboard
      </motion.h1>

      <div className="max-w-5xl mx-auto grid gap-8">
        {/* Stats Summary */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="glass-card text-center">
            <p className="text-sm text-green-200">Total Products</p>
            <p className="text-2xl font-bold text-green-300">{products.length}</p>
          </div>
          <div className="glass-card text-center">
            <p className="text-sm text-green-200">Total Quantity</p>
            <p className="text-2xl font-bold text-green-300">
              {products.reduce((sum, p) => sum + p.quantity, 0)}
            </p>
          </div>
        </motion.div>

        {/* Editable Products List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-8"
        >
          <h2 className="text-xl font-semibold text-green-200 mb-6">Current Inventory</h2>

          {products.length === 0 ? (
            <p className="italic text-green-300">No products added yet.</p>
          ) : (
            <div className="grid gap-4">
              {products.map((prod, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:border-green-400 transition-all"
                >
                  <span className="font-medium text-green-100">{prod.name}</span>
                  <input
                    type="number"
                    value={prod.quantity}
                    onChange={(e) => handleQuantityChange(i, e.target.value)}
                    className="w-20 text-right px-3 py-1 bg-white/10 border border-green-300/20 rounded-md text-green-100 placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Add New Product */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-8"
        >
          <h2 className="text-xl font-semibold text-green-200 mb-6">Add New Product</h2>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="e.g. Mint Leaves"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-green-300/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newProduct.quantity}
              onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
              className="w-32 px-4 py-2 rounded-md bg-white/10 border border-green-300/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleAddProduct}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md transition"
            >
              ➕ Add
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating lights */}
      <motion.div
        className="absolute -top-32 -left-20 w-96 h-96 bg-green-400/10 blur-3xl rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-50px] w-[300px] h-[300px] bg-green-700/10 blur-3xl rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
    </main>
  )
}
