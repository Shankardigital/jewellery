// ** Custom Components
import { useState, useEffect } from 'react'
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
import axios from 'axios'
// import toast from 'react-hot-toast'

// ** Icons Imports
import { List, MoreVertical, Eye } from 'react-feather'
import { Link } from "react-router-dom"

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'

const UserTimeline = () => {

  const [reorder, setreorder] = useState([])
  const [reorder1, setreorder1] = useState([])
  const [reorder2, setreorder2] = useState([])
  const [reorder3, setreorder3] = useState([])
  const [reorder4, setreorder4] = useState([])
  const [reorder5, setreorder5] = useState([])
  const [reorder6, setreorder6] = useState([])
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
        setreorder(res.data.orderStatus.cadCount)
        setreorder1(res.data.orderStatus.castingCount)
        setreorder2(res.data.orderStatus.ghatCount)
        setreorder3(res.data.orderStatus.polish1stCount)
        setreorder4(res.data.orderStatus.polish2ndCount)
        setreorder5(res.data.orderStatus.settingCount)
        setreorder6(res.data.orderStatus.bandiniCount)
        setreorder7(res.data.orderStatus.malaCount)
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

  const data = [
    {
      title: 'CAD Department',
      content:  reorder,
      meta: <Link to="/drawing"><Eye /></Link>,
      metaClassName: '  me-1'

    },
    {
      title: 'Casting',
      content: reorder1,
      meta: <Link to="/casting"><Eye /></Link>,
      metaClassName: 'me-1',
      color: 'warning'
      // customContent: (
      //   <div className='d-flex align-items-center'>
      //     <Avatar img={ceo} />
      //     <div className='ms-50'>
      //       <h6 className='mb-0'>John Doe (Client)</h6>
      //       <span>CEO of Infibeam</span>
      //     </div>
      //   </div>
      // )
    },
    {
      title: 'Ghat Details',
      content: reorder2,
      color: 'danger',
      meta: <Link to="/ghat-details"><Eye /></Link>,
      metaClassName: 'me-1'
    },
    {
      title: 'Polish 1st stage',
      content: reorder3,
      color: 'danger',
      meta: <Link to="/polish-details"><Eye /></Link>,
      metaClassName: 'me-1'
    },
    {
      title: 'Polish 2nd stage',
      content: reorder4,
      color: 'info',
      meta: <Link to="/polish2-details"><Eye /></Link>,
      metaClassName: 'me-1'
      // customContent: <AvatarGroup data={avatarGroupArr} />
    },
    {
      title: 'Setting Details',
      content: reorder5,
      color: 'dark',
      meta: <Link to="/setting-details"><Eye /></Link>,
      metaClassName: 'me-1'
      // customContent: <AvatarGroup data={avatarGroupArr} />
    },
    {
      title: 'Bandini Details',
      content: reorder6,
      color: 'primary',
      meta: <Link to="/bandhini-details"><Eye /></Link>,
      metaClassName: 'me-1'
      // customContent: <AvatarGroup data={avatarGroupArr} />
    },
    {
      title: 'Mala Details',
      content: reorder7,
      color: 'success',
      meta: <Link to="/mala-details"><Eye /></Link>,
      metaClassName: 'me-1'
      // customContent: <AvatarGroup data={avatarGroupArr} />
    }
  ]

  return (
    <Card className='card-user-timeline'>
      <CardHeader>

        <div className='d-flex align-items-center'>
          {/* <List className='user-timeline-title-icon' /> */}
          <CardTitle tag='h4'>Order Status</CardTitle>
        </div>
        {/* <MoreVertical size={18} className='cursor-pointer' /> */}
      </CardHeader>
      <CardBody>
        {/* <Table responsive>
        <thead>
          <tr>
            <th>S.No</th>
            <th>ORDER iD</th>
            <th>Item Name </th>
            <th>Details</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
        <td>1</td> 
        <td>12222</td>
        <td>Gold Chain</td>
        <td>stage 1</td>
        <td>12-12-2022</td></tr>
        
        <tr>
        <td>2</td> 
        <td>12222</td>
        <td>Gold Chain</td>
        <td>stage 1</td>
        <td>12-12-2022</td></tr>
        <tr>
        <td>3</td> 
        <td>12222</td>
        <td>Gold Chain</td>
        <td>stage 1</td>
        <td>12-12-2022</td></tr>
        <tr>
        <td>4</td> 
        <td>12222</td>
        <td>Gold Chain</td>
        <td>stage 1</td>
        <td>12-12-2022</td></tr>
        <tr>
        <td>5</td> 
        <td>12222</td>
        <td>Gold Chain</td>
        <td>stage 1</td>
        <td>12-12-2022</td></tr>
        <tr>
        <td>6</td> 
        <td>12222</td>
        <td>Gold Chain</td>
        <td>stage 1</td>
        <td>12-12-2022</td></tr>
        <tr>
        <td>7</td> 
        <td>12222</td>
        <td>Gold Chain</td>
        <td>stage 1</td>
        <td>12-12-2022</td></tr>
        
        </tbody>
      </Table> */}

        <Timeline className='ms-50 mb-0' data={data} />
      </CardBody>
    </Card>
  )
}

export default UserTimeline
