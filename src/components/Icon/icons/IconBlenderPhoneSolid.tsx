import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconBlenderPhoneSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M5.022 4.764c.489 0 .75-.37.8-.856l.188-1.877A.952.952 0 0 0 5.063.985H2.791a1.127 1.127 0 0 0-1.067.749A16.109 16.109 0 0 0 1 7a16.737 16.737 0 0 0 .743 5.242c.154.463 1.748.773 2.236.773H5a.95.95 0 0 0 .946-1.046l-.188-1.877a.95.95 0 0 0-.946-.856h-.761A14.627 14.627 0 0 1 3.937 7c-.02-.747.019-1.495.114-2.236h.971Zm13.365 7.592L18.6 11H14a1 1 0 0 1 0-2h4.918l.159-1H14a1 1 0 1 1 0-2h5.393l.158-1H14a1 1 0 1 1 0-2h5.868l.111-.7a2.04 2.04 0 0 0-.473-1.629A1.912 1.912 0 0 0 18.063 0H9a1 1 0 0 0-1 1v11.78A2.985 2.985 0 0 0 7 15v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a2.99 2.99 0 0 0-1.613-2.644Z',
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
      viewBox: '0 0 20 18',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'QO_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
