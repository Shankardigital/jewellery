// ** React Imports
import { Fragment, useState } from 'react'


// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardTitle, CardHeader, Input, Form, Button, Label } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

// ** Demo Components
// import BasicCheckbox from './CheckboxBasic'
// import ColoredCheckbox from './CheckboxColors'
import axios from "axios"

const Checkbox = () => {

  const [pfdata, setpfdata] = useState([])

  const handleChange = (e) => {
    const newadmin = { ...pfdata }
    newadmin[e.target.name] = e.target.value
    setpfdata(newadmin)
  }

  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  const adrole = data1.role
  const access = data1.rolesPermissions
  console.log(datas)

  //   const custlist = () => {
  //     const token = datas
  //     console.log(token)
  //     axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/customer/listcustomers",
  //         {
  //             headers: { Authorization: `Bearer ${token}` }
  //         }, {}
  //     ).then((res) => {
  //         if (res.status === 200) {
  //             console.log(res.data)
  //             setcustomer(res.data.customerData)
  //             // toast.success(res.data.message)
  //             // navigate("/otp")
  //         }
  //     },
  //         (error) => {
  //             if (error.response && error.response.status === 400) {
  //                 toast.error(error.response.data.message)
  //                 console.log(error.data.message)

  //             }
  //         }
  //     )
  // }

  const navigate = useNavigate()

  const Addcust = () => {
    const token = datas
    const params = {
      date: pfdata.date,
      customerName: pfdata.customerName,
      phone: pfdata.phone,
      altPhone: pfdata.altPhone,
      email: pfdata.email,
      address: pfdata.address,
      state: pfdata.state,
      city: pfdata.city,
      country: pfdata.country
    }
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/customer/addcustomer", params,
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
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }


  const formsub = (e) => {
    e.preventDefault()
    Addcust()
  }

  return (
    <Fragment >
      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <Breadcrumbs title='Add Customer' data={[{ title: 'Add Customer' }]} />
        <Row

        >
          <Col sm='12'>
            {access.customerAdd === true || adrole === "admin" ? (
              <Card>
                <CardHeader>
                  <CardTitle tag='h4' className='text-center' style={{ color: "#fa2841de" }}>Add Customer</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={(e) => formsub(e)}>
                    <Row>
                      <Col md='4' sm='12' className='mb-1'>
                        <Label className='form-label' for='nameMulti'>
                          Date: <small style={{ color: 'red' }}>*</small>
                        </Label>
                        <Input
                          max={new Date().toISOString().split("T")[0]}
                          required onChange={(e) => handleChange(e)} type='date' name='date' id='nameMulti' placeholder='Enter Full Name' />
                      </Col>
                      <Col md='4' sm='12' className='mb-1'>
                        <Label className='form-label' for='nameMulti'>
                          Customer / CompanyName: <small style={{ color: 'red' }}>*</small>
                        </Label>
                        <Input required onChange={(e) => handleChange(e)} type='text' name='customerName' id='nameMulti' placeholder='Enter Full Name' />
                      </Col>
                      <Col md='4' sm='12' className='mb-1'>
                        <Label className='form-label' for='lastNameMulti'>
                          Mobile No <small style={{ color: 'red' }}>*</small>
                        </Label>
                        <Input
                          maxlength="10"
                          pattern="\d{10}"
                          required onChange={(e) => handleChange(e)} type='text' name='phone' className='form-control' id='lastNameMulti' placeholder='Enter Mobile No' />
                      </Col>

                      <Col md='4' sm='12' className='mb-1'>
                        <Label className='form-label' for='lastNameMulti'>
                          Alternative Mobile No:
                        </Label>
                        <Input
                          maxlength="10"
                          pattern="\d{10}"
                          onChange={(e) => handleChange(e)} type='text' name='altPhone' className='form-control' id='lastNameMulti' placeholder='Enter Mobile No' />
                      </Col>


                      <Col md='4' sm='12' className='mb-1'>
                        <Label className='form-label' for='EmailMulti'>
                          Email:<small style={{ color: 'red' }}>*</small>
                        </Label>
                        <Input required onChange={(e) => handleChange(e)} type='email' name='email' id='EmailMulti' placeholder='Enter Email' />
                      </Col>
                      <Col md='4' sm='12' className='mb-1'>
                        <Label className='form-label' for='EmailMulti'>
                          Country:<small style={{ color: 'red' }}>*</small>
                        </Label>
                        <select required onChange={(e) => handleChange(e)} name='country' className='form-select'>
                          <option value="">Select</option>
                          <option value="India">India</option>
                        </select>
                        {/* <Input required onChange = {(e) => handleChange(e) }  type='text' name='country' id='EmailMulti'  placeholder='Enter Country' /> */}
                      </Col>
                      <Col md='4' sm='12' className='mb-1'>
                        <Label className='form-label' for='EmailMulti'>
                          State:<small style={{ color: 'red' }}>*</small>
                        </Label>
                        <Input pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" onChange={(e) => handleChange(e)} type='text' name='state' id='EmailMulti' required placeholder='Enter State' />
                      </Col>
                      <Col md='4' sm='12' className='mb-1'>
                        <Label className='form-label' for='lastNameMulti'>
                          City:<small style={{ color: 'red' }}>*</small>
                        </Label>
                        <Input pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" required onChange={(e) => handleChange(e)} type='text' name='city' className='form-control' id='lastNameMulti' placeholder='Enter City' />
                      </Col>

                      <Col md='4' sm='12' className='mb-1'>
                        <Label className='form-label' for='nameMulti'>
                          Address:<small style={{ color: 'red' }}>*</small>
                        </Label>
                        <Input required onChange={(e) => handleChange(e)} type='text' name='address' id='nameMulti' placeholder='Enter Address' />
                      </Col>


                      <Col sm='12'>
                        <div className='d-flex' style={{ float: 'right' }}>
                          <Button style={{ margin: "5px" }} color='success' type='submit' >
                            Submit
                          </Button>
                          <Button style={{ margin: "5px" }} className='me-1' outline color='danger' type='reset'>
                            Cancel
                          </Button>

                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            ) : (
              <Card className='p-2'>
                <h5 className='text-center'>You don't have permission to access</h5>
              </Card>
            )}


          </Col>
        </Row>
      </div>
    </Fragment>
  )
}
export default Checkbox
