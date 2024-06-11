import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconCaretLeftOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M7.293 2.18 1.707 7.474a.923.923 0 0 0-.293.67c0 .251.106.492.293.67l5.586 5.294a1.046 1.046 0 0 0 1.09.205.99.99 0 0 0 .448-.349.913.913 0 0 0 .169-.526V2.85a.913.913 0 0 0-.169-.527.99.99 0 0 0-.448-.349 1.051 1.051 0 0 0-.578-.053 1.018 1.018 0 0 0-.512.259Z",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 10 16",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "ca_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})