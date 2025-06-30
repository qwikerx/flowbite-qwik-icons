import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconStopOutline = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'rect',
        null,
        {
          width: '12',
          height: '12',
          x: '6',
          y: '6',
          stroke: 'currentColor',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
          'rx': '1'
        },
        null,
        3,
        null,
      ),
    },
    {
      'data-qwikest-icon': true,
      fill: 'none',
      height: '1em',
      viewBox: '0 0 24 24',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'Of_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})