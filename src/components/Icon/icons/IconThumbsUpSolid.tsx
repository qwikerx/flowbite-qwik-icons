import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconThumbsUpSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M3.008 6.684H1.003a.99.99 0 0 0-.71.301A1.043 1.043 0 0 0 0 7.713v8.23c0 .545.211 1.069.587 1.454A1.98 1.98 0 0 0 2.005 18a1.98 1.98 0 0 0 1.418-.603c.376-.385.587-.909.587-1.454v-8.23c0-.273-.105-.535-.293-.728a.99.99 0 0 0-.71-.301Zm12.987 0H12.03l1.562-4.63a1.868 1.868 0 0 0-.268-1.211 1.79 1.79 0 0 0-.96-.757 1.74 1.74 0 0 0-1.21.048 1.8 1.8 0 0 0-.902.83 25.486 25.486 0 0 1-4.238 5.514v9.862h.115c2.114.6 4.913 1.66 7.505 1.66 1.403 0 1.596-.541 1.885-1.355l2.36-7.201a2.109 2.109 0 0 0-.243-1.883 2.022 2.022 0 0 0-.717-.645 1.964 1.964 0 0 0-.925-.232Z',
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
    'dt_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
