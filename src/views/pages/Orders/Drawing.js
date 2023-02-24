// ** React Imports
import { Fragment, useEffect, useState } from "react"

// ** Reactstrap Imports
import { Card, Table, CardBody, Button, Row, Col, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, Label, Form } from 'reactstrap'
import { Check, Briefcase, Plus } from 'react-feather'
// ** Demo Components
// import gold from "../../../assets/images/gold.jpg"
// import qr from "../../../assets/images/qr.png"
import { Link, useNavigate } from 'react-router-dom'
import Flatpickr from 'react-flatpickr'
import axios from "axios"
import ReactPaginate from 'react-paginate'
import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Custom Components
import ExtensionsHeader from "@components/extensions-header"
import { format } from 'date-fns'
import Moment from 'react-moment'
import Select from 'react-select'
import toast from 'react-hot-toast'
// import gold from "../../../assets/images/gold.jpg"

// import gold6 from "../../../assets/images/gold6.jpg"
// import gold5 from "../../../assets/images/gold5.jpg"
// import gold from "../../../assets/images/gold.jpg"

const Drawing = () => {

  const [centeredModal, setCenteredModal] = useState(false)
  // const toggle = () => setCenteredModal(!centeredModal)
  // const [picker, setPicker] = useState(new Date())
  // const [picker, setPicker] = useState(new Date())
  const [show, setshow] = useState(false)
  const [forms, setforms] = useState([])
  const [forms1, setforms1] = useState([])
  console.log(forms1)
  const [ordr, setordr] = useState([])
  const [ordr1, setordr1] = useState([])
  console.log(ordr1)
  const [customer, setcustomer] = useState([])
  console.log(customer)
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  const adrole = data1.role
  const access = data1.rolesPermissions
  console.log(datas)

  const [editdata, seteditdata] = useState({ label: forms1.orderNo, value: forms1.orderId })
  const [editdata1, seteditdata1] = useState({ label: forms1.employeeName, value: forms1.employeeId })

  const handleChange = (e) => {
    const myUser = { ...forms1 }
    myUser[e.target.name] = e.target.value
    setforms1(myUser)
  }

  // const [selectedMulti1, setselectedMulti1] = useState([])

  // console.log(selectedMulti1)
  function handleMulti(data) {
    seteditdata1(data)

  }
  // const [selectedMulti, setselectedMulti] = useState()
  // console.log(selectedMulti)
  function handleMulti1(data) {
    seteditdata(data)

  }

  const datess = []

  const convert = (NewDate) => {
    // console.log(NewDate[0])
    const date1 = format(new Date(NewDate[0]), "yyyy-MM-dd")
    const date2 = format(new Date(NewDate[1]), "yyyy-MM-dd")
    datess.push(date1)
    datess.push(date2)
    // if (NewDate === NewDate[1]) {
    // }
    console.log(datess)
  }

  const face = { dates: datess }

  const cadfilter = () => {
    const token = datas
    const params = face
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/filterWithDates", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.result)
        setshow(false)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const actiordrs = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/getallpendingcad",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.cadDrawings)
        // seteditdata(res.data.cadDrawings.orderNo)
        // seteditdata(res.data.cadDrawings.orderId)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const actiordrs123 = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/getorders",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr1(res.data.orderDetails)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

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
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const ordrid = ordr1.map((data) => (
    { value: data._id, label: data.orderNo }
  ))
  console.log(ordrid)

  const empid = customer.map((data) => (
    { value: data._id, label: data.fullName }
  ))


  useEffect(() => {
    actiordrs()
    actiordrs123()
    activecust()
  }, [])

  const custsearch = (e) => {
    const myUser = { ...forms }
    myUser[e.target.name] = e.target.value
    setforms(myUser)

    const token = datas
    console.log(token)
    axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/getcadbysearch?searchQuery=${e.target.value}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.cadDrawings)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const addOrders = () => {
    const token = datas
    const docuid = forms1._id
    const params = {
      orderId: editdata.value,
      employeeId: editdata1.value,
      submittedDate: forms1.submittedDate
    }

    console.log(token)
    axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/editissuedcad/${docuid}`, params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setCenteredModal(false)
        toast.success(res.data.message)
        actiordrs()
        // navigate("/drawing")

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
    addOrders()
  }

  const navigate = useNavigate()

  const getonemmber = (data) => {
    sessionStorage.setItem("cadid", data._id)
    sessionStorage.setItem("ordobid", data.orderId)
    navigate("/components/breadcrumbs")
  }

  const [listPerPage] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)
  const pagesVisited = pageNumber * listPerPage
  const lists = ordr.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(ordr.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const cadtada = (data) => {
    setforms1(data)
    setCenteredModal(true)
    seteditdata({ value: data.orderId, label: data.orderNo })
    seteditdata1({ value: data.employeeId, label: data.employeeName })
  }

  return (
    <Fragment >
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <ExtensionsHeader title="CAD Department" />


        {show ? (
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
        ) : ("")}

        <Row>
          {access.orderView === true || adrole === "admin" ? (
            <Card>
              <div >
                {access.orderAdd === true || adrole === "admin" ? (
                  <Link to="/adddrawing"> <Button className="m-1" color="primary">
                    <i class="fa fa-plus-circle" aria-hidden="true"></i>  Add
                  </Button></Link>
                ) : (
                  ""
                )}
                {access.orderEdit === true || adrole === "admin" ? (
                  <Link to="/cadres"> <Button className="m-1" color="warning">
                    <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i> Received List
                  </Button></Link>
                ) : (
                  ""
                )}

                <Button onClick={() => { setshow(!show) }} className="m-1" style={{ float: "right" }} color="info">
                  <i class="fa fa-filter" aria-hidden="true"></i>  Filter
                </Button>
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
                      Name
                    </th>
                    <th  >
                      Image
                    </th>
                    <th  >
                      Status
                    </th>

                    <th style={{ width: "150px" }}>
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
                      <td> <Moment format="DD/MM/YYYY">{data.submittedDate}</Moment></td>
                      <td>
                        {data.orderNo}
                      </td>
                      <td>
                        {data.employeeName}
                      </td>
                      <td>
                        <img src={`http://103.186.185.77:5023/${data.itemImage}`} style={{ width: "100px" }} />
                      </td>
                      <td>
                        {data.status}
                      </td>

                      <td>
                        {/* <Link to="/components/breadcrumbs">  */}
                        {access.orderAdd === true || adrole === "admin" ? (
                          <Button size="sm"
                            style={{ margin: "5px" }}
                            onClick={() => {
                              getonemmber(data)
                            }}
                            outline color='warning'>
                            <i class="fa fa-location-arrow" aria-hidden="true"></i>
                          </Button>
                        ) : (
                          ""
                        )}
                        {access.orderEdit === true || adrole === "admin" ? (
                          <Button size="sm"
                            onClick={() => {
                              cadtada(data)
                            }}
                            color="success" style={{ margin: "5px" }} outline ><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                          </Button>
                        ) : (
                          ""
                        )}
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
          ) : (
            <Card>
              <h5 className="text-center p-1">You don't have permission to access</h5>
            </Card>
          )}
        </Row>

        <Modal size="sm" isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Edit CAD</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => { handleSubmit(e) }}>
              <Row className="mb-1">
                <Col className="mt-1" sm="12">
                  <Label for="name" style={{ color: "black" }}>
                    Date : <span className="text-danger">*</span>
                  </Label>
                  <Input
                    required
                    max={new Date().toISOString().split("T")[0]}
                    value={forms1.submittedDate}
                    type="date" onChange={(e) => handleChange(e)} placeholder="Enter date" name="submittedDate" />
                </Col>

                <Col className="mt-1" sm="12">
                  <Label for="name" style={{ color: "black" }}>
                    Sales Order No : <span className="text-danger">*</span>
                  </Label>
                  <Select
                    disabled
                    value={editdata}
                    onChange={handleMulti1}
                    required
                    name="orderID"
                    isMulti
                  // options={ordrid}
                  />
                </Col>

                <Col className="mt-1" sm="12">
                  <Label for="name" style={{ color: "black" }}>
                    Select Employee : <span className="text-danger">*</span>
                  </Label>
                  <Select
                    name="employeeId"
                    value={editdata1}
                    onChange={handleMulti}
                    options={empid}
                    required
                  />
                </Col>

              </Row>
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

export default Drawing
