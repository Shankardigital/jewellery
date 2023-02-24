// ** React Imports
import { Fragment, useState, useEffect  } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardTitle, CardHeader, Input, Form, Button, Label } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import BasicCheckbox from './CheckboxBasic'
import ColoredCheckbox from './CheckboxColors'
import axios from "axios"
import toast from 'react-hot-toast'

const Editcust = () => {


  const [pfdata, setpfdata] = useState([])

  const handleChange = (e) => {
    const newadmin = { ...pfdata }
    newadmin[e.target.name] = e.target.value
    setpfdata(newadmin)
  }


  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas =  localStorage.getItem("accessToken")
  const datas1 =  sessionStorage.getItem("custid")
  console.log(datas)


  const custlist = () => {
    const docid = datas1
    const token = datas
    const params = {
        id:docid
    }
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/customer/getcustomerbyid", params,
        {
            headers: { Authorization: `Bearer ${token}` }
        }, {}
    ).then((res) => {
        if (res.status === 200) {
            console.log(res.data)
            setpfdata(res.data.customerData)
        }
    },
        (error) => {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message)
                console.log(error.data.message)

            }
        }
    )
}

useEffect(() => {
    custlist()
}, [])

const navigate = useNavigate()
const Addcust = () => {
    const docid = pfdata._id
  const token = datas 
  const params = {
    date:pfdata.date,
    customerName:pfdata.customerName,
    phone:pfdata.phone,
    altPhone:pfdata.altPhone,
    email:pfdata.email,
    status:pfdata.status,
    address:pfdata.address,
    state:pfdata.state,
    city:pfdata.city,
    country:pfdata.country
  }
  axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/customer/editcustomer/${docid}`, params,
  {
  headers: { Authorization: `Bearer ${token}` }
}, {}
  ).then((res) => {
   if (res.status === 200) {
    console.log(res.data)
    // setpfdata(res.data.profileResult)
    // custlist()
    toast.success(res.data.message)
    navigate("/customer-list")
   }
  },
  (error) => {
    if (error.response && error.response.status === 400) {
      toast.error(error.response.data.message)
      console.log(error.data.message)

    }
  }
  )
}


const formsub = (e) => {
  e.preventDefault()
  Addcust()
}

  return (
    <Fragment >
      <div   data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000">
      <Breadcrumbs title='Edit Customer' data={[{ title: 'Edit Customer' }]} />
      <Row 
    
      >
        <Col sm='12'>
          <Card>
            <CardHeader>
              <CardTitle tag='h4' className='text-center' style={{ color: "#fa2841de" }}>Edit Customer</CardTitle>
            </CardHeader>
            <CardBody>
              <Form onSubmit = {(e) => formsub(e) }>
                <Row>
                <Col md='4' sm='12' className='mb-1'>
                    <Label className='form-label' for='nameMulti'>
                      Date: <small style={{color:'red'}}>*</small>
                    </Label>
                    <Input 
                    max={new Date().toISOString().split("T")[0]}
                    value={pfdata.date} required onChange = {(e) => handleChange(e) } type='date' name='date' id='nameMulti' placeholder='Enter Full Name' />
                  </Col>
                  <Col md='4' sm='12' className='mb-1'>
                    <Label className='form-label' for='nameMulti'>
                      Customer : <small style={{color:'red'}}>*</small>
                    </Label>
                    <Input value={pfdata.customerName} required onChange = {(e) => handleChange(e) }  type='text' name='customerName' id='nameMulti' placeholder='Enter Full Name' />
                  </Col>
                  <Col md='4' sm='12' className='mb-1'>
                    <Label className='form-label' for='lastNameMulti'>
                      Mobile No <small style={{color:'red'}}>*</small>
                    </Label>
                    <Input value={pfdata.phone} required onChange = {(e) => handleChange(e) }  type='number' name='phone' className='form-control' id='lastNameMulti' placeholder='Enter Mobile No' />
                  </Col>

                  <Col md='4' sm='12' className='mb-1'>
                    <Label className='form-label' for='lastNameMulti'>
                    Alternative Mobile No:
                    </Label>
                    <Input value={pfdata.altPhone} onChange = {(e) => handleChange(e) }  type='number' name='altPhone' className='form-control' id='lastNameMulti'  placeholder='Enter Mobile No' />
                  </Col>


                  <Col md='4' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Email:<small style={{color:'red'}}>*</small>
                    </Label>
                    <Input value={pfdata.email} required onChange = {(e) => handleChange(e) }  type='email' name='email' id='EmailMulti' placeholder='Enter Email'  />
                  </Col>
                  <Col md='4' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Status :<small style={{color:'red'}}>*</small>
                    </Label> 
                    <select value={pfdata.status} required onChange = {(e) => handleChange(e) }  name='status' className='form-select'>
                      <option value="">Select</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    {/* <Input required onChange = {(e) => handleChange(e) }  type='text' name='country' id='EmailMulti'  placeholder='Enter Country' /> */}
                  </Col>
                  <Col md='4' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Country:<small style={{color:'red'}}>*</small>
                    </Label> 
                    <select value={pfdata.country}  required onChange = {(e) => handleChange(e) }  name='country' className='form-select'>
                      <option value="">Select</option>
                      <option value="India">India</option>
                    </select>
                    {/* <Input required onChange = {(e) => handleChange(e) }  type='text' name='country' id='EmailMulti'  placeholder='Enter Country' /> */}
                  </Col>
                  <Col md='4' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      State:<small style={{color:'red'}}>*</small>
                    </Label>
                    <Input value={pfdata.state}  onChange = {(e) => handleChange(e) }  type='text' name='state' id='EmailMulti' required placeholder='Enter State' />
                  </Col>
                  <Col md='4' sm='12' className='mb-1'>
                    <Label className='form-label' for='lastNameMulti'>
                      City:<small style={{color:'red'}}>*</small>
                    </Label>
                    <Input value={pfdata.city}  required onChange = {(e) => handleChange(e) }  type='text' name='city' className='form-control'  id='lastNameMulti' placeholder='Enter City' />
                  </Col>

                  <Col md='4' sm='12' className='mb-1'>
                    <Label className='form-label' for='nameMulti'>
                      Address:<small style={{color:'red'}}>*</small>
                    </Label>
                    <Input value={pfdata.address}  required onChange = {(e) => handleChange(e) }  type='text' name='address' id='nameMulti' placeholder='Enter Address'  />
                  </Col>
                  

                  <Col sm='12'>
                    <div className='d-flex' style={{ float: 'right' }}>
                    <Button className='m-1' color='success' type='submit' >
                        Submit
                      </Button>

                      <Link to="/customer-list">
                      <Button className='m-1' outline color='danger' type='reset'>
                        Cancel
                      </Button>
                        </Link> 
                     
                    </div>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
    </Fragment>
  )
}
export default Editcust
