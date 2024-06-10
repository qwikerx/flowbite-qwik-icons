import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconItalicSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "M3.873 16a1.001 1.001 0 0 1-.915-1.4L9.1.6a1 1 0 0 1 1.832.8l-6.142 14a1 1 0 0 1-.917.6Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M7.33 16H1a1 1 0 0 1 0-2h6.33a1 1 0 0 1 0 2ZM13 2H6.67a1 1 0 0 1 0-2H13a1 1 0 1 1 0 2Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 14 16",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Rj_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})