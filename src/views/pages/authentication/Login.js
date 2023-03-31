// ** React Imports
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// ** Custom Hooks
// import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'

// ** Third Party Components
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee, CheckCircle, X } from 'react-feather'

// ** Actions
import { handleLogin } from '@store/authentication'

// ** Context
import { AbilityContext } from '@src/utility/context/Can'

// ** Custom Components
import Avatar from '@components/avatar'
import InputPasswordToggle from '@components/input-password-toggle'

// ** Utils
import { getHomeRouteForLoggedInUser } from '@utils'

// ** Reactstrap Imports
import { Row, Col, Form, Input, Label, Alert, Button, CardText, CardTitle, UncontrolledTooltip } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

// import logos from "../../../assets/images/logo/logos1.png"
import logos1 from "../../../assets/images/latest/sj2.png"
import "../../../Common.css"
import bakground1 from "../../../assets/images/latest/bakground1.jpg"

const ToastContent = ({ role }) => {
  return (
    <div className='d-flex'>
      <div className='me-1'>
        <Avatar size='sm' color='success' icon={<CheckCircle size={12} />} />
      </div>
      <div className='d-flex flex-column'>
        {/* <div className='d-flex justify-content-between'>
          <h6>{name}</h6>
          <X size={12} className='cursor-pointer' onClick={() => toast.dismiss(t.id)} />
        </div> */}
        <span>You've successfully logged in as an  {role}</span>
      </div>
    </div>
  )
}

// const defaultValues = {
//   email: 'admin@demo.com',
//   password: 'admin'
// }

const Login = () => {
  // ** Hooks
  // const { skin } = useSkin()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ability = useContext(AbilityContext)
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({  })

  // const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg'
    // source = require(`@src/assets/images/pages/${illustration}`).default

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      useJwt
        .login({ email: data.email, password: data.password })
        .then(res => {
          console.log(res.data.user)
          console.log(res.data.token)
          // const data = { ...res.data.user, accessToken: res.data.token, refreshToken: res.data.token }
          const data = { ...res.data.user, accessToken: res.data.token, refreshToken: res.data.token }


          sessionStorage.setItem("token", res.data.token)
          dispatch(handleLogin(data))
          ability.update(res.data.user.ability)
          // localStorage.setItem([{action:"manage", subject:"all"}])
          // ability.update([{action:"manage", subject:"all"}])
       

          toast(t => (
            <ToastContent t={t} role={"admin" || 'admin' || "CAD"}  />
          ))
          navigate(getHomeRouteForLoggedInUser("admin"))
        })
        // .catch(err => console.log(err))
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
          }
        })
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <div style={{ backgroundImage: `url(${bakground1})` }} className='auth-wrapper auth-cover'>
      <Row style={{overflow:"hidden"}} className='auth-inner d-flex justify-content-md-center mt-5 pt-2'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          {/* <img src={logos} height="100px"></img> */}
          {/* <h2 className='brand-text text-primary ms-1'>OM SANTOSH JEWELLERS</h2> */}
        </Link>
        {/* <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login Cover' />
          </div>
        </Col> */}
        <Col className='d-flex align-items-center logcard auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
          <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          
        </Link>
        <div className='text-center mt-3'>
          <img src={logos1} height="100px" />
          </div>
            <CardTitle tag='h5' className='fw-bold mb-1 mt-2 text-center'>
              WELCOME TO OM SANTOSH JEWELLERS! 
            </CardTitle>
            <CardText className='mb-2'>sign-in </CardText>
            <Alert color='primary'>
              {/* <div className='alert-body font-small-2'>
                <p>
                
                  <small className='me-50'>
                    <span className='fw-bold'>Admin:</span> admin@demo.com | admin
                  </small>
                </p>
                <p>
                  <small className='me-50'>
                    <span className='fw-bold'>Client:</span> client@demo.com | client
                  </small>
                </p>
              </div> */}
              {/* <HelpCircle
                id='login-tip'
                className='position-absolute'
                size={18}
                style={{ top: '35px', right: '10px' }}
              /> */}
              {/* <UncontrolledTooltip target='login-tip' placement='left'>
                This is just for ACL demo purpose.
              </UncontrolledTooltip> */}
            </Alert>
            <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-1'>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Controller
                  id='email'
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <Input
                      autoFocus
                      type='email'
                      placeholder='Enter Email'
                      invalid={errors.email && true}
                      {...field}
                    />
                  )}
                />
                
              </div>
              <div className='mb-1'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/forgot-password'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <Controller
                  id='password'
                  name='password'
                  control={control}
                  render={({ field }) => (
                    <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} />
                  )}
                />
              </div>
              {/* <div className='form-check mb-1'>
                <Input type='checkbox' id='remember-me' />
                <Label className='form-check-label' for='remember-me'>
                  Remember Me
                </Label>
              </div> */}
              <Button className='mt-2' type='submit' color='primary' block>
                Sign in
              </Button>
            </Form>
            {/* <p className='text-center mt-2'>
              <span className='me-25'>New on our platform?</span>
              <Link to='/register'>
                <span>Create an account</span>
              </Link>
            </p> */}
            <div className='divider my-2'>
              {/* <div className='divider-text'>or</div> */}
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              {/* <Button color='facebook'>
                <Facebook size={14} />
              </Button>
              <Button color='twitter'>
                <Twitter size={14} />
              </Button>
              <Button color='google'>
                <Mail size={14} />
              </Button>
              <Button className='me-0' color='github'>
                <GitHub size={14} />
              </Button> */}
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
