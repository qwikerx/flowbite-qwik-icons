import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconHourglassSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M15 18h-2v-3.333a2 2 0 0 0-.4-1.2L10.45 10.6a1 1 0 0 1 0-1.2l2.15-2.867a2 2 0 0 0 .4-1.2V2h2a1 1 0 1 0 0-2H1a1 1 0 0 0 0 2h2v3.333a2 2 0 0 0 .4 1.2L5.55 9.4a1 1 0 0 1 0 1.2L3.4 13.467a2 2 0 0 0-.4 1.2V18H1a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z",
    fill: "currentColor"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 16 20",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "60_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})