import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconPenNibOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children: [
     _jsxQ("path", null, {
      d: "M9.338 12.276a1.614 1.614 0 1 0 0-3.228 1.614 1.614 0 0 0 0 3.228Z",
      fill: "#111928"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "m2.111 17.889 6.086-6.086m2.663-7.228 4.565 4.565-2.283 6.086L2.461 19 1 17.539 4.774 6.858l6.086-2.283Zm5.205 5.203-5.843-5.842L13.158 1 19 6.843l-2.935 2.935Zm-5.113.884a1.614 1.614 0 1 1-3.228 0 1.614 1.614 0 0 1 3.228 0Z",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, null, 3, null)
  ]
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 20",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "gE_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})