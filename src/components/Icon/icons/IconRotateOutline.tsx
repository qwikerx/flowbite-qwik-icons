import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconRotateOutline = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M16 1.81v4.74h-5M2 18.87v-4.738h5m10-3.791a7.33 7.33 0 0 1-1.658 4.623c-1.075 1.326-2.583 2.278-4.288 2.707a8.412 8.412 0 0 1-5.141-.333c-1.628-.645-2.985-1.783-3.86-3.235M1 10.34c0-1.672.582-3.298 1.658-4.624C3.733 4.391 5.24 3.44 6.946 3.01a8.413 8.413 0 0 1 5.141.333c1.628.645 2.985 1.782 3.86 3.234',
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
      viewBox: '0 0 18 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'p0_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
