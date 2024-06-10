import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconCalendarPlusSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M20.922 4.034a2 2 0 0 0-2-2h-2v-1a1 1 0 0 0-2 0v1h-3v-1a1 1 0 0 0-2 0v1h-3v-1a1 1 0 0 0-2 0v1h-2a2 2 0 0 0-2 2v2h20v-2Zm-20 4v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-10h-20Zm12 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z",
    fill: "#2F3039"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 21 21",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "lp_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})