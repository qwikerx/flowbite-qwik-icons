import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconArrowDownSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M10.707 8.293a1 1 0 0 0-1.414 0L7 10.586V1a1 1 0 1 0-2 0v9.586L2.707 8.293a1 1 0 1 0-1.414 1.414l4 4a.99.99 0 0 0 .326.217.986.986 0 0 0 .764 0 .99.99 0 0 0 .326-.217l4-4a1 1 0 0 0-.002-1.414Z',
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
      viewBox: '0 0 11 14',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'au_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
