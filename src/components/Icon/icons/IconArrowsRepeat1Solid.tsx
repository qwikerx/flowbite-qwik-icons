import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconArrowsRepeat1Solid = component$<IconProps>((props) => {
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
              d: 'M17 9a1 1 0 0 0-1 1v3H1a1 1 0 0 0-.706 1.708l3 3a1 1 0 1 0 1.414-1.414L3.414 15H17a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm2.923-4.618a1 1 0 0 0-.217-1.09l-3-3a1 1 0 0 0-1.414 1.414L16.586 3H3a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V5h15a1 1 0 0 0 .923-.618Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'M11 12a1 1 0 0 0 1-1V7a1 1 0 0 0-1.447-.895l-2 1a1 1 0 1 0 .894 1.79L10 8.618V11a1 1 0 0 0 1 1Z',
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
      viewBox: '0 0 20 19',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'YW_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
