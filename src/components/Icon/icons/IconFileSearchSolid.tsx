import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconFileSearchSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: [
        _jsxQ(
          'path',
          null,
          {
            d: 'M7.363 9.863a2 2 0 1 0 1.958 2.391A2 2 0 0 0 7.36 9.866l.003-.003ZM5 5V.13a2.98 2.98 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z',
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
            d: 'M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-1.722 16.844a1 1 0 0 1-1.414 0L9.383 15.3a3.96 3.96 0 0 1-2.02.566 4 4 0 1 1 4-4 3.96 3.96 0 0 1-.566 2.02l1.547 1.547a1 1 0 0 1 0 1.411Z',
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
      viewBox: '0 0 16 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'vd_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
