import checkPermission from './checkPermission'

/**
 * 权限组件
 * @param  props 组件props
 * @param  props.children 需要鉴权的组件，用该权限组件包裹
 * @param  props.auth 当前的权限，返回true和false，可以是function/promise等
 * @param  props.noAuth 没有权限时的渲染内容
 */
export default function Authorized ({children, auth, noAuth}) {
  const targetRender = children ? null : children
  return checkPermission(auth, targetRender, noAuth)
}