// ** React Imports
import React, { useState } from "react"
import { Link, Navigate, useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'
import toast from 'react-hot-toast'

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button, Alert, UncontrolledAlert } from 'reactstrap'

// ** Utils
import { isUserLoggedIn } from '@utils'
// import logos from "../../../assets/images/logo/logos1.png"
import logos1 from "../../../assets/images/latest/sj2.png"
import bakground1 from "../../../assets/images/latest/bakground1.jpg"

// ** Custom Hooks
// import { useSkin } from '@hooks/useSkin'

// ** Icons Imports
import { ChevronLeft, User } from 'react-feather'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import Cruds from "../../../../src/Cruds"
import axios from 'axios'
// import { error } from "jquery"
// import { useEffect } from 'react'

const ForgotPassword = () => {

  const [user, setUser] = useState({ email: "" })

  const handleChange = (e) => {
    const newadmin = { ...user }
    newadmin[e.target.name] = e.target.value
    setUser(newadmin)
  }

  const navigate = useNavigate()

  const sendotp = () => {
    const params = {
      email: user.email
    }
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/generateotp", params, {
      // headers: {
      //   'Content-Type': 'application/json'
      // }
    }).then((res) => {
      console.log("res")
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        
        navigate("/otp")
        sessionStorage.setItem("emailid", res.data.email)
        // setcustomer(res.data.employeeData)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }

    })
    // .catch((response) => console.log('error', response))
  }

  const submitform = (e) => {
    e.preventDefault()
    sendotp()
  }

  // ** Hooks
  // const { skin } = useSkin()

  // const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
  //   source = require(`@src/assets/images/pages/${illustration}`).default

  if (!isUserLoggedIn()) {
    return (
      <div style={{ backgroundImage: `url(${bakground1})` }} className='auth-wrapper auth-cover'>
        <Row className='auth-inner m-0 justify-content-md-center'>
          <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
            {/* <img src={logos1} height="100px"></img> */}
            {/* <h2 className='brand-text text-primary ms-1'>OM SANTOSH JEWELLERS</h2> */}
          </Link>
          {/* <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
            <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
              <img className='img-fluid' src={source} alt='Login Cover' />
            </div>
          </Col> */}
          <Col className='d-flex align-items-center logcard auth-bg px-2 p-lg-5' lg='4' sm='12'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
              <div className="text-center">
                <img src={logos1} height="100px"></img>
              </div>
              <CardTitle tag='p' className='fw-bold mb-1 mt-1'>
                Forgot Password? 🔒
              </CardTitle>
              <CardText className='mb-2'>
                Enter your email and we'll send you instructions to reset your password
              </CardText>
              <Form className='auth-forgot-password-form mt-2' onSubmit={(e) => { submitform(e) }}>
                <div className='mb-1'>
                  <Label className='form-label' for='login-email'>
                    Email
                  </Label>
                  <Input onChange={(e) => { handleChange(e) }} required type='email' name='email' id='login-email' placeholder='john@example.com' autoFocus />
                </div>
                {/* <Link to="/otp"> */}
                <Button type='submit' color='primary' block>
                  Send OTP
                </Button>
                {/* </Link>  */}

              </Form>
              <p className='text-center mt-2'>
                <Link to='/login'>
                  <ChevronLeft className='rotate-rtl me-25' size={14} />
                  <span className='align-middle'>Back to login</span>
                </Link>
              </p>
            </Col>
          </Col>
        </Row>
        {/* <ToastContainer/> */}
      </div>
    )
  } else {
    return <Navigate to='/' />
  }
}

export default ForgotPassword
