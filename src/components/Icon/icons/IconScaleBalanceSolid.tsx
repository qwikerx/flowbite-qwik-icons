import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconScaleBalanceSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'm14.556 7.799-2.43 5.482A2 2 0 0 0 14 15.98h3.114a2.001 2.001 0 0 0 1.873-2.7l-2.43-5.482v-.925c.33.07.664.107 1 .107a1 1 0 1 0 0-2 3.378 3.378 0 0 1-2.267-1.006 8.567 8.567 0 0 0-2.79-1.571 3 3 0 0 0-5.888.034c-.827.32-1.585.8-2.228 1.412a3.6 3.6 0 0 1-2.827 1.13 1 1 0 0 0 0 2 7.379 7.379 0 0 0 1-.07v.889L.127 13.28A2 2 0 0 0 2 15.98h3.114a2.001 2.001 0 0 0 1.873-2.7l-2.43-5.482v-1.57a8.355 8.355 0 0 0 1.133-.865 5.713 5.713 0 0 1 1.282-.882 2.993 2.993 0 0 0 1.585 1.316V17.98h-7a1 1 0 1 0 0 2h16a1 1 0 0 0 0-2h-7V5.797a3 3 0 0 0 1.62-1.384 7.17 7.17 0 0 1 1.89 1.143c.16.124.327.25.5.377 0 .017-.01.03-.01.048v1.818Zm-5-3.818a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z',
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
      viewBox: '0 0 20 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'xb_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
