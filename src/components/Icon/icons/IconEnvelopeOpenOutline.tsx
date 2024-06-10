import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconEnvelopeOpenOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M1 8v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8M1 8a1 1 0 0 1 .4-.8l8-5.75a1 1 0 0 1 1.2 0l8 5.75a1 1 0 0 1 .4.8M1 8l8.4 6.05a1 1 0 0 0 1.2 0L19 8",
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
}, 0, "Q1_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})