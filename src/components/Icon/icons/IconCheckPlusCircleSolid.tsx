import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconCheckPlusCircleSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: [
        _jsxQ(
          'path',
          null,
          {
            d: 'M18.5 15.5H17V14a1 1 0 0 0-2 0v1.5h-1.5a1 1 0 0 0 0 2H15V19a1 1 0 0 0 2 0v-1.5h1.5a1 1 0 0 0 0-2Z',
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
            d: 'm18.222 5.255-7.475 8.409a1 1 0 0 1-.718.336H10a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414l3.25 3.25 7.055-7.936a9.5 9.5 0 1 0-3.885 15.355A2.495 2.495 0 0 1 13.5 14a2.5 2.5 0 0 1 5 0c.035 0 .068.009.1.01a9.43 9.43 0 0 0-.381-8.755h.003Z',
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
      viewBox: '0 0 20 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'zB_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
