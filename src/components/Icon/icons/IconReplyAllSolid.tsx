import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconReplyAllSolid = component$<IconProps>((props) => {
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
              d: 'M13.606 3.748V2.531a1.542 1.542 0 0 0-.872-1.431 1.352 1.352 0 0 0-1.472.2L6.155 5.552a1.6 1.6 0 0 0 0 2.415l5.108 4.25a1.354 1.354 0 0 0 1.472.2 1.546 1.546 0 0 0 .872-1.428V9.9a4.72 4.72 0 0 1 3.7 2.867 1.187 1.187 0 0 0 1.08.731 1.225 1.225 0 0 0 1.213-1.287v-1.329a6.923 6.923 0 0 0-5.994-7.134Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'm2.434 6.693 5.517-4.949A1 1 0 0 0 6.615.256L1.1 5.205a2.051 2.051 0 0 0-.01 3.035l5.61 5.088a1.001 1.001 0 0 0 1.344-1.482l-5.61-5.153Z',
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
      viewBox: '0 0 20 14',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    '6B_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
