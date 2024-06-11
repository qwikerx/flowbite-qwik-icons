import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconAngleUpSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M13 8a.992.992 0 0 1-.73-.317L7 2.042 1.73 7.683A1 1 0 0 1 .27 6.317l5.326-5.7a1.972 1.972 0 0 1 2.808 0l5.326 5.7A1 1 0 0 1 13 8Z",
    fill: "currentColor"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 14 8",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "eH_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})