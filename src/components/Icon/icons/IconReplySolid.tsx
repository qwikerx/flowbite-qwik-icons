import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconReplySolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M12.5 3.046H10v-.928A2.12 2.12 0 0 0 8.8.164a1.828 1.828 0 0 0-1.985.311l-5.109 4.49a2.2 2.2 0 0 0 0 3.24L6.815 12.7a1.83 1.83 0 0 0 1.986.31A2.122 2.122 0 0 0 10 11.051v-.928h1a2.026 2.026 0 0 1 2 2.047V15a1 1 0 0 0 1.276.961A6.593 6.593 0 0 0 12.5 3.046Z',
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
      viewBox: '0 0 19 16',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    '8Z_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
