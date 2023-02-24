// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const AccountDetails = ({ stepper }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Ghat DetailsAccount Details</h5>
        {/* <small className='text-muted'>Enter Your Account Details.</small> */}
      </div>
      <Form onSubmit={e => e.preventDefault()}>
      <Row>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='nameMulti'>
                      Date
                    </Label>
                    <Input type='date' name='name' id='nameMulti' placeholder='date' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='lastNameMulti'>
                      Karigar
                    </Label>
                    <Input type='text' name='lastname' className='form-control' id='lastNameMulti' placeholder='Enter Karigar' />
                  </Col>

                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Gross
                    </Label>
                    <Input type='number' name='Email' id='EmailMulti' placeholder='Enter Gross' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Stone
                    </Label>
                    <Input type='number' name='Email' id='EmailMulti' placeholder='Enter Stone' />
                  </Col>

                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='nameMulti'>
                      Nett
                    </Label>
                    <Input type='number' name='name' id='nameMulti' placeholder='Enter Nett' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='lastNameMulti'>
                      Wasteage
                    </Label>
                    <Input disabled type='number' name='lastname' id='lastNameMulti' placeholder='Enter Wasteage' />
                  </Col>

                  <Col md='2' sm='12' className='mb-1'>
                    <Label disabled className='form-label' for='EmailMulti'>
                      Total
                    </Label>
                    <Input disabled type='number' name='Email' id='EmailMulti' placeholder='Enter Total' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Stone
                    </Label>
                    <Input disabled type='number' name='Email' id='EmailMulti' placeholder='Enter Stone' />
                  </Col>
                </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
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

export default AccountDetails
