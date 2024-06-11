import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconRulerCombinedSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M18 12h-1v4a1 1 0 0 1-2 0v-4h-1v4a1 1 0 0 1-2 0v-4h-1v4a1 1 0 0 1-2 0v-4H8v-1H4a1 1 0 0 1 0-2h4V7.961A.977.977 0 0 1 7.8 8H4a1 1 0 0 1 0-2h3.805c.068.006.135.02.2.039V5H4a1 1 0 0 1 0-2h4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v17a1 1 0 0 0 1 1h17a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2ZM4.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
    fill: "currentColor"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 20",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "H4_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})