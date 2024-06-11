import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconCssSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M.906 0 2.5 17.781l7.5 2.16 7.544-2.159L19.091 0H.906Zm13.437 14.679-4.337 1.2h-.009l-4.341-1.2-.3-3.158h2.13l.151 1.521 2.36.637 2.363-.638.248-3.041H5.264l-.19-2h7.718l.177-2H4.87l-.177-2h10.614l-.964 10.679Z",
    fill: "#2F3039"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 20",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "0X_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})