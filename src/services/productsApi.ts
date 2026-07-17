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

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`)

  if (!response.ok) {
    throw new Error('Impossibile recuperare il prodotto')
  }

  const product: Product | null = await response.json()

  if (!product) {
    throw new Error('Prodotto non trovato')
  }

  return product
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${API_URL}/products/categories`)

  if (!response.ok) {
    throw new Error('Impossibile recuperare le categorie')
  }

  const categories: string[] = await response.json()

  return categories
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const encodedCategory = encodeURIComponent(category)

  const response = await fetch(`${API_URL}/products/category/${encodedCategory}`)

  if (!response.ok) {
    throw new Error('Impossibile recuperare i prodotti della categoria')
  }

  const products: Product[] = await response.json()

  return products
}
