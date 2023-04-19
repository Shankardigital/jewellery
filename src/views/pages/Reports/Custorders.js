// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Table, Button, Label, Input, Form } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import axios from "axios"
import ReactPaginate from 'react-paginate'
import Moment from 'react-moment'
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import html2canvas from "html2canvas"
import pdfMake from "pdfmake"
import Select from 'react-select'

// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Custorders = () => {

    const [empl, setempl] = useState([])
    const [ordr, setordr] = useState([])
    console.log(ordr)
    const [show, setshow] = useState(false)
    const [customer, setcustomer] = useState([])
    const [form, setform] = useState([])
    console.log(form)
    // const [empl1, setempl1] = useState([])

    const datas = sessionStorage.getItem("accessToken")
    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    const adrole = data1.role
    const access = data1.rolesPermissions

    const [selectedMulti1, setselectedMulti1] = useState([])
    console.log(selectedMulti1.value)

    const [selectedMulti, setselectedMulti] = useState([])
    console.log(selectedMulti)

    const cleardata = () => {
        setselectedMulti1("")
        setselectedMulti("")
        setform("")
        setshow(false)
    }

    const cleardata1 = () => {
        // setselectedMulti1("")
        setselectedMulti("")
        setform("")
        // setshow(false)
    }
    const cleardata2 = () => {
        // setselectedMulti1("")
        setselectedMulti("")
        // setform("")
        // setshow(false)
    }

    function handleMulti(data) {
        console.log(data)
        setselectedMulti1(data)
        cleardata1()
    }


    function handleMulti1(data) {
        console.log(data)
        setselectedMulti(data)

    }

    const handleChange = (e) => {
        const myUser = { ...form }
        myUser[e.target.name] = e.target.value
        setform(myUser)
        const token = datas
        const params = {
            customerId: selectedMulti1.value,
            itemPurity: e.target.value
        }
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/employeereport/customerorderreport/getallcustomerorders", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setordr(res.data.orderResult)
                cleardata2()
                // setselectedMulti("")
                // setform("")
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })


    }


    // const profiledet = () => {
    //     const token = datas
    //     console.log(token)
    //     axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/setting/getallstonestoragetransaction",
    //         {
    //             headers: { Authorization: `Bearer ${token}` }
    //         }, {}
    //     ).then((res) => {
    //         if (res.status === 200) {
    //             console.log(res.data)
    //             setempl(res.data.stoneTransactionData)
    //             // setempl1(res.data.castingTotals)
    //         }
    //     },
    //         (error) => {
    //             if (error.response && error.response.status === 400) {
    //                 toast.error(error.response.data.message)
    //                 console.log(error.data.message)

    //             }
    //         }
    //     )
    // }

    const activecust = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/employeereport/customerorderreport/getallcustomers",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.customerResult)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })

    }

    // const ordrids = selectedMulti.map((data) => (
    //     data.value
    // ))

    let ordrids = []

    if (Array.isArray(selectedMulti)) {
        ordrids = selectedMulti.map((data) => data.value)
      } else {
      }


    const actiordrs = () => {
        const token = datas
        console.log(token)
        const params = {
            orderId: ordrids,
            itemPurity: form.itemPurity
        }
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/employeereport/customerorderreport/getfinishedata", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setempl(res.data.finishingobj)
                setshow(false)
                cleardata()
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        actiordrs()
    }

    const ordrid = ordr.flatMap((data) => (
        [{ value: data.orderId, label: data.orderNo }]
    ))

    console.log(ordrid)
    const empid = customer.map((data) => (
        { value: data._id, label: data.customerName }
    ))

    useEffect(() => {
        // profiledet()
        activecust()
        // actiordrs()
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
                <Breadcrumbs title='Customer Orders' data={[{ title: 'Customer Orders' }]} />

                {show ? (
                    <Card>
                        <CardBody>
                            <Form onSubmit={(e) => { handleSubmit(e) }}>
                                <Row>
                                    <Col md="3" className="mb-1">
                                        <Label>Select Customers <span className="text-danger">*</span> </Label>
                                        <Select
                                            value={selectedMulti1}
                                            onChange={handleMulti}
                                            required
                                            name="customerId"
                                            options={empid} />
                                    </Col>
                                    <Col md="3" >
                                        <Label>Purity <span className="text-danger">*</span> </Label>
                                        <Input value={form.itemPurity} id="exampleSelect" type="select" name="itemPurity"

                                            onChange={(e) => {
                                                handleChange(e)
                                            }} required>
                                            <option value="">Select Purity</option>
                                            <option value="18">18k</option>
                                            <option value="22">22k</option>
                                            <option value="24">24k</option>
                                        </Input>
                                    </Col>
                                    <Col md="3" className="mb-1">
                                        <Label>Select Orders <span className="text-danger">*</span> </Label>
                                        <Select
                                                value={selectedMulti}
                                                onChange={handleMulti1}
                                                required
                                                name="orderID"
                                                isMulti
                                                options={ordrid} />

                                    </Col>
                                    <Col md="3">
                                        <Row style={{ marginTop: "30px" }}>
                                            <Col><Button size="sm" type='submit' color="success" >Search <i class="fa fa-search" aria-hidden="true"></i></Button></Col>
                                            <Col><Button onClick={() => { cleardata() }} outline size="sm" color="danger" >Cancel <i class="fa fa-times-circle-o" aria-hidden="true"></i></Button></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                ) : ("")}
                {access.orderrep === true || adrole === "admin" ? (
                    <Row>
                        <Col sm='12'>
                            <Card>
                                <div>
                                    <Button onClick={() => { setshow(!show) }} className="m-1 btn-sm" color="info">
                                        <i class="fa fa-filter" aria-hidden="true"></i>  Filter
                                    </Button>
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
                                                <td colSpan="20" className='text-center text-danger' >|| JAI SHREE SHYAM ||</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="20"  >
                                                    <h1 className='text-center text-danger'> OM SANTOSH JEWELLERS PVT LTD</h1>
                                                </td>
                                            </tr>
                                            <tr className='text-center' >
                                                <td colSpan="20" className="text-danger">{selectedMulti1.label} Item Detailed Summary</td>
                                            </tr>
                                            <tr className='text-center text-danger'>
                                                <th>
                                                    Sno
                                                </th>
                                                <th>
                                                    Order No
                                                </th>
                                                <th>
                                                    Item Name
                                                </th>
                                                <th>
                                                    Gross Wt
                                                </th>
                                                <th>
                                                    Stone Wt
                                                </th>
                                                <th>
                                                    Nett Wt {form.itemPurity} K
                                                </th>
                                                <th>
                                                    Fine Wt
                                                </th>
                                                <th>
                                                    Gold Rate {form.itemPurity} K
                                                </th>
                                                <th>
                                                    Gold Amount
                                                </th>
                                                <th>
                                                    Di Wt
                                                </th>
                                                <th>
                                                    Di Rate
                                                </th>
                                                <th>
                                                    Di Amount
                                                </th>
                                                <th>
                                                    CS Wt
                                                </th>
                                                <th>
                                                    CS Rate
                                                </th>
                                                <th>
                                                    CS Amount
                                                </th>
                                                <th>
                                                    MC Per Gm
                                                </th>
                                                <th>
                                                    Making
                                                </th>
                                                <th>
                                                    IGI
                                                </th>
                                                <th>
                                                    Total
                                                </th>
                                                <th>
                                                    Tax
                                                </th>
                                                <th>
                                                    Total Sale
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
                                                        {data.orderNo}
                                                    </td>
                                                    <td>
                                                        {data.itemName}
                                                    </td>
                                                    <td>
                                                        {data.grossWt}
                                                    </td>
                                                    <td>
                                                        {data.stoneWt}
                                                    </td>
                                                    <td>
                                                        {data.nettWt}
                                                    </td>
                                                    <td>
                                                        {data.fineWt}
                                                    </td>
                                                    <td>
                                                        {data.goldRatePerCtc}
                                                    </td>
                                                    <td>
                                                        {data.goldsellAmount}
                                                    </td>
                                                    <td>
                                                        {data.diCtc}
                                                    </td>
                                                    <td>
                                                        {data.diRate}
                                                    </td>
                                                    <td>
                                                        {data.diAmount}
                                                    </td>
                                                    <td>
                                                        {data.otherStoneCtc}
                                                    </td>
                                                    <td>
                                                        {data.otherStoneRateCtc}
                                                    </td>
                                                    <td>
                                                        {data.otherStonesellAmount}
                                                    </td>
                                                    <td>
                                                        {data.making}
                                                    </td>
                                                    <td>
                                                        {data.makingAmount}
                                                    </td>
                                                    <td>
                                                        {data.igiAmount}
                                                    </td>
                                                    <td>
                                                        {data.amount}
                                                    </td>

                                                    <td>
                                                        {data.tax}
                                                    </td>
                                                    <td>
                                                        {data.totalAmount}
                                                    </td>
                                                </tr>
                                            ))}

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
export default Custorders
