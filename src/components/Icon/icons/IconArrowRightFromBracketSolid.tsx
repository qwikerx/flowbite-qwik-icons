import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconArrowRightFromBracketSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "M15.923 8.382a1 1 0 0 0-.217-1.09l-4-4a1 1 0 1 0-1.414 1.414L12.586 7H4a1 1 0 0 0 0 2h8.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a.989.989 0 0 0 .216-.325Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M6 14H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 16 16",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Iw_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})