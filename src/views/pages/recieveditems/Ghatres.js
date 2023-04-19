// ** React Imports
import { Fragment, useEffect, useState } from "react"

// ** Reactstrap Imports
import { Card, Table, CardBody, Button, Row, Col, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, Label, Form } from 'reactstrap'
import { Check, Briefcase, Plus } from 'react-feather'
// ** Demo Components
// import gold from "../../../assets/images/gold.jpg"
import { Link } from 'react-router-dom'
import Flatpickr from 'react-flatpickr'
import axios from "axios"
import ReactPaginate from 'react-paginate'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import Select from 'react-select'
import toast from 'react-hot-toast'
// ** Custom Components
import ExtensionsHeader from "@components/extensions-header"
// import { format } from 'date-fns'
import Moment from 'react-moment'
// import gold from "../../../assets/images/gold.jpg"

// import gold6 from "../../../assets/images/gold6.jpg"
// import gold5 from "../../../assets/images/gold5.jpg"
// import gold from "../../../assets/images/gold.jpg"

const Casting = () => {

    const [centeredModal, setCenteredModal] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    // const [picker, setPicker] = useState(new Date())
    // const [picker, setPicker] = useState(new Date())
    //   const [show, setshow] = useState(false)
    const [forms, setforms] = useState([])
    const [ordr, setordr] = useState([])
    //   const [ordr1, setordr1] = useState([])
    //   const [customer, setcustomer] = useState([])
    //   const [items, setitems] = useState([])
    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    console.log(data1.fullName)
    const datas = localStorage.getItem("accessToken")
    console.log(datas)
    const [forms1, setforms1] = useState([])


    const handleChange = (e) => {
        const myUser = { ...forms1 }
        myUser[e.target.name] = e.target.value
        setforms1(myUser)
    }

    //   const [selectedMulti1, setselectedMulti1] = useState({label:forms1.employeeName, value:forms1.employeeId})
    //   console.log(selectedMulti1)
    //   function handleMulti(data) {
    //     setselectedMulti1(data)

    //   }

    //   const [selectedMulti, setselectedMulti] = useState({label:forms1.orderNo, value:forms1.orderId})
    //   function handleMulti1(data) {
    //     setselectedMulti(data)
    //     setitems(data.itemName)
    //   }


    //   const datess = []

    //   const convert = (NewDate) => {
    //     // console.log(NewDate[0])
    //     const date1 = format(new Date(NewDate[0]), "yyyy-MM-dd")
    //     const date2 = format(new Date(NewDate[1]), "yyyy-MM-dd")
    //     datess.push(date1)
    //     datess.push(date2)
    //     // if (NewDate === NewDate[1]) {
    //     // }
    //     console.log(datess)
    //   }

    //   const face = { dates: datess }

    //   const cadfilter = () => {
    //     const token = datas
    //     const params = face
    //     console.log(token)
    //     axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/filterWithDates", params,
    //       {
    //         headers: { Authorization: `Bearer ${token}` }
    //       }, {}
    //     ).then((res) => {
    //       if (res.status === 200) {
    //         console.log(res.data)
    //         setordr(res.data.twoDatesData)
    //         setshow(false)
    //       }
    //     },
    //       (error) => {
    //         if (error.response && error.response.status === 400) {
    //           toast.error(error.response.data.message)
    //           console.log(error.data.message)

    //         }
    //       }
    //     )
    //   }

    const actiordrs = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/getallreceivedghatdetails",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setordr(res.data.ghatDetailsResult)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })

    }


    // const actiordrs123 = () => {
    //   const token = datas
    //   console.log(token)
    //   axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/getorders",
    //       {
    //           headers: { Authorization: `Bearer ${token}` }
    //       }, {}
    //   ).then((res) => {
    //       if (res.status === 200) {
    //           console.log(res.data)
    //           setordr1(res.data.orderDetails)
    //       }
    //   },
    //       (error) => {
    //           if (error.response && error.response.status === 400) {
    //               toast.error(error.response.data.message)
    //               console.log(error.data.message)

    //           }
    //       }
    //   )
    // }

    // const activecust = () => {

    //   const token = datas
    //   console.log(token)
    //   axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/getemployee",
    //       {
    //           headers: { Authorization: `Bearer ${token}` }
    //       }, {}
    //   ).then((res) => {
    //       if (res.status === 200) {
    //           console.log(res.data)
    //           setcustomer(res.data.employeeData)
    //       }
    //   },
    //       (error) => {
    //           if (error.response && error.response.status === 400) {
    //               toast.error(error.response.data.message)
    //               console.log(error.data.message)

    //           }
    //       }
    //   )
    // }

    // const ordrid = ordr1.map((data) => (
    //   { value: data._id, label: data.orderNo, purity: data.itemPurity, itemName: data.itemNameMulti }
    // ))
    // console.log(ordrid)

    const [forms01, setforms01] = useState([])
    const [forms02, setforms02] = useState([])
    // const [totper, settotper] = useState([])

    const handleChange2 = (e) => {
        const myUser = { ...forms1 }
        myUser[e.target.name] = e.target.value
        setforms1(myUser)
        const count = (forms1.receivedWeight * e.target.value) / 100
        console.log(count)
        setforms02(count.toFixed(3))
        const count2 = parseFloat(forms1.issuedWeight) - (parseFloat(forms1.receivedWeight) + parseFloat(count))
        setforms01(count2.toFixed(3))
    }

    const custsearch = (e) => {
        const myUser = { ...forms }
        myUser[e.target.name] = e.target.value
        setforms(myUser)

        const token = datas
        console.log(token)
        axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/receivedghatbysearch?searchQuery=${e.target.value}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setordr(res.data.ghatFound)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })

    }

    //   const navigate = useNavigate()

    //   const getonemmber = (data) => {
    //     sessionStorage.setItem("ghatid", data._id)
    //     sessionStorage.setItem("ordobid2", data.orderId)
    //     sessionStorage.setItem("ghatitem", data.itemName)
    //     navigate("/stage9")
    //   }


    const Addcasting = () => {
        const token = datas
        const docsid = forms1._id
        const params = {
            receivedDate: forms1.receivedDate,
            issuedWeight: parseFloat(forms1.issuedWeight).toFixed(3),
            receivedWeight: parseFloat(forms1.receivedWeight).toFixed(3),
            wastage: parseFloat(forms02).toFixed(3),
            balance: parseFloat(forms01).toFixed(3)
        }
        console.log(token)
        axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/receivededitghat/${docsid}`, params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setCenteredModal(false)
                toast.success(res.data.message)
                actiordrs()
                setIsSubmitting(false)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
                setIsSubmitting(false)
            }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Addcasting()
        setIsSubmitting(true)
    }

    const percent = []
    for (let i = 0; i < 5; i = i + 0.1) {
        percent.push(i.toFixed(1))
        // setpercent(perdata)
        // setpercent(i.toFixed(1))
    }


    const [listPerPage] = useState(10)
    const [pageNumber, setPageNumber] = useState(0)
    const pagesVisited = pageNumber * listPerPage
    const lists = ordr.slice(pagesVisited, pagesVisited + listPerPage)
    const pageCount = Math.ceil(ordr.length / listPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    // const totalper = () => {
        const percentage = forms02 * 100 / forms1.receivedWeight
        // settotper(parseFloat(percentage).toFixed(1))
        console.log(parseFloat(percentage).toFixed(1))
    // }

    const cadtada = (data) => {
       
        setforms1(data)
        setCenteredModal(true)
        setforms02(data.wastage)
        setforms01(data.balance)
    }
    useEffect(() => {
        actiordrs()
        // totalper()
        // actiordrs123()
        // activecust()
    }, [])


    return (
        <Fragment >
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <ExtensionsHeader title="Ghat Detail" />


                {/* {show ? (
          <Card>
            <CardBody>
              <Row>
                <Col md={3}>
                  <Label className='form-label' for='range-picker'>
                    Range
                  </Label>
                  <Flatpickr
                    placeholder="Select date"
                    // value={dates}
                    id='range-picker'
                    className="form-control"
                    onChange={(e) => { convert(e) }}
                    options={{
                      mode: "range",
                      dateFormat: "d, M, Y"
                    }}
                  />
                </Col>
                <Col md="3">
                  <Row style={{ marginTop: "30px" }}>
                    <Col><Button outline onClick={() => { cadfilter() }} size="sm" color="success" >Search <i class="fa fa-search" aria-hidden="true"></i></Button></Col>
                    <Col><Button onClick={() => { setshow(!show) }} outline size="sm" color="danger" >Cancel <i class="fa fa-times-circle-o" aria-hidden="true"></i></Button></Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        ) : ("")} */}

                <Row>
                    <Card>
                        <div >
                            <Link to="/ghat-details"> <Button className="m-1" color="primary">
                                <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>  Back
                            </Button></Link>

                            {/* <Button onClick={() => { setshow(!show) }} className="m-1" style={{ float: "right" }} color="info">
                <i class="fa fa-filter" aria-hidden="true"></i>  Filter
              </Button> */}
                            <Input
                                value={forms.search}
                                onChange={custsearch}
                                style={{ width: "300px", float: "right" }} type="text" placeholder="Search..." className="form-control m-1" />
                        </div>
                        <Table className="mb-4" size='sm' responsive bordered hover>
                            <thead>
                                <tr className='text-center text-danger'>
                                    <th >
                                        S No
                                    </th>
                                    <th style={{ width: "100px" }}>
                                        Date
                                    </th>
                                    <th>
                                        Sales Order Id
                                    </th>
                                    <th>
                                        ITEM
                                    </th>
                                    <th>
                                        PURITY
                                    </th>
                                    <th  >
                                        Gold Weight
                                    </th>
                                    <th  >
                                        Issued To
                                    </th>
                                    <th style={{ width: "140px" }}>
                                        Action
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
                                            <Moment format="DD/MM/YYYY">
                                                {data.receivedDate}
                                            </Moment>

                                        </td>
                                        <td>
                                            {data.orderNo}
                                        </td>
                                        <td>
                                            {data.itemName}
                                        </td>
                                        <td>
                                            {data.purity}k
                                        </td>
                                        <td>
                                            {data.receivedWeight}
                                        </td>
                                        <td>
                                            {data.employeeName}
                                        </td>


                                        <td>
                                            {/* <Link to="/components/breadcrumbs">  */}
                                            {/* <Button
                        onClick={() => {
                          getonemmber(data)
                        }}
                        outline color='warning'>
                        <i class="fa fa-location-arrow" aria-hidden="true"></i>
                      </Button> */}
                                            <Button size="sm"
                                                onClick={() => {
                                                    cadtada(data)
                                                }}
                                                outline color='success'>
                                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            </Button>
                                            {/* </Link> */}
                                        </td>
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
                    </Card>
                </Row>

                <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setCenteredModal(!centeredModal)}> Edit Ghat Details</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => { handleSubmit(e) }}>
                            <Row>
                                <Col md={6}>
                                    <Label>
                                        Sales Order No <span className="text-danger">*</span>
                                    </Label>
                                    <Input required value={forms1.orderNo} type="text" placeholder="Order No">

                                    </Input>
                                </Col>
                                <Col md={6}>
                                    <Label>
                                        Date <span className="text-danger">*</span>
                                    </Label>
                                    <Input required
                                        value={forms1.receivedDate}
                                        onChange={(e) => { handleChange(e) }}
                                          min={forms1.receivedDate}
                                        //   max={ordr1.deliveryDate}
                                        //  value={ordr.submittedDate}
                                        type="date" name="receivedDate" placeholder="Date" className="form-control mb-1" />
                                </Col>
                                <Col md={6}>
                                    <Label>
                                        Received From <span className="text-danger">*</span>
                                    </Label>
                                    <Input required value={forms1.employeeName} id="select-basic" className="form-control mb-1">

                                    </Input>
                                </Col>
                                <Col md={6}>
                                    <Label>
                                        Issued Weight <span className="text-danger">*</span>
                                    </Label>
                                    <Input required name="issuedWeight" value={forms1.issuedWeight}
                                        // onChange={(e) => { handleChange(e) }}
                                        type="text" placeholder="Enter Gold Weight Grams/kgs" className="form-control mb-1" />
                                </Col>
                                <Col md={6}>
                                    <Label>
                                        Received Weight <span className="text-danger">*</span>
                                    </Label>
                                    <Input value={forms1.receivedWeight} required name="receivedWeight" onChange={(e) => { handleChange(e) }} type="text" placeholder="Enter Gold Weight Grams/kgs" className="form-control mb-1" />
                                </Col>
                                <Col md={6}>
                                    <Label>
                                        Percentage <span className="text-danger">*</span>
                                    </Label>
                                    <select
                                        value={(parseFloat(percentage).toFixed(1))}
                                        required
                                        onChange={(e) => handleChange2(e)}
                                        className="form-select"
                                    >
                                        <option value="">Select</option>
                                        {percent.map((x) => (
                                            <option key={x} value={x} selected={x === (parseFloat(percentage).toFixed(1))}>
                                                {x}
                                            </option>
                                        ))}
                                    </select>
                                </Col>
                                <Col md={6}>
                                    <Label>
                                        Wastage <span className="text-danger">*</span>
                                    </Label>
                                    <Input value={forms02} required name="wastage" type="number" placeholder="Wastage" className="form-control mb-1" />
                                </Col>
                                <Col md={6}>
                                    <Label>
                                        Balance <span className="text-danger">*</span>
                                    </Label>
                                    <Input required name="balance" value={forms01} type="text" placeholder="Enter Balance" className="form-control mb-1" />
                                </Col>

                                {/* <Col md={3}>
                <Label>
                  Nett Chura
                </Label>
                <Input type="text" placeholder="Enter Nett Chura" className="form-control  mb-1"  />
              </Col> */}
                            </Row>
                            <Row className="mt-1" style={{ float: "right" }}>
                                <Col>
                                    {/* <Link to={"/ghat-details"}> */}
                                    <Button disabled={isSubmitting} outline size="sm" className="me-1 mt-1" color="success" type="submit">
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </Button>
                                    {/* </Link> */}
                                    {/* <Link to={"/ghat-details"}> */}
                                    <Button onClick={() => { setCenteredModal(false) }} outline size="sm" className="me-1 mt-1" color="danger" type="button">
                                        Cancel
                                    </Button>
                                    {/* </Link> */}

                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
            ok
          </Button>{' '} */}
                    </ModalFooter>
                </Modal>
            </div>
        </Fragment>
    )
}

export default Casting
