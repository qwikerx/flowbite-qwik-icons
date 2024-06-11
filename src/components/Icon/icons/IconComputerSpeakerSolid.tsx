import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconComputerSpeakerSolid = component$<IconProps>((props) => {
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
              d: 'M14 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'M18 5h-8a2 2 0 0 0-2 2v11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2Zm-4 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 9a3 3 0 1 1 0-5.999A3 3 0 0 1 14 17Z',
            },
            null,
            3,
            null,
          ),
          _jsxQ(
            'path',
            null,
            {
              d: 'M6 9H2V2h16v1c.65.005 1.289.17 1.86.48A.971.971 0 0 0 20 3V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4V9Z',
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
      viewBox: '0 0 20 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'EF_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
