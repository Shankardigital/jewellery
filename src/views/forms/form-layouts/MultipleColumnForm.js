// ** Reactstrap Imports
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import axios from "axios"
import toast from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'


const MultipleColumnForm = () => {

  const [pfdata, setpfdata] = useState([])
  const [form, setform] = useState([])
  console.log(form)

  const handleChange = (e) => {
    const newadmin = { ...pfdata }
    newadmin[e.target.name] = e.target.value
    setpfdata(newadmin)
  }

  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  console.log(datas)
  const adrole = data1.role
  const access = data1.rolesPermissions
  console.log(access)

  const depart = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/getactivedepartments",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setform(res.data.departmentResult)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const navigate = useNavigate()

  const Addcust = () => {
    const token = datas
    const params = {
      firstName: pfdata.firstName,
      lastName: pfdata.lastName,
      email: pfdata.email,
      phone: pfdata.phone,
      password: pfdata.password,
      designation: pfdata.designation,
      departmentId: pfdata.departmentId,
      address: pfdata.address,
      state: pfdata.state,
      city: pfdata.city,
      country: pfdata.country
    }
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/registerAdmin", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        // setpfdata(res.data.profileResult)
        // custlist()
        toast.success(res.data.message)
        navigate("/employeelist")
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

  useEffect(() => {
    depart()
  }, [])


  return (
    <Card>
      <CardHeader>
        {/* <CardTitle tag='h4'>Multiple Column</CardTitle> */}
      </CardHeader>

      <CardBody>
        <Form onSubmit={(e) => formsub(e)}>

          {access.empAdd === true || adrole === "admin" ? (
            <Row>
              <Col md='3' sm='12' className='mb-1'>
                <Label className='form-label' for='nameMulti'>
                  First Name
                </Label>
                <Input

                  required onChange={(e) => handleChange(e)} type='text' name='firstName' id='nameMulti' placeholder='First Name' />
              </Col>
              <Col md='3' sm='12' className='mb-1'>
                <Label className='form-label' for='lastNameMulti'>
                  Last Name
                </Label>
                <Input pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" required onChange={(e) => handleChange(e)} type='text' name='lastName' id='lastNameMulti' placeholder='Last Name' />
              </Col>

              <Col md='3' sm='12' className='mb-1'>
                <Label className='form-label' for='EmailMulti'>
                  Email
                </Label>
                <Input required onChange={(e) => handleChange(e)} type='email' name='email' id='EmailMulti' placeholder='Email' />
              </Col>
              <Col md='3' sm='12' className='mb-1'>
                <Label className='form-label' for='EmailMulti'>
                  Mobile Number
                </Label>
                <Input
                  type="text"
                  maxlength="10"
                  pattern="\d{10}"
                  required onChange={(e) => handleChange(e)} name='phone' id='EmailMulti' placeholder='Mobile Number' />
              </Col>

              <Col md='3' sm='12' className='mb-1'>
                <Label className='form-label' for='cityMulti'>
                  password
                </Label>
                <Input minLength={6} required onChange={(e) => handleChange(e)} type='password' name='password' id='cityMulti' placeholder='Password' />
              </Col>
              {/* <Col md='3' sm='12' className='mb-1'>
     <Label className='form-label' for='cityMulti'>
       Confirm password
     </Label>
     <Input type='password' name=' Confirmpassword' id='cityMulti' placeholder='Confirm password' />
   </Col> */}
              <Col md='3' sm='12' className='mb-1'>
                {/* <Label className='form-label' for='CompanyMulti'>
       Departement
     </Label> */}
                <Label className='form-label' for='select-basic'>
                  Designation
                </Label>
                <Input pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" placeholder='Designation' required onChange={(e) => handleChange(e)} type='text' name='designation' id='select-basic'>

                  {/* <option>Manager</option>
       <option>Accountant</option>
       <option>Drawing Jewelley Master</option>
       <option>Auto Cad Employee</option>
       <option>Ghat Polish Employee</option>
       <option>Setting Preparation Employee</option>
       <option>Bandini Employee</option>
       <option>Stones Detail / Bandini Manage Employee </option> */}
                </Input>
              </Col>

              <Col md='3' sm='12' className='mb-1'>
                {/* <Label className='form-label' for='CompanyMulti'>
       Departement
     </Label> */}
                <Label className='form-label' for='select-basic'>
                  Department
                </Label>
                <Input required onChange={(e) => handleChange(e)} type='select' name='departmentId' id='select-basic'>
                  <option>Select Department </option>

                  {form.map((data) => (
                    <option value={data._id}>{data.departmentName}</option>
                  ))}
                  {/* <option>Admin</option>
       <option>Manager</option>
       <option>Accountant</option>
       <option>Drawing Jewelley Master</option>
       <option>Auto Cad Employee</option>
       <option>Ghat Employee</option>
       <option>Ghat Polish Employee</option>
       <option>Setting Preparation Employee</option>
       <option>Bandini Employee</option>
       <option>Stones Detail / Bandini Manage Employee </option> */}
                </Input>
              </Col>

              <Col md='3' sm='12' className='mb-1'>
                <Label className='form-label' for='CountryMulti'>
                  Country
                </Label>
                <select className='form-select' required onChange={(e) => handleChange(e)} name='country'>
                  <option value="">Select</option>
                  <option value="India">India</option>
                </select>

                {/* <Input required onChange={(e) => handleChange(e)} type='select' name='country' id='CountryMulti' placeholder='Country' />
     <option value="">Select</option>
     <option value="India">India</option> */}
              </Col>
              <Col md='3' sm='12' className='mb-1'>
                <Label className='form-label' for='CountryMulti'>
                  state
                </Label>
                <Input pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" required onChange={(e) => handleChange(e)} type='text' name='state' id='CountryMulti' placeholder='state' />
              </Col>

              <Col md='3' sm='12' className='mb-1'>
                <Label className='form-label' for='cityMulti'>
                  City
                </Label>
                <Input pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" required onChange={(e) => handleChange(e)} type='text' name='city' id='cityMulti' placeholder='City' />
              </Col>
              <Col md='3' sm='12' className='mb-1'>
                <Label className='form-label' for='CompanyMulti'>
                  Address
                </Label>
                <Input required onChange={(e) => handleChange(e)} type='text' name='address' id='CompanyMulti' placeholder='Address' />
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
          ) : (
            <>
            <h5 className='text-center'>You don't have permission to access</h5>
            </>
          )}

        </Form>
      </CardBody>
    </Card>
  )
}
export default MultipleColumnForm
