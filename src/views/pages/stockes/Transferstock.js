// ** React Imports
import { Fragment, useState, useEffect } from "react"
import BreadCrumbsPage from "@components/breadcrumbs"
import {
    CardTitle,
    CardHeader,
    InputGroupText,
    InputGroup,
    Card,
    CardBody,
    Button,
    Row,
    Table,
    Col,
    Badge,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Alert,
    Input,
    Label,
    Form
} from "reactstrap"
// import qrcode from "../../../assets/images/qr.png"
import { ArrowRightCircle, X } from 'react-feather'
// import { useNavigate, Link } from 'react-router-dom'
// import Nav from './Nav'
import Select from 'react-select'
import axios from "axios"
import toast from 'react-hot-toast'
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import html2canvas from "html2canvas"
import pdfMake from "pdfmake"
import ReactPaginate from 'react-paginate'
import Moment from 'react-moment'
import trash from "../../../assets/images/latest/trash.gif"

const Transferstock = () => {

    const [form, setform] = useState([])
    const [form1, setform1] = useState([])
    const [form2, setform2] = useState([])
    console.log(form2)
    // const [form2, setform2] = useState([])
    // console.log(form2)
    // const navigate = useNavigate()
    const [show, setshow] = useState(false)
    const [centeredModal, setCenteredModal] = useState(false)
    const [centeredModal1, setCenteredModal1] = useState(false)
    const [centeredModal2, setCenteredModal2] = useState(false)

    const [ordr, setordr] = useState([])
    console.log(ordr)
    const [customer, setcustomer] = useState([])
    const [deli, setdeli] = useState([])

    const [nettd, setnettd] = useState([])
    // const [editdata, seteditdata] = useState([])
    const [totamount, settotamount] = useState([])
    const [balamount, setbalamount] = useState([])

    const datas = localStorage.getItem("accessToken")
    console.log(datas)
    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    const adrole = data1.role
    const access = data1.rolesPermissions


    const handleChange = (e) => {
        const myUser = { ...form }
        myUser[e.target.name] = e.target.value
        setform(myUser)
    }
    // const handleChange1 = (e) => {
    //     const myUser = { ...form }
    //     myUser[e.target.name] = e.target.value
    //     setform(myUser)
    //     const count = totamount - e.target.value
    //     setbalamount(count)
    // }
    const handleChange2 = (e) => {
        const myUser = { ...form1 }
        myUser[e.target.name] = e.target.value
        setform1(myUser)
    }
    // const handleChange3 = (e) => {
    //     const myUser = { ...form1 }
    //     myUser[e.target.name] = e.target.value
    //     setform1(myUser)
    //     const count = totamount - e.target.value
    //     setbalamount(count)
    // }

    const handleChange4 = (e) => {
        const myUser = { ...form2 }
        myUser[e.target.name] = e.target.value
        setform2(myUser)
        // const count = totamount - e.target.value
        // setbalamount(count)
    }
    const handleChange5 = (e) => {
        const myUser = { ...form2 }
        myUser[e.target.name] = e.target.value
        setform2(myUser)
        const count = form2.balance - e.target.value
        setbalamount(count)
    }

    const [selectedMulti1, setselectedMulti1] = useState([])

    console.log(selectedMulti1)
    function handleMulti(data) {
        setselectedMulti1(data)
        console.log(data)

        const token = datas
        const params = {
            customerId: data.value
        }
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/delivery/getfinishedallorder", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setordr(res.data.orderResult)
                setnettd(res.data.nettData)
                settotamount(res.data.selltotalamountData)
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
    const [selectedMulti, setselectedMulti] = useState()
    console.log(selectedMulti)
    console.log(selectedMulti)
    function handleMulti1(data) {
        setselectedMulti(data)
    }

    const deliverydata = () => {

        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/delivery/getalldelivery",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setdeli(res.data.deliveryResult)
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
        },
            (error) => {
                if (error.response && error.response.status === 400) {
                    toast.error(error.response.data.message)
                    console.log(error.data.message)

                }
            }
        )
    }

    const ordrid = ordr.map((data) => (
        { value: data.orderId, label: data.orderNo }
    ))

    const empid = customer.map((data) => (
        { value: data._id, label: data.customerName }
    ))

    useEffect(() => {
        deliverydata()
        activecust()
        // actiordrs()
    }, [])

    const addOrders = () => {
        const token = datas
        const params = {
            customerId: selectedMulti1.value,
            // orderIds: selectedMulti,
            submittedDate: form.submittedDate,
            goldWeight: nettd,
            amount: totamount,
            balance: balamount,
            receivedGoldWeight: form.receivedGoldWeight,
            receivedAmount: form.receivedAmount,
            particulars: form.particulars

        }

        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/delivery/adddelivery", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                toast.success(res.data.message)
                setshow(false)
                deliverydata()
                // navigate("/drawing")

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

    const handleSubmit = (e) => {
        e.preventDefault()
        addOrders()
    }

    const addOrders1 = () => {
        const token = datas
        const params = {
            customerId: selectedMulti1.value,
            // orderIds: selectedMulti,
            submittedDate: form1.submittedDate,
            goldWeight: nettd,
            amount: totamount,
            balance: balamount,
            receivedGoldWeight: form1.receivedGoldWeight,
            receivedAmount: form1.receivedAmount,
            particulars: form1.particulars
        }

        console.log(token)
        axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/delivery/editdelivery/${form1._id}`, params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                toast.success(res.data.message)
                setCenteredModal(false)
                deliverydata()
                // navigate("/drawing")

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

    const handleSubmit1 = (e) => {
        e.preventDefault()
        addOrders1()
    }


    const cadtada1 = (data) => {
        setCenteredModal1(true)
        setform1(data)
        // seteditdata1({ value: data.employeeId, label: data.employeeName })
    }
    // const cadtada2 = (data) => {
    //     setCenteredModal2(true)
    //     setform2(data)
    //     // seteditdata1({ value: data.employeeId, label: data.employeeName })
    // }

    const delOrders = () => {
        const token = datas
        const dataid = form1._id
        axios.delete(`http://103.186.185.77:5023/omsanthoshjewellery/admin/delivery/deletedelivery/${dataid}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                toast.success(res.data.message)
                setCenteredModal1(false)
                deliverydata()
                // navigate("/drawing")

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

    const addOrders2 = () => {
        const token = datas
        const params = {
            submittedDate: form2.submittedDate,
            balanceGoldWeight: form2.balanceGoldWeight,
            balanceAmount: form2.balanceAmount,
            particulars: form2.particulars,
            balance: balamount
        }

        console.log(token)
        axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/delivery/updateBalance/${form2._id}`, params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                toast.success(res.data.message)
                setCenteredModal2(false)
                deliverydata()
                // navigate("/drawing")

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

    const handleSubmit2 = (e) => {
        e.preventDefault()
        addOrders2()
    }

    const cadtada = (data) => {
        setform1(data)
        setCenteredModal(true)
        setselectedMulti1({ value: data.customerId, label: data.customerName })
        setnettd(data.goldWeight)
        settotamount(data.amount)
        setbalamount(data.balance)
        // seteditdata1({ value: data.employeeId, label: data.employeeName })
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
            a.href = canvas.toDataURL()
            a.click()
        })
    }

    const [listPerPage] = useState(10)
    const [pageNumber, setPageNumber] = useState(0)

    const pagesVisited = pageNumber * listPerPage
    const lists = deli.slice(pagesVisited, pagesVisited + listPerPage)
    const pageCount = Math.ceil(deli.length / listPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <BreadCrumbsPage data={[{ title: "Transfer Stock" }]} />

                {/* <Nav style={{width:'100%'}}/> */}

                {show ? (
                    <Card className="mt-1">
                        <CardBody>
                            <Form onSubmit={(e) => { handleSubmit(e) }}>
                                <h5>Add Transfer Stock</h5>
                                <Row className="mb-1 mt-2">

                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Date : <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                            required
                                            min={new Date().toISOString().split("T")[0]}
                                            type="date" onChange={(e) => handleChange(e)} placeholder="Enter date" name="submittedDate" />
                                    </Col>

                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Customers : <span className="text-danger">*</span>
                                        </Label>
                                        <Select
                                            name="employeeId"
                                            value={selectedMulti1}
                                            onChange={handleMulti}
                                            options={empid}
                                            required
                                        />
                                    </Col>

                                    {/* <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Particulars : <span className="text-danger">*</span>
                                        </Label>
                                        <Input required onChange={(e) => handleChange(e)} name="particulars" type="text" placeholder="Particulars " />
                                    </Col> */}

                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Sales Order No : <span className="text-danger">*</span>
                                        </Label>
                                        <Select
                                            value={selectedMulti}
                                            onChange={handleMulti1}
                                            required
                                            name="orderId"
                                         options={ordrid} />
                                    </Col>

                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Gold Weight : <span className="text-danger">*</span>
                                        </Label>
                                        <Input required name="goldWeigh" value={nettd} type="text" placeholder="Gold Weight" />
                                    </Col>

                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Amount : <span className="text-danger">*</span>
                                        </Label>
                                        <Input required name="amount" value={totamount} type="text" placeholder=" Amount" />
                                    </Col>

                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                           Return Customers : <span className="text-danger">*</span>
                                        </Label>
                                        <Select
                                            name="employeeId"
                                            value={selectedMulti1}
                                            onChange={handleMulti}
                                            options={empid}
                                            required
                                        />
                                    </Col>

                                    {/* <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Received Gold Weight :
                                        </Label>
                                        <Input onChange={(e) => handleChange(e)} name="receivedGoldWeight" type="text" placeholder="Total Gold Weight" />
                                    </Col>
                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Received Amount : <span className="text-danger">*</span>
                                        </Label>
                                        <Input required onChange={(e) => handleChange1(e)} name="receivedAmount" type="text" placeholder="Received Amount" />
                                    </Col>

                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Balance : <span className="text-danger">*</span>
                                        </Label>
                                        <Input required value={balamount} name="balance" disabled type="text" placeholder="Balance Amount" />
                                    </Col> */}

                                </Row>
                                <Row style={{ float: "right" }}>
                                    <Col>
                                        {/* <Link to={"/drawing"}> */}
                                        <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                                            Submit <ArrowRightCircle className='font-medium-2 pl-1' />
                                        </Button>
                                        {/* </Link> */}
                                        {/* <Link to={"/drawing"}> */}
                                        <Button onClick={() => { setshow(!show) }} outline size="sm" className="me-1 mt-1" color="danger" type="button">
                                            <X className='font-medium-2 pl-1' /> Cancel
                                        </Button>
                                        {/* </Link> */}

                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                ) : (
                    ""
                )}

                {access.orderrep === true || adrole === "admin" ? (
                    <Row>
                        <Col sm='12'>
                            <Card>
                                <div>
                                    <Button onClick={() => { setshow(!show) }} className="m-1 btn-sm" color="info">
                                        Add <i class="fa fa-plus-circle" aria-hidden="true"></i>
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

                                            <tr className='text-center text-danger'>
                                                <th>
                                                    Sno
                                                </th>
                                                <th>
                                                    Customer Name
                                                </th>
                                                <th>
                                                  Return Customer Name
                                                </th>
                                                <th>
                                                Sales Order No
                                                </th>

                                                <th>
                                                    Gold Weight
                                                </th>
                                                <th>
                                                    Amount
                                                </th>
                                               
                                                <th>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center'>
                                            {lists.map((data, key) => (
                                                <tr key={key}>
                                                    <td>
                                                        <Moment format="DD/MM/YYYY">
                                                            {data.submittedDate}
                                                        </Moment>
                                                    </td>
                                                    <td>{data.customerName}</td>
                                                    <td>senkar</td>
                                                    <td>OSJ00000002</td>
                                                    <td>{data.goldWeight}</td>
                                                    <td>{data.amount}</td>
                                                    {/* <td>{data.receivedGoldWeight}</td>
                                                    <td>{data.receivedAmount}</td>
                                                    <td>{data.balance}</td> */}

                                                    <td>
                                                        <Button style={{ margin: "5px" }} onClick={() => { cadtada(data) }} size="sm" outline color="success"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                                                        {/* <Button style={{ margin: "5px" }} onClick={() => { cadtada2(data) }} size="sm" outline color="warning"> <i class="fa fa-telegram" aria-hidden="true"></i></Button> */}
                                                        <Button style={{ margin: "5px" }} onClick={() => { cadtada1(data) }} size="sm" outline color="danger"> <i class="fa fa-trash-o" aria-hidden="true"></i></Button>
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

                <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Edit Transfer Stock</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => { handleSubmit1(e) }}>
                            <Row className="mb-1">

                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Date : <span className="text-danger">*</span>
                                    </Label>
                                    <Input
                                        required
                                        value={form1.submittedDate}
                                        min={new Date().toISOString().split("T")[0]}
                                        type="date" onChange={(e) => handleChange2(e)} placeholder="Enter date" name="submittedDate" />
                                </Col>

                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Customers : <span className="text-danger">*</span>
                                    </Label>
                                    <Select
                                        name="employeeId"
                                        value={selectedMulti1}
                                        onChange={handleMulti}
                                        options={empid}
                                        required
                                    />
                                </Col>

                                <Col sm="6">
                                        <Label for="name" style={{ color: "black" }}>
                                            Sales Order No : <span className="text-danger">*</span>
                                        </Label>
                                        <Select
                                            value={selectedMulti}
                                            onChange={handleMulti1}
                                            required
                                            name="orderId"
                                             options={ordrid} />
                                    </Col>

                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Gold Weight : <span className="text-danger">*</span>
                                    </Label>
                                    <Input name="goldWeigh" value={nettd} type="text" placeholder="Gold Weight" />
                                </Col>

                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Amount : <span className="text-danger">*</span>
                                    </Label>
                                    <Input name="amount" value={totamount} type="text" placeholder=" Amount" />
                                </Col>
                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                       Return Customers : <span className="text-danger">*</span>
                                    </Label>
                                    <Select
                                        name="employeeId"
                                        value={selectedMulti1}
                                        onChange={handleMulti}
                                        options={empid}
                                        required
                                    />
                                </Col>

                                {/* <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Received Gold Weight : <span className="text-danger">*</span>
                                    </Label>
                                    <Input value={form1.receivedGoldWeight} onChange={(e) => handleChange2(e)} name="receivedGoldWeight" type="text" placeholder="Total Gold Weight" />
                                </Col>
                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Received Amount : <span className="text-danger">*</span>
                                    </Label>
                                    <Input value={form1.receivedAmount} onChange={(e) => handleChange3(e)} name="receivedAmount" type="text" placeholder="Received Amount" />
                                </Col>

                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Balance : <span className="text-danger">*</span>
                                    </Label>
                                    <Input value={balamount} name="balance" disabled type="text" placeholder="Balance Amount" />
                                </Col> */}


                            </Row>
                            <Row style={{ float: "right" }}>
                                <Col>
                                    {/* <Link to={"/drawing"}> */}
                                    <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                                        Submit <ArrowRightCircle className='font-medium-2 pl-1' />
                                    </Button>
                                    {/* </Link> */}
                                    {/* <Link to={"/drawing"}> */}
                                    <Button onClick={() => { setCenteredModal(!centeredModal) }} outline size="sm" className="me-1 mt-1" color="danger" type="button">
                                        <X className='font-medium-2 pl-1' /> Cancel
                                    </Button>
                                    {/* </Link> */}

                                </Col>
                            </Row>
                        </Form>

                    </ModalBody>

                </Modal>

                <Modal size="sm" isOpen={centeredModal2} toggle={() => setCenteredModal2(!centeredModal)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setCenteredModal2(!centeredModal2)}>Balance Detials</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => { handleSubmit2(e) }}>
                            <Row className="mb-1">
                                <p>Balance Amount :  {form2.balance}</p>

                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Date : <span className="text-danger">*</span>
                                    </Label>
                                    <Input
                                        required
                                        // value={form1.submittedDate}x
                                        min={new Date().toISOString().split("T")[0]}
                                        type="date" onChange={(e) => handleChange4(e)} placeholder="Enter date" name="submittedDate" />
                                </Col>


                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Particulars : <span className="text-danger">*</span>
                                    </Label>
                                    <Input required onChange={(e) => handleChange4(e)} name="particulars" type="text" placeholder="Particulars" />
                                </Col>
                                

                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Gold Weight : <span className="text-danger">*</span>
                                    </Label>
                                    <Input  onChange={(e) => handleChange4(e)} name="balanceGoldWeight"  type="text" placeholder="Gold Weight" />
                                </Col>

                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Amount : <span className="text-danger">*</span>
                                    </Label>
                                    <Input max={form2.balance} onChange={(e) => handleChange5(e)} name="amoubalanceAmountnt"  type="number" placeholder=" Amount" />
                                </Col>
                                <Col sm="6">
                                    <Label for="name" style={{ color: "black" }}>
                                        Balance : <span className="text-danger">*</span>
                                    </Label>
                                    <Input value={balamount} name="balance" disabled type="text" placeholder="Balance Amount" />
                                </Col>


                            </Row>
                            <Row style={{ float: "right" }}>
                                <Col>
                                    {/* <Link to={"/drawing"}> */}
                                    <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                                        Submit <ArrowRightCircle className='font-medium-2 pl-1' />
                                    </Button>
                                    {/* </Link> */}
                                    {/* <Link to={"/drawing"}> */}
                                    <Button onClick={() => { setCenteredModal2(!centeredModal2) }} outline size="sm" className="me-1 mt-1" color="danger" type="button">
                                        <X className='font-medium-2 pl-1' /> Cancel
                                    </Button>
                                    {/* </Link> */}

                                </Col>
                            </Row>
                        </Form>

                    </ModalBody>

                </Modal>

                <Modal size="sm" isOpen={centeredModal1} toggle={centeredModal1}>
                    {/* <ModalHeader toggle={toggle}></ModalHeader> */}
                    <ModalBody>
                        <div>
                            <div className="text-center">
                                <img style={{ width: "280px" }} src={trash} />
                            </div>
                            <h5 className="text-center">Do you want delete</h5>
                            <div className="text-end mt-2">
                                <Button type="button" onClick={() => { delOrders() }} color="danger m-1" outline>Yes <i className="bx bx-check-circle"></i></Button>
                                <Button type="button" onClick={() => { setCenteredModal1(!centeredModal1) }} color="secondary m-1" outline>Cancel <i className="bx bx-x-circle"></i></Button>

                            </div>
                        </div>

                    </ModalBody>

                </Modal>

            </div>
        </Fragment>
    )
}
export default Transferstock
