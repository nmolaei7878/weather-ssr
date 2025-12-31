# Weather App

This project is a Weather application with **two separate implementations**: SSR (Server-Side Rendering) and CSR (Client-Side Rendering). The app fetches weather data for a list of cities and displays it in a clean, user-friendly interface.

---

## Usage

```bash
git checkout ssr || git checkout csr
npm install
npm run dev
```

## Branches

### 1. **SSR Branch**

- **Purpose:** Fetch weather data on the server and render it on the client side.
- **Behavior:**
  - Weather data is fetched during server-side rendering.
  - The list of cities is static and does **not use localStorage**.
  - Adding or deleting cities in the SSR branch does **not affect the displayed list**.
- **Reasoning:**
  - We keep SSR intact to preserve **SEO benefits, fast initial load, and server-side caching**.
  - Client-side features like localStorage could break SSR benefits if used directly, so we avoid it in this branch.

---

### 2. **CSR Branch**

- **Purpose:** Fully client-side weather fetching and dynamic city management.
- **Behavior:**
  - Weather requests are made from the browser (client-side).
  - Cities are stored in **localStorage**, so adding or removing cities immediately updates the list.
  - Provides a **dynamic experience** for managing cities.
- **Routes:**
  - `/city-crud`: Allows you to **add or remove cities** and immediately see changes reflected in the weather list.
