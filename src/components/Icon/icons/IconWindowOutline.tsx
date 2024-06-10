import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconWindowOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children: [
     _jsxQ("path", null, {
      d: "M1 7H19M2 1H18C18.5523 1 19 1.44772 19 2V16C19 16.5523 18.5523 17 18 17H2C1.44772 17 1 16.5523 1 16V2C1 1.44772 1.44772 1 2 1Z",
      stroke: "#111928",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M4.5 5C5.05228 5 5.5 4.55228 5.5 4C5.5 3.44772 5.05228 3 4.5 3C3.94772 3 3.5 3.44772 3.5 4C3.5 4.55228 3.94772 5 4.5 5Z",
      fill: "#111928"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M7.5 5C8.05228 5 8.5 4.55228 8.5 4C8.5 3.44772 8.05228 3 7.5 3C6.94772 3 6.5 3.44772 6.5 4C6.5 4.55228 6.94772 5 7.5 5Z",
      fill: "#111928"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M10.5 5C11.0523 5 11.5 4.55228 11.5 4C11.5 3.44772 11.0523 3 10.5 3C9.94772 3 9.5 3.44772 9.5 4C9.5 4.55228 9.94772 5 10.5 5Z",
      fill: "#111928"
    }, null, 3, null)
  ]
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 18",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "iM_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})