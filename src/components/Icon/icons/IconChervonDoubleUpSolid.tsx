import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconChervonDoubleUpSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "M9.001 5.994a.999.999 0 0 1-.706-.293l-3.289-3.29-3.289 3.29A.999.999 0 1 1 .305 4.288L4.3.292a.999.999 0 0 1 1.412 0l3.996 3.996A1 1 0 0 1 9 5.994Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M9.001 11.988a.998.998 0 0 1-.706-.293l-3.289-3.29-3.289 3.29a1 1 0 1 1-1.412-1.413L4.3 6.286a.999.999 0 0 1 1.412 0l3.996 3.996A.999.999 0 0 1 9 11.988Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 10 12",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "xC_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})