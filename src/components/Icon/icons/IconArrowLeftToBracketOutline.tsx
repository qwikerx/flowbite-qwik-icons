import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconArrowLeftToBracketOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M1 7.64h11m0 0L8 3.85m4 3.79-4 3.791m4-10.424h3c.53 0 1.04.2 1.414.555.375.355.586.837.586 1.34v9.477c0 .503-.21.985-.586 1.34a2.057 2.057 0 0 1-1.414.556h-3",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 18 16",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "0H_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})