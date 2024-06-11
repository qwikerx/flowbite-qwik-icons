import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconCaretUpOutline = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M14.086 7.317 8.5 2.023a1.029 1.029 0 0 0-.707-.278c-.265 0-.52.1-.707.278L1.5 7.317a.933.933 0 0 0-.274.485.902.902 0 0 0 .057.548.96.96 0 0 0 .369.425c.164.104.357.16.555.16h11.172c.198 0 .391-.056.556-.16a.96.96 0 0 0 .368-.425.902.902 0 0 0 .057-.548.934.934 0 0 0-.274-.485Z',
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
      viewBox: '0 0 16 10',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'pl_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
