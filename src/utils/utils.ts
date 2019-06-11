export function traversalDOMNode(node: ChildNode, cb: (node: ChildNode) => void) {
  const childNodes = node.childNodes
  let item = null
  if (node && node.nodeType === 1) {
    cb && cb(node)
  }
  for (let i = 0; i < childNodes.length; i++) {
    item = childNodes[i]
    if (item.nodeType === 1) {
      traversalDOMNode(item, cb)
    }
  }
}
