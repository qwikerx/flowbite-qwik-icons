import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconCameraFotoSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M17 2h-1.382l-.171-.342A2.985 2.985 0 0 0 12.764 0H7.236a2.984 2.984 0 0 0-2.683 1.658L4.382 2H3a3 3 0 0 0-3 3v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a3 3 0 0 0-3-3Zm-3.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
    fill: "currentColor"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 18",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "g6_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})