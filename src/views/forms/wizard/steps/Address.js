// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const Address = ({ stepper }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Setting Details</h5>
        {/* <small>Enter Your Address.</small> */}
      </div>
      <Form onSubmit={e => e.preventDefault()}>
      <Row>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='nameMulti'>
                      Setting
                    </Label>
                    <Input type='number' name='name' id='nameMulti' placeholder='Enter Setting' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='lastNameMulti'>
                      Date out
                    </Label>
                    <Input type='date' name='lastname' id='lastNameMulti' placeholder='Enter Date out ' />
                  </Col>

                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Date in
                    </Label>
                    <Input type='date' name='Email' id='EmailMulti' placeholder='Enter Loss' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Wt Out
                    </Label>
                    <Input disabled type='number' name='Email' id='EmailMulti' placeholder='Enter Wt Out' />
                  </Col>

                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='nameMulti'>
                      Wt In
                    </Label>
                    <Input disabled type='number' name='name' id='nameMulti' placeholder='Enter Wt In' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='lastNameMulti'>
                      stone
                    </Label>
                    <Input type='number' name='lastname' id='lastNameMulti' placeholder='Enter stone' />
                  </Col>

                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Nett
                    </Label>
                    <Input type='number' name='Email' id='EmailMulti' placeholder='Enter Nett' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Chura
                    </Label>
                    <Input type='number' name='Email' id='EmailMulti' placeholder='Enter Chura' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Loss
                    </Label>
                    <Input type='number' name='Email' id='EmailMulti' placeholder='Enter Loss' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Nett Chura
                    </Label>
                    <Input type='number' name='Email' id='EmailMulti' placeholder='Enter Nett Chura' />
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

export default Address
