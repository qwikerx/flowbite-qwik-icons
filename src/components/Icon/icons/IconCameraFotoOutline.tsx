import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconCameraFotoOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, [
     _jsxQ("path", null, {
      d: "M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 18",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Tr_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})