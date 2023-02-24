// ** React Imports
import { Fragment, useState } from "react"

// ** Reactstrap Imports
import { Card, Table, CardBody, Button, Row, Col, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, Label, Form} from 'reactstrap'
import { Check, Briefcase, Plus } from 'react-feather'
// ** Demo Components
// import gold from "../../../assets/images/gold.jpg"
import qr from "../../../assets/images/qr.png"
import { Link } from 'react-router-dom'

// ** Custom Components
import ExtensionsHeader from "@components/extensions-header"
import gold4 from "../../../assets/images/gold4.jpg"
// import gold6 from "../../../assets/images/gold6.jpg"
// import gold5 from "../../../assets/images/gold5.jpg"

const Wax = () => {

  const [centeredModal, setCenteredModal] = useState(false)
  const [show, setshow] = useState(false)
  return (
    <Fragment >
      <div 
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000">
      <ExtensionsHeader title="Wax" />
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

{ show ? (
      <Card>
      <CardBody>
      <Row>
          <Col md={3}>
          <Label className='form-label' for='date-time-picker'>
        Date & Time
      </Label>
      {/* <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' /> */}
      <Input type="date" className="form-control"/>
          </Col>
          <Col md={3}>
          <Label className='form-label' for='date-time-picker'>
        Date & Time
      </Label>
      {/* <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' /> */}
      <Input type="date" className="form-control"/>
          </Col>
          <Col  md="3">
            <Row style={{marginTop: "30px"}}>
              <Col><Button outline size="sm" color="success" >Search <i class="fa fa-search" aria-hidden="true"></i></Button></Col>
              <Col><Button onClick={() => { setshow(!show) }} outline size="sm" color="danger" >Cancel <i class="fa fa-times-circle-o" aria-hidden="true"></i></Button></Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
      </Card>
     ) : ("") } 
      
      <Row>
      <Card>
          <div >
            <Button onClick={() => { setshow(!show) }} className="m-1" style={{ float: "right" }} color="info">
              <i class="fa fa-filter" aria-hidden="true"></i>  Filter
            </Button>
            <Input style={{ width: "300px", float: "right" }} type="text" placeholder="Search..." className="form-control m-1" />
          </div>
      <Table className="mb-4" size='sm' responsive bordered hover>
                                <thead>
                                    <tr  className='text-center text-danger'>
                                        <th >
                                            S No
                                        </th>
                                        <th style={{width:"100px"}}>
                                            Date
                                        </th>
                                        <th>
                                        Departement
                                        </th>
                                        <th>
                                        Name
                                        </th>
                                        <th  >
                                        Image
                                        </th>
                                        <th  >
                                        Status
                                        </th>
                                       
                                        <th style={{width:"120px"}}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody  className='text-center'>
                                    <tr>
                                        <th scope="row">
                                            1
                                        </th>
                                        <td>
                                            15-12-2022
                                        </td>
                                        <td>
                                        Drawing Jewelley Master
                                        </td>
                                        <td>
                                            Deepak
                                        </td>
                                        <td>
                                            <img src={gold4} style={{width:"100px"}}/>
                                        </td>
                                        <td>
                                            Pending
                                        </td>
                                        
                                        <td>
                                         <Link to="/stage1"> <Button outline color='warning'>
                                         <i class="fa fa-location-arrow" aria-hidden="true"></i> Add
                                          </Button></Link>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            2
                                        </th>
                                        <td>
                                            15-12-2022
                                        </td>
                                        <td>
                                        Drawing Jewelley Master
                                        </td>
                                        <td>
                                            Deepak
                                        </td>
                                        <td>
                                            <img src={gold4} style={{width:"100px"}}/>
                                        </td>
                                        <td>
                                            Pending
                                        </td>
                                        
                                        <td>
                                         <Link to="/stage1"> <Button outline color='warning'>
                                         <i class="fa fa-location-arrow" aria-hidden="true"></i> Add
                                          </Button></Link>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            3
                                        </th>
                                        <td>
                                            15-12-2022
                                        </td>
                                        <td>
                                        Drawing Jewelley Master
                                        </td>
                                        <td>
                                            Deepak
                                        </td>
                                        <td>
                                            <img src={gold4} style={{width:"100px"}}/>
                                        </td>
                                        <td>
                                            Pending
                                        </td>
                                        
                                        <td>
                                         <Link to="/stage1"> <Button outline color='warning'>
                                         <i class="fa fa-location-arrow" aria-hidden="true"></i> Add
                                          </Button></Link>
                                        </td>
                                        
                                    </tr>
                                </tbody>
                                
                            </Table>
                            </Card>
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

export default Wax
