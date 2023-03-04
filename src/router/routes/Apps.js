// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Chat = lazy(() => import('../../views/apps/chat'))
const Todo = lazy(() => import('../../views/apps/todo'))
const Email = lazy(() => import('../../views/apps/email'))
const Kanban = lazy(() => import('../../views/apps/kanban'))
const Calendar = lazy(() => import('../../views/apps/calendar'))

const InvoiceAdd = lazy(() => import('../../views/apps/invoice/add'))
const InvoiceList = lazy(() => import('../../views/apps/invoice/list'))
const InvoiceEdit = lazy(() => import('../../views/apps/invoice/edit'))
const InvoicePrint = lazy(() => import('../../views/apps/invoice/print'))
const InvoicePreview = lazy(() => import('../../views/apps/invoice/preview'))

const EcommerceShop = lazy(() => import('../../views/apps/ecommerce/shop'))
const EcommerceDetail = lazy(() => import('../../views/apps/ecommerce/detail'))
const EcommerceWishlist = lazy(() => import('../../views/apps/ecommerce/wishlist'))
const EcommerceCheckout = lazy(() => import('../../views/apps/ecommerce/checkout'))

const UserList = lazy(() => import('../../views/apps/user/list'))
const UserView = lazy(() => import('../../views/apps/user/view'))

const Roles = lazy(() => import('../../views/apps/roles-permissions/roles'))
const Permissions = lazy(() => import('../../views/apps/roles-permissions/permissions'))
const Employee = lazy(() => import('../../views/pages/Reports/Employee'))
const Ghatkarigar = lazy(() => import('../../views/pages/Reports/Ghatkarigar'))
const Castingrep = lazy(() => import('../../views/pages/Reports/Casting'))
const Sngcasting = lazy(() => import('../../views/pages/Reports/Sngcasting'))
const Stons = lazy(() => import('../../views/pages/Reports/Stons')) 
const Tikili = lazy(() => import('../../views/pages/Reports/Tikili')) 
const Custorders = lazy(() => import('../../views/pages/Reports/Custorders'))
const Costing = lazy(() => import('../../views/pages/Reports/Costing'))
const Selling = lazy(() => import('../../views/pages/Reports/Selling'))


const Packet = lazy(() => import('../../views/pages/Reports/Packet'))
const Bandini = lazy(() => import('../../views/pages/Reports/Bandini'))
const Beeds = lazy(() => import('../../views/pages/Reports/Beeds'))
const Polishorderwise = lazy(() => import('../../views/pages/Reports/Polishorderwise'))
const Polish = lazy(() => import('../../views/pages/Reports/Polish'))
const Sngsetting = lazy(() => import('../../views/pages/Reports/Sngsetting')) 
const Sngbandini = lazy(() => import('../../views/pages/Reports/Sngbandini')) 
const KhMala = lazy(() => import('../../views/pages/Reports/Mala')) 
const Sngmala = lazy(() => import('../../views/pages/Reports/Sngmala')) 
const Setting = lazy(() => import('../../views/pages/Reports/Setting'))
const Unfinished = lazy(() => import('../../views/pages/Reports/Unfinished'))
const Delivery = lazy(() => import('../../views/pages/Reports/Delivery'))
const Viewinvoice = lazy(() => import('../../views/pages/Reports/Viewinvoice'))
const Drawing = lazy(() => import('../../views/pages/Orders/Drawing'))
const Wax = lazy(() => import('../../views/pages/Orders/Wax'))
const Ghatdetails = lazy(() => import('../../views/pages/Orders/Ghatdetails'))
const Polishdetails = lazy(() => import('../../views/pages/Orders/Polishdetails'))
const Polish2 = lazy(() => import('../../views/pages/Orders/Polish2'))
const Casting = lazy(() => import('../../views/pages/Orders/Casting'))
const Costingdetails = lazy(() => import('../../views/pages/Orders/Costingdetails'))
const Bandhinidetails = lazy(() => import('../../views/pages/Orders/Bandhinidetails'))
const Mala = lazy(() => import('../../views/pages/Orders/Mala'))
const Settingdetails = lazy(() => import('../../views/pages/Orders/Settingdetails'))
const Finish = lazy(() => import('../../views/pages/Orders/Finish'))
const Categories = lazy(() => import('../../views/pages/Expence/Categories'))
const Subcategories = lazy(() => import('../../views/pages/Expence/Subcategories'))
const Expencelist = lazy(() => import('../../views/pages/Expence/Expencelist'))
const Expenceview = lazy(() => import('../../views/pages/Expence/Expenceview'))
const Purches = lazy(() => import('../../views/pages/Expence/Purches'))
const Return = lazy(() => import('../../views/pages/Expence/Return'))
const Viewpurches = lazy(() => import('../../views/pages/Expence/Viewpurches'))
const Returnview = lazy(() => import('../../views/pages/Expence/Returnview'))
const Balance = lazy(() => import('../../views/pages/Paymentreports/Balance'))
const Summery = lazy(() => import('../../views/pages/Paymentreports/Summery'))
const Partybalance = lazy(() => import('../../views/pages/Paymentreports/Partybalance'))
const Sngpartybalance = lazy(() => import('../../views/pages/Paymentreports/Sngpartybalance'))

const Metal = lazy(() => import('../../views/pages/Matel/Metal'))
const Paymetal = lazy(() => import('../../views/pages/Matel/Paymetal'))
const Usemetal = lazy(() => import('../../views/pages/Matel/Usemetal'))

const Stocks = lazy(() => import('../../views/pages/stockes/Stocks'))
const Stockes = lazy(() => import('../../views/pages/stockes/Stockes'))

const Workshop = lazy(() => import('../../views/pages/stockes/Workshop'))
const Workshopinhand = lazy(() => import('../../views/pages/stockes/Workshopinhand'))
const Returnstock = lazy(() => import('../../views/pages/stockes/Returnstock'))
const Transferstock = lazy(() => import('../../views/pages/stockes/Transferstock'))

const Cadres = lazy(() => import('../../views/pages/recieveditems/Cadres'))
const Castingres = lazy(() => import('../../views/pages/recieveditems/Castingres'))
const Ghatres = lazy(() => import('../../views/pages/recieveditems/Ghatres'))
const Polish1stres = lazy(() => import('../../views/pages/recieveditems/Polish1stres'))
const Polish2ndres = lazy(() => import('../../views/pages/recieveditems/Polish2ndres'))
const Settingres = lazy(() => import('../../views/pages/recieveditems/Settingres'))
const Bandinires = lazy(() => import('../../views/pages/recieveditems/Bandinires'))
const Malares = lazy(() => import('../../views/pages/recieveditems/Malares'))
const Editsettingres = lazy(() => import('../../views/pages/recieveditems/Editsettingres'))
const Editbandinires = lazy(() => import('../../views/pages/recieveditems/Editbandinires'))
const Editmalares = lazy(() => import('../../views/pages/recieveditems/Editmalares'))
const Delevery = lazy(() => import('../../views/pages/Delevery'))


const AppRoutes = [
  {
    element: <Email />,
    path: '/apps/email',
    meta: {
      appLayout: true,
      className: 'email-application'
    }
  },
  {
    element: <Email />,
    path: '/apps/email/:folder',
    meta: {
      appLayout: true,
      className: 'email-application'
    }
  },
  {
    element: <Email />,
    path: '/apps/email/label/:label',
    meta: {
      appLayout: true,
      className: 'email-application'
    }
  },
  {
    element: <Email />,
    path: '/apps/email/:filter'
  },
  {
    path: '/apps/chat',
    element: <Chat />,
    meta: {
      appLayout: true,
      className: 'chat-application'
    }
  },
  {
    element: <Todo />,
    path: '/apps/todo',
    meta: {
      appLayout: true,
      className: 'todo-application'
    }
  },
  {
    element: <Todo />,
    path: '/apps/todo/:filter',
    meta: {
      appLayout: true,
      className: 'todo-application'
    }
  },
  {
    element: <Todo />,
    path: '/apps/todo/tag/:tag',
    meta: {
      appLayout: true,
      className: 'todo-application'
    }
  },
  {
    element: <Calendar />,
    path: '/apps/calendar'
  },
  {
    element: <Kanban />,
    path: '/apps/kanban',
    meta: {
      appLayout: true,
      className: 'kanban-application'
    }
  },
  {
    element: <InvoiceList />,
    path: '/apps/invoice/list'
  },
  {
    element: <InvoicePreview />,
    path: '/apps/invoice/preview/:id'
  },
  {
    path: '/apps/invoice/preview',
    element: <Navigate to='/apps/invoice/preview/4987' />
  },
  {
    element: <InvoiceEdit />,
    path: '/apps/invoice/edit/:id'
  },
  {
    path: '/apps/invoice/edit',
    element: <Navigate to='/apps/invoice/edit/4987' />
  },
  {
    element: <InvoiceAdd />,
    path: '/apps/invoice/add'
  },
  {
    path: '/apps/invoice/print',
    element: <InvoicePrint />,
    meta: {
      layout: 'blank'
    }
  },
  {
    element: <EcommerceShop />,
    path: '/apps/ecommerce/shop',
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    element: <EcommerceWishlist />,
    path: '/apps/ecommerce/wishlist',
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: '/apps/ecommerce/product-detail',
    element: <Navigate to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    element: <EcommerceDetail />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    element: <EcommerceCheckout />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    element: <UserList />,
    path: '/apps/user/list'
  },
  {
    path: '/apps/user/view',
    element: <Navigate to='/apps/user/view/1' />
  },
  {
    element: <UserView />,
    path: '/apps/user/view/:id'
  },
  {
    element: <Roles />,
    path: '/apps/roles'
  },
  {
    element: <Permissions />,
    path: '/apps/permissions'
  },
  {
    element: <Employee />,
    path: '/employee-wise'
  },
  {
    element: <Castingrep />,
    path: '/casting-rep'
  },
  {
    element: <Sngcasting />,
    path: '/sng-casting'
  },
  {
    element: <Ghatkarigar />,
    path: '/ghat-karigar'
  },
  {
    element: <Packet />,
    path: '/packet'
  },
  {
    element: <Bandini />,
    path: '/bandini'
  },
  {
    element: <Beeds />,
    path: '/beeds'
  },
  {
    element: <Stons />,
    path: '/stones-rep'
  },
  {
    element: <Tikili />,
    path: '/tikili-rep'
  },
  {
    element: <Custorders />,
    path: '/cust-order'
  },
  {
    element: <Costing />,
    path: '/costing-rep'
  },
  {
    element: <Selling />,
    path: '/selling-rep'
  },
  {
    element: <Polishorderwise />,
    path: '/polish-order-wise'
  },
  {
    element: <Polish />,
    path: '/polish'
  },
  {
    element: <Setting />,
    path: '/setting'
  },
  {
    element: <Sngbandini />,
    path: '/sng-bandini'
  },
  {
    element: <Sngsetting />,
    path: '/sng-setting'
  },
  {
    element: <KhMala />,
    path: '/khmala'
  },
  {
    element: <Sngmala />,
    path: '/sng-mala'
  },
  {
    element: <Unfinished />,
    path: '/unfinished'
  },
  {
    element: <Delivery />,
    path: '/delivery'
  },
  {
    element: <Viewinvoice />,
    path: '/view-invoice'
  },
  {
    element: <Drawing />,
    path: '/drawing'
  },
  {
    element: <Wax />,
    path: '/wax'
  },
  {
    element: <Ghatdetails />,
    path: '/ghat-details'
  },
  {
    element: <Polishdetails />,
    path: '/polish-details'
  },
  {
    element: <Polish2 />,
    path: '/polish2-details'
  },
  {
    element: <Casting />,
    path: '/casting'
  },
  {
    element: <Costingdetails />,
    path: '/costing-details'
  },
  {
    element: <Bandhinidetails />,
    path: '/bandhini-details'
  },
  {
    element: <Mala />,
    path: '/mala-details'
  },
  {
    element: <Settingdetails />,
    path: '/setting-details'
  },
  {
    element: <Settingdetails />,
    path: '/setting-details'
  },
  {
    element: <Finish />,
    path: '/finish'
  },
  {
    element: <Categories />,
    path: '/categories'
  },
  {
    element: <Subcategories />,
    path: '/sub-categories'
  },
  {
    element: <Expencelist />,
    path: '/expencelist'
  },
  {
    element: <Expenceview />,
    path: '/expenceview'
  },
  {
    element: <Purches />,
    path: '/purches'
  },
  {
    element: <Return />,
    path: '/return'
  },
  {
    element: <Viewpurches />,
    path: '/view-purches'
  },
  {
    element: <Returnview />,
    path: '/view-returns'
  },
  {
    element: <Balance />,
    path: '/balance'
  },
  {
    element: <Summery />,
    path: '/summary'
  },
  {
    element: <Partybalance />,
    path: '/partybalance'
  },
  {
    element: <Sngpartybalance />,
    path: '/sngpartybalance'
  },
  {
    element: <Metal />,
    path: '/metal'
  },
  {
    element: <Paymetal />,
    path: '/paymetal'
  },
  {
    element: <Usemetal />,
    path: '/usemetal'
  },
  {
    element: <Stocks />,
    path: '/stockes_in_hand'
  },
  {
    element: <Stockes />,
    path: '/stockes'
  },
  {
    element: <Workshop />,
    path: '/workshop'
  },
  {
    element: <Workshopinhand />,
    path: '/workshopinhand'
  },
  {
    element: <Returnstock />,
    path: '/returnstock'
  },
  {
    element: <Transferstock />,
    path: '/transferstock'
  },
  {
    element: <Cadres />,
    path: '/cadres'
  },
  {
    element: <Castingres />,
    path: '/castingres'
  },
  {
    element: <Ghatres />,
    path: '/ghatres'
  },
  {
    element: <Polish1stres />,
    path: '/polish1stres'
  },
  {
    element: <Polish2ndres />,
    path: '/polish2ndres'
  },
  {
    element: <Settingres />,
    path: '/settingres'
  },
  {
    element: <Bandinires />,
    path: '/bandinires'
  },
  {
    element: <Malares />,
    path: '/malares'
  },
  {
    element: <Editsettingres />,
    path: '/editsettingres'
  },
  {
    element: <Editbandinires />,
    path: '/editbandinires'
  },
  {
    element: <Editmalares />,
    path: '/editmalares'
  },
  {
    element: <Delevery />,
    path: '/delivery_items'
  }
]

export default AppRoutes
