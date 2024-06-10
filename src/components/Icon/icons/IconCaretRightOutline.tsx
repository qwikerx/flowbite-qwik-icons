import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconCaretRightOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "m2.707 14.108 5.586-5.294a.923.923 0 0 0 .293-.67.923.923 0 0 0-.293-.67L2.707 2.18a1.018 1.018 0 0 0-.512-.26 1.051 1.051 0 0 0-.578.054.99.99 0 0 0-.448.35A.913.913 0 0 0 1 2.85v10.588c0 .187.059.37.169.526a.99.99 0 0 0 .448.35c.183.07.384.09.578.053a1.02 1.02 0 0 0 .512-.26Z",
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
}, 0, "bk_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})