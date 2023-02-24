// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Utils
// import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper }) => {

  // const countryOptions = [
  //   { value: 'UK', label: 'UK' },
  //   { value: 'USA', label: 'USA' },
  //   { value: 'Spain', label: 'Spain' },
  //   { value: 'France', label: 'France' },
  //   { value: 'Italy', label: 'Italy' },
  //   { value: 'Australia', label: 'Australia' }
  // ]

  // const languageOptions = [
  //   { value: 'English', label: 'English' },
  //   { value: 'French', label: 'French' },
  //   { value: 'Spanish', label: 'Spanish' },
  //   { value: 'Italian', label: 'Italian' },
  //   { value: 'Japanese', label: 'Japanese' }
  // ]

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Polish Details</h5>
        {/* <small>Enter Your Personal Info.</small> */}
      </div>
      <Form onSubmit={e => e.preventDefault()}>
      <Row>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='nameMulti'>
                      G.p.out
                    </Label>
                    <Input disabled type='number' name='name' id='nameMulti' placeholder='Enter G.p.out' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='lastNameMulti'>
                      G.p.in
                    </Label>
                    <Input disabled type='number' name='lastname' className='form-control' id='lastNameMulti' placeholder='Enter G.p.in' />
                  </Col>

                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Loss
                    </Label>
                    <Input type='number' name='Email' id='EmailMulti' placeholder='Enter Loss' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      F.P.Out
                    </Label>
                    <Input disabled type='number' name='Email' id='EmailMulti' placeholder='Enter P.F.Out' />
                  </Col>

                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='nameMulti'>
                      P.F.In
                    </Label>
                    <Input disabled type='number' name='name' id='nameMulti' placeholder='Enter P.F.In' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='lastNameMulti'>
                      Loss
                    </Label>
                    <Input type='number' name='lastname' id='lastNameMulti' placeholder='Enter Loss' />
                  </Col>

                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      T Loss
                    </Label>
                    <Input disabled type='number' name='Email' id='EmailMulti' placeholder='Enter T Loss' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Waste
                    </Label>
                    <Input type='number' name='Email' id='EmailMulti' placeholder='Enter Waste' />
                  </Col>
                </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default PersonalInfo
