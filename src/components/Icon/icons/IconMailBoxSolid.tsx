import { IconProps } from '@qwikest/icons'
import { FlMailBoxSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { JSXNode, component$ } from '@builder.io/qwik'

export const IconMailBoxSolid = component$<IconProps>((props) => {
  const el = QwikestIcon(props)
  el.children = updateFillOfChildren(el.children as JSXNode, 'currentColor')

  return <>{el}</>
})