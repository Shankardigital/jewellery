// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Table, Button } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import { Link } from 'react-router-dom'
import axios from "axios"
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import html2canvas from "html2canvas"
import pdfMake from "pdfmake"
import toast from 'react-hot-toast'
// import { data } from 'jquery'

// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Usemetal = () => {
    const [customer, setcustomer] = useState([])
    // const [customer1, setcustomer1] = useState([])
    const [customer2, setcustomer2] = useState([])
    // const [customer3, setcustomer3] = useState([])
    console.log(customer)

    const datas = localStorage.getItem("accessToken")
    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    const adrole = data1.role
    const access = data1.rolesPermissions
    const datapur = sessionStorage.getItem("stockpurity")
    const profiledet = () => {
        const token = datas
        const params = {
            percent: datapur
        }
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/workshop/getallunfinishedbypurity", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.empWisePurityData)
                // setcustomer1(res.data.totalAmount)
                setcustomer2(res.data.totalReceiveddWt)
                // setcustomer3(res.data.closingBalance)
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }

    useEffect(() => {
        profiledet()
    }, [])

    const genPdf = () => {
        html2canvas(document.getElementById("empTable")).then((canvas) => {
            const data = canvas.toDataURL()
            const pdfExportSetting = {
                content: [
                    {
                        image: data,
                        width: 500
                    }
                ]
            }
            pdfMake.createPdf(pdfExportSetting).download("file.pdf")
        })
    }

    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Work Shop' data={[{ title: 'Work Shop' }]} />
                <Row>
                    <div>

                        <Link to="/workshop" style={{ float: "right" }} > <Button className='m-1' color='info'> <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Back</Button></Link>
                    </div>

                    <Col sm='12'>
                    {access.metaluse === true || adrole === "admin" ? (
                        <Card>
                            <div>
                                <div className='ml-3' style={{ float: "right" }}>
                                    <Button className='m-1' onClick={genPdf} color='danger'><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</Button>
                                    <ReactHTMLTableToExcel
                                        className="btn btn-outline-success fa fa-file-excel-o " 
                                        table="empTable"
                                        filename="ReportExcel"
                                        sheet="Sheet"
                                        buttonText="Excel"
                                        style={{ color: "white" }}
                                    />
                                </div>
                            </div>
                            <CardBody>

                                <Table responsive bordered hover id="empTable">
                                    <thead>
                                        <tr>
                                            <td colSpan="8" className='text-center text-danger' >|| JAI SHREE SHYAM ||</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="8"  >
                                                <h1 className='text-center text-danger'> OM SANTOSH JEWELLERS PVT LTD</h1>
                                            </td>
                                        </tr>
                                        <tr className='text-center' >
                                            <td colSpan="8" className="text-danger">{datapur} %</td>
                                        </tr>
                                        <tr className='text-center'>
                                            <th className='text-danger'>
                                                S No
                                            </th>
                                            <th className='text-danger'>
                                                Date
                                            </th>
                                            <th className='text-danger'>
                                                Karigar Name
                                            </th>
                                            <th className='text-danger'>
                                                Weight
                                            </th>
                                            {/* <th className='text-danger'>
                                               Order No
                                            </th>
                                            <th className='text-danger'>
                                                Item 
                                            </th>
                                            <th className='text-danger'>
                                                Weight
                                            </th>
                                            <th className='text-danger'>
                                                Stage
                                            </th>
                                            <th className='text-danger'>
                                                Status
                                            </th> */}

                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        {customer.map((data, key) => (
                                            <tr key={key}>
                                                <th scope="row">
                                                    {key + 1}
                                                </th>
                                                <td>
                                                    {data.submittedDate}
                                                </td>
                                                <td>
                                                    {data.employeeName}
                                                </td>
                                                {/* <td>
                                                    {data.orderNo}
                                                </td>
                                                <td>
                                                    {data.itemName}
                                                </td>
                                                <td>
                                                    {data.receivedWeight}
                                                </td>
                                                <td>
                                                    {data.stage}
                                                </td> */}
                                                
                                                <td>
                                                   {data.goldWeight}
                                                </td>
                                                {/* <td>
                                                35.330
                                            </td> */}
                                                {/* <td>
                                                    {data.weightIn === undefined ? (
                                                        "-"
                                                    ) : (
                                                        <span>{data.weightIn}</span>
                                                    )}
                                                </td>
                                                <td>
                                                    {data.weightOut === undefined ? (
                                                        "-"
                                                    ) : (
                                                        <span>{data.weightOut}</span>
                                                    )}
                                                </td> */}
                                            </tr>
                                        ))}


                                        <tr>
                                            <td className='text-danger text-end' colSpan="3">Total</td>
                                            <td> {customer2}</td>
                                            {/* <td></td>
                                            <td></td> */}
                                            {/* <td> {customer1}</td> */}
                                        </tr>
                                        {/* <tr>
                                            <td className='text-danger text-end' colSpan="3">Closing Balance</td>
                                            <td colSpan="2">{customer3}</td>
                                        </tr> */}
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
            </div>
        </Fragment>
    )
}
export default Usemetal
