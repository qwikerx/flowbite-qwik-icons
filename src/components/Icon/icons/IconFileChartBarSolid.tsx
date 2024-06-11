import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconFileChartBarSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "M5 5V.13a2.98 2.98 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM6 16a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0v2Zm3 0a1 1 0 1 1-2 0v-6a1 1 0 0 1 2 0v6Zm3 0a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0v4Z"
    }, null, 3, null)
  ], 3, null)
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