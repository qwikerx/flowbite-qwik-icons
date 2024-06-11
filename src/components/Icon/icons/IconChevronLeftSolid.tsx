import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconChevronLeftSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M4.99 10a.998.998 0 0 1-.706-.293L.292 5.712a1 1 0 0 1 0-1.412L4.284.305a.998.998 0 1 1 1.411 1.412L2.41 5.007l3.286 3.288A.999.999 0 0 1 4.99 10Z",
    fill: "currentColor"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 6 10",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "WW_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})