import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconArrowRightToBracketOutline = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M4 7.64h11m0 0-4-3.79m4 3.79-4 3.791m-5 2.844H3c-.53 0-1.04-.2-1.414-.556A1.846 1.846 0 0 1 1 12.38V2.902c0-.503.21-.985.586-1.34A2.057 2.057 0 0 1 3 1.007h3',
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
      viewBox: '0 0 16 16',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    '1z_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
