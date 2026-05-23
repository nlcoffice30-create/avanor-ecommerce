'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-main grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">AVANOR</h3>
          <p className="text-sm">Premium e-commerce platform with cutting-edge technology.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/products" className="hover:text-blue-400">Products</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-blue-400">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-blue-400">Shipping Info</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm">
        <p>&copy; 2024 AVANOR. All rights reserved.</p>
      </div>
    </footer>
  )
}
