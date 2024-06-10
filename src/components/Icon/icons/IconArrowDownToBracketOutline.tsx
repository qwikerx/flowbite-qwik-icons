import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconArrowDownToBracketOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M8 1.059v10.425m0 0 4-3.791m-4 3.79-4-3.79m11 3.79v2.844c0 .502-.21.985-.586 1.34a2.058 2.058 0 0 1-1.414.555H3c-.53 0-1.04-.2-1.414-.555A1.847 1.847 0 0 1 1 14.327v-2.843",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 16 18",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Mg_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})