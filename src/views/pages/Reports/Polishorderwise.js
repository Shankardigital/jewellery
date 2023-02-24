// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Table, Button } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import { Link } from 'react-router-dom'
import axios from "axios"
import ReactPaginate from 'react-paginate'
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import html2canvas from "html2canvas"
import pdfMake from "pdfmake"
// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Polishorder = () => {

    const [empl, setempl] = useState([])
    const [empl1, setempl1] = useState()
    const [totlos, settotlos] = useState([])
    const [totlos1, settotlos1] = useState([])
    const [totlos2, settotlos2] = useState([])
    // const [empl1, setempl1] = useState([])
    const datas = sessionStorage.getItem("accessToken")
    const docid = sessionStorage.getItem("polrepid")
    const purity = sessionStorage.getItem("polrepprt")
    const profiledet = () => {
        const token = datas
        console.log(token)
        const params = {
            percent: purity,
            employeeId: docid
        }
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/employeereport/polishreport/empwisepolish", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setempl(res.data.finalDatapolishEmp)
                settotlos(res.data.totalLoss)
                settotlos1(res.data.totalLoss1)
                settotlos2(res.data.totalLoss2)
                setempl1(res.data.employeeName)
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
    // const navigate = useNavigate()
    const [listPerPage] = useState(10)
    const [pageNumber, setPageNumber] = useState(0)

    const pagesVisited = pageNumber * listPerPage
    const lists = empl.slice(pagesVisited, pagesVisited + listPerPage)
    const pageCount = Math.ceil(empl.length / listPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
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
                <Breadcrumbs title='Polish' data={[{ title: 'Polish' }]} />
                <Row>
                    <div>

                        <Link to="/polish" style={{ float: "right" }} > <Button className='m-1' color='info'> <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Back</Button></Link>
                    </div>
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
                                </div>
                            </div>
                            <CardBody>

                                <Table size='sm' responsive bordered hover id='empTable'>
                                    <thead>
                                        <tr>
                                            <td colSpan="12" className='text-center text-danger' >|| JAI SHREE SHYAM ||</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="12"  >
                                                <h1 className='text-center text-danger'> OM SANTOSH JEWELLERS PVT LTD</h1>
                                            </td>
                                        </tr>
                                        <tr className='text-center' >
                                            <td colSpan="12" className="text-danger">{empl1}</td>
                                        </tr>
                                        <tr className='text-center'>
                                            <th className="text-danger">
                                                S No
                                            </th >
                                            <th className="text-danger">
                                                Date
                                            </th>
                                            <th className="text-danger">
                                                Order No
                                            </th>
                                            <th className="text-danger">
                                                Item
                                            </th >
                                            <th className="text-danger">
                                                G Out
                                            </th>
                                            <th className="text-danger">
                                                G In
                                            </th>
                                            <th className="text-danger">
                                                Loss
                                            </th>
                                            <th className="text-danger">
                                                F Out
                                            </th>
                                            <th className="text-danger">
                                                F In
                                            </th>
                                            <th className="text-danger">
                                                Loss
                                            </th>
                                            {/* <th className="text-info">
                                                Loss
                                            </th> */}
                                            <th className="text-danger">
                                                Total Loss
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
                                                {data.submittedDate}
                                            </td>
                                            <td>
                                            {data.orderNo}
                                            </td>
                                            <td>
                                            {data.itemName}
                                            </td>
                                            <td>
                                            {data.gOut}
                                            </td>
                                            <td>
                                            {data.gIn}
                                            </td>
                                            <td className="text-danger">
                                            {data.loss1}
                                            </td>
                                            <td>
                                            {data.fOut}
                                            </td>
                                            <td>
                                            {data.fIn}
                                            </td>
                                            <td className="text-danger">
                                            {data.loss2}
                                            </td>
                                            {/* <td className="text-info">
                                            {data.submittedDate}
                                            </td> */}
                                            <td >
                                            {data.tLoss}
                                            </td>
                                        </tr>
                                          ))}
                                          <tr className='text-danger'>
                                            <td colSpan="6" className='text-end'>Total</td>
                                            <td>{totlos1}</td>
                                            <td></td>
                                            <td></td>
                                            <td>{totlos2}</td>
                                            <td>{totlos}</td>
                                          </tr>
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
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
export default Polishorder
