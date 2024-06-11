import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconArrowsRepeatSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M17 10a1 1 0 0 0-1 1v2H3.414l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.416l3 3a1 1 0 1 0 1.414-1.414L3.414 15H17a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm2.923-5.618a1 1 0 0 0-.217-1.09l-3-3a1 1 0 0 0-1.414 1.414L16.586 3H3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V5h12.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a.989.989 0 0 0 .216-.325Z',
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
      viewBox: '0 0 20 19',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'Pt_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
