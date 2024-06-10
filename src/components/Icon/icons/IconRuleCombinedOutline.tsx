import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconRuleCombinedOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M13 13v3m3-3v3M7 7H4m3-3H4m3 6H4m6 3v3m8-3H7V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v17h17a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 20",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Hm_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})