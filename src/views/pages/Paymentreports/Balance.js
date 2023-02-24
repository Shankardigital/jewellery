// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardHeader, CardBody, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import sj2 from "../../../assets/images/latest/sj2.png"
import { Link } from 'react-router-dom'

// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Balance = () => {

    // const [modal, setModal] = useState(false)
    // const toggle = () => setModal(!modal)
    // const [modal1, setModal1] = useState(false)
    // const toggle1 = () => setModal1(!modal)

    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Balance Sheet' data={[{ title: 'Balance Sheet' }]} />
                <Row>
                    {/* <div >
                        <Link to="/return"> <Button style={{ float: "right" }} className='m-1' color='info'> <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Back</Button></Link>
                    </div> */}
                    <Col sm='12'>
                        <Card>
                            <div>
                                {/* <Button className='m-1' color='danger'><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</Button> */}
                                {/* <Button className='m-1' color='success'> <i class="fa fa-file-excel-o" aria-hidden="true"></i> EXCEL</Button> */}

                            </div>

                            <CardBody>

                                <Row className='text-center'>
                                    <Col md="12">
                                        <img src={sj2} style={{ width: "150px" }} className="mb-2" />
                                        <h5><b>Ultimate Sales, Inventory, Accounting</b></h5>
                                        <h5><b>Management System</b></h5>
                                        <span><b>Phone: </b></span><span>9236952522</span><br />
                                        <span><b>Email: </b></span><span>support@gmail.com</span><br />
                                        <span><b>Address: </b></span><span>Ground Floor, Road# 24, House# 339, <br /> Ranga Reddy colony Hyderabad </span>
                                    </Col>
                                    {/* <Col md="6">
                                        <div style={{ float: "right" }}>
                                            <h5><b>Supplier Details</b></h5>
                                            <h5><b>Supplier ID:</b> <span>AS-2</span></h5>
                                            <span><b>Supplier Name: </b></span><span>Carla Bender</span><br />
                                            <span><b>Company Name: </b></span><span>Richardson </span><br />
                                            <span><b>Email: </b></span><span>richardson@gmail.com </span><br />
                                            <span><b>Contact Number: </b></span><span>362942565265 </span><br />
                                            <span><b>Address: </b></span><span>Ground Floor, Road# 24, House# 339, Ranga Reddy colony Hyderabad </span>
                                        </div>
                                    </Col> */}
                                </Row>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <Row>
                                    <Table className='mb-4 mt-1' responsive bordered hover>
                                        <thead>

                                            <tr className='text-center'>
                                                <th colSpan="2">
                                                    Incomes
                                                </th>
                                                <th  colSpan="2" className='text-danger'>
                                                    Liabilities
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center'>
                                            <tr>
                                                <td>
                                                    Total Security/Asset
                                                </td>
                                                <td>
                                                    205555.52
                                                </td>
                                                <td>
                                                Supplier's Dues
                                                </td>
                                                <td>
                                                128109.00
                                                </td>
                                                </tr>
                                                <tr>
                                                <td>
                                                    Inventory Value
                                                </td>
                                                <td>
                                                    65681.80
                                                </td>
                                                <td>
                                                Bank Loan
                                                </td>
                                                <td>
                                                190454.60
                                                </td>
                                                </tr>
                                                <tr>
                                                <td>
                                                    Client's Dues
                                                </td>
                                                <td>
                                                    109495.25
                                                </td>
                                                <td>-</td>
                                                <td>-</td>
                                                </tr>
                                                <tr>
                                                <td>
                                                    Bank Balance
                                                </td>
                                                <td>
                                                    424878.08
                                                </td>
                                                <td>-</td>
                                                <td>-</td>
                                                </tr>
                                                <tr>
                                                <td className='text-end'>
                                                    <b>Total</b>
                                                </td>
                                                <td>
                                                    <b>805610.65</b>
                                                </td>
                                                <td className='text-end'>
                                                <b>Total</b>
                                                </td>
                                                <td>
                                               <b>
                                               318563.60
                                               </b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4}>
                                                    <b>
                                                    (Income - Liabilities)
                                                    </b><br/>
                                                    <b>
                                                    Total Asset: <span className='text-success'> 487047.05</span>
                                                    </b>
                                                </td>
                                            </tr>
                                            
                                        </tbody>

                                    </Table>
                                </Row>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
export default Balance
