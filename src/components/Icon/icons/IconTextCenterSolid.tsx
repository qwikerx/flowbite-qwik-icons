import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconTextCenterSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M11 2H3a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm2 4H1a1 1 0 0 1 0-2h12a1 1 0 1 1 0 2Zm-2 4H3a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm2 4H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Z",
    fill: "currentColor"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 14 14",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "2e_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})