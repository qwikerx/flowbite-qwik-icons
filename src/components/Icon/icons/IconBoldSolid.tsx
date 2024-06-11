import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconBoldSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M11.011 7.279A4.448 4.448 0 0 0 12 4.5 4.5 4.5 0 0 0 7.5 0H1a1 1 0 0 0 0 2h1v12H1a1 1 0 0 0 0 2h8.5a4.49 4.49 0 0 0 1.511-8.721ZM10 4.5A2.5 2.5 0 0 1 7.5 7H4V2h3.5A2.5 2.5 0 0 1 10 4.5ZM9.5 14H4V9h5.5a2.5 2.5 0 0 1 0 5Z",
    fill: "#2F3039"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 14 16",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "px_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})