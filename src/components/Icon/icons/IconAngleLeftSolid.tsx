import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconAngleLeftSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M6.985 14a.992.992 0 0 1-.681-.27L.614 8.408a1.905 1.905 0 0 1 0-2.803L6.304.286a.998.998 0 1 1 1.363 1.458L2.038 7.01l5.629 5.263A.998.998 0 0 1 6.985 14Z',
          fill: 'currentColor',
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
      viewBox: '0 0 8 14',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'Qy_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
