import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconFileShieldSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'g',
        null,
        {
          fill: 'currentColor',
        },
        [
          _jsxQ(
            'path',
            null,
            {
              d: 'M6.167 9.833a3 3 0 0 1 1.946-2.809L13 5.191a3 3 0 0 1 2.107 0l.893.334V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h8.641A14.03 14.03 0 0 1 6.167 9.833Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Zm14.3 3.9-4.893-1.837a1.009 1.009 0 0 0-.7 0L8.815 8.9a1 1 0 0 0-.648.936 12.263 12.263 0 0 0 5.359 10.015 1 1 0 0 0 1.06 0 12.265 12.265 0 0 0 5.358-10.015A1 1 0 0 0 19.3 8.9Zm-5.236 8.866V9.068l3.866 1.45a10.241 10.241 0 0 1-3.871 7.245l.005.003Z',
            },
            null,
            3,
            null,
          ),
        ],
        3,
        null,
      ),
    },
    {
      'data-qwikest-icon': true,
      fill: 'none',
      height: '1em',
      viewBox: '0 0 20 21',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'JU_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
