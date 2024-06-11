import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconChartLineUpSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'g',
        null,
        {
          fill: 'currentColor',
        },
        [
          _jsxQ(
            'path',
            null,
            {
              d: 'M17 14H2V1a1 1 0 0 0-2 0v14a1 1 0 0 0 1 1h16a1 1 0 0 0 0-2Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'M4 11a.999.999 0 0 0 .8-.4l2.308-3.078 3.185 3.185a1 1 0 0 0 1.414 0L15 7.414v.793a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1h-3.207a1 1 0 1 0 0 2h.793L11 8.586 7.707 5.293A.97.97 0 0 0 6.929 5a1 1 0 0 0-.729.4l-3 4A1 1 0 0 0 4 11Z',
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
      viewBox: '0 0 18 16',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'hm_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
