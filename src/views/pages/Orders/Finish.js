// ** React Imports
import { Fragment, useState } from "react"

// ** Reactstrap Imports
import { Card, CardBody, Button, Row, Col, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, Label, Form} from 'reactstrap'
import { Check, Briefcase, Plus } from 'react-feather'
// ** Demo Components
// import gold from "../../../assets/images/gold.jpg"
import qr from "../../../assets/images/qr.png"
import { Link } from 'react-router-dom'

// ** Custom Components
import ExtensionsHeader from "@components/extensions-header"
import gold4 from "../../../assets/images/gold4.jpg"
import gold6 from "../../../assets/images/gold6.jpg"
import gold5 from "../../../assets/images/gold5.jpg"

const Finish = () => {

  const [centeredModal, setCenteredModal] = useState(false)
  return (
    <Fragment >
      <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000">
      <ExtensionsHeader title="Finish" />
      {/* <div className='d-flex flex-column align-items-end text-end'>
        <Row>
          <Col md={4}>
            <Input
              defaultValue=''
              id='firstName'
              name='firstName'
              placeholder="search"
            /></Col>
          <Col md={4}>
            <Input id="exampleSelect" type="select" name="CustomesDetails"
              required>
              <option>Select Stage</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
          <Col md={4}>
            <Input
              defaultValue=''
              id='firstName'
              name='firstName'
              type="date"
            /></Col></Row>
      </div> */}
      
      <Row className='mt-1'>
        <Col sm="4">
          <Card>
            <CardBody>
              <div className='user-avatar-section'>
                <div className='d-flex align-items-center flex-column'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <div className='user-info'>

                      <img
                        width='130px'
                        alt='user-avatar'
                        src={gold6}
                        className='img-fluid rounded'
                      />
                      <div className="mt-1"><img
                        width='35'
                        alt='user-avatar'
                        src={qr} style={{ float: 'right' }} onClick={() => setCenteredModal(!centeredModal)}
                      />

                        <h4>sony</h4></div>
                      <Badge className='text-capitalize mt-1'>
                        Sales Order No : 1222
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-flex justify-content-around mt-1'>
                <div className='d-flex align-items-start me-2'>
                  <Badge color='light-primary' className='rounded p-75'>
                    <Check className='font-medium-2' />
                  </Badge>
                  <div className='ms-75'>
                    <h4 className='mb-0'>24k</h4>
                    <small>Gold chain</small>
                  </div>
                </div>
                <div className='d-flex align-items-start'>
                  <Badge color='light-primary' className='rounded p-75'>
                    <Briefcase className='font-medium-2' />
                  </Badge>
                  <div className='ms-75'>
                    <h4 className='mb-0'>20cts</h4>
                    <small>Diamond</small>
                  </div>
                </div>
              </div>
              <h4 className='fw-bolder border-bottom pb-50 mb-1 mt-1' >Details</h4>
              <div className='info-container'>
                <ul className='list-unstyled'>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Customer Name : </span>
                    <span>vivek</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Aprox Gold : </span>
                    <span>20 grams</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Demond : </span>
                    <span>10 cts</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Size & Purity : </span>
                    <span>20cts / 24k </span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Remarks : </span>
                    <span>Completed</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Order Status : </span>
                    <span>Completed</span>
                  </li>
                </ul>
              </div>
              {/* <Link to={"/stage4"}>
              <Button color='primary' style={{ float: "right" }}>
                <Plus className='font-medium-2' />Add
              </Button></Link> */}
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>

              <div className='user-avatar-section'>
                <div className='d-flex align-items-center flex-column'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <div className='user-info'>

                      <img
                        width='130px'
                        // height="140px"
                        alt='user-avatar'
                        src={gold4}
                        className='img-fluid rounded'
                      />
                      <div className="mt-1"><img
                        width='35'
                        alt='user-avatar'
                        src={qr} style={{ float: 'right' }}
                      />

                        <h4>Maggi</h4></div>
                      <Badge className='text-capitalize mt-1'>
                        Sales Order No : 1222
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-flex justify-content-around mt-1'>
                <div className='d-flex align-items-start me-2'>
                  <Badge color='light-primary' className='rounded p-75'>
                    <Check className='font-medium-2' />
                  </Badge>
                  <div className='ms-75'>
                    <h4 className='mb-0'>24k</h4>
                    <small>Gold chain</small>
                  </div>
                </div>
                <div className='d-flex align-items-start'>
                  <Badge color='light-primary' className='rounded p-75'>
                    <Briefcase className='font-medium-2' />
                  </Badge>
                  <div className='ms-75'>
                    <h4 className='mb-0'>20cts</h4>
                    <small>Diamond</small>
                  </div>
                </div>
              </div>
              <h4 className='fw-bolder border-bottom pb-50 mb-1 mt-1'>Details</h4>
              <div className='info-container'>

                <ul className='list-unstyled'>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Customer Name : </span>
                    <span>vivek</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Aprox Gold : </span>
                    <span>20 grams</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Demond : </span>
                    <span>10 cts</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Size & Purity : </span>
                    <span>20cts / 24k </span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Remarks : </span>
                    <span>Completed</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Order Status : </span>
                    <span>Completed</span>
                  </li>
                </ul>
              </div>  
              {/* <Link to={"/stage4"}>
              <Button color='primary' style={{ float: "right" }}>
                <Plus className='font-medium-2' />Add
              </Button></Link> */}
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">

          <Card>
            <CardBody>

              <div className='user-avatar-section'>
                <div className='d-flex align-items-center flex-column'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <div className='user-info'>

                      <img
                         width='130px'
                        alt='user-avatar'
                        src={gold5}
                        className='img-fluid rounded'
                      />
                      <div className="mt-1"><img
                        width='35'
                        alt='user-avatar'
                        src={qr} style={{ float: 'right' }}
                      />

                        <h4>Kavya</h4></div>
                      <Badge className='text-capitalize mt-1'>
                        Sales Order No : 1222
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-flex justify-content-around mt-1'>
                <div className='d-flex align-items-start me-2'>
                  <Badge color='light-primary' className='rounded p-75'>
                    <Check className='font-medium-2' />
                  </Badge>
                  <div className='ms-75'>
                    <h4 className='mb-0'>24k</h4>
                    <small>Gold chain</small>
                  </div>
                </div>
                <div className='d-flex align-items-start'>
                  <Badge color='light-primary' className='rounded p-75'>
                    <Briefcase className='font-medium-2' />
                  </Badge>
                  <div className='ms-75'>
                    <h4 className='mb-0'>20cts</h4>
                    <small>Diamond</small>
                  </div>
                </div>
              </div>
              <h4 className='fw-bolder border-bottom pb-50 mb-1 mt-1'>Details</h4>
              <div className='info-container'>

                <ul className='list-unstyled'>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Customer Name : </span>
                    <span>vivek</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Aprox Gold : </span>
                    <span>20 grams</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Demond : </span>
                    <span>10 cts</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Size & Purity : </span>
                    <span>20cts / 24k </span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Remarks : </span>
                    <span>Completed</span>
                  </li>
                  <li className='mb-75'>
                    <span className='fw-bolder me-25'>Order Status : </span>
                    <span>Completed</span>
                  </li>
                </ul>
              </div>
              {/* <Link to={"/stage4"}>
              <Button color='primary' style={{ float: "right" }}>
                <Plus className='font-medium-2' />Add
              </Button>
</Link> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Vertically Centered</ModalHeader>
        <ModalBody>
          <div className='d-flex flex-column align-items-center text-center' >
            <img
              width='300'
              alt='user-avatar'
              src={qr}
            /></div>

        </ModalBody>
        <ModalFooter>
          {/* <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
            ok
          </Button>{' '} */}
        </ModalFooter>
      </Modal>
      </div>
    </Fragment>
  )
}

export default Finish
