import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconLabelOutline = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M12.705 13H1.969a.985.985 0 0 1-.97-1V2a.985.985 0 0 1 .97-1h10.815a2 2 0 0 1 1.388.56L18 5.251a2.02 2.02 0 0 1 .093 2.785l-3.911 4.308a2 2 0 0 1-1.477.656Z',
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
      viewBox: '0 0 20 14',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'af_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
