import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconHeadphonesOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M19 13v-3a9 9 0 1 0-18 0v3m2-3h3v7H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Zm11 0h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3v-7Z",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 18",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Qs_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})