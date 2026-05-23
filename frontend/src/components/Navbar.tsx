'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container-main flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          🛍️ AVANOR
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-400 transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
          <Link href="/cart" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Cart
          </Link>
          <Link href="/login" className="border border-blue-400 px-4 py-2 rounded hover:bg-blue-600">
            Sign In
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4">
          <Link href="/" className="block py-2 hover:text-blue-400">
            Home
          </Link>
          <Link href="/products" className="block py-2 hover:text-blue-400">
            Products
          </Link>
          <Link href="/about" className="block py-2 hover:text-blue-400">
            About
          </Link>
          <Link href="/contact" className="block py-2 hover:text-blue-400">
            Contact
          </Link>
          <Link href="/cart" className="block py-2 hover:text-blue-400">
            Cart
          </Link>
          <Link href="/login" className="block py-2 hover:text-blue-400">
            Sign In
          </Link>
        </div>
      )}
    </nav>
  )
}
