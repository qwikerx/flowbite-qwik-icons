import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconSwatchbookOutline = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M8 15.5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v13.5A3.5 3.5 0 0 0 4.5 19M8 15.5A3.5 3.5 0 0 1 4.5 19M8 15.5V6.55l4.186-4.182a1 1 0 0 1 1.414 0L17.132 5.9a1 1 0 0 1 0 1.418l-9.345 9.345M8 15.5a3.48 3.48 0 0 1-.213 1.163M4.5 19a3.49 3.49 0 0 0 3.287-2.337M4.5 19H18a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5.55l-4.663 4.663',
          stroke: 'currentColor',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
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
      viewBox: '0 0 20 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'YC_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
