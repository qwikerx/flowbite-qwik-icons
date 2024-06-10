import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconChervonDoubleLeftSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "M4.995 10a1 1 0 0 1-.707-.293L.292 5.712a.999.999 0 0 1 0-1.412L4.288.305a1 1 0 1 1 1.413 1.412l-3.29 3.29 3.29 3.288A.999.999 0 0 1 4.995 10Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M10.989 10a1 1 0 0 1-.707-.293L6.286 5.712a.999.999 0 0 1 0-1.412L10.282.305a1 1 0 1 1 1.413 1.412l-3.29 3.29 3.29 3.288A.998.998 0 0 1 10.989 10Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 12 10",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "P3_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})