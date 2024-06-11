import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconAngleRightSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M7.386 5.583 1.697.253a.997.997 0 0 0-1.66.768 1 1 0 0 0 .297.692l5.63 5.27-5.63 5.27a1 1 0 0 0 1.032 1.676.998.998 0 0 0 .331-.216l5.688-5.326a1.908 1.908 0 0 0 0-2.808l.001.004Z',
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
      viewBox: '0 0 8 14',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'sj_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
