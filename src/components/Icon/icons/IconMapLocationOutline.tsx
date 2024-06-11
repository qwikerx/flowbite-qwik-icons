import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconMapLocationOutline = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'g',
        null,
        {
          stroke: 'currentColor',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        },
        [
          _jsxQ(
            'path',
            null,
            {
              d: 'M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.171c.1.127.2.251.3.371L8 20l5.13-6.248c.193-.209.373-.429.54-.659l.13-.155Z',
            },
            null,
            3,
            null,
          ),
        ],
        3,
        null,
      ),
    },
    {
      'data-qwikest-icon': true,
      fill: 'none',
      height: '1em',
      viewBox: '0 0 17 21',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'sT_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
