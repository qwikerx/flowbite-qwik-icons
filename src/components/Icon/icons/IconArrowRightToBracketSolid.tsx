import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconArrowRightToBracketSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "M12.923 8.382a1 1 0 0 0-.217-1.09l-4-4a1 1 0 1 0-1.414 1.414L9.586 7H1a1 1 0 0 0 0 2h8.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a.99.99 0 0 0 .216-.325Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M15 0h-3a1 1 0 1 0 0 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 18 16",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Q9_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})