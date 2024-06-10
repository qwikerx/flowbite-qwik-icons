import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconDotsVerticalOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M1.5 2h.01M1.5 8h.01m-.01 6h.01",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-width": "3"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 4 16",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "fn_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})