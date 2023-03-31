// ** React Imports
import { Fragment, useEffect, useState} from 'react'

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
// import htmlToImage from 'html-to-image'
// import { toPng } from 'html-to-image'
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Sngsetting = () => {

    
    const [empl, setempl] = useState([])
    // const [ghatp, setghatp] = useState([])
    const [empltot, setempltot] = useState([])
    const [empltot1, setempltot1] = useState([])
    const datas = localStorage.getItem("accessToken")
    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    const adrole = data1.role
    const access = data1.rolesPermissions

    const Partyamount = () => {
        const token = datas
        console.log(token)
        // const purity = "18"
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/partybalance/allcustomerpayments", 
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setempl(res.data.payments)
                setempltot(res.data.balanceAmountTotal)
                setempltot1(res.data.balanceGoldWeightTotal)
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }

    // const handleChange = (e) => {
    //     const mydata = { ...ghatp }
    //     mydata[e.target.name] = e.target.value
    //     setghatp(mydata)
    //     // const profiledet = () => {
    //     const token = datas
    //     console.log(token)
    //     const purity = e.target.value
    //     axios.post("http://103.186.185.77:5023/omsanthoshjewellery/employeereport/castingReport/getallcastingempreport", { purity },
    //         {
    //             headers: { Authorization: `Bearer ${token}` }
    //         }, {}
    //     ).then((res) => {
    //         if (res.status === 200) {
    //             console.log(res.data)
    //             setempl(res.data.castingArry)
    //             setempltot(res.data.castingArrTotal)
    //         }
    //         }).catch(function (error) {
    //     if (error.response) {
    //         console.log(error.response.data.message)
    //         toast.error(error.response.data.message)
    //     }
    // })

    //     // }
    // }

    useEffect(() => {
        Partyamount()
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
        sessionStorage.setItem("customerId", data.customerId)
        sessionStorage.setItem("customerNamess", data.customerName)
        navigate("/sngpartybalance")
    }
    // const htmlToImage = require('html-to-image')

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
        // htmlToImage.toPng(document.getElementById('empTable'))
        //     .then(function (toDataURL) {
        //         download(toDataURL, 'my-node.png')
        //     })
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

    // const ref = useRef < HTMLDivElement > (null)
    // const genPdf = useCallback(() => {
    //     if (ref.current === null) {
    //       return
    //     }
    //     toPng(ref.current, { cacheBust: true })
    //       .then((dataUrl) => {
    //         const link = document.createElement('a')
    //         link.download = 'my-image-name.png'
    //         link.href = dataUrl
    //         link.click()
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //       })
    //   }, [ref])

    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Party Balance' data={[{ title: 'Party Balance' }]} />
                <Row>

                    <Col sm='12'>
                    {access.orderrep === true || adrole === "admin" ? (
                        <Card>
                            <div className='row'>
                                {/* <div className='col mt-1' style={{ paddingLeft: "35px" }}>
                                    <select style={{ width: "100px" }} name='purity' onChange={(e) => { handleChange(e) }} className='form-select'>
                                        <option value="18">18K</option>
                                        <option value="22">22K</option>
                                        <option value="24">24K</option>
                                    </select>
                                </div> */}
                                <div className='col'>
                                    <div style={{ float: "right" }}>
                                        {/* <Button className='m-1' color='danger'><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</Button>
                                        <Button className='m-1' color='success'> <i class="fa fa-file-excel-o" aria-hidden="true"></i> EXCEL</Button> */}
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
                            </div>
                            <CardBody>

                               <div>
                               <Table responsive bordered hover id='empTable'>
                                    <thead>
                                        <tr>
                                            <td colSpan="5" className='text-center text-danger' >|| JAI SHREE SHYAM ||</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="5"  >
                                                <h1 className='text-center text-danger'> OM SANTOSH JEWELLERS PVT LTD</h1>
                                            </td>
                                        </tr>
                                        <tr className='text-center' >
                                            <td colSpan="5" className="text-danger">Purchase Party Balance</td>
                                        </tr>
                                        <tr className='text-center'>
                                            <th className="text-danger">
                                                S No
                                            </th>
                                            <th className="text-danger">
                                                Customer Name
                                            </th>
                                            <th className="text-danger">
                                                Metal Balance
                                            </th>
                                            <th className="text-danger">
                                               Balance Amount
                                            </th>
                                            {/* <th className="text-danger">
                                                %
                                            </th>
                                            <th className="text-danger">
                                                Fine
                                            </th> */}
                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        {lists.map((data, key) => (
                                            <tr key={key} >
                                                <th scope="row">{((pageNumber - 1) * 10) + key + 11}</th>
                                                <td className='text-danger'>
                                                    <a onClick={() => { navigatedata(data) }}>
                                                        {data.customerName}
                                                    </a>
                                                </td>
                                                <td>
                                                {data.balanceGoldWeight}
                                                </td>
                                                <td>
                                                   {data.balanceAmount}
                                                </td>
                                                {/* <td>
                                                    {data.percentage}
                                                </td>
                                                <td>
                                                    {data.fine}
                                                </td> */}

                                                {/* <td>
                                         <Link to="/employee-wise"> <Button size='sm' outline color='warning'>
                                          <i class="fa fa-eye" aria-hidden="true"></i> view
                                          </Button></Link>
                                        </td> */}


                                            </tr>
                                        ))}

                                        <tr className='text-danger'>
                                            <td className='text-end' colSpan="2">
                                                Total
                                            </td>
                                            <td >
                                                {empltot1}
                                            </td>
                                            <td >
                                                {empltot}
                                            </td>
                                            {/* <td >
                                            </td>
                                            <td>
                                                {empltot.castingFineWt}
                                            </td> */}
                                        </tr>

                                    </tbody>

                                </Table>
                               </div>

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
export default Sngsetting
