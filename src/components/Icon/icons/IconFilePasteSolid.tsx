import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconFilePasteSolid = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("g", null, {
    fill: "currentColor"
  }, [
     _jsxQ("path", null, {
      d: "M6 18H2V3h3v1a1 1 0 0 0 0 2h2.758l2-2H7V2h3v1.779c.546-.5 1.26-.777 2-.779h5a2 2 0 0 0-2-2h-3.278A1.992 1.992 0 0 0 10 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h4a.972.972 0 0 0 .474-.136A4.01 4.01 0 0 1 6 18Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M12 5a1 1 0 0 0-.707.293l-3 3A1 1 0 0 0 8 9h4V5Z"
    }, null, 3, null),
     _jsxQ("path", null, {
      d: "M18.067 5H14v4a2 2 0 0 1-2 2H8v7a1.969 1.969 0 0 0 1.933 2h8.134A1.97 1.97 0 0 0 20 18V7a1.97 1.97 0 0 0-1.933-2Z"
    }, null, 3, null)
  ], 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 20 20",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "gr_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})