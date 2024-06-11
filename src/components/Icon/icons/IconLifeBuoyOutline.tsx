import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconLifeBuoyOutline = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'm12.46 7.291 3.849-3.849a1.5 1.5 0 0 1 2.122 0l.127.127a1.5 1.5 0 0 1 0 2.122l-3.839 3.838a4 4 0 0 0-2.259-2.238Zm0 0a4 4 0 0 1 2.263 2.238l3.662-3.662a8.96 8.96 0 0 1 0 10.27l-3.676-3.676m-2.249-5.17 3.677-3.676a8.96 8.96 0 0 0-10.27 0l3.662 3.662a4 4 0 0 0-2.238 2.258L3.615 5.863a8.961 8.961 0 0 0 0 10.27l3.662-3.662a4 4 0 0 0 2.258 2.238l-3.672 3.676a8.96 8.96 0 0 0 10.27 0l-3.662-3.662a4 4 0 0 0 2.238-2.262m0 0 3.849 3.848a1.499 1.499 0 0 1 0 2.122l-.127.126a1.5 1.5 0 0 1-2.122 0l-3.838-3.838a4 4 0 0 0 2.238-2.258ZM15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-7.719 1.471-3.839 3.838a1.5 1.5 0 0 0 0 2.122l.127.126a1.5 1.5 0 0 0 2.122 0l3.848-3.848a4 4 0 0 1-2.258-2.238Zm2.248-5.19L5.691 3.442a1.5 1.5 0 0 0-2.122 0l-.127.127a1.5 1.5 0 0 0 0 2.122l3.849 3.848a4 4 0 0 1 2.238-2.258Z',
          stroke: 'currentColor',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
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
      viewBox: '0 0 22 22',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'Pm_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
