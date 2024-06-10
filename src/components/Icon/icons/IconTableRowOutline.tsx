import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconTableRowOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M1 8a1 1 0 0 0 0 2V8Zm18 2a1 1 0 1 0 0-2v2ZM2 2h16V0H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v10h2V2h-2Zm0 10v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 12H0a2 2 0 0 0 2 2v-2Zm0 0V2H0v10h2ZM2 2V0a2 2 0 0 0-2 2h2Zm0 4h17V4H2v2Zm9 7V6H9v7h2ZM1 10h18V8H1v2Z",
    fill: "#111928"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 14",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "VF_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})