<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getProductById } from '@/services/productsApi'
import type { Product } from '@/types/Product'

const route = useRoute()

const product = ref<Product | null>(null)
const isLoading = ref<boolean>(true)
const errorMessage = ref<string>('')

async function loadProduct(): Promise<void> {
  const productId = Number(route.params.id)

  if (!Number.isInteger(productId) || productId <= 0) {
    errorMessage.value = 'Identificativo del prodotto non valido'
    isLoading.value = false
    return
  }

  try {
    product.value = await getProductById(productId)
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Si è verificato un errore imprevisto'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadProduct()
})
</script>

<template>
  <section class="product-view">
    <p v-if="isLoading" class="product-view__message" aria-live="polite">
      Caricamento del prodotto...
    </p>

    <p
      v-else-if="errorMessage"
      class="product-view__message product-view__message--error"
      role="alert"
    >
      {{ errorMessage }}
    </p>

    <article v-else-if="product" class="product-detail">
      <div class="product-detail__image-container">
        <img class="product-detail__image" :src="product.image" :alt="product.title" />
      </div>

      <div class="product-detail__content">
        <p class="product-detail__category">
          {{ product.category }}
        </p>

        <h1 class="product-detail__title">
          {{ product.title }}
        </h1>

        <p class="product-detail__price">€ {{ product.price.toFixed(2) }}</p>

        <p class="product-detail__description">
          {{ product.description }}
        </p>

        <RouterLink class="product-detail__back" to="/"> Torna ai prodotti </RouterLink>
      </div>
    </article>
  </section>
</template>

<style scoped lang="scss">
.product-view {
  &__message {
    padding: 2rem;
    border-radius: 12px;
    background-color: #ffffff;
    color: #475569;
    text-align: center;

    &--error {
      background-color: #fef2f2;
      color: #b91c1c;
    }
  }
}

.product-detail {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 4rem;
  align-items: center;
  padding: 3rem;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  background-color: #ffffff;

  &__image-container {
    display: grid;
    place-items: center;
    min-height: 450px;
  }

  &__image {
    width: 100%;
    max-width: 400px;
    max-height: 450px;
    object-fit: contain;
  }

  &__category {
    margin: 0 0 0.75rem;
    color: #2563eb;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__title {
    margin: 0;
    color: #111827;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.2;
  }

  &__price {
    margin: 1.5rem 0;
    color: #111827;
    font-size: 1.75rem;
    font-weight: 700;
  }

  &__description {
    margin: 0;
    color: #475569;
    line-height: 1.8;
  }

  &__back {
    display: inline-block;
    margin-top: 2rem;
    color: #2563eb;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 3px solid #2563eb;
      outline-offset: 4px;
    }
  }
}

@media (max-width: 800px) {
  .product-detail {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem;

    &__image-container {
      min-height: 300px;
    }

    &__image {
      max-height: 300px;
    }
  }
}
</style>
