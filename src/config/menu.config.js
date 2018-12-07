import React from 'react'

export const menuHeaderTitle = 'Admin-Template'

export const menuConfig =  [
  {
    name:'账户管理',
    icon:'user',
    path:'/nav1',
  },
  {
    name:'nav2',
    icon:'user',
    path:'/nav2',
  },
  {
    name:'nav3',
    icon:'user',
    path:'/nav3',
  },
  {
    name:'nav4',
    icon:'user',
    children:[
      {
        name:'nav4-1',
        path:'nav4-1',
      },
      {
        name:'nav4-2',
        path:'nav4-2',
      },
      {
        name:'nav4-3',
        path:'nav4-3',
      },
    ]
  },
]