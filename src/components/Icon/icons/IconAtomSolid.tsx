import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconAtomSolid = component$<IconProps>((props) => {
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
              d: 'M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'M17.852 10c2.379-3.8 2.816-7.191 1.078-8.93C17.142-.714 13.689-.194 10 2.122 6.309-.194 2.855-.715 1.07 1.07-.715 2.855-.193 6.321 2.133 10.018a15.026 15.026 0 0 0-1.9 4.232c-.622 2.553.113 3.954.839 4.68A3.951 3.951 0 0 0 3.965 20 12.015 12.015 0 0 0 10 17.864a12.029 12.029 0 0 0 6.037 2.128 3.95 3.95 0 0 0 2.893-1.062c1.738-1.739 1.301-5.13-1.078-8.93ZM2.484 17.516c-.692-.694-.491-2.046-.309-2.791a11.936 11.936 0 0 1 1.213-2.919 26.712 26.712 0 0 0 2.251 2.555 1 1 0 0 0 1.414-1.414c-4.3-4.3-5.959-9.071-4.569-10.463.878-.878 3.1-.539 5.7.909a26.857 26.857 0 0 0-2.545 2.246 1 1 0 0 0 1.414 1.414A23.415 23.415 0 0 1 10 4.55a23.42 23.42 0 0 1 2.947 2.5 1 1 0 0 0 1.414-1.414 26.86 26.86 0 0 0-2.549-2.246c2.6-1.448 4.824-1.787 5.7-.909 1.055 1.057.37 3.919-1.667 6.96a22.295 22.295 0 0 1-1.213 1.636 24.78 24.78 0 0 1-1.689 1.867c-.511.512-1.047 1-1.59 1.459-.6.506-1.227.98-1.878 1.418-3.05 2.061-5.925 2.757-6.991 1.695Zm15.032 0c-.906.907-3.167.52-5.717-.9.283-.218.566-.439.846-.673a27.59 27.59 0 0 0 3.542-3.595c.146-.18.282-.362.422-.543 1.427 2.546 1.817 4.8.907 5.711Z',
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
      viewBox: '0 0 20 21',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'vi_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
