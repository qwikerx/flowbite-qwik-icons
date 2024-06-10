import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconArrowLeftSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M13 5H3.414l2.293-2.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.416l4 4a1 1 0 0 0 1.414-1.414L3.414 7H13a1 1 0 1 0 0-2Z",
    fill: "currentColor"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 14 11",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "FS_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})