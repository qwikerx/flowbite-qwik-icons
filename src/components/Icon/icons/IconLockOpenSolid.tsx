import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconLockOpenSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M15.077.019a4.658 4.658 0 0 0-4.083 4.714V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1.006V4.68a2.624 2.624 0 0 1 2.271-2.67 2.5 2.5 0 0 1 2.729 2.49V8a1 1 0 0 0 2 0V4.5A4.505 4.505 0 0 0 15.077.019ZM9 15.167a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Z",
    fill: "#2F3039"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 20",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "wa_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})