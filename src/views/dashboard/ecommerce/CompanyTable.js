// ** Custom Components
import Avatar from '@components/avatar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
// import toast from 'react-hot-toast'

// ** Reactstrap Imports
import { Table, Card, CardTitle, CardHeader } from 'reactstrap'

// ** Icons Imports
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'

const CompanyTable = () => {
  // ** vars

  const [reorder7, setreorder7] = useState([])
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
        setreorder7(res.data.lastTenOrdersData)
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

  return (
    <Card className='card-company-table'>
         <CardHeader>
       <CardTitle tag='h4'>Recent Orders</CardTitle></CardHeader>
      <Table responsive>
        <thead>
          <tr>
            <th>S.No</th>
            <th>ORDER iD</th>
            <th>Item Name </th>
            {/* <th>Description</th> */}
            <th>Delivery Date</th>
            <th>Customer Name</th>
            <th>Customer Mobile</th>
          </tr>
        </thead>
        <tbody>
          {reorder7.map((data, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{data.orderNo}</td>
              <td>{data.itemNameMulti.map((data) => (
                <span>{data.itemName}, </span>
              ))}</td>
              {/* <td>{data.description}</td> */}
              <td> <Moment format="DD/MM/YYYY">{data.deadline}</Moment></td>
              <td>{data.customerName}</td>
              <td>{data.customerMobile}</td>
              {/* <td>{data.customerName}</td> */}
            </tr>
          ))}
          </tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
