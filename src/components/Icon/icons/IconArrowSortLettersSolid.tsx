import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconArrowSortLettersSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M4.708.294a1 1 0 0 0-1.416 0l-3 3a1 1 0 0 0 1.415 1.413L3 3.414V17a1 1 0 1 0 2 0V3.414l1.293 1.293a1 1 0 0 0 1.414-1.414L4.708.294ZM11 2h3.586l-4.293 4.293A1 1 0 0 0 11 8h6a1 1 0 1 0 0-2h-3.586l4.293-4.293A1 1 0 0 0 17 0h-6a1 1 0 1 0 0 2Zm3.4 7.553a1.043 1.043 0 0 0-1.79 0l-3.5 7a1 1 0 0 0 1.79.894L11.618 16h3.764l.723 1.447a1 1 0 0 0 1.79-.894l-3.495-7ZM12.618 14l.882-1.764.882 1.764h-1.764Z",
    fill: "#2F3039"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 18 18",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Yk_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})