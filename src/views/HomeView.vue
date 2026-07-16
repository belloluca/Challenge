<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getProducts, getProductsByCategory } from '@/services/productsApi'
import ProductCard from '@/components/ProductCard.vue'
import type { Product } from '@/types/Product'

const products = ref<Product[]>([])
const isLoading = ref<boolean>(true)
const errorMessage = ref<string>('')
const route = useRoute()

async function loadProducts(): Promise<void> {
  isLoading.value = true
  errorMessage.value = ''

  const category = typeof route.query.category === 'string' ? route.query.category : ''

  try {
    products.value = category ? await getProductsByCategory(category) : await getProducts()
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Si è verificato un errore imprevisto'
  } finally {
    isLoading.value = false
  }
}
watch(
  () => route.query.category,
  () => {
    loadProducts()
  },
)

onMounted(() => {
  loadProducts()
})
</script>

<template>
  <section class="home">
    <header class="home__header">
      <p class="home__eyebrow">Catalogo online</p>

      <h1 class="home__title">Scopri i nostri prodotti</h1>

      <p class="home__description">Esplora il catalogo e seleziona una categoria.</p>
    </header>

    <section class="home__products" aria-labelledby="products-title">
      <h2 id="products-title" class="home__products-title">
        {{ typeof route.query.category === 'string' ? route.query.category : 'Tutti i prodotti' }}
      </h2>

      <p v-if="isLoading" class="home__message" aria-live="polite">Caricamento dei prodotti...</p>

      <p v-else-if="errorMessage" class="home__message home__message--error" role="alert">
        {{ errorMessage }}
      </p>

      <div v-else class="home__grid">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
.home {
  &__header {
    margin-bottom: 3rem;
  }

  &__eyebrow {
    margin: 0 0 0.5rem;
    color: #2563eb;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__title {
    margin: 0;
    color: #111827;
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.1;
  }

  &__description {
    max-width: 650px;
    margin: 1rem 0 0;
    color: #4b5563;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  &__products-title {
    margin: 0 0 1.5rem;
    color: #111827;
    font-size: 1.5rem;
  }

  &__message {
    padding: 2rem;
    border-radius: 12px;
    background-color: #ffffff;
    color: #475569;
    text-align: center;

    &--error {
      color: #b91c1c;
      background-color: #fef2f2;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 1000px) {
  .home__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 750px) {
  .home__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 500px) {
  .home__grid {
    grid-template-columns: 1fr;
  }
}
</style>
