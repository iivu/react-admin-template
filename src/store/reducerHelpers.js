
//一些reduce工具函数

export function combineObject(oldObject,newObject){
  return {
    ...oldObject,
    ...newObject,
  }
}

