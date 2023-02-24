// ** React Imports
import React, { Fragment, useState } from "react"
// import { Link, Navigate, useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'
import toast from 'react-hot-toast'

// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback, Input } from 'reactstrap'

// ** Third Party Components
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Demo Components
import ApiKeysList from './ApiKeysList'
import CreateApiKey from './CreateApikey'
import TwoFactorAuth from './TwoFactorAuth'
import RecentDevices from './RecentDevices'
import axios from 'axios'
import { User } from "react-feather"
import { Label } from "recharts"

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const defaultValues = {
  newPassword: '',
  currentPassword: '',
  retypeNewPassword: ''
}

const SecurityTabContent = () => {
  const SignupSchema = yup.object().shape({
    currentPassword: yup
      .string()
      .min(8, obj => showErrors('Current Password', obj.value.length, obj.min))
      .required(),
    newPassword: yup
      .string()
      .min(8, obj => showErrors('New Password', obj.value.length, obj.min))
      .required(),
    retypeNewPassword: yup
      .string()
      .min(8, obj => showErrors('Retype New Password', obj.value.length, obj.min))
      .required()
      .oneOf([yup.ref(`newPassword`), null], 'Passwords must match')
  })
  // ** Hooks
  const {
    // control,
    // handleSubmit,
    // formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema)
  })

  // const onSubmit = data => {
  //   if (Object.values(data).every(field => field.length > 0)) {
  //     return null
  //   } else {
  //     for (const key in data) {
  //       if (data[key].length === 0) {
  //         setError(key, {
  //           type: 'manual'
  //         })
  //       }
  //     }
  //   }
  // }


  const [user, setUser] = useState([])

  const handleChange = (e) => {
    const newadmin = { ...user }
    newadmin[e.target.name] = e.target.value
    setUser(newadmin)
  }

  // const navigate = useNavigate()

  // const gets = localStorage.getItem("userData")
  // const data = JSON.parse(gets)
  // const datas = data.accessToken
  const datas = localStorage.getItem("accessToken")
  console.log(datas)

  const clearForm = () => {
    setUser({
      password: "",
      newpassword: "",
      confirmpassword: ""
    })
  }

  const profiledet = () => {

    const token = datas
    const params = {
      password: user.password,
      newpassword: user.newpassword,
      confirmpassword: user.confirmpassword
    }
    console.log(token)

    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/changepassword", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        clearForm()
        toast.success(res.data.message)
        // navigate("/otp")
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }


  const formsubmit = (e) => {
    e.preventDefault()
    // onSubmit()
    // handleSubmit()
    profiledet()
  }

  // useEffect(() => {
  //   profiledet()
  // }, [])

  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Change Password</CardTitle>
        </CardHeader>
        <CardBody className='pt-1'>
          <Form onSubmit={(e) => { formsubmit(e) }} >
            <Row>
              <Col sm='4' className='mb-1'>
                {/* <Controller
                  control={control}
                  id='currentPassword'
                  name='password'
                  required
                  onChange = {(e) => { handleChange(e) } }
                  render={({ field }) => (
                    <InputPasswordToggle
                      label='Current Password'
                      htmlFor='currentPassword'
                      className='input-group-merge'
                      invalid={errors.currentPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.currentPassword && (
                  <FormFeedback className='d-block'>{errors.currentPassword.message}</FormFeedback>
                )} */}
                <label > Current Password</label> <span className="text-danger">*</span>
                <Input
                  placeholder="........"
                  type="password"
                  name='password'
                  value={user.password}
                  required
                  onChange={(e) => { handleChange(e) }} />
              </Col>

              <Col sm='4' className='mb-1'>
                {/* <Controller
                  control={control}
                  id='newPassword'
                  required
                  name='newpassword'
                  onChange={(e) => { handleChange(e) }}
                  render={({ field }) => (
                    <InputPasswordToggle
                      label='New Password'
                      htmlFor='newPassword'
                      className='input-group-merge'
                      invalid={errors.newPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.newPassword && <FormFeedback className='d-block'>{errors.newPassword.message}</FormFeedback>} */}
                <label > New Password</label> <span className="text-danger">*</span>
                <Input
                  placeholder="........"
                  type="password"
                  name='newpassword'
                  value={user.newpassword}
                  required
                  onChange={(e) => { handleChange(e) }} />
              </Col>
              <Col sm='4' className='mb-1'>
                {/* <Controller
                  control={control}
                  id='retypeNewPassword'
                  name='confirmpassword'
                  required
                  onChange={(e) => { handleChange(e) }}
                  render={({ field }) => (
                    <InputPasswordToggle
                      label='Retype New Password'
                      htmlFor='retypeNewPassword'
                      className='input-group-merge'
                      invalid={errors.newPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.retypeNewPassword && (
                  <FormFeedback className='d-block'>{errors.retypeNewPassword.message}</FormFeedback>
                )} */}
                <label > Confirm Password</label> <span className="text-danger">*</span>
                <Input
                  placeholder="........"
                  type="password"
                  name='confirmpassword'
                  value={user.confirmpassword}
                  required
                  onChange={(e) => { handleChange(e) }} />
              </Col>
              <Col xs={12}>
                {/* <p className='fw-bolder'>Password requirements:</p> */}
                {/* <ul className='ps-1 ms-25'>
                  <li className='mb-50'>Minimum 8 characters long - the more, the better</li>
                  <li className='mb-50'>At least one lowercase character</li>
                  <li>At least one number, symbol, or whitespace character</li>
                </ul> */}
              </Col>
              <Col className='mt-1 text-end' sm='12'>
                <Button type='submit' className='me-1' color='primary'>
                  Save changes
                </Button>
                {/* <Button type="button" color='secondary' outline>
                  Cancel
                </Button> */}
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      {/* <TwoFactorAuth /> */}
      {/* <CreateApiKey /> */}
      {/* <ApiKeysList /> */}
      {/* <RecentDevices /> */}
    </Fragment>
  )
}

export default SecurityTabContent
