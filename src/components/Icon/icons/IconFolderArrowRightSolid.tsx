import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconFolderArrowRightSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M0 6v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6H0Zm13.457 6.707-2.5 2.5a1 1 0 0 1-1.414-1.414l.793-.793H5a1 1 0 0 1 0-2h5.336l-.793-.793a1 1 0 0 1 1.414-1.414l2.5 2.5a1 1 0 0 1 0 1.414ZM9.043.8a2.009 2.009 0 0 0-1.6-.8H2a2 2 0 0 0-2 2v2h11.443L9.043.8Z',
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
      viewBox: '0 0 18 18',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'DO_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
