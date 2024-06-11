import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconChervonDoubleRightSolid = component$<IconProps>((props) => {
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
              d: 'M7.005 10A1 1 0 0 1 6.3 8.295l3.29-3.289L6.3 1.717A.999.999 0 1 1 7.712.305L11.707 4.3a.999.999 0 0 1 0 1.412L7.712 9.707a1 1 0 0 1-.707.293Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'M1.011 10a1 1 0 0 1-.706-1.705l3.29-3.289-3.29-3.289A.999.999 0 1 1 1.718.305L5.714 4.3a.999.999 0 0 1 0 1.412L1.718 9.707A1 1 0 0 1 1.01 10Z',
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
      viewBox: '0 0 12 10',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    '1C_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
