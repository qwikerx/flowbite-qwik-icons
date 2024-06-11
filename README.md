<div style="text-align: center">
  <h1>Flowbite Qwik Icon Components</h1>

  <p>
    Include popular Flowbite icons easily in your Qwik projects with `flowbite-qwik-icons` 🚀
  </p>
  <p>
    <a href="https://www.npmjs.com/package/flowbite-qwik-icons">
      <img src="https://img.shields.io/npm/dt/flowbite-qwik-icons.svg" alt="Total Downloads">
    </a>
    <a href="https://badge.fury.io/js/flowbite-qwik-icons">
      <img alt="Latest release" src="https://badge.fury.io/js/flowbite-qwik-icons.svg">
    </a>
    <a href="https://flowbite.com/getting-started/license/">
      <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
    </a>
  </p>
</div>

---

## Installation

Simply install the package with your package manager of choice:

```bash
npm i flowbite-qwik-icons
yarn add flowbite-qwik-icons
pnpm add flowbite-qwik-icons
```

## Usage

Icon size and color are inherited by default

```tsx
import { IconVolumeUpSolid } from 'flowbite-qwik-icons'

export const MyComponent = component$(() => {
  return (
    <div style={{ color: 'red', fontSize: '40px' }}>
      <IconVolumeUpSolid />
    </div>
  )
})
```

Icon can be used as component props

```tsx
import { IconVolumeUpSolid } from 'flowbite-qwik-icons'

export const MyComponent = component$(() => {
  return <Button prefix={IconVolumeUpSolid}>Next</Button>
})
```
