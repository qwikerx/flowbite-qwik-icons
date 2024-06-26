import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconLockTimeSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: [
        _jsxQ(
          'path',
          null,
          {
            d: 'M8 14.5a6.474 6.474 0 0 1 8-6.318V8a1 1 0 0 0-1-1h-2.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9.052A6.494 6.494 0 0 1 8 14.5Zm-2.5-10a2.5 2.5 0 1 1 5 0V7h-5V4.5Z',
            fill: 'currentColor',
          },
          null,
          3,
          null,
        ),
        _jsxQ(
          'path',
          null,
          {
            d: 'M14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm2.06 6.561a1 1 0 0 1-1.414 0l-1.353-1.354a1 1 0 0 1-.293-.707v-1.858a1 1 0 0 1 2 0v1.444l1.06 1.06a1.001 1.001 0 0 1 0 1.415Z',
            fill: 'currentColor',
          },
          null,
          3,
          null,
        ),
      ],
    },
    {
      'data-qwikest-icon': true,
      fill: 'none',
      height: '1em',
      viewBox: '0 0 19 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'tv_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
