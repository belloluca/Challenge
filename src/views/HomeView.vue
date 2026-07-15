<template>
  <section class="home">
    <header class="home__header">
      <p class="home__eyebrow">Catalogo online</p>
      <h1 class="home__title">Scopri i nostri prodotti</h1>
      <p class="home__description">Esplora il catalogo e seleziona una categoria.</p>
    </header>

    <section class="home__products" aria-labelledby="products-title">
      <h2 id="products-title" class="home__products-title">Tutti i prodotti</h2>

      <div class="home__placeholder">I prodotti verranno visualizzati qui.</div>
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
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.8rem;
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

  &__placeholder {
    min-height: 250px;
    padding: 2rem;
    display: grid;
    place-items: center;
    border: 2px dashed #cbd5e1;
    border-radius: 16px;
    background-color: #ffffff;
    color: #64748b;
    text-align: center;
  }
}
</style>
