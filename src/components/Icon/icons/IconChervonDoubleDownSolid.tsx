import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconChervonDoubleDownSolid = component$<IconProps>((props) => {
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
              d: 'M5 12a.997.997 0 0 1-.705-.293L.305 7.711A.999.999 0 1 1 1.715 6.3L5 9.589l3.285-3.29a.997.997 0 0 1 1.69.71 1 1 0 0 1-.28.702l-3.99 3.996A.997.997 0 0 1 5 12Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'M5 6.006a.997.997 0 0 1-.705-.293L.305 1.718A.999.999 0 1 1 1.715.305L5 3.595 8.285.305a.997.997 0 1 1 1.41 1.413l-3.99 3.995A.997.997 0 0 1 5 6.006Z',
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
      viewBox: '0 0 10 12',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'RZ_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
