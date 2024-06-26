import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconImageOutline = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: [
        _jsxQ(
          'path',
          null,
          {
            d: 'M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z',
            fill: '#2F3039',
          },
          null,
          3,
          null,
        ),
        _jsxQ(
          'path',
          null,
          {
            d: 'M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z',
            stroke: 'currentColor',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': '2',
          },
          null,
          3,
          null,
        ),
        _jsxQ(
          'path',
          null,
          {
            d: 'M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z',
            stroke: 'currentColor',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': '2',
          },
          null,
          3,
          null,
        ),
      ],
    },
    {
      'data-qwikest-icon': true,
      fill: 'none',
      height: '1em',
      viewBox: '0 0 20 18',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'pe_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
