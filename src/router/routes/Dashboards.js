import { lazy } from 'react'

const DashboardAnalytics = lazy(() => import('../../views/dashboard/analytics'))
const DashboardEcommerce = lazy(() => import('../../views/dashboard/ecommerce'))


const Stage1 = lazy(() => import('../../views/components/breadcrumbs/Stage1'))
const Stage2 = lazy(() => import('../../views/components/breadcrumbs/Stage2'))
const Stage3 = lazy(() => import('../../views/components/breadcrumbs/Stage3'))
const Stage4 = lazy(() => import('../../views/components/breadcrumbs/Stage4'))
const Stage5 = lazy(() => import('../../views/components/breadcrumbs/Stage5'))
const Stage6 = lazy(() => import('../../views/components/breadcrumbs/Stage6'))
const Stage7 = lazy(() => import('../../views/components/breadcrumbs/Stage7'))
const Stage8 = lazy(() => import('../../views/components/breadcrumbs/Stage8'))
const Stage9 = lazy(() => import('../../views/components/breadcrumbs/Stage9'))
const Stage10 = lazy(() => import('../../views/components/breadcrumbs/Stage10'))
const Stage11 = lazy(() => import('../../views/components/breadcrumbs/Stage11'))
const Stage12 = lazy(() => import('../../views/components/breadcrumbs/Stage12'))

const Adddrawing = lazy(() => import('../../views/components/breadcrumbs/Adddrawing'))
const Addcast = lazy(() => import('../../views/components/breadcrumbs/Addcast'))
const Addghat = lazy(() => import('../../views/components/breadcrumbs/Addghat'))
const Addpolish1 = lazy(() => import('../../views/components/breadcrumbs/Addpolish1'))
const Addpolish2 = lazy(() => import('../../views/components/breadcrumbs/Addpolish2'))
const Addsettings = lazy(() => import('../../views/components/breadcrumbs/Addsettings'))
const Editsetting = lazy(() => import('../../views/components/breadcrumbs/Editsetting'))
const Editbandini = lazy(() => import('../../views/components/breadcrumbs/Editbandini')) 
const Editfinish = lazy(() => import('../../views/components/breadcrumbs/Editfinish')) 
const Editmala = lazy(() => import('../../views/components/breadcrumbs/Editmala'))
const Addbandini = lazy(() => import('../../views/components/breadcrumbs/Addbandini'))
const Addmala = lazy(() => import('../../views/components/breadcrumbs/Addmala'))

const Index2 = lazy(() => import('../../views/apps/invoice/list/Index2'))

const DashboardRoutes = [
  {
    path: '/dashboard/analytics',
    element: <DashboardAnalytics />
  },
  {
    path: '/dashboard/ecommerce',
    element: <DashboardEcommerce />
  },
  {
    path: '/stage1',
    element: <Stage1 />
  },
  {
    path: '/stage2',
    element: <Stage2 />
  },
  {
    path: '/stage3',
    element: <Stage3 />
  },
  {
    path: '/stage4',
    element: <Stage4 />
  },
  {
    path: '/stage5',
    element: <Stage5 />
  },
  {
    path: '/stage6',
    element: <Stage6 />
  },
  {
    path: '/stage7',
    element: <Stage7 />
  },
  {
    path: '/stage8',
    element: <Stage8 />
  },
  {
    path: '/stage9',
    element: <Stage9 />
  },
  {
    path: '/Index2',
    element: <Index2 />
  },
  {
    path: '/Stage10',
    element: <Stage10 />
  },
  {
    path: '/Stage11',
    element: <Stage11 />
  },
  {
    path: '/Stage12',
    element: <Stage12 />
  },
  {
    path: '/adddrawing',
    element: <Adddrawing />
  },
  {
    path: '/addcast',
    element: <Addcast />
  },
  {
    path: '/addghat',
    element: <Addghat />
  },
  {
    path: '/Addpolish',
    element: <Addpolish1 />
  },
  {
    path: '/Addpolish2',
    element: <Addpolish2 />
  },
  {
    path: '/Addsettings',
    element: <Addsettings />
  },
  {
    path: '/editset',
    element: <Editsetting />
  },
  {
    path: '/editbandini',
    element: <Editbandini />
  },
  {
    path: '/editmala',
    element: <Editmala />
  },
  {
    path: '/editfinish',
    element: <Editfinish />
  },
  {
    path: '/addbandini',
    element: <Addbandini />
  },
  {
    path: '/addmala',
    element: <Addmala />
  }
]

export default DashboardRoutes
