// ** React Imports
import React, { useState } from "react"
import { Link, Navigate, useNavigate } from 'react-router-dom'
// import { useHistory } from "react-router-dom"
// import { useNavigate } from "react-router-dom"

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'

// ** Utils
import { isUserLoggedIn } from '@utils'
// import logos from "../../../assets/images/logo/logos1.png"
import logos1 from "../../../assets/images/latest/sj2.png"
import bakground1 from "../../../assets/images/latest/bakground1.jpg"

// ** Custom Hooks
// import { useSkin } from '@hooks/useSkin'

// ** Icons Imports
import { ChevronLeft } from 'react-feather'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import Cruds from "../../../../src/Cruds"
import axios from "axios"
// import { useEffect } from 'react'

const Testlog = () => {

    const [user, setUser] = useState({ email: "", password: "" })

    const handleChange = (e) => {
      const newadmin = { ...user }
      newadmin[e.target.name] = e.target.value
      setUser(newadmin)
    }

    // const history = useHistory()
    // const location = useLocation()
    const navigate = useNavigate()
  
    const signin = () => {
        const parse = {
          email: user.email,
          password: user.password
        }
        axios
          .post(
            "http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/login",
            parse
          )
          .then(
            (res) => {
              console.log("success")
            //   toast(res.data.message)
              sessionStorage.setItem("UserId", res.data.user.id)
              sessionStorage.setItem("name", res.data.user.name)
              sessionStorage.setItem("phone", res.data.user.phone)
              sessionStorage.setItem("email", res.data.user.email)
              sessionStorage.setItem("role", res.data.user.role)
              sessionStorage.setItem("token", res.data.token)
              navigate("/dashboard/ecommerce")
            //  { <Navigate to="/dashboard/ecommerce" replace={true} />}
            }
            // (error) => {
            //   if (error.response && error.response.status === 401) {
            //     toast(error.response.data.message)
            //   }
            // }
          )
      }

      const usersign = (e) => {
        e.preventDefault()
        signin()
      }

  // ** Hooks
  // const { skin } = useSkin()

  // const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
  //   source = require(`@src/assets/images/pages/${illustration}`).default

  if (!isUserLoggedIn()) {
    return (
      <div  style={{ backgroundImage: `url(${bakground1})` }} className='auth-wrapper auth-cover'>
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
              <Form className='auth-forgot-password-form mt-2' 
                onSubmit={(e) => {
                    usersign(e)
                  }}
              >
                <div className='mb-1'>
                  <Label className='form-label' for='login-email'>
                    Email
                  </Label>
                  <Input  value={user.email}
                  onChange={(e) => {
                    handleChange(e)
                  }}
                   required type='email' name='email' id='login-email' placeholder='john@example.com' autoFocus />
                </div>
                <div className='mb-1'>
                  <Label className='form-label' for='login-email'>
                    Password
                  </Label>
                  <Input 
                   value={user.password}
                   onChange={(e) => {
                     handleChange(e)
                   }}
                  required type='password' name='password' id='login-email' placeholder='......' autoFocus />
                </div>
                {/* <Link to="/otp"> */}
                <Button type='submit' color='primary' block>
                  Submit
                </Button>
                  {/* </Link>  */}
              
              </Form>
              {/* <p className='text-center mt-2'>
                <Link to='/login'>
                  <ChevronLeft className='rotate-rtl me-25' size={14} />
                  <span className='align-middle'>Back to login</span>
                </Link>
              </p> */}
            </Col>
          </Col>
        </Row>
      </div>
    )
  } else {
    return <Navigate to='/' />
  }
}

export default Testlog
