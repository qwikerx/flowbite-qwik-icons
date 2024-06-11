import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconUnderlineSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "M7.5 16A5.506 5.506 0 0 1 2 10.5V1a1 1 0 0 1 2 0v9.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 1 2 0v9.5A5.506 5.506 0 0 1 7.5 16Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M5 2H1a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Zm9 0h-4a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2Zm1 18H1a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 16 20",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "n5_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})