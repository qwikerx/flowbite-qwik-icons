import * as flowbite from '@qwikest/icons/flowbite'
import { writeFileSync, rmSync, mkdirSync } from 'fs'

const ICON_PATH = './src/components/Icon'

// clear icons directory
rmSync(ICON_PATH, { recursive: true, force: true })

// create directory for icons
mkdirSync(`${ICON_PATH}/icons`, { recursive: true })

const icons = Object.keys(flowbite).map((icon) => {
  const iconName = icon.replace('Fl', 'Icon')

  return {
    name: iconName,
    path: `${ICON_PATH}/icons/${iconName}.tsx`,
    content: `import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const ${iconName} = component$<IconProps>((props) => {
  const ic = ${flowbite[icon].toString().replace('(props) =>', '').replaceAll('/* @__PURE__ */', '')}

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})`,
  }
})

icons.forEach((icon) => {
  writeFileSync(icon.path, icon.content)
})

// generate index to export all icons
const indexContent = icons.map((icon) => `export { ${icon.name} } from './icons/${icon.name}'`).join('\n')

writeFileSync(`${ICON_PATH}/index.ts`, indexContent)

console.log('Icons generated successfully')
