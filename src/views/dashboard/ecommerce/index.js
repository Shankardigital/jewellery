// ** React Imports
import { useContext, useEffect, useState } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardTitle, CardHeader, Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle  } from 'reactstrap'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'
import {
  Eye,
  RotateCw,
  Award,
  Truck,
  ShoppingBag,
  MessageSquare,
  Settings, MoreVertical, Pocket, Check, DollarSign, CreditCard, TrendingUp   
} from 'react-feather'
import Avatar from '@components/avatar'
import axios from 'axios'
// import toast from 'react-hot-toast'

// ** Demo Components
import CompanyTable from './CompanyTable'

import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'

import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'

import StatsVertical from '@components/widgets/stats/StatsVertical'
import CardUserTimeline from '../../ui-elements/cards/advance/CardUserTimeline'
import { kFormatter } from '@utils'

import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import RevenueGenerated from '@src/views/ui-elements/cards/statistics/RevenueGenerated'
import QuaterlySales from '@src/views/ui-elements/cards/statistics/QuaterlySales'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'

import AvgSessions from '@src/views/ui-elements/cards/analytics/AvgSessions'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

import InvoiceList from '@src/views/apps/invoice/list'
import SupportTracker from '@src/views/ui-elements/cards/analytics/SupportTracker'
import Chart from 'react-apexcharts'

