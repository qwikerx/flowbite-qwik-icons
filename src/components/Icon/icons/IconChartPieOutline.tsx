import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconChartPieOutline = component$<IconProps>((props) => {
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
              d: 'M9 4.025A7.5 7.5 0 1 0 16.975 12H9V4.025Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'M12.5 1c-.169 0-.334.014-.5.025V9h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 12.5 1Z',
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
      viewBox: '0 0 21 21',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'UD_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
