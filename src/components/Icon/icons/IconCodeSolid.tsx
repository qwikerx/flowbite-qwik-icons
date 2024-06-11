import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconCodeSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M5.707 3.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 1 0 1.414-1.414L2.414 8l3.293-3.293a1 1 0 0 0 0-1.414Zm14 4-4-4a1 1 0 1 0-1.414 1.414L17.586 8l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414ZM11.142.01a1 1 0 0 0-1.132.848l-2 14a1 1 0 1 0 1.98.284l2-14A1 1 0 0 0 11.142.01Z",
    fill: "currentColor"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 16",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "tQ_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})