// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardHeader, CardBody, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import { Link } from 'react-router-dom'

// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Returns = () => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const [modal1, setModal1] = useState(false)
    const toggle1 = () => setModal1(!modal)

    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    const adrole = data1.role
    const access = data1.rolesPermissions

    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Returns' data={[{ title: 'Returns' }]} />
                <Row>

                    <Col sm='12'>
                        {access.returnlist === true || adrole === "admin" ? (
                            <Card>
                                <div>
                                    {/* <Button className='m-1' color='danger'><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</Button> */}
                                    {/* <Button className='m-1' color='success'> <i class="fa fa-file-excel-o" aria-hidden="true"></i> EXCEL</Button> */}

                                </div>

                                <CardBody>
                                    <Row>
                                        <Col md={12}>
                                            <div style={{ float: "right" }}>
                                                <div class="input-group m-1">
                                                    <input style={{ margin: "4px" }} type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <div class="input-group-append ">
                                                        <button style={{ margin: "4px" }} class="btn btn-outline-success" type="button"><i class="fa fa-file-excel-o" aria-hidden="true"></i></button>
                                                        <button style={{ margin: "4px" }} class="btn btn-outline-danger" type="button"><i class="fa fa-print" aria-hidden="true"></i></button>
                                                        <button style={{ margin: "4px" }} onClick={toggle} class="btn btn-outline-info" type="button">Create <i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Table className='mb-4 mt-1' size='sm' responsive bordered hover>
                                        <thead>

                                            <tr className='text-center'>
                                                <th>
                                                    S No
                                                </th>
                                                <th>
                                                    Return No
                                                </th>
                                                <th>
                                                    Purchase No
                                                </th>
                                                <th>
                                                    Supplier
                                                </th>
                                                <th>
                                                    Return Reason
                                                </th>
                                                <th>
                                                    Cost of Return Products
                                                </th>
                                                <th>
                                                    Date
                                                </th>
                                                <th>
                                                    Status
                                                </th>
                                                <th style={{ width: "120px" }} >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center'>
                                            <tr>
                                                <th scope="row">
                                                    1
                                                </th>
                                                <td>
                                                    APP-5
                                                </td>
                                                <td>
                                                    APP-5
                                                </td>
                                                <td>
                                                    Amir Vega
                                                </td>
                                                <td>
                                                    Damage product
                                                </td>
                                                <td>
                                                    14900.00
                                                </td>
                                                <td>
                                                    15-12-2022
                                                </td>

                                                <td className='text-success'>
                                                    Active
                                                </td>
                                                <td>
                                                    <Link to="/view-returns"> <Button style={{ margin: "4px" }} size='sm' outline data-toggle="tooltip" data-placement="bottom" title="View
                      " color='warning'>
                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                    </Button></Link>
                                                    <Button style={{ margin: "4px" }} onClick={toggle1} size='sm' outline data-toggle="tooltip" data-placement="bottom" title="Edit" color='success'>
                                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    2
                                                </th>
                                                <td>
                                                    APP-5
                                                </td>
                                                <td>
                                                    APP-5
                                                </td>
                                                <td>
                                                    Amir Vega
                                                </td>
                                                <td>
                                                    Damage product
                                                </td>
                                                <td>
                                                    14900.00
                                                </td>
                                                <td>
                                                    15-12-2022
                                                </td>

                                                <td className='text-success'>
                                                    Active
                                                </td>
                                                <td>
                                                    <Link to="/view-returns"> <Button style={{ margin: "4px" }} size='sm' outline data-toggle="tooltip" data-placement="bottom" title="View
                      " color='warning'>
                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                    </Button></Link>
                                                    <Button style={{ margin: "4px" }} onClick={toggle1} size='sm' outline data-toggle="tooltip" data-placement="bottom" title="Edit" color='success'>
                                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    3
                                                </th>
                                                <td>
                                                    APP-5
                                                </td>
                                                <td>
                                                    APP-5
                                                </td>
                                                <td>
                                                    Amir Vega
                                                </td>
                                                <td>
                                                    Damage product
                                                </td>
                                                <td>
                                                    14900.00
                                                </td>
                                                <td>
                                                    15-12-2022
                                                </td>

                                                <td className='text-success'>
                                                    Active
                                                </td>
                                                <td>
                                                    <Link to="/view-returns"> <Button style={{ margin: "4px" }} size='sm' outline data-toggle="tooltip" data-placement="bottom" title="View
                      " color='warning'>
                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                    </Button></Link>
                                                    <Button style={{ margin: "4px" }} onClick={toggle1} size='sm' outline data-toggle="tooltip" data-placement="bottom" title="Edit" color='success'>
                                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </Table>
                                </CardBody>
                            </Card>
                        ) : (
                            <Card>
                                <h5 className='text-center p-2'>You don't have permission to access</h5>
                            </Card>
                        )}

                    </Col>
                </Row>

                <Modal
                    size='sm'
                    isOpen={modal}
                    modalTransition={{ timeout: 700 }}
                    backdropTransition={{ timeout: 1300 }}
                    toggle={toggle}
                // className={className}
                >
                    <ModalHeader toggle={toggle}>Create Purchase Return</ModalHeader>
                    <Form>
                        <ModalBody>

                            <div>
                                <Label>
                                    Supplier
                                </Label>

                                <select className='form-select'>
                                    <option value="">Select</option>
                                    <option value="">Amir Vega</option>
                                    <option value="">Jemima Hoffman</option>
                                    {/* <option value="">Select</option> */}
                                </select>

                                {/* <Input type='text' className='form-control' placeholder='Enter Name' /> */}
                                <Label className='mt-1'> Products Name </Label>
                                <Input required type='text' className='form-control' placeholder='Enter Products' />
                                <Label className='mt-1'>
                                    Purchase No
                                </Label>
                                <Input required type='text' className='form-control' placeholder='Enter Purchase No' />
                                <Label className='mt-1'>
                                    Return  Amount
                                </Label>
                                <Input required type='number' className='form-control' placeholder='Amount' />

                                <Label className='mt-1'>
                                    Date
                                </Label>
                                <Input required type='date' className='form-control' placeholder='Date' />

                                <Label className='mt-1'>
                                    Reason
                                </Label>
                                <textarea required type='text' className='form-control' placeholder='Reason' />

                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <Button type='submmit' color="success">
                                Submit
                            </Button>{' '}
                            <Button color="secondary" onClick={toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Form>
                </Modal>

                <Modal
                    size='sm'
                    isOpen={modal1}
                    modalTransition={{ timeout: 700 }}
                    backdropTransition={{ timeout: 1300 }}
                    toggle={toggle1}
                // className={className}
                >
                    <ModalHeader toggle={toggle1}>Edit Purchase Return</ModalHeader>
                    <Form>
                        <ModalBody>

                            <div>
                                <Label>
                                    Supplier
                                </Label>

                                <select className='form-select'>
                                    <option value="">Select</option>
                                    <option value="">Amir Vega</option>
                                    <option value="">Jemima Hoffman</option>
                                    {/* <option value="">Select</option> */}
                                </select>

                                {/* <Input type='text' className='form-control' placeholder='Enter Name' /> */}
                                <Label className='mt-1'> Products Name </Label>
                                <Input required type='text' className='form-control' placeholder='Enter Products' />
                                <Label className='mt-1'>
                                    Purchase No
                                </Label>
                                <Input required type='text' className='form-control' placeholder='Enter Purchase No' />
                                <Label className='mt-1'>
                                    Return  Amount
                                </Label>
                                <Input required type='number' className='form-control' placeholder='Amount' />

                                <Label className='mt-1'>
                                    Date
                                </Label>
                                <Input required type='date' className='form-control' placeholder='Date' />

                                <Label className='mt-1'>
                                    Reason
                                </Label>
                                <textarea required type='text' className='form-control' placeholder='Reason' />

                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <Button type='submmit' color="success">
                                Submit
                            </Button>{' '}
                            <Button color="secondary" onClick={() => { setModal1(false) }}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Form>
                </Modal>

            </div>
        </Fragment>
    )
}
export default Returns
