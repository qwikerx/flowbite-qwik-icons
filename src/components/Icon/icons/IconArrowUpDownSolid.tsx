import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconArrowUpDownSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M6.293 15.293 5 16.586V6a1 1 0 1 0-2 0v10.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a.99.99 0 0 0 .326.217.987.987 0 0 0 .764 0 .99.99 0 0 0 .326-.217l3-3a1 1 0 0 0-1.414-1.414h-.002Zm9.414-12-3-3a1 1 0 0 0-1.416 0l-3 3a1 1 0 0 0 1.414 1.414L11 3.414V14a1 1 0 0 0 2 0V3.414l1.293 1.293a1 1 0 0 0 1.414-1.414Z',
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
      viewBox: '0 0 16 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'nJ_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
