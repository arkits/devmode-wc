[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# DevMode Web Component

A floating dev mode toggle web component built with StencilJS. This component provides a sleek, non-intrusive way to toggle development mode in your web applications.

## Features

- 🎯 Floating pill design that stays out of the way
- 🔒 Origin-based visibility control
- 💫 Smooth animations and modern styling
- 🎨 Clean, minimal interface
- 📱 Responsive and mobile-friendly

## Installation

```bash
npm install devmode-wc
```

## Usage

### Script tag

```html
<!-- Add to your index.html -->
<script type="module" src="node_modules/devmode-wc/dist/devmode-wc/devmode-wc.esm.js"></script>

<!-- Use anywhere in your HTML -->
<devmode-wc></devmode-wc>
```

### Framework Integration

#### React
```jsx
import { defineCustomElements } from 'devmode-wc/loader';
defineCustomElements();

// In your component
const App = () => {
  const handleToggle = (event) => {
    console.log('Dev mode:', event.detail);
  };

  return (
    <devmode-wc
      allowed-origin="http://localhost:3000"
      onPillToggled={handleToggle}
    />
  );
};
```

#### Vue
```vue
import { defineCustomElements } from 'devmode-wc/loader';
defineCustomElements();

<template>
  <devmode-wc
    :allowed-origin="allowedOrigin"
    @pillToggled="handleToggle"
  />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      allowedOrigin: 'http://localhost:3000'
    }
  },
  methods: {
    handleToggle(event) {
      console.log('Dev mode:', event.detail);
    }
  }
}
</script>
```

#### Angular
```typescript
// In your app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineCustomElements } from 'devmode-wc/loader';

defineCustomElements();

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

// In your component
<devmode-wc
  [allowed-origin]="allowedOrigin"
  (pillToggled)="handleToggle($event)"
></devmode-wc>
```

## Properties

| Property        | Attribute        | Description                                      | Type     | Default     |
| -------------- | --------------- | ------------------------------------------------ | -------- | ----------- |
| `allowedOrigin` | `allowed-origin` | Only show component on this origin. If not set, shows everywhere | `string` | `undefined` |

## Events

| Event         | Description                           | Type                   |
| ------------- | ------------------------------------- | ---------------------- |
| `pillToggled` | Emitted when the toggle is switched   | `CustomEvent<boolean>` |

## Styling

The component uses the Inter font family by default. Make sure to include the font in your project:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet">
```

## License

MIT License