import { IconProps } from '@qwikest/icons'
import { updateFillOfChildren } from '~/utils/update-icon-fill'
import { component$, _jsxQ, _jsxS, type JSXNode } from '@builder.io/qwik'

export const IconFaceStarStruckSolid = component$<IconProps>((props) => {
  const ic = _jsxS(
    'svg',
    {
      ...props,
      children: _jsxQ(
        'path',
        null,
        {
          d: 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm.524 5.61a.5.5 0 0 1 .4-.34l1.122-.164.5-1.016a.521.521 0 0 1 .9 0l.5 1.016 1.122.164a.5.5 0 0 1 .277.853l-.812.791.192 1.116a.5.5 0 0 1-.725.528l-1-.528-1 .528a.5.5 0 0 1-.725-.528l.192-1.116-.812-.791a.5.5 0 0 1-.131-.513Zm-6 0a.5.5 0 0 1 .4-.34l1.126-.164.5-1.016a.521.521 0 0 1 .9 0l.5 1.016 1.122.164a.5.5 0 0 1 .277.853l-.812.791.192 1.116A.5.5 0 0 1 8 9.058L7 8.53l-1 .528a.5.5 0 0 1-.725-.528l.192-1.116-.812-.791a.5.5 0 0 1-.131-.513ZM10 16c-3.047 0-5.5-2.735-5.5-5h1a11.7 11.7 0 0 0 4.5.583c2.614 0 4.308-.391 4.524-.673l.976.09c0 2.265-2.453 5-5.5 5Z',
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
      viewBox: '0 0 20 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    0,
    'Ba_0',
  )

  ic.children = updateFillOfChildren(ic.children as JSXNode, 'currentColor')
  return <>{ic}</>
})
