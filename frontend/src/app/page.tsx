'use client'

import ProductCard from '@/components/ProductCard'
import { Product } from '@/types'
import { useQuery } from '@tanstack/react-query'
import api from '@/utils/api'

async function getProducts(): Promise<Product[]> {
  const response = await api.get('/products')
  return response.data.data
}

export default function Home() {
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <div className="container-main py-12">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to AVANOR</h1>
          <p className="text-xl mb-8">Premium shopping experience with unbeatable prices</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-4xl font-bold mb-10">Featured Products</h2>

        {isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading products...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Failed to load products. Please try again later.
          </div>
        )}

        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          !isLoading && <p className="text-center text-gray-600">No products available</p>
        )}
      </section>

      {/* Call to Action */}
      <section className="mt-20 bg-gray-100 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-8">Get exclusive deals and latest updates</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded mr-2 w-64"
        />
        <button className="btn-primary">Subscribe</button>
      </section>
    </div>
  )
}
