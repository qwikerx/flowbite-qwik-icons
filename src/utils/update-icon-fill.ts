import { Component, JSXChildren, JSXNode } from '@builder.io/qwik'

type FoundComponent = {
  component: Component | string
  foundComponentCallback: (child: JSXNode, index: number) => void
}

function getChild(children: JSXChildren, components: FoundComponent[]) {
  const childrenToProcess = Array.isArray(children) ? [...children] : [children]

  let index = 0
  while (childrenToProcess.length) {
    index = index + 1

    const child = childrenToProcess.shift() as JSXNode
    if (!child) {
      continue
    }
    if (Array.isArray(child)) {
      childrenToProcess.unshift(...child)
      continue
    }

    const type = child.type

    const foundComponent = components.find((comp) => comp.component === type)
    if (foundComponent) {
      foundComponent.foundComponentCallback(child, index - 1)
    }
  }
}

/**
 * Icons part
 */
function processChild(child: JSXNode, fill: string) {
  if (child.props.fill && child.props.fill !== 'none') {
    child.props.fill = fill
  }
  if (child.props.stroke && child.props.stroke !== 'none') {
    child.props.stroke = fill
  }
}

export function updateFillOfChildren(children: JSXNode, fill: string): any {
  getChild(children, [
    {
      component: 'path',
      foundComponentCallback: (child) => {
        processChild(child, fill)
      },
    },
    {
      component: 'g',
      foundComponentCallback: (child) => {
        processChild(child, fill)
      },
    },
  ])
  return children
}
