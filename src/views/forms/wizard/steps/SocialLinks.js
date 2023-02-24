// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

const SocialLinks = ({ stepper }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Bandini Details</h5>
        {/* <small>Enter Your Social Links.</small> */}
      </div>
      <Form onSubmit={e => e.preventDefault()}>
      <Row>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='nameMulti'>
                      Date
                    </Label>
                    <Input type='date' name='name' id='nameMulti' placeholder='Enter Date' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='lastNameMulti'>
                      Karigar
                    </Label>
                    <Input type='date' name='lastname' id='lastNameMulti' placeholder='Enter Karigar' />
                  </Col>

                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Wt Out Stone in Gr
                    </Label>
                    <Input type='date' name='Email' id='EmailMulti' placeholder='Enter Wt Out Stone in Gr' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='EmailMulti'>
                      Total
                    </Label>
                    <Input type='number' name='Email' id='EmailMulti' placeholder='Enter Total' />
                  </Col>

                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='nameMulti'>
                      Wt In Iteam
                    </Label>
                    <Input type='number' name='name' id='nameMulti' placeholder='Enter Wt In Iteam' />
                  </Col>
                  <Col md='2' sm='12' className='mb-1'>
                    <Label className='form-label' for='lastNameMulti'>
                      Gold Received
                    </Label>
                    <Input type='number' name='lastname' id='lastNameMulti' placeholder='Enter stone' />
                  </Col>
                </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button color='success' className='btn-submit' onClick={() => alert('submitted')}>
            Submit
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default SocialLinks
