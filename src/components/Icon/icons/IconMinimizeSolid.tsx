import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconMinimizeSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M7 1a1 1 0 0 0-1 1v2.586L2.707 1.293a1 1 0 0 0-1.414 1.414L4.586 6H2a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm0 11H2a1 1 0 1 0 0 2h2.586l-3.293 3.293a1 1 0 1 0 1.414 1.414L6 15.414V18a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1Zm11-6h-2.586l3.293-3.293a1 1 0 1 0-1.414-1.414L14 4.586V2a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2Zm1 7a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-2.586l3.293 3.293a1 1 0 0 0 1.414-1.414L15.414 14H18a1 1 0 0 0 1-1Z',
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
      viewBox: '0 0 20 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'iv_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
