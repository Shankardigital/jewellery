// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardHeader, CardBody, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import sj2 from "../../../assets/images/latest/sj2.png"
import { Link } from 'react-router-dom'
// import smlimg from "../../../assets/images/avatars/8-small.png"
import axios from "axios"

// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Expenciveview = () => {
    const [expn, setexpn] = useState([])
    const datas = localStorage.getItem("accessToken")
    const catgerory = () => {
        const docid = sessionStorage.getItem("expenid")
        const token = datas
        console.log(token)
        axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/expenseList/getexpenseListbyid/${docid}`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }, {}
        ).then((res) => {
          if (res.status === 200) {
            console.log(res.data)
            setexpn(res.data.expenseListResult)
          }
        },
          (error) => {
            if (error.response && error.response.status === 400) {
              toast.error(error.response.data.message)
              console.log(error.data.message)
    
            }
          }
        )
      }

      useEffect(() => {
        catgerory()
      }, [])

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
                <Breadcrumbs title='Expense Details' data={[{ title: 'Expense Details' }]} />
                <Row>
                    <div >
                        <Link to="/expencelist"> <Button style={{ float: "right" }} className='m-1' color='info'> <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Back</Button></Link>
                    </div>
                    <Col sm='12'>
                        <Card>
                            <div>
                                {/* <Button className='m-1' color='danger'><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</Button> */}
                                {/* <Button className='m-1' color='success'> <i class="fa fa-file-excel-o" aria-hidden="true"></i> EXCEL</Button> */}

                            </div>

                            <CardBody>

                                <Row>
                                    <img src={sj2} style={{ width: "150px" }} className="mb-2" />
                                </Row>

                                <Row>
                                    <Col md="6">
                                        <h5><b>Ultimate Sales, Inventory, Accounting</b></h5>
                                        <h5><b>Management System</b></h5>
                                        <span><b>Phone: </b></span><span>9236952522</span><br />
                                        <span><b>Email: </b></span><span>support@gmail.com</span><br />
                                        <span><b>Address: </b></span><span>Ground Floor, Road# 24, House# 339, Ranga Reddy colony Hyderabad </span>
                                    </Col>
                                    <Col md="6">
                                        <div style={{ float: "right" }}>
                                            <h5><b>Supplier Details</b></h5>
                                            <h5><b>Supplier ID:</b> <span>AS-2</span></h5>
                                            <span><b>Supplier Name: </b></span><span>Carla Bender</span><br />
                                            <span><b>Company Name: </b></span><span>Richardson </span><br />
                                            <span><b>Email: </b></span><span>richardson@gmail.com </span><br />
                                            <span><b>Contact Number: </b></span><span>362942565265 </span><br />
                                            <span><b>Address: </b></span><span>Ground Floor, Road# 24, House# 339, Ranga Reddy colony Hyderabad </span>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>


                        <Card className='mt-1'>
                            <CardBody>
                                <Row>
                                    <Table className="mb-4" size='sm' responsive bordered hover>
                                        <thead>
                                            <tr className='text-center text-danger'>

                                                <th style={{ width: "100px" }}>
                                                    Date
                                                </th>
                                                <th>
                                                    Image
                                                </th>
                                                <th>
                                                    Expense Reason
                                                </th>
                                                <th  >
                                                    Category
                                                </th>
                                                <th  >
                                                    Sub Category
                                                </th>
                                                <th  >
                                                    Amount
                                                </th>
                                                <th  >
                                                    Account
                                                </th>
                                                <th  >
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center'>
                                            <tr>
                                                <td>
                                                    {expn.date}
                                                </td>
                                                <td>
                                                <img style={{width:"50px"}} src={`http://103.186.185.77:5023/${expn.image}`}/>
                                                </td>
                                                <td>
                                                {expn.expenseReason}
                                                </td>
                                                <td>
                                                {expn.categoryName}
                                                </td>
                                                <td>
                                                {expn.subCategoryName}
                                                </td>
                                                <td>
                                                {expn.amount}
                                                </td>
                                                <td>
                                                {expn.account}
                                                </td>
                                                <td>
                                                {expn.status}
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
export default Expenciveview
