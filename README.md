# rafinad

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

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
файл собираются в папку dist
при передаче архива для размещения в файлах `assets/main.js` и `assets/main.css` необходимо подправить пути автозаменой по всему файлу
все url начинаются так `/images/..`, `/fonts/..`, `/files/..`

### Для домена https://trafficjam-2024.ru/

`main.css` - начало url  `/` на `../`, пример `/images/bg-body_1.webp` -> `../images/bg-body_1.webp`

`main.js` - начало url  `/` на `./`, пример `/images/icons/telegram.svg` -> `./images/icons/telegram.svg`

### Для домена https://rafinad.io/trafficjam2024/

в `main.css`, `main.js`

меняем начало url `/` на `/static/web/trafficjam2024/`, пример `/images/bg-body_1.webp` -> `/static/web/trafficjam2024/images/bg-body_1.webp`
