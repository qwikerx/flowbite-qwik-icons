import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconChevronLeftOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "m5 1.549-4 3.79 4 3.792",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 6 11",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "WM_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})