import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconChartMixedSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "M2 12a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1Zm5-4a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Zm5 4a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1Zm5-4a1 1 0 0 0-1 1v9a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M2 9a1 1 0 0 0 .77-.359L7 3.563l4.231 5.078a1.037 1.037 0 0 0 1.538 0l5-6a1.001 1.001 0 0 0-1.538-1.282L12 6.438 7.769 1.359a1.037 1.037 0 0 0-1.538 0l-5 6A1 1 0 0 0 2 9Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 19 19",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "8d_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})