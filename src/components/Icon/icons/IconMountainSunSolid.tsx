import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconMountainSunSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'm19.847 16.343-4.4-7a1 1 0 0 0-1.6-.131l-2.164 2.448-3.812-6.775a1.028 1.028 0 0 0-.887-.51 1 1 0 0 0-.871.537l-6 11.5A1 1 0 0 0 1 17.875h18a1 1 0 0 0 .847-1.532ZM12.5 6.375a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
          fill: '#2F3039',
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
      viewBox: '0 0 20 18',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'gQ_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
