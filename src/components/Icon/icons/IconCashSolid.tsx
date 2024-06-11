import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconCashSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children: [
     _jsxQ("path", null, {
      d: "M18 0H6a2 2 0 0 0-2 2h10a4 4 0 0 1 4 4v6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z",
      fill: "currentColor"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M14 16H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",
      fill: "currentColor"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
      fill: "#fff"
    }, null, 3, null)
  ]
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 16",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "IR_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})