import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconCodePullRequestSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M6 4a3 3 0 1 0-4 2.816v8.368a3 3 0 1 0 2 0V6.816A3 3 0 0 0 6 4Zm10 11.184V7a4 4 0 0 0-4-4h-1.086l.293-.293a1 1 0 1 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L10.914 5H12a2 2 0 0 1 2 2v8.184a3 3 0 1 0 2 0Z',
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
      viewBox: '0 0 18 22',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'Kx_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
