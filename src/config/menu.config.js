import React, {lazy} from 'react'

const Page1 = lazy(() => import('../pages/Page1'))
const Page2 = lazy(() => import('../pages/Page2'))
const Exception403 = lazy(() => import('../pages/ExceptionPages/403'))
const Exception404 = lazy(() => import('../pages/ExceptionPages/404'))
const Exception500 = lazy(() => import('../pages/ExceptionPages/500'))


export const menuHeaderTitle = 'Admin-Template'

export const menuConfig = [
  {
    name: 'page1',
    icon: 'user',
    path: '/page1',
    component: Page1,
    auth: () => false,
  },
  {
    name: 'page2',
    icon: 'user',
    path: '/page2',
    component: Page2,
  },
  {
    name: 'exception',
    path: '/exception',
    //hideInMenu:true,
    children: [
      {
        name: '403',
        path: '/exception/403',
        component: Exception403,
      },
      {
        name: '404',
        path: '/exception/404',
        component: Exception404,
        auth: () => false,
      },
      {
        name: '500',
        path: '/exception/500',
        component: Exception500,
      },
    ],
  },
]