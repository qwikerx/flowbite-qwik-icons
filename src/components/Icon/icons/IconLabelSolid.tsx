import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconLabelSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M18.7 4.531 14.866.84A2.985 2.985 0 0 0 12.784 0H1.969A1.987 1.987 0 0 0 0 2v10a1.987 1.987 0 0 0 1.969 2h10.736a3.005 3.005 0 0 0 2.221-.983l3.912-4.309a3.023 3.023 0 0 0-.138-4.177Z',
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
      viewBox: '0 0 20 14',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'Fa_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
