'use client'

import { Product } from '@/types'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/slices/cartSlice'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }))
  }

  return (
    <div className="card">
      <div className="relative h-48 mb-4 bg-gray-200 rounded overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
        {product.originalPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
            Sale
          </div>
        )}
      </div>

      <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

      <div className="flex items-center mb-3">
        <div className="flex items-center gap-1">
          {'⭐'.repeat(Math.floor(product.rating))}
        </div>
        <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 btn-primary"
        >
          Add to Cart
        </button>
        <Link
          href={`/products/${product.id}`}
          className="flex-1 btn-secondary text-center"
        >
          View
        </Link>
      </div>
    </div>
  )
}