const EcommerceDashboard = (props) => {

  const context = useContext(ThemeColors)

  const { colors } = useContext(ThemeColors)

  // const recentDevicesArr = [
  //   {
  //     device: 'Dell XPS 15',
  //     location: 'United States',
  //     browser: 'Chrome on Windows',
  //     activity: '10, Jan 2021 20:07'
  //   },
  //   {
  //     location: 'Ghana',
  //     device: 'Google Pixel 3a',
  //     browser: 'Chrome on Android',
  //     activity: '11, Jan 2021 10:16'
  //   },
  //   {
  //     location: 'Mayotte',
  //     device: 'Apple iMac',
  //     browser: 'Chrome on MacOS',
  //     activity: '11, Jan 2021 12:10'
  //   },
  //   {
  //     location: 'Mauritania',
  //     device: 'Apple iPhone XR',
  //     browser: 'Chrome on iPhone',
  //     activity: '12, Jan 2021 8:29'
  //   }
  // ]

  const options = {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      type: 'line',
      dropShadow: {
        enabled: true,
        top: 18,
        left: 2,
        blur: 5,
        opacity: 0.2
      },
      offsetX: -10
    },
    stroke: {
      curve: 'smooth',
      width: 4
    },
    grid: {
      borderColor: '#ebe9f1',
      padding: {
        top: -20,
        bottom: 5,
        left: 20
      }
    },
    legend: {
      show: false
    },
    colors: ['#df87f2'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        inverseColors: false,
        gradientToColors: [props.primary],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 5
      }
    },
    xaxis: {
      labels: {
        offsetY: 5,
        style: {
          colors: '#b9b9c3',
          fontSize: '0.857rem',
          fontFamily: 'Montserrat'
        }
      },
      axisTicks: {
        show: false
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: false
      },
      tickPlacement: 'on'
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        style: {
          colors: '#b9b9c3',
          fontSize: '0.857rem',
          fontFamily: 'Montserrat'
        },
        formatter(val) {
          return val > 999 ? `${(val / 1000).toFixed(1)}k` : val
        }
      }
    },
    tooltip: {
      x: { show: false }
    }
  },
  series = [
    {
      name: 'Sales',
      data: [140, 180, 150, 205, 160, 295, 125, 255, 205, 305, 240, 295]
    }
  ]

    const transactionsArr = [
      {
        title: 'Total In Today Cash',
        color: 'light-primary',
        subtitle: 'Starbucks',
        amount: '- 74₹',
        down: true
      },
      {
        title: 'Total Out Today Cash',
        color: 'light-success',
        subtitle: 'Add Money',
        amount: '+ 480₹'
      },
      {
        title: 'Total Out In Account',
        color: 'light-danger',
        subtitle: 'Add Money',
        amount: '+ 590₹'
      },
      {
        title: 'Total In Account',
        color: 'light-warning',
        subtitle: 'Ordered Food',
        amount: '- 12₹',
        down: true
      },
      {
        title: 'Total Cash In Hand',
        color: 'light-info',
        subtitle: 'Refund',
        amount: '+98₹'
      },
      {
        title: 'Total Account In Hand',
        color: 'light-info',
        subtitle: 'Refund',
        amount: '+ 980₹'
      }
    ]

    const [order, setorder] = useState([])
    console.log(order)

    const datas = localStorage.getItem("accessToken")
    const actiordrs = () => {
      const token = datas
      axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/dashboard/getadmindashboard",
        {
          headers: { Authorization: `Bearer ${token}` }
        }, {}
      ).then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          setorder(res.data.orderCount)
        }
      },
        (error) => {
          if (error.response && error.response.status === 400) {
            // toast.error(error.response.data.message)
            console.log(error.data.message)
  
          }
        }
      )
    }

    useEffect(() => {
      actiordrs()
    }, [])
    
  return (
    <div  data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000"
     id='dashboard-ecommerce'>
      {/* <CardTitle>Orders Amount</CardTitle>
      <Row className='match-height'>

        <Col xl='12' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
      </Row> */}

      <Row>
        <CardTitle>Orders Count</CardTitle>
        <Col >
          <StatsVertical icon={<Eye size={21} />} color='info' stats={order.totalOrders} statTitle='Total orders' />
        </Col>
        <Col >
          <StatsVertical icon={<MessageSquare size={21} />} color='warning' stats={order.startedOrders} statTitle='Started orders' />
        </Col>
        <Col >
          <StatsVertical icon={<ShoppingBag size={21} />} color='danger' stats={order.notStartOrders} statTitle='Not Yet Started ' />
        </Col>
        {/* <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<RotateCw size={21} />} color='primary' stats='268' statTitle='Procesing Orders' />
        </Col> */}
        <Col >
          <StatsVertical icon={<Award size={21} />} color='success' stats={order.completedOrders} statTitle='Completed Orders' />
        </Col>
        {/* <Col  >
          <StatsVertical icon={<Truck size={21} />} color='danger' stats={order.completedOrders} statTitle='Returns orders' />
        </Col> */}
      </Row>

      <Row>
      <Col lg='4' xs='12'>
          <SupportTracker primary={colors.primary.main} danger={colors.danger.main} />
        </Col>

        <Col lg='8' sm='12'>
        <Card>
      <CardHeader className='align-items-start'>
        <div>
          <CardTitle className='mb-25' tag='h4'>
            Amount
          </CardTitle>
          
        </div>
        <Settings size={18} className='text-muted cursor-pointer' />
      </CardHeader>
      <CardBody className='pb-0'>
        <Chart options={options} series={series} type='line' height={270}  />
      </CardBody>
    </Card></Col>
{/* 
    <Col lg='4' sm='12'>
        <Card>
      <CardHeader className='align-items-start'>
        <div>
          <CardTitle className='mb-25' tag='h4'>
           Amount
          </CardTitle>
        </div>
        <Settings size={18} className='text-muted cursor-pointer' />
      </CardHeader>
      <CardBody className='pb-0'>
        <Chart options={options1} series={series1} type='line' height={270} />
      </CardBody>
    </Card>
    </Col> */}
    
      </Row>
     
      <Row className='match-height'>
        <Col lg='8' xs='12'>
          <CompanyTable />
        </Col>
        <Col lg='4' xs='12'>
          <CardUserTimeline />
        </Col>
      </Row>

      {/* <Row className='match-height'>
        <Col lg='6' xs='12'>
          <Card>
            <CardHeader className='border-bottom'>
              <CardTitle tag='h4'>Recent Login Devices</CardTitle>
            </CardHeader>
            <CardBody className='my-2 py-25'>
              <Table className='text-nowrap text-center' responsive bordered>
                <thead>
                  <tr>
                    <th className='text-start'>Browser</th>
                    <th>Device</th>
                    <th>Location</th>
                    <th>Recent Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDevicesArr.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className='text-start'>

                          <span className='fw-bolder'>{item.browser}</span>
                        </td>
                        <td>{item.device}</td>
                        <td>{item.location}</td>
                        <td>{item.activity}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col lg='6' xs='12'>
          <AvgSessions primary={colors.primary.main} />
        </Col>
      </Row> */}

      {/* <Row>
        <Col lg='12' sm='12'>
        <Card>
      <CardHeader className='align-items-start'>
        <div>
          <CardTitle className='mb-25' tag='h4'>
            Income & Expense
          </CardTitle>
          <CardText className='mb-0'>Current Year : 2022</CardText>
        </div>
        <Settings size={18} className='text-muted cursor-pointer' />
      </CardHeader>
      <CardBody className='pb-0'>
        <Chart options={options} series={series} type='line' height={240} />
      </CardBody>
    </Card></Col>
      </Row> */}

{/* <Row className='match-height'>
        <Col lg='12' md='12'>
          <RevenueReport primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
      </Row> */}

      <Row>
        <Col lg='3' sm='6'>
          <SubscribersGained kFormatter={kFormatter} />
        </Col>
        <Col lg='3' sm='6'>
          <RevenueGenerated kFormatter={kFormatter} success={context.colors.success.main} />
        </Col>
        <Col lg='3' sm='6'>
          <QuaterlySales danger={context.colors.danger.main} />
        </Col>
        <Col lg='3' sm='6'>
          <OrdersReceived kFormatter={kFormatter} warning={context.colors.warning.main} />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col xs='12'>
        <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>Cash Flow</CardTitle>
        {/* <MoreVertical size={18} className='cursor-pointer' /> */}
      </CardHeader>
      <CardBody>
        {transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          <div className='d-flex'>
            <div>
              <h6 className='transaction-title'>{item.title}</h6>
              {/* <small>{item.subtitle}</small> */}
            </div>
          </div>
          <div className={`fw-bolder ${item.down ? 'text-danger' : 'text-success'}`}>{item.amount}</div>
        </div>
         )
        })
      }
        </CardBody>
    </Card>
        </Col>
      </Row>
    </div>
  )
}

export default EcommerceDashboard
