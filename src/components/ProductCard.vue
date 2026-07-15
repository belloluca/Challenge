<script setup lang="ts">
import type { Product } from '@/types/Product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <RouterLink class="product-card" :to="`/products/${product.id}`">
    <img class="product-card__image" :src="product.image" :alt="product.title" />

    <div class="product-card__content">
      <p class="product-card__category">
        {{ product.category }}
      </p>

      <h3 class="product-card__title">
        {{ product.title }}
      </h3>

      <p class="product-card__price">€ {{ product.price.toFixed(2) }}</p>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.product-card {
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background-color: #ffffff;
  display: block;
  color: inherit;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgb(15 23 42 / 10%);
  }

  &:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 3px;
  }

  &__image {
    width: 100%;
    height: 240px;
    padding: 1.5rem;
    object-fit: contain;
    background-color: #ffffff;
  }

  &__content {
    padding: 1.25rem;
  }

  &__category {
    margin: 0 0 0.5rem;
    color: #2563eb;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__title {
    min-height: 3rem;
    margin: 0;
    color: #111827;
    font-size: 1rem;
    line-height: 1.5;
  }

  &__price {
    margin: 1rem 0 0;
    color: #111827;
    font-size: 1.2rem;
    font-weight: 700;
  }
}
</style>
