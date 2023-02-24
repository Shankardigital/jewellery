// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const SupportTracker = props => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/support-tracker').then(res => setData(res.data))
    return () => setData(null)
  }, [])

  const [order, setorder] = useState([])
  const [form, setform] = useState([])
  const [orderper, setorderper] = useState([])
  console.log(order)

  const handleChange = (e) => {
    const myuser = { ...form }
    myuser[e.target.name] = e.target.value
    setform(myuser)
    // actiordrs()
      const datas = localStorage.getItem("accessToken")
  // const actiordrs = () => {
    const token = datas
    const daysLast = e.target.value
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/dashboard/getadmindashboard", {daysLast},
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setorder(res.data.ordersCountBasedOnDays)
        setorderper(res.data.ordersCountBasedOnDays.compltedOrdersPercent)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            // toast.error(error.response.data.message)
        }
    })

  // }
  }

  const datas = localStorage.getItem("accessToken")
  const actiordrs = () => {
    const token = datas
    const daysLast = "7"
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/dashboard/getadmindashboard", {daysLast},
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setorder(res.data.ordersCountBasedOnDays)
        setorderper(res.data.ordersCountBasedOnDays.compltedOrdersPercent)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            // toast.error(error.response.data.message)
        }
    })

  }

  useEffect(() => {
    actiordrs()
  }, [])

  const options = {
    plotOptions: {
      radialBar: {
        size: 150,
        offsetY: 20,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '65%'
        },
        track: {
          background: '#fff',
          strokeWidth: '100%'
        },
        dataLabels: {
          name: {
            offsetY: -5,
            fontFamily: 'Montserrat',
            fontSize: '1rem'
          },
          value: {
            offsetY: 15,
            fontFamily: 'Montserrat',
            fontSize: '1.714rem'
          }
        }
      }
    },
    colors: [props.danger],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [props.primary],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      dashArray: 8
    },
    labels: ['Completed Orders']
  },
    series = [orderper]

  return data !== null ? (
    <Card>
      <CardHeader className='pb-0'>
        <CardTitle tag='h4'>Orders</CardTitle>
        <UncontrolledDropdown className='chart-dropdown'>
          {/* <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
            Last 7 days
          </DropdownToggle> */}
          <select value={form.daysLast} name='daysLast' onChange={(e) => { handleChange(e) }} className='form-select'>
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="60">Last 2 months</option>
          </select>
          <DropdownMenu end>
            {data.last_days.map(item => (
              <DropdownItem className='w-100' key={item}>
                {order.noOfDays}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm='2' className='d-flex flex-column flex-wrap text-center'>
            <h1 className='font-large-2 fw-bolder mt-2 mb-0'>{order.totalOders}</h1>
            <CardText>Total Orders</CardText>
          </Col>
          <Col sm='10' className='d-flex justify-content-center'>
            <Chart options={options} series={series} type='radialBar' height={230} id='support-tracker-card' />
          </Col>
        </Row>
        <div className='d-flex justify-content-between mt-1'>
          <div className='text-center'>
            <CardText className='mb-50'>New Orders</CardText>
            <span className='font-large-1 fw-bold'>{order.notStartedOrders}</span>
          </div>
          <div className='text-center'>
            <CardText className='mb-50'>Started Orders</CardText>
            <span className='font-large-1 fw-bold'>{order.startedOrders}</span>
          </div>
          <div className='text-center'>
            <CardText className='mb-50'>Delivery Orders</CardText>
            <span className='font-large-1 fw-bold'>{order.finishedOrders}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  ) : null
}
export default SupportTracker
