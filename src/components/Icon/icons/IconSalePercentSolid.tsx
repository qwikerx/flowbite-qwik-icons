import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconSalePercentSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M18.435 7.546A2.319 2.319 0 0 1 17.7 5.77a3.357 3.357 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.358 3.358 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981A3.372 3.372 0 0 0 2.3 5.77a2.32 2.32 0 0 1-.736 1.776 3.36 3.36 0 0 0 0 4.908 2.318 2.318 0 0 1 .736 1.775A3.356 3.356 0 0 0 5.77 17.7a2.318 2.318 0 0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 0 0 0 3.469-3.47 2.317 2.317 0 0 1 .736-1.775 3.36 3.36 0 0 0 0-4.908v-.001ZM8.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.207-6.856-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414Z',
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
    'Db_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
