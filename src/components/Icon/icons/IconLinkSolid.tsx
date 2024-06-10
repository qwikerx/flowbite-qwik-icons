import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconLinkSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "m6.929 14.72-.473.473a2.58 2.58 0 0 1-3.65-3.65L6.45 7.902a2.644 2.644 0 0 1 3.65 0 1.025 1.025 0 0 0 1.45-1.449 4.631 4.631 0 0 0-6.55 0l-3.642 3.642a4.631 4.631 0 1 0 6.549 6.55l.472-.471a1.025 1.025 0 1 0-1.449-1.45v-.003Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M16.647 1.353a4.637 4.637 0 0 0-6.548 0l-.726.726a1.025 1.025 0 1 0 1.449 1.447l.727-.727a2.581 2.581 0 0 1 3.649 3.65l-3.642 3.642a2.645 2.645 0 0 1-3.65 0 1.025 1.025 0 1 0-1.45 1.45 4.631 4.631 0 0 0 6.55 0l3.641-3.643a4.634 4.634 0 0 0 0-6.545Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 18 18",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Ej_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})