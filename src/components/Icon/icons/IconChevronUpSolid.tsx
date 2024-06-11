import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconChevronUpSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M9.001 5.988a1 1 0 0 1-.706-.293L5.006 2.41 1.717 5.695a.999.999 0 1 1-1.412-1.41L4.3.291a1 1 0 0 1 1.412 0l3.996 3.992A.998.998 0 0 1 9 5.988Z',
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
      viewBox: '0 0 10 6',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'RO_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
