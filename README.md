# Challenge – Fake Store

Applicazione e-commerce realizzata con Vue 3 e TypeScript.

Il progetto utilizza la [Fake Store API](https://fakestoreapi.com/) per recuperare dinamicamente prodotti e categorie e mostrarli attraverso un'interfaccia responsive e accessibile.

## Funzionalità

L'applicazione permette di:

- visualizzare tutti i prodotti disponibili;
- visualizzare immagine, titolo, categoria e prezzo di ogni prodotto;
- filtrare i prodotti per categoria;
- mantenere la categoria selezionata all'interno dell'URL;
- accedere direttamente a una categoria tramite URL;
- aprire la pagina di dettaglio di un prodotto;
- visualizzare la descrizione completa del prodotto;
- gestire gli stati di caricamento;
- gestire gli errori delle chiamate API;
- gestire prodotti e categorie non validi;
- navigare attraverso la tastiera;
- utilizzare l'applicazione su dispositivi desktop, tablet e mobile.

## Tecnologie utilizzate

- Vue 3
- TypeScript
- Vite
- Vue Router
- Composition API
- Sass
- HTML semantico
- Fake Store API
- Git
- GitHub
- ESLint
- Prettier

## Prerequisiti

Per installare ed eseguire il progetto è necessario avere installato:

- Node.js
- npm
- Git

## Setup del progetto

Clonare il repository GitHub:

```bash
git clone https://github.com/belloluca/Challenge.git
```

Entrare nella cartella del progetto:

```bash
cd Challenge
```

Installare le dipendenze:

```bash
npm install
```

## Esecuzione del progetto

Avviare il server di sviluppo:

```bash
npm run dev
```

Vite mostrerà nel terminale l'indirizzo locale dell'applicazione:

```text
http://localhost:5173/
```

Aprire l'indirizzo indicato nel browser.

Per interrompere il server di sviluppo, utilizzare:

```text
Ctrl + C
```

## Controlli del progetto

Per verificare che il codice rispetti i tipi definiti con TypeScript:

```bash
npm run type-check
```

Per individuare problemi di qualità del codice, errori comuni e violazioni delle regole:

```bash
npm run lint
```

Per creare la build ottimizzata per la produzione:

```bash
npm run build
```

## Struttura principale

```text
Challenge/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AppHeader.vue
│   │   └── ProductCard.vue
│   ├── router/
│   │   └── index.ts
│   ├── services/
│   │   └── productsApi.ts
│   ├── types/
│   │   └── Product.ts
│   ├── views/
│   │   ├── HomeView.vue
│   │   └── ProductView.vue
│   ├── App.vue
│   └── main.ts
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Organizzazione dell'applicazione

### `App.vue`

Rappresenta il componente principale dell'applicazione.

Contiene la struttura generale della pagina, il componente dell'header e il punto in cui Vue Router mostra la view corrispondente all'URL corrente.

### `AppHeader.vue`

Gestisce l'intestazione dell'applicazione e la navigazione tra le categorie.

Le categorie vengono recuperate dinamicamente dalla Fake Store API e mostrate attraverso collegamenti gestiti da Vue Router.

### `HomeView.vue`

Rappresenta la pagina principale.

Recupera tutti i prodotti oppure quelli appartenenti alla categoria selezionata e li mostra attraverso una griglia responsive.

### `ProductCard.vue`

Rappresenta graficamente un singolo prodotto nella Home.

Riceve il prodotto attraverso una prop e mostra:

- immagine;
- categoria;
- titolo;
- prezzo.

L'intera card è cliccabile e conduce alla pagina di dettaglio del prodotto.

### `ProductView.vue`

Rappresenta la pagina del prodotto mostrando i vari dettagli.

Recupera l'identificativo del prodotto dai parametri dell'URL e utilizza tale identificativo per richiedere il prodotto alla Fake Store API.

### `productsApi.ts`

Contiene le funzioni che effettuano le richieste HTTP alla Fake Store API.

In questo modo separiamo la logica relativa alle API dai componenti grafici.

### `Product.ts`

Contiene le interfacce TypeScript utilizzate per descrivere la struttura dei prodotti ricevuti dall'API.

### `router/index.ts`

Contiene la configurazione delle rotte dell'applicazione.

Le rotte principali sono:

```text
/
```

per la Home e:

```text
/products/:id
```

per la pagina di dettaglio del prodotto.

## API utilizzata

Il progetto utilizza la Fake Store API:

```text
https://fakestoreapi.com
```

Endpoint principali utilizzati:

```text
GET /products
GET /products/:id
GET /products/categories
GET /products/category/:category
```

Le chiamate vengono effettuate tramite la funzione JavaScript `fetch`.

## Gestione del filtro per categoria

La categoria selezionata viene salvata nella query string dell'URL.

Esempio:

```text
/?category=electronics
```

Questo permette di:

- mantenere il filtro dopo il ricaricamento della pagina;
- condividere direttamente il collegamento a una categoria;
- utilizzare i pulsanti avanti e indietro del browser;
- evitare di creare una pagina separata per ogni categoria.

## Accessibilità

Nel progetto sono stati utilizzati alcuni accorgimenti di accessibilità:

- elementi HTML semantici;
- navigazione tramite tastiera;
- focus visibile sugli elementi interattivi;
- testi alternativi per le immagini;
- collegamenti utilizzabili tramite il tasto Invio;
- `aria-live` per comunicare gli aggiornamenti non urgenti;
- `role="alert"` per comunicare gli errori;
- contrasto leggibile tra testo e sfondo.

## Responsive design

L'interfaccia è stata progettata per adattarsi a diverse dimensioni dello schermo.

La griglia dei prodotti modifica il numero di colonne in base allo spazio disponibile:

- più colonne su desktop;
- meno colonne su tablet;
- una colonna su smartphone.

Su schermi piccoli, l'elenco delle categorie può essere scorso orizzontalmente.

## Gestione degli errori

L'applicazione gestisce diversi casi di errore:

- problemi durante le richieste HTTP;
- prodotto inesistente;
- identificativo del prodotto non valido;
- categoria inesistente o senza prodotti;
- risposta non valida da parte dell'API.

In caso di errore viene mostrato un messaggio comprensibile all'utente.

## Utilizzo dell'intelligenza artificiale

Durante lo sviluppo ho utilizzato strumenti di intelligenza artificiale come supporto per comprendere alcuni concetti relativi a Vue, TypeScript, Vue Router, accessibilità e organizzazione del progetto.

L'intelligenza artificiale è stata utilizzata per chiarire alcune parti del codice, ricevere suggerimenti sulla struttura del progetto, individuare e correggere errori e migliorare l'accessibilità dell'applicazione.

Le soluzioni proposte sono state verificate e adattate alle esigenze della consegna. Durante lo sviluppo ho cercato di comprendere il funzionamento del codice e le responsabilità dei diversi componenti presenti nel progetto.
