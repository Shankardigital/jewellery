// ** Icons Import
import { Mail, CheckSquare, ShoppingBag, Airplay, PlusCircle, Framer, Slack, LifeBuoy, Image, Feather, Box, CheckCircle, Calendar, FileText, Circle, ShoppingCart, User, Sliders, Zap, Users, Activity, TrendingDown, TrendingUp, Trello, MessageSquare, CreditCard, Settings, GitBranch, GitPullRequest, FileMinus} from 'react-feather'

export default [
  // {
  //   header: 'Apps & Pages'
  // },
  // {
  //   id: 'email',
  //   title: 'Email',
  //   icon: <Mail  />,
  //   navLink: '/apps/email'
  // },
  // {
  //   id: 'chat',
  //   title: 'Chat',
  //   icon: <MessageSquare  />,
  //   navLink: '/apps/chat'
  // },
  // {
  //   id: 'todo',
  //   title: 'Todo',
  //   icon: <CheckSquare  />,
  //   navLink: '/apps/todo'
  // },
  // {
  //   id: 'calendar',
  //   title: 'Calendar',
  //   icon: <Calendar  />,
  //   navLink: '/apps/calendar'
  // },
  // {
  //   id: 'kanban',
  //   title: 'Kanban',
  //   icon: <CheckSquare  />,
  //   navLink: '/apps/kanban'
  // },
  // {
  //   id: 'invoiceApp',
  //   title: 'Invoice',
  //   icon: <FileText  />,
  //   children: [
  //     {
  //       id: 'invoiceList',
  //       title: 'List',
  //       icon: <Circle />,
  //       navLink: '/apps/invoice/list'
  //     },
  //     {
  //       id: 'invoicePreview',
  //       title: 'Preview',
  //       icon: <Circle />,
  //       navLink: '/apps/invoice/preview'
  //     },
  //     {
  //       id: 'invoiceEdit',
  //       title: 'Edit',
  //       icon: <Circle />,
  //       navLink: '/apps/invoice/edit'
  //     },
  //     {
  //       id: 'invoiceAdd',
  //       title: 'Add',
  //       icon: <Circle />,
  //       navLink: '/apps/invoice/add'
  //     }
  //   ]
  // },

  // {
  //   id: 'roles-permissions',
  //   title: 'Roles & Permissions',
  //   icon: <<Settings />  />,
  //   children: [
  //     {
  //       id: 'roles',
  //       title: 'Roles',
  //       icon: <Circle />,
  //       navLink: '/apps/roles'
  //     },
  //     {
  //       id: 'permissions',
  //       title: 'Permissions',
  //       icon: <Circle />,
  //       navLink: '/apps/permissions'
  //     }
  //   ]
  // },
  // {
  //   id: 'eCommerce',
  //   title: 'eCommerce',
  //   icon: <ShoppingCart  />,
  //   children: [
  //     {
  //       id: 'shop',
  //       title: 'Shop',
  //       icon: <Circle />,
  //       navLink: '/apps/ecommerce/shop'
  //     },
  //     {
  //       id: 'detail',
  //       title: 'Details',
  //       icon: <Circle />,
  //       navLink: '/apps/ecommerce/product-detail'
  //     },
  //     {
  //       id: 'wishList',
  //       title: 'Wish List',
  //       icon: <Circle />,
  //       navLink: '/apps/ecommerce/wishlist'
  //     },
  //     {
  //       id: 'checkout',
  //       title: 'Checkout',
  //       icon: <Circle />,
  //       navLink: '/apps/ecommerce/checkout'
  //     }
  //   ]
  // },

  {
    header: 'PEOPLE'
  },
  {
    id: 'shops',
    title: 'Department',
    icon: <Sliders />,
    navLink: '/departments'
  },
  {
    id: 'users',
    title: 'Employee',
    icon: <User />,
    children: [
      {
        id: 'view',
        title: 'Add Employee',
        icon: <Circle />,
        navLink: '/forms/layout/form-layout'
      },
      {
        id: 'list',
        title: 'Employee List',
        icon: <Circle />,
        navLink: '/employeelist'
      },
      {
        id: 'list',
        title: 'Role Permissions',
        icon: <Circle />,
        navLink: '/roles'
      }
      // {
      //   id: 'list',
      //   title: 'Employee List',
      //   icon: <Circle />,
      //   navLink: '/apps/user/list'
      // }
      // {
      //   id: 'roles',
      //   title: 'Employee Roles',
      //   icon: <Circle />,
      //   navLink: '/apps/roles'
      // },
      // {
      //   id: 'permissions',
      //   title: 'Permissions',
      //   icon: <Circle />,
      //   navLink: '/apps/permissions'
      // }

    ]
  },
  {
    id: 'Customers',
    title: 'Customers',
    icon: <Users  />,
    children: [
     
      {
        id: 'shops',
        title: 'Add Customer',
        icon: <Circle />,
        navLink: '/forms/elements/checkbox'
      },
      {
        id: 'Customer List',
        title: 'Customer List',
        icon: <Circle />,
        navLink: '/customer-list'
      }
      // {
      //   id: 'Customer List',
      //   title: 'Customer List',
      //   icon: <Circle />,
      //   navLink: '/Index2'
      // }
      // {
      //   id: 'shopss',
      //   title: 'Customer List',
      //   icon: <Circle />,
      //   navLink: '/apps/invoice/list'
      // }
      
    ]
  },

  // {
  //   id: 'metal',
  //   title: 'Matel in Hand',
  //   icon: <Sliders />,
  //   navLink: '/metal'
  // },
  {
    header: 'Stones & Metals'
  },
  {
    id: 'stoke',
    title: 'Stock',
    icon: <Activity />,
    children: [
     
      {
        id: 'stoke',
        title: 'Stock in Hand',
        icon: <Circle />,
        navLink: '/stockes_in_hand'
      },
      {
        id: 'stoke',
        title: 'Workshop in Hand',
        icon: <Circle />,
        navLink: '/workshop'
      }
     
    ]
  },
  {
    id: 'metal',
    title: 'Metal',
    icon: <Box />,
    children: [
     
      {
        id: 'metal',
        title: 'Metal in Hand',
        icon: <Circle />,
        navLink: '/metal'
      },
      {
        id: 'metal',
        title: 'Purchase list',
        icon: <Circle />,
        navLink: '/paymetal'
      }
     
    ]
  },
  {
    id: 'Settings',
    title: 'Stone Settings',
    icon: <Settings  />,
    children: [
      {
        id: 'Items Type',
        title: 'Items Type',
        icon: <Circle />,
        navLink: '/components/accordion'
      },
      {
        id: 'Stone storage',
        title: 'Stone storage',
        icon: <Circle />,
        navLink: '/components/divider'
      }

    ]
  },
  {
    header: 'ORDERS'
  },
 
  {
    id: 'eCommerce',
    title: 'Order Management',
    icon: <ShoppingCart  />,
    children: [
      {
        id: 'Add Order',
        title: 'Sales Order',
        icon: <PlusCircle />,
        navLink: '/orderlist'
      },
      // {
      //   id: 'Orders List',
      //   title: 'Orders List',
      //   icon: <Circle />,
      //   navLink: '/apps/invoice/list'
      // },
      // {
      //   id: 'shopss',
      //   title: 'Orders Status',
      //   icon: <Circle />,
      //   navLink: 'components/blockui'
      // }
      {
        id: 'Drawing',
        title: 'CAD Department',
        icon: <Image />,
        navLink: '/drawing'
      },
      // {
      //   id: 'shopss',
      //   title: 'Wax',
      //   icon: <Box  />,
      //   navLink: '/wax'
      // },
      {
        id: 'shopss',
        title: 'Casting',
        icon: <Circle />,
        navLink: '/casting'
      },
      {
        id: 'shopss',
        title: 'Ghat Details',
        icon: <Feather />,
        navLink: '/ghat-details'
      },
      {
        id: 'shopss',
        title: 'Polish 1st Stage',
        icon: <Framer />,
        navLink: '/polish-details'
      },
      {
        id: 'shopss',
        title: 'Polish 2nd Stage',
        icon: <Framer />,
        navLink: '/polish2-details'
      },
      {
        id: 'shopss',
        title: 'Setting Details',
        icon: <LifeBuoy />,
        navLink: '/setting-details'
      },
      {
        id: 'shopss',
        title: 'Bandini Details',
        icon: <GitBranch />,
        navLink: '/bandhini-details'
      },
      {
        id: 'shopss',
        title: 'Mala Details',
        icon: <GitBranch />,
        navLink: '/mala-details'
      },
      {
        id: 'shopss',
        title: 'Finishing',
        icon: <Slack />,
        navLink: '/costing-details'
      }
      // {
      //   id: 'shopss',
      //   title: 'Finish',
      //   icon: <CheckCircle />,
      //   navLink: '/finish'
      // }

      // {
      //   id: 'Orders Entry',
      //   title: 'Orders Entry',
      //   icon: <Circle />,
      //   navLink: 'components/breadcrumbs'
      // }
      // {
      //   id: 'shops',
      //   title: 'Orders stages',
      //   icon: <Circle />,
      //   navLink: '/forms/elements/input-mask'
      // }
      // ,
      // {
      //   id: 'details',
      //   title: 'Details',
      //   icon: <Circle />,
      //   navLink: '/apps/ecommerce/product-detail'
      // },
      // {
      //   id: 'wishLists',
      //   title: 'Wish List',
      //   icon: <Circle />,
      //   navLink: '/apps/ecommerce/wishlist'
      // },
      // {
      //   id: 'checkouts',
      //   title: 'Checkout',
      //   icon: <Circle />,
      //   navLink: '/apps/ecommerce/checkout'
      // }
    ]
  },

  {
    id: 'Delivery',
    title: 'Delivery',
    icon: <ShoppingBag />,
    navLink: '/delivery_items'
  },

  // {
  //   id: 'Purchase',
  //   title: 'Purchase',
  //   icon: <Zap  />,
  //   children: [
  //     {
  //       // id: 'shop',
  //       // title: 'Shop',
  //       // icon: <Circle />,
  //       // navLink: '/apps/ecommerce/shops'
  //     }
  //   ]
  // }, {
  //   id: 'Production',
  //   title: 'Production',
  //   icon: <Sliders />,
  //   children: [
  //     {
  //       // id: 'shop',
  //       // title: 'Shop',
  //       // icon: <Circle />,
  //       // navLink: '/apps/ecommerce/shops'
  //     }
  //   ]
  // }, {
  //   id: 'Sales',
  //   title: 'Sales',
  //   icon: <Activity  />,
  //   children: [
  //     {
  //       // id: 'shop',
  //       // title: 'Shop',
  //       // icon: <Circle />,
  //       // navLink: '/apps/ecommerce/shops'
  //     }
  //   ]
  // }, {
  //   id: 'Inventory',
  //   title: 'Inventory',
  //   icon: <GitBranch  />,
  //   children: [
  //     {
  //       // id: 'shop',
  //       // title: 'Shop',
  //       // icon: <Circle />,
  //       // navLink: '/apps/ecommerce/shops'
  //     }
  //   ]
  // }, {
  //   id: 'Inventory Tagged',
  //   title: 'Inventory Tagged',
  //   icon: <GitPullRequest  />,
  //   children: [
  //     {
  //       // id: 'shop',
  //       // title: 'Shop',
  //       // icon: <Circle />,
  //       // navLink: '/apps/ecommerce/shops'
  //     }
  //   ]
  // },
  // {
  //   id: 'Karigar',
  //   title: 'Karigar',
  //   icon: <Users  />,
  //   children: [
  //     {
  //       id: 'Karigar',
  //       title: 'Karigar',
  //       icon: <Circle />,
  //       navLink: '/apps/ecommerce/shops'
  //     }
  //   ]
  // }, {
  //   id: 'M.I.S Reports',
  //   title: 'M.I.S Reports',
  //   icon: <Trello  />,
  //   children: [
  //     {
  //       // id: 'shop',
  //       // title: 'Shop',
  //       // icon: <Circle />,
  //       // navLink: '/apps/ecommerce/shops'
  //     }
  //   ]
  // },
  // {
  //   id: 'Sms',
  //   title: 'Sms',
  //   icon: <MessageSquare />,
  //   children: [
  //     {
  //       id: 'email',
  //       title: 'Email',
  //       icon: <Mail />,
  //       navLink: '/apps/email'
  //     }

  //   ]
  // },
  // {
  //   id: 'Staff Salary',
  //   title: 'Staff Salary',
  //   icon: <CreditCard />,
  //   children: [
  //     {
  //       // id: 'shop',
  //       // title: 'Shop',
  //       // icon: <Circle />,
  //       // navLink: '/apps/ecommerce/shops'
  //     }

  //   ]
  // }, 


  {
    header: 'ORDER REPORTS'
  },
  {
    id: 'Reports',
    title: 'Reports',
    icon: <FileMinus  />,
    children: [
      // {
      //   id: 'Items Type',
      //   title: 'Employee Wise',
      //   icon: <Circle />,
      //   navLink: '/employee-wise'
      // },
      {
        id: 'Items Type',
        title: 'Casting Karigar',
      icon: <Circle />,
        navLink: '/casting-rep'
      },
      {
        id: 'Stone storage',
        title: 'Ghat Karigar',
        icon: <Circle />,
        navLink: '/ghat-karigar'
      },
     
      // {
      //   id: 'Stone storage',
      //   title: 'Packets',
      //   icon: <Circle />,
      //   navLink: '/packet'
      // },
      // {
      //   id: 'Stone storage',
      //   title: 'Beeds',
      //   icon: <Circle />,
      //   navLink: '/beeds'
      // },
      {
        id: 'Stone storage',
        title: 'Polish Order Wise',
        icon: <Circle />,
        navLink: '/polish'
      },
     
      {
        id: 'Stone storage',
        title: 'Settings',
        icon: <Circle />,
        navLink: '/sng-setting'
      },
      {
        id: 'Stone storage',
        title: 'Bandini',
        icon: <Circle />,
        navLink: '/sng-bandini'
      },
      {
        id: 'Stone storage',
        title: 'Mala',
        icon: <Circle />,
        navLink: '/khmala'
      },
      {
        id: 'Stone storage',
        title: 'Stone Transaction',
        icon: <Circle />,
        navLink: '/stones-rep'
      },
      {
        id: 'Stone storage',
        title: 'Tikili Transaction',
        icon: <Circle />,
        navLink: '/tikili-rep'
      },
      {
        id: 'Stone storage',
        title: 'Customer Orders',
        icon: <Circle />,
        navLink: '/cust-order'
      },
      {
        id: 'Stone storage',
        title: 'Costing Details',
        icon: <Circle />,
        navLink: '/costing-rep'
      },
      {
        id: 'Stone storage',
        title: 'Selling Details',
        icon: <Circle />,
        navLink: '/selling-rep'
      },
      // {
      //   id: 'Stone storage',
      //   title: 'Un-finished',
      //   icon: <Circle />,
      //   navLink: '/unfinished'
      // },
      {
        id: 'Stone storage',
        title: 'Delivery',
        icon: <Circle />,
        navLink: '/delivery'
      }

    ]
  },

  {
    header: 'ACTIVITIES'
  },
  {
    id: 'Expenses',
    title: 'Expenses',
    icon: <Airplay />,
    children: [
      {
        id: 'view',
        title: 'Categories',
        icon: <Circle />,
        navLink: '/categories'
      },
      {
        id: 'list',
        title: 'Sub Categories',
        icon: <Circle />,
        navLink: '/sub-categories'
      },
      {
        id: 'list',
        title: 'Expense List',
        icon: <Circle />,
        navLink: '/expencelist'
      }
    

    ]
  },
  // {
  //   id: 'Purchases',
  //   title: 'Purchases',
  //   icon: <ShoppingBag />,
  //   children: [
  //     {
  //       id: 'view',
  //       title: 'Purchases List',
  //       icon: <Circle />,
  //       navLink: '/purches'
  //     },
  //     {
  //       id: 'list',
  //       title: 'Returns List',
  //       icon: <Circle />,
  //       navLink: '/return'
  //     }
    

  //   ]
  // },

  {
    header: 'FINANCE REPORTS'
  },
  {
    id: 'Reports123',
    title: 'Reports',
    icon: <FileMinus  />,
    children: [
      {
        id: 'Items Type',
        title: 'Balance Sheet',
        icon: <Circle />,
        navLink: '/balance'
      },
      {
        id: 'Stone storage',
        title: 'Summary Report',
        icon: <Circle />,
        navLink: '/summary'
      },
      {
        id: 'Stone storage',
        title: 'Party Balance',
        icon: <Circle />,
        navLink: '/partybalance'
      }

    ]
  }


]
