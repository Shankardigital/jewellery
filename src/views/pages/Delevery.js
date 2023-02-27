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
// import gold from "../../../assets/images/gold.jpg"
import { ArrowRightCircle, X } from 'react-feather'
import { useNavigate, Link } from 'react-router-dom'
// import Nav from './Nav'
import Select from 'react-select'
import axios from "axios"
import toast from 'react-hot-toast'
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import html2canvas from "html2canvas"
import pdfMake from "pdfmake"


const Adddrawing = () => {

    const [form, setform] = useState([])
    console.log(form)
    const navigate = useNavigate()
    const [show, setshow] = useState(false)
    const [centeredModal, setCenteredModal] = useState(false)

    const [ordr, setordr] = useState([])
    const [customer, setcustomer] = useState([])
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

    const [selectedMulti1, setselectedMulti1] = useState([])

    console.log(selectedMulti1)
    function handleMulti(data) {
        setselectedMulti1(data)

    }
    const [selectedMulti, setselectedMulti] = useState()
    console.log(selectedMulti)
    function handleMulti1(data) {
        setselectedMulti(data)
    }

    const actiordrs = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/getorders",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setordr(res.data.orderDetails)
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
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/getemployee",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.employeeData)
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
        { value: data._id, label: data.orderNo }
    ))

    const empid = customer.map((data) => (
        { value: data._id, label: data.fullName }
    ))

    useEffect(() => {
        activecust()
        actiordrs()
    }, [])

    const addOrders = () => {
        const token = datas
        const params = {
            orderID: selectedMulti,
            employeeId: selectedMulti1.value,
            submittedDate: form.submittedDate
        }

        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/adddrawing", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                toast.success(res.data.message)
                navigate("/drawing")

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


    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <BreadCrumbsPage data={[{ title: "Delevery" }]} />

                {/* <Nav style={{width:'100%'}}/> */}

                {show ? (
                    <Card className="mt-1">
                        <CardBody>
                            <Form onSubmit={(e) => { handleSubmit(e) }}>
                                <Row className="mb-1">
                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Date : <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                            required
                                            max={new Date().toISOString().split("T")[0]}
                                            type="date" onChange={(e) => handleChange(e)} placeholder="Enter date" name="submittedDate" />
                                    </Col>

                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Select Employee : <span className="text-danger">*</span>
                                        </Label>
                                        <Select
                                            name="employeeId"
                                            value={selectedMulti1}
                                            onChange={handleMulti}
                                            options={empid}
                                            required
                                        />
                                    </Col>

                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Sales Order No : <span className="text-danger">*</span>
                                        </Label>
                                        <Select
                                            value={selectedMulti}
                                            onChange={handleMulti1}
                                            required
                                            name="orderID"
                                            isMulti options={ordrid} />
                                    </Col>

                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Amount : <span className="text-danger">*</span>
                                        </Label>
                                        <Input type="text" placeholder="Total Amount" />
                                    </Col>
                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Gold Weight : <span className="text-danger">*</span>
                                        </Label>
                                        <Input type="text" placeholder="Total Amount" />
                                    </Col>

                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Received Amount : <span className="text-danger">*</span>
                                        </Label>
                                        <Input type="text" placeholder="Total Amount" />
                                    </Col>
                                    <Col sm="3">
                                        <Label for="name" style={{ color: "black" }}>
                                            Received Gold Weight : <span className="text-danger">*</span>
                                        </Label>
                                        <Input type="text" placeholder="Total Amount" />
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
                                                    Order No
                                                </th>
                                                <th>
                                                    Gold Weight
                                                </th>
                                                <th>
                                                    Amount
                                                </th>
                                                <th>
                                                    Received Gold Weight
                                                </th>
                                                <th>
                                                    Received Amount
                                                </th>
                                                <th>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center'>
                                            <tr>
                                                <td>26/02/2023</td>
                                                <td>Senkar</td>
                                                <td>osj000056</td>
                                                <td>10.5</td>
                                                <td>100000</td>
                                                <td>2.05</td>
                                                <td>70000</td>
                                                <td>
                                                    <Button onClick={() => { setCenteredModal(!centeredModal) }} size="sm" outline color="success">Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                                                </td>
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

                                    {/* <Col sm='12'>
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
                                    </Col> */}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                ) : (
                    <Card>
                        <h5 className='text-center p-2'>You don't have permission to access</h5>
                    </Card>
                )}

                <Modal size="sm" isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Edit Delivery Detials</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => { handleSubmit(e) }}>
                            <div className="mb-1">
                                <div>
                                    <Label for="name" style={{ color: "black" }}>
                                        Date : <span className="text-danger">*</span>
                                    </Label>
                                    <Input
                                        required
                                        max={new Date().toISOString().split("T")[0]}
                                        type="date" onChange={(e) => handleChange(e)} placeholder="Enter date" name="submittedDate" />
                                </div>

                                <div>
                                    <Label for="name" style={{ color: "black" }}>
                                        Select Employee : <span className="text-danger">*</span>
                                    </Label>
                                    <Select
                                        name="employeeId"
                                        value={selectedMulti1}
                                        onChange={handleMulti}
                                        options={empid}
                                        required
                                    />
                                </div>

                                <div>
                                    <Label for="name" style={{ color: "black" }}>
                                        Sales Order No : <span className="text-danger">*</span>
                                    </Label>
                                    <Select
                                        value={selectedMulti}
                                        onChange={handleMulti1}
                                        required
                                        name="orderID"
                                        isMulti options={ordrid} />
                                </div>

                                <div>
                                    <Label for="name" style={{ color: "black" }}>
                                        Amount : <span className="text-danger">*</span>
                                    </Label>
                                    <Input type="text" placeholder="Total Amount" />
                                </div>
                                <div>
                                    <Label for="name" style={{ color: "black" }}>
                                        Gold Weight : <span className="text-danger">*</span>
                                    </Label>
                                    <Input type="text" placeholder="Total Amount" />
                                </div>

                                <div>
                                    <Label for="name" style={{ color: "black" }}>
                                        Received Amount : <span className="text-danger">*</span>
                                    </Label>
                                    <Input type="text" placeholder="Total Amount" />
                                </div>
                                <div>
                                    <Label for="name" style={{ color: "black" }}>
                                        Received Gold Weight : <span className="text-danger">*</span>
                                    </Label>
                                    <Input type="text" placeholder="Total Amount" />
                                </div>

                            </div>

                            <Row style={{ float: "right" }}>
                                <Col>
                                    {/* <Link to={"/drawing"}> */}
                                    <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                                        Submit
                                    </Button>
                                    {/* </Link> */}
                                    <Button onClick={() => { setCenteredModal(false) }} outline size="sm" className="me-1 mt-1" color="danger" type="button">
                                        Cancel
                                    </Button>

                                </Col>
                            </Row>
                        </Form>

                    </ModalBody>

                </Modal>

            </div>
        </Fragment>
    )
}
export default Adddrawing
