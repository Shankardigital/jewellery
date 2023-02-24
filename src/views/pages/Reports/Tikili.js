// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Table, Button } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import axios from "axios"
import ReactPaginate from 'react-paginate'
import Moment from 'react-moment'
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import html2canvas from "html2canvas"
import pdfMake from "pdfmake"

// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Stones = () => {

    const [empl, setempl] = useState([])
    const [tikilip, settikilip] = useState([])
    const [tikiliw, settikiliw] = useState([])
    console.log(empl)
    // const [empl1, setempl1] = useState([])
    const datas = sessionStorage.getItem("accessToken")
    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    const adrole = data1.role
    const access = data1.rolesPermissions
    const profiledet = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/setting/getallsettingtiklitransactions",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setempl(res.data.tikliTransaction)
                settikilip(res.data.toatalTikliPieces)
                settikiliw(res.data.totalTikliWeight)
                // setempl1(res.data.castingTotals)
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

    const downloadImage = (a) => {
        html2canvas(document.querySelector("#empTable")).then(canvas => {
            a = document.createElement('a')
            document.body.appendChild(a)
            a.download = "Report.png"
            a.href = canvas.toDataURL()
            a.click()
        })
    }

    const [listPerPage] = useState(10)
    const [pageNumber, setPageNumber] = useState(0)

    const pagesVisited = pageNumber * listPerPage
    const lists = empl.slice(pagesVisited, pagesVisited + listPerPage)
    const pageCount = Math.ceil(empl.length / listPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Tikili Transaction' data={[{ title: 'Tikili Transaction' }]} />
                {access.orderrep === true || adrole === "admin" ? (
                    <Row>
                        <Col sm='12'>
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
                                        {/* <Button className='m-1' color='success'> <i class="fa fa-file-excel-o" aria-hidden="true"></i> EXCEL</Button> */}
                                    </div>
                                </div>
                                <CardBody>

                                    <Table size='sm' id='empTable' responsive bordered hover>
                                        <thead>
                                            <tr>
                                                <td colSpan="10" className='text-center text-danger' >|| JAI SHREE SHYAM ||</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="10"  >
                                                    <h1 className='text-center text-danger'> OM SANTOSH JEWELLERS PVT LTD</h1>
                                                </td>
                                            </tr>
                                            <tr className='text-center' >
                                                <td colSpan="10" className="text-danger">Tikili Transactions</td>
                                            </tr>
                                            <tr className='text-center text-danger'>
                                                <th>
                                                    Sno
                                                </th>
                                                <th>
                                                    Date
                                                </th>
                                                <th>
                                                    Order No
                                                </th>
                                                <th>
                                                    Item Name
                                                </th>
                                                <th>
                                                Tikili Pieces
                                                </th>
                                                <th>
                                                Tikili Weight
                                                </th>
                                            
                                            </tr>
                                        </thead>
                                        <tbody className='text-center'>
                                            {lists.map((data, key) => (
                                                <tr key={key}>
                                                    <th scope="row">
                                                        {((pageNumber - 1) * 10) + key + 11}
                                                    </th>
                                                    <td>
                                                    <Moment format="DD MM YYYY">
                                                        {data.submittedDate}
                                                        </Moment>
                                                    </td>
                                                    <td>
                                                        {data.orderNo}
                                                    </td>
                                                    <td>
                                                        {data.itemName}
                                                    </td>
                                                    <td>
                                                        {data.tikliPieces}
                                                    </td>
                                                    <td>
                                                        {data.tikliweight}
                                                    </td>
                                                   
                                                </tr>
                                            ))}
                                            <tr className='text-danger'>
                                                <td colSpan="4">Total</td>
                                                <td>{tikilip}</td>
                                                <td>{tikiliw}</td>
                                            </tr>

                                        </tbody>
                                        {/* <tfoot className='text-center' >
                                        <tr className='text-danger'>
                                            <td></td>
                                            <td></td>
                                            <td colspan="2" >
                                                Total
                                            </td>
                                            <td>120535.201</td>
                                        </tr>
                                    </tfoot> */}

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
                        </Col>
                    </Row>
                ) : (
                    <Card>
                        <h5 className='text-center p-2'>You don't have permission to access</h5>
                    </Card>
                )}
            </div>
        </Fragment>
    )
}
export default Stones
