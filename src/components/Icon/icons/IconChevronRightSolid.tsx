import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconChevronRightSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M1.01 10a.997.997 0 0 1-.705-1.705L3.59 5.006.305 1.717A.999.999 0 1 1 1.715.305L5.709 4.3a1 1 0 0 1 0 1.412L1.716 9.707A.998.998 0 0 1 1.01 10Z',
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
      viewBox: '0 0 6 10',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'LZ_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
