# Can Vue.js be used inside of React?

## To test this

```bash
yarn install
yarn start
```

## Sort of

- This app uses React (packaged and bundled) and Vue 3 with the vue@next CDN
- React components can be natively added, Vue components are imported with JQuery
- React is in the src/ folder, Vue is in the /public folder. Both React and Vue are mounted at `/public/index.html`

### Styled with

[Water.css](https://watercss.kognise.dev/)
