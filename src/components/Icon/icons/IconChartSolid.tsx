import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconChartSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "M17 14H2V1a1 1 0 0 0-2 0v14a1 1 0 0 0 1 1h16a1 1 0 0 0 0-2Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M5 12a.999.999 0 0 0 .8-.4l2.432-3.244 2.213 1.476a1 1 0 0 0 1.412-.317l2.461-4.1 2.127 1.418a1 1 0 0 0 1.11-1.664l-3-2a1 1 0 0 0-1.412.317l-2.461 4.1-2.127-1.418A1 1 0 0 0 7.2 6.4l-3 4A1 1 0 0 0 5 12Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 18 16",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "OX_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})