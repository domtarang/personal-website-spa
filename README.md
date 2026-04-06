# personal-website-spa

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


## API base URL configuration

This project uses `VITE_API_BASE_URL` to decide where API requests go.

### Local development

`/.env.development` is set to:

```env
VITE_API_BASE_URL=/api
```

That works with the Vite proxy in `vite.config.js`, which forwards `/api/*` requests to `http://localhost:3000` while developing locally.

### Production

`/.env.production` is set to:

```env
VITE_API_BASE_URL=https://api.domtarang.com/api
```

So when you build for production, the SPA will call your deployed API subdomain directly.

If you deploy the API somewhere else later, update `VITE_API_BASE_URL` before running `npm run build`.
