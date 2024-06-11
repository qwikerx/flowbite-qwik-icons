import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconAngleDownSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M6.983 8a1.935 1.935 0 0 1-1.4-.615L.253 1.697a.996.996 0 0 1 .768-1.66 1 1 0 0 1 .692.297l5.27 5.629 5.27-5.629a1 1 0 0 1 1.676 1.032.997.997 0 0 1-.216.331L8.387 7.384A1.93 1.93 0 0 1 6.983 8Z',
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
      viewBox: '0 0 14 8',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'Xb_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
