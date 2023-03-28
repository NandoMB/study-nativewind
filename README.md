
Install NativeWind and Tailwind dependencies
```bash
yarn add nativewind
yarn add --dev tailwindcss
```

Generate ```tailwind.config.js``` file
```bash
npx tailwindcss init
```

Update ```tailwind.config.js```
<custom directory> is the pages directory
```js
content: [
  './App.{js,jsx,ts,tsx}',
  './<custom directory>/**/*.{js,jsx,ts,tsx}'
],
```

Modify your ```babel.config.js```
```js
plugins: ['nativewind/babel'],
```

Support WEB
```bash
npx expo install react-native-web react-dom @expo/webpack-config
```


```bash
```

