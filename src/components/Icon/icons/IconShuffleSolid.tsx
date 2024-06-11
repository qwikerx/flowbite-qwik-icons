import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconShuffleSolid = component$<IconProps>((props) => {
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
              d: 'M19.923 13.618a1 1 0 0 0-.217-.326l-3-3a1 1 0 0 0-1.414 1.414L16.586 13h-3.065l-6.7-9.573A1 1 0 0 0 6 3H1a1 1 0 0 0 0 2h4.479l6.7 9.573A1 1 0 0 0 13 15h3.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 .217-1.09l-.001.001Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'M5.479 13H1a1 1 0 0 0 0 2h5a1 1 0 0 0 .819-.427l1.766-2.522-1.221-1.743L5.479 13Zm8.042-8H17l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4a.965.965 0 0 0 .058-.116 1.05 1.05 0 0 0 .075-.15.96.96 0 0 0 .046-.23A.92.92 0 0 0 20 4c0-.012-.006-.021-.007-.033a1.012 1.012 0 0 0-.054-.27c-.01-.031-.011-.066-.024-.1a1.024 1.024 0 0 0-.2-.29c-.005 0-.007-.012-.013-.018l-3-3a1 1 0 0 0-1.414 1.414L16.586 3H13a1 1 0 0 0-.819.427l-1.766 2.522 1.221 1.743L13.521 5Z',
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
    '47_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
