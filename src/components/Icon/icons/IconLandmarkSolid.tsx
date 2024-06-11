import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconLandmarkSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M2 15a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2h-1V9h1a1 1 0 0 0 1-1V7a.999.999 0 0 0-.4-.8l-8-6a1 1 0 0 0-1.2 0l-8 6A1 1 0 0 0 1 7v1a1 1 0 0 0 1 1h1v6H2Zm7 0V9h2v6H9Zm6 0h-2V9h2v6ZM5 9h2v6H5V9Zm14 9H1a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z",
    fill: "currentColor"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 20",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "VP_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})