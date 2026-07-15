<template>
  <header class="app-header">
    <div class="app-header__container">
      <RouterLink class="app-header__brand" to="/">
        <span class="app-header__logo" aria-hidden="true">Q</span>
        <span>Qubica Store</span>
      </RouterLink>

      <nav class="app-header__navigation" aria-label="Categorie dei prodotti">
        <span class="app-header__placeholder"> Categorie in caricamento... </span>
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

  &__placeholder {
    color: #6b7280;
    font-size: 0.9rem;
  }
}

@media (max-width: 700px) {
  .app-header__container {
    min-height: auto;
    padding: 1rem 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
