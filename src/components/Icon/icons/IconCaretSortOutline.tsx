import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'


export const IconCaretSortOutline = component$<IconProps>((props) => {
  const ic =   _jsxS("svg", {
  ...props,
  children:  _jsxQ("path", null, {
    d: "M10.335 6.84 6.909 2.054a1.108 1.108 0 0 0-.399-.324 1.173 1.173 0 0 0-1.02 0 1.108 1.108 0 0 0-.399.324L1.665 6.84a.9.9 0 0 0-.01.98c.094.15.23.27.392.35.162.08.345.115.527.102h6.852c.182.013.365-.023.527-.102.162-.08.298-.2.392-.35a.9.9 0 0 0-.01-.98Zm-8.67 6.607 3.426 4.786c.104.137.24.248.399.324a1.172 1.172 0 0 0 1.02 0c.158-.076.295-.187.399-.324l3.426-4.786a.901.901 0 0 0 .01-.98.968.968 0 0 0-.392-.35 1.035 1.035 0 0 0-.527-.102H2.574a1.035 1.035 0 0 0-.527.103.969.969 0 0 0-.392.349.9.9 0 0 0 .01.98Z",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, null, 3, null)
}, {
  "data-qwikest-icon": true,
  fill: "none",
  height: "1em",
  viewBox: "0 0 12 20",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, 0, "Mc_0")

    ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
    return <>{ic}</>
})