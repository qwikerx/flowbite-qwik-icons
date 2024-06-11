import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconCodeForkSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M16 4a3 3 0 1 0-4 2.816V9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6.816a3 3 0 1 0-2 0V9a3 3 0 0 0 3 3h2v3.184a3 3 0 1 0 2 0V12h2a3 3 0 0 0 3-3V6.816A3 3 0 0 0 16 4Z',
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
      viewBox: '0 0 16 22',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    '9j_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
