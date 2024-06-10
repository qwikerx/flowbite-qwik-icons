import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconCogOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, [
     _jsxQ("path", null, {
      d: "M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 20",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Mn_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})