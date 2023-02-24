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

const Summery = () => {

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
                <Breadcrumbs title='Summary Report' data={[{ title: 'Summary Report' }]} />
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
                                    <Table size='sm' className='mb-4 mt-1' responsive bordered hover>
                                        <thead>
                                            <tr>
                                                <td colSpan={3} className='text-center'>
                                                   <b> Monthly Summary: December, 2022</b>
                                                </td>
                                            </tr>

                                            <tr className='text-center'>
                                                <th style={{width:"95px"}} >
                                                    sl No
                                                </th>
                                                <th >
                                                    Particulars
                                                </th>
                                                <th  >
                                                    Particulars
                                                </th>
                                            </tr>
                                            
                                        </thead>
                                        <tbody >
                                        <tr>
                                                <td colSpan={3}>
                                                    <b>Opening Balance</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    Cash [CASH-0001]
                                                </td>
                                                <td>
                                                    66646.50
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                Dutch HDFC Bank [HDFC-0003]  Cash [CASH-0001]
                                                </td>
                                                <td>
                                                95531.58
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    Cash [CASH-0001]
                                                </td>
                                                <td>
                                                187700.00
                                                </td>
                                            </tr>
                                            <tr>
                                            
                                                <td className='text-end' colSpan="2">
                                                    <b>Total</b>
                                                </td>
                                                <td>
                                                <b>349878.08</b>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colSpan={3}>
                                                    <b>Sales</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                Invoice Sales
                                                </td>
                                                <td>
                                                74900.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                Invoice Dues
                                                </td>
                                                <td>
                                                4900.00
                                                </td>
                                            </tr>


                                            <tr>
                                                <td colSpan={3}>
                                                    <b>Accounts Collection</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                Dutch HDFC Bank [HDFC-0003]  Cash [CASH-0001]
                                                </td>
                                                <td>
                                                - 0
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                Dutch HDFC Bank [HDFC-0003]  Cash [CASH-0001]
                                                </td>
                                                <td>
                                                100000.00
                                                </td>
                                            </tr>
                                            <tr>
                                            
                                                <td className='text-end' colSpan="2">
                                                    <b>Total</b>
                                                </td>
                                                <td>
                                                <b>100000.08</b>
                                                </td>
                                            </tr>


                                            <tr>
                                                <td colSpan={3}>
                                                    <b>Expenses</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                Purchase
                                                </td>
                                                <td>
                                                31378.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                General
                                                </td>
                                                <td>
                                                21000.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                Payroll
                                                </td>
                                                <td>
                                               - 0
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4
                                                </td>
                                                <td>
                                                Loan Interest
                                                </td>
                                                <td>
                                                356.06
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    5
                                                </td>
                                                <td>
                                                reports.asset_depriciation
                                                </td>
                                                <td>
                                                5474.40
                                                </td>
                                            </tr>
                                            <tr>
                                            
                                                <td className='text-end' colSpan="2">
                                                    <b>Total</b>
                                                </td>
                                                <td>
                                                <b>26830.46</b>
                                                </td>
                                            </tr>


                                            <tr>
                                                <td colSpan={3}>
                                                    <b>Transfer</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                Balance Transfer From [CASH-0001] To [IBBL-0002]
                                                </td>
                                                <td>
                                                20000.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                Balance Transfer From [CASH-0001] To [IBBL-0002]
                                                </td>
                                                <td>
                                                10000.00
                                                </td>
                                            </tr>
                                            <tr>
                                            
                                                <td className='text-end' colSpan="2">
                                                    <b>Total</b>
                                                </td>
                                                <td>
                                                <b>30000.00</b>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colSpan={3}>
                                                    <b>Closing Balance</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                Cash [CASH-0001]
                                                </td>
                                                <td>
                                                66646.50
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                Dutch HDFC Bank
                                                </td>
                                                <td>
                                                195531.58
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                Dutch HDFC Bank
                                                </td>
                                                <td>
                                                162700.00
                                                </td>
                                            </tr>
                                            <tr>
                                            
                                                <td className='text-end' colSpan="2">
                                                    <b>Total</b>
                                                </td>
                                                <td>
                                                <b>424878.08</b>
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
export default Summery
