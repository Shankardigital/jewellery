// ** React Imports
import { Fragment, useState, useEffect, useRef } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Table, Button } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
// import jewllery from "../../../assets/images/latest/jewllery.jfif"
import { Link } from 'react-router-dom'
import sj2 from "../../../assets/images/latest/sj2.png"
import axios from "axios"
// import ReactPaginate from 'react-paginate'
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import html2canvas from "html2canvas"
// import pdfMake from "pdfmake"
import Moment from 'react-moment'
import { useReactToPrint } from "react-to-print"

// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Viewinvoice = () => {

    const [empl, setempl] = useState([])
    console.log(empl)
    const [empl1, setempl1] = useState([])
    const [cust, setcust] = useState([]) 
    const [totwast, settotwast] = useState("") 
    console.log(totwast)
    // console.log(empl1)
    const datas = localStorage.getItem("accessToken")
    const finids = sessionStorage.getItem("invobjid")
    const profiledet = () => {
        const token = datas
        const docuid = finids
        console.log(token)
        axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/employeereport/deliveryreport/getdeliverydatabyid/${docuid}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setempl(res.data.finishData)
                setempl1(res.data.finishData.stoneDetails)
                setcust(res.data.customerInfo)
                settotwast(res.data.totalWastage)
                // setempltot(res.data.castingArrTotal)
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

    // const genPdf = () => {
    //     html2canvas(document.getElementById("empTable")).then((canvas) => {
    //         const data = canvas.toDataURL()
    //         const pdfExportSetting = {
    //             content: [
    //                 {
    //                     image: data,
    //                     width: 500
    //                 }
    //             ]
    //         }
    //         pdfMake.createPdf(pdfExportSetting).download("file.pdf")
    //     })
    // }

    const componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })

    const downloadImage = (a) => {
        html2canvas(document.querySelector("#empTable")).then(canvas => {
            a = document.createElement('a')
            document.body.appendChild(a)
            a.download = "Invoice.png"
            a.href = canvas.toDataURL()
            a.click()
        })
    }

    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Invoice' data={[{ title: 'Invoice' }]} />
                <Row>
                    <div>
                        <Link to="/delivery" style={{ float: "right" }} > <Button className='m-1' color='info'> <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Back</Button></Link>
                    </div>
                    <Col sm='12'>
                        <Card>
                            <div>
                                <div style={{ float: "right" }}>

                                    <Button onClick={downloadImage} className='btn-sm' color='warning'><i class="fa fa-file-image-o" aria-hidden="true"></i> IMG</Button>

                                    <Button
                                        // onClick={genPdf} 
                                        onClick={handlePrint}
                                        className='m-1 btn-sm' color='danger'><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</Button>
                                    <ReactHTMLTableToExcel
                                        className="btn btn-success btn-sm fa fa-file-excel-o "
                                        table="empTable"
                                        filename="ReportExcel"
                                        sheet="Sheet"
                                        buttonText=" Excel"
                                        style={{ color: "white" }}
                                    />
                                </div>
                            </div>
                            <CardBody className='mt-3 mb-3'>
                                <div id="empTable" ref={componentRef}>
                                    <Table id='empTable' style={{ border: "1px solid gray" }} size='sm' responsive bordered hover>
                                        <thead >
                                            <tr style={{ border: "1px solid gray", textAlign: "center" }} >
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} colSpan="6" className='text-center text-danger' >|| JAI SHREE SHYAM ||</td>
                                            </tr>
                                            <tr style={{ border: "1px solid gray", textAlign: "center" }} >
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} colSpan="6"  >
                                                    <Row>
                                                        <Col md="2">
                                                            <img style={{ width: "100px" }} src={sj2} />
                                                        </Col>
                                                        <Col md="9">
                                                            <h1 className='text-center text-danger mt-1'> OM SANTOSH JEWELLERS PVT LTD</h1>
                                                        </Col>
                                                    </Row>
                                                </td>
                                            </tr>
                                            <tr style={{ border: "1px solid gray", textAlign: "center" }} >
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} colSpan="6" className='text-center text-danger' >Plot No 5, House No 8-2-267/1/a/5, Aurora Colony Phase 2, Banjarahills Road No 3, Hyderabad, T.S.</td>
                                            </tr>
                                            <tr style={{ border: "1px solid gray", textAlign: "center" }} >
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} colSpan="6" className='text-center text-danger' >Delivery Challan</td>
                                            </tr>
                                            <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} colSpan="6" className='text-center'>
                                                    <div style={{ padding: "10px" }} className='p-1'>
                                                        <img id="empTable" src={`http://103.186.185.77:5023/${empl.finishingImg}`} style={{ width: "200px" }} />

                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{ border: "1px solid gray", textAlign: "center" }} className='text-center'>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>Date</td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }}>
                                                    <Moment format="DD/MM/YYYY">
                                                        {empl.submittedDate}
                                                    </Moment>
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>Bill No</td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }}>{empl.billNo}</td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger' >Order No</td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }}>{empl.orderNo}</td>
                                            </tr>
                                            <tr style={{ border: "1px solid gray", textAlign: "center" }} >
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger text-center'>Item Name</td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger' colSpan="5">{empl.itemName}</td>
                                            </tr>
                                            <tr style={{ border: "1px solid gray" }} className=''>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger text-center'>Party Name</td>
                                                <td style={{ border: "1px solid gray" }} colSpan="5">{cust.customerName}</td>
                                            </tr>
                                            <tr style={{ border: "1px solid gray" }} className=''>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger text-center'>Address</td>
                                                <td style={{ border: "1px solid gray" }} colSpan="5">{cust.address}</td>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center'>
                                            <tr style={{ border: "1px solid gray", textAlign: "center" }}>

                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>
                                                    Gross Wt
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>
                                                    Stone Wt
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>
                                                    Nett Wt
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>
                                                    Purity
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>
                                                    Wastage
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>
                                                    Fine
                                                </td>
                                            </tr>
                                            <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }}>
                                                    {empl.gross}
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }}>
                                                    {empl.stone}
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }}>
                                                    {empl.nett}
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }}>
                                                    {empl.itemPurity}K
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }}>
                                                    {totwast}
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }}>
                                                    {empl.fine}
                                                </td>

                                            </tr>

                                            <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} colSpan="6" className='text-danger text-center'>Stone Details</td>
                                            </tr>

                                            <tr style={{ border: "1px solid gray", textAlign: "center" }} className='text-center'>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>
                                                    Item
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>
                                                    Wt In Gr
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>
                                                    Wt In Ct
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger'>
                                                    Rate
                                                </td>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} colSpan="2" className='text-danger'>
                                                    Amount
                                                </td>
                                            </tr>

                                            {empl1.map((data) => (
                                                <tr style={{ border: "1px solid gray", textAlign: "right" }} className='text-center'>
                                                    <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-danger'>{data.sellItemType}</td>
                                                    <td style={{ border: "1px solid gray", textAlign: "right" }}>{data.sellWeightInGr}</td>
                                                    <td style={{ border: "1px solid gray", textAlign: "right" }}>{data.sellWeightInCtc}</td>
                                                    <td style={{ border: "1px solid gray", textAlign: "right" }}>{data.sellRatePerCtc}</td>
                                                    <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-end' colSpan="2">{data.sellAmount}</td>
                                                </tr>
                                            ))}

                                            <tr style={{ border: "1px solid gray", textAlign: "right" }} className='text-center'>
                                                <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-danger'>Total</td>
                                                <td style={{ border: "1px solid gray", textAlign: "right" }}></td>
                                                <td style={{ border: "1px solid gray", textAlign: "right" }}></td>
                                                <td style={{ border: "1px solid gray", textAlign: "right" }}></td>
                                                <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-danger text-end' colSpan="2">{empl.selltotalamount}</td>
                                            </tr>

                                            <tr style={{ border: "1px solid gray", textAlign: "center" }} className='text-center'>
                                                <td style={{ border: "1px solid gray", textAlign: "center" }} className='text-danger p-1' colSpan="6"></td>
                                            </tr>
                                            {/* <tr style={{border:"1px solid gray", textAlign:"center"}} className='text-center'>
                                            <td style={{border:"1px solid gray", textAlign:"center"}} >-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}}>-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}}>-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}}>-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}} colSpan="2">-</td>
                                        </tr>
                                        <tr style={{border:"1px solid gray", textAlign:"center"}} className='text-center'>
                                            <td style={{border:"1px solid gray", textAlign:"center"}} >-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}}>-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}}>-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}}>-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}} colSpan="2">-</td>
                                        </tr>
                                        <tr style={{border:"1px solid gray", textAlign:"center"}} className='text-center'>
                                            <td style={{border:"1px solid gray", textAlign:"center"}} >-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}}>-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}}>-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}}>-</td>
                                            <td style={{border:"1px solid gray", textAlign:"center"}} colSpan="2">-</td>
                                        </tr> */}
                                            {empl.igst === undefined || empl.igst === null || empl.igst === "0" ? (
                                                <>
                                                    <tr style={{ border: "1px solid gray", textAlign: "right" }} className='text-center'>
                                                        <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-end text-danger' colSpan="4">CGST ({empl.cgstptg} %)</td>
                                                        <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-danger text-end' colSpan="2">{empl.cgst}</td>
                                                    </tr>
                                                    <tr style={{ border: "1px solid gray", textAlign: "right" }} className='text-center'>
                                                        <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-end text-danger' colSpan="4">SGST ({empl.sgstptg} %)</td>
                                                        <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-danger text-end' colSpan="2">{empl.sgst}</td>
                                                    </tr>
                                                </>
                                            ) : (
                                                <tr style={{ border: "1px solid gray", textAlign: "right" }} className='text-center'>
                                                    <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-end text-danger' colSpan="4">IGST ({empl.igstptg} %)</td>
                                                    <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-danger text-end' colSpan="2">{empl.igst}</td>
                                                </tr>
                                            )}
                                            <tr>
                                                <td style={{padding:"10px"}} colSpan="6"></td>
                                            </tr>


                                            {/* <tr style={{ border: "1px solid gray", textAlign: "right" }} className='text-center'>
                                                <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-end text-danger' colSpan="4">Total</td>
                                                <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-danger text-end' colSpan="2">{parseFloat(empl.cgst) + parseFloat(empl.sgst)}</td>
                                            </tr> */}
                                            <tr style={{ border: "1px solid gray", textAlign: "right" }} className='text-center'>
                                                <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-end text-danger' colSpan="4">Grand Total</td>
                                                <td style={{ border: "1px solid gray", textAlign: "right" }} className='text-danger text-end' colSpan="2">{Math.round(empl.totalAmount)}</td>
                                            </tr>

                                        </tbody>

                                    </Table>

                                    <div style={{ marginTop: "60px" }} className='row '>
                                        <div className='col'>
                                            {/* <p>Received Signature & With Stamp</p> */}
                                        </div><div className='col'>
                                            <p style={{ float: "right" }}>Om Santosh Jewllery Pvt, Ltd</p>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: "80px" }} className='row '>
                                        <div className='col'>
                                            <p>Received Signature & With Stamp</p>
                                        </div><div className='col'>
                                            <p style={{ float: "right" }}>Director</p>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
export default Viewinvoice
