# Flowbite Qwik Icons

Include popular Flowbite icons easily in your Qwik projects with `flowbite-qwik-icons` 🚀

- [Flowbite Icons](https://flowbite.com/icons/)

## Installation

Simply install the package with your package manager of choice:

```bash
npm i @qwikerx/flowbite-qwik-icons
yarn add @qwikerx/flowbite-qwik-icons
pnpm add @qwikerx/flowbite-qwik-icons
```

## Usage

Icon size and color are inherited by default

```tsx
import { IconVolumeUpSolid } from "@qwikerx/flowbite-qwik-icons"

export const MyComponent = component$(() => {
  return (
    <div style={{ color: "red", fontSize: "40px" }}>
      <IconVolumeUpSolid />
    </div>
  )
})
```

Icon can be used as component props

```tsx
import { IconVolumeUpSolid } from "@qwikerx/flowbite-qwik-icons"

export const MyComponent = component$(() => {
  return (
    <Button prefix={IconVolumeUpSolid}>
      Next
    </Button>
  )
})
```