'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FooterSecretUnlock() {
  const [tapCount, setTapCount] = useState(0)
  const router = useRouter()

  const handleTap = () => {
    const newCount = tapCount + 1
    if (newCount === 3) {
      localStorage.setItem('role', 'admin')
      router.push('/admin')
    }
    setTapCount(newCount)
    setTimeout(() => setTapCount(0), 1500) // Reset after 1.5 seconds
  }

  return (
    <div className="text-center text-xs text-green-300 mt-10">
      <span onClick={handleTap} className="cursor-pointer select-none hover:text-green-400 transition">
        © 2025 La Satarah Ltd. 🌿
      </span>
    </div>
  )
}