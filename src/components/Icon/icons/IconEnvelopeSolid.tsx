import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconEnvelopeSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 16",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Gf_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})