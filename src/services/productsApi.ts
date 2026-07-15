import type { Product } from '@/types/Product'

const API_URL = 'https://fakestoreapi.com'

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`)

  if (!response.ok) {
    throw new Error('Impossibile recuperare i prodotti')
  }

  const products: Product[] = await response.json()

  return products
}
