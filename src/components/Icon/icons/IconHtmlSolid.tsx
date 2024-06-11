import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconHtmlSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M.906 0 2.5 17.683l7.5 2.159 7.544-2.158L19.092 0H.906ZM15.1 6H7.044l.174 2h7.776l-.632 6.513-4.29 1.371-4.326-1.444-.29-2.909H7.5l.163 1.4 2.424.809 2.37-.757.3-2.982H5.368L4.8 4h10.519L15.1 6Z',
          fill: '#2F3039',
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
      viewBox: '0 0 20 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'xY_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
