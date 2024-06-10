import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconCompressSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M13 18a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-1 1ZM5 6H1a1 1 0 0 1 0-2h3V1a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Zm0 12a1 1 0 0 1-1-1v-3H1a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM17 6h-4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v3h3a1 1 0 1 1 0 2Z",
    fill: "currentColor"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 18 18",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "qV_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})