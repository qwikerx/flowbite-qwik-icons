import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconBadgeCheckOutline = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'm7 11 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9A2 2 0 0 1 18 7.272V6a2 2 0 0 0-2-2h-1.272a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9A2 2 0 0 1 7.272 4H6a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9A2 2 0 0 1 4 14.728V16a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9A2 2 0 0 1 14.728 18H16a2 2 0 0 0 2-2v-1.272a2 2 0 0 1 .586-1.414Z',
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
      viewBox: '0 0 22 22',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'rD_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
