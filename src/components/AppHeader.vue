<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getCategories } from '@/services/productsApi'

const categories = ref<string[]>([])
const isLoading = ref<boolean>(true)
const errorMessage = ref<string>('')
const route = useRoute()

async function loadCategories(): Promise<void> {
  try {
    categories.value = await getCategories()
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Si è verificato un errore imprevisto'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadCategories()
})
</script>

<template>
  <header class="app-header">
    <div class="app-header__container">
      <RouterLink class="app-header__brand" to="/">
        <span class="app-header__logo" aria-hidden="true">Q</span>
        <span>Qubica Store</span>
      </RouterLink>

      <nav class="app-header__navigation" aria-label="Categorie dei prodotti">
        <span v-if="isLoading" class="app-header__message"> Categorie in caricamento... </span>

        <span
          v-else-if="errorMessage"
          class="app-header__message app-header__message--error"
          role="alert"
        >
          {{ errorMessage }}
        </span>

        <ul v-else class="app-header__categories">
          <li>
            <RouterLink
              class="app-header__category-link"
              :class="{
                'app-header__category-link--active': typeof route.query.category !== 'string',
              }"
              to="/"
            >
              Tutti
            </RouterLink>
          </li>

          <li v-for="category in categories" :key="category">
            <RouterLink
              class="app-header__category-link"
              :class="{
                'app-header__category-link--active': route.query.category === category,
              }"
              :to="{
                name: 'home',
                query: { category },
              }"
            >
              {{ category }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  border-bottom: 1px solid #e5e7eb;
  background-color: #ffffff;

  &__container {
    width: min(1200px, calc(100% - 2rem));
    min-height: 72px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #111827;
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
  }

  &__logo {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background-color: #2563eb;
    color: #ffffff;
  }

  &__categories {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__category-link {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    color: #475569;
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      background-color: #eff6ff;
      color: #2563eb;
    }

    &:focus-visible {
      outline: 3px solid #2563eb;
      outline-offset: 2px;
    }

    &--active {
      background-color: #2563eb;
      color: #ffffff;
    }

    &__category-link--active:hover {
      background-color: #1d4ed8;
      color: #ffffff;
    }
  }

  &__message {
    color: #64748b;
    font-size: 0.9rem;

    &--error {
      color: #b91c1c;
    }
  }
}

@media (max-width: 700px) {
  .app-header {
    &__container {
      min-height: auto;
      padding: 1rem 0;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    &__navigation {
      width: 100%;
    }

    &__categories {
      width: 100%;
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 0.5rem;
    }

    &__category-link {
      white-space: nowrap;
    }
  }
}
</style>
