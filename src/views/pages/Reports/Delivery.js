// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Table, Button } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import ReactPaginate from 'react-paginate'
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import html2canvas from "html2canvas"
import pdfMake from "pdfmake"
import Moment from 'react-moment'
// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Delivery = () => {

    const [empl, setempl] = useState([])
    const datas = localStorage.getItem("accessToken")
    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    const adrole = data1.role
    const access = data1.rolesPermissions

    const profiledet = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/employeereport/deliveryreport/getalldeliverydata",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setempl(res.data.allFinishedData)
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

    const navigate = useNavigate()
    const [listPerPage] = useState(10)
    const [pageNumber, setPageNumber] = useState(0)

    const pagesVisited = pageNumber * listPerPage
    const lists = empl.slice(pagesVisited, pagesVisited + listPerPage)
    const pageCount = Math.ceil(empl.length / listPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const navigatedata = (data) => {
        sessionStorage.setItem("invobjid", data._id)
        navigate("/view-invoice")
    }

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

    const downloadImage = (a) => {
        html2canvas(document.querySelector("#empTable")).then(canvas => {
           a = document.createElement('a')
           document.body.appendChild(a)
           a.download = "Report.png"
           a.href =  canvas.toDataURL()
           a.click()
       })
    }

    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Packet' data={[{ title: 'Packet' }]} />
                <Row>

                    <Col sm='12'>
                    {access.orderrep === true || adrole === "admin" ? (
                        <Card>
                            <div>
                                <div style={{ float: "right" }}>
                                <Button onClick={downloadImage} className='btn-sm' color='warning'><i class="fa fa-file-image-o" aria-hidden="true"></i> IMG</Button>

                                    <Button onClick={genPdf} className='m-1 btn-sm' color='danger'><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</Button>
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
                            <CardBody>

                                <Table size='sm' id='empTable' responsive bordered hover>
                                    <thead>
                                        <tr className='text-center' >
                                            <td colSpan="6" className="text-danger">Delivery Challan</td>
                                        </tr>
                                        <tr className='text-center text-danger'>
                                            <th >
                                                S No
                                            </th>
                                            <th style={{ width: "100px" }}>
                                                Date
                                            </th>
                                            <th>
                                                Order No
                                            </th>
                                            <th>
                                                Bill No
                                            </th>
                                            <th  >
                                                Party Name
                                            </th>

                                            {/* <th style={{width:"100px"}}>
                                            Action
                                        </th> */}
                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        {lists.map((data, key) => (
                                            <tr key={key} >
                                                <th scope="row">{((pageNumber - 1) * 10) + key + 11}</th>
                                                <td >
                                                    <Moment format="DD/MM/YYYY">
                                                        {data.submittedDate}
                                                    </Moment>
                                                </td>
                                                <td className='text-danger'>
                                                    <a onClick={() => { navigatedata(data) }}>
                                                        {data.orderNo}
                                                    </a>
                                                </td>
                                                <td>
                                                    {data.billNo}
                                                </td>

                                                <td>
                                                    {data.customerName}
                                                </td>

                                                {/* <td>
                                         <Link to="/employee-wise"> <Button size='sm' outline color='warning'>
                                          <i class="fa fa-eye" aria-hidden="true"></i> view
                                          </Button></Link>
                                        </td> */}


                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Col sm='12'>
                                    <div className='d-flex mt-3 mb-1' style={{ float: 'right' }}>
                                        <ReactPaginate
                                            previousLabel={"Previous"}
                                            nextLabel={"Next"}
                                            pageCount={pageCount}
                                            onPageChange={changePage}
                                            containerClassName={"pagination"}
                                            previousLinkClassName={"previousBttn"}
                                            nextLinkClassName={"nextBttn"}
                                            disabledClassName={"disabled"}
                                            activeClassName={"active"}
                                            total={lists.length}
                                        />
                                    </div>
                                </Col>
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
export default Delivery
