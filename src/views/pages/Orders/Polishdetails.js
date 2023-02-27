// ** React Imports
import { Fragment, useEffect, useState } from "react"

// ** Reactstrap Imports
import { Card, Table, CardBody, Button, Row, Col, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, Label, Form } from 'reactstrap'
import { Check, Briefcase, Plus } from 'react-feather'
// ** Demo Components
// import gold from "../../../assets/images/gold.jpg"
import { Link, useNavigate } from 'react-router-dom'
import Flatpickr from 'react-flatpickr'
import axios from "axios"
import ReactPaginate from 'react-paginate'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import Select from 'react-select'
import toast from 'react-hot-toast'
// ** Custom Components
import ExtensionsHeader from "@components/extensions-header"
import { format } from 'date-fns'
import Moment from 'react-moment'
// import gold from "../../../assets/images/gold.jpg"

// import gold6 from "../../../assets/images/gold6.jpg"
// import gold5 from "../../../assets/images/gold5.jpg"
// import gold from "../../../assets/images/gold.jpg"

const Casting = () => {

  const [centeredModal, setCenteredModal] = useState(false)
  // const [picker, setPicker] = useState(new Date())
  // const [picker, setPicker] = useState(new Date())
  const [show, setshow] = useState(false)
  const [forms, setforms] = useState([])
  const [ordr, setordr] = useState([])
  const [ordr1, setordr1] = useState([])
  const [customer, setcustomer] = useState([])
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  const adrole = data1.role
  const access = data1.rolesPermissions
  console.log(datas)
  const [forms1, setforms1] = useState([])
  // const [items, setitems] = useState([])

  const handleChange = (e) => {
    const myUser = { ...forms1 }
    myUser[e.target.name] = e.target.value
    setforms1(myUser)
  }

  const [selectedMulti1, setselectedMulti1] = useState({ label: forms1.employeeName, value: forms1.employeeId })
  console.log(selectedMulti1)
  function handleMulti(data) {
    setselectedMulti1(data)

  }

  // const [selectedMulti, setselectedMulti] = useState({ label: forms1.orderNo, value: forms1.orderId })
  // function handleMulti1(data) {
  //   setselectedMulti(data)
  //   setitems(data.itemName)
  // }

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
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/filterWithDates", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.twoDatesData)
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
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/polish1ststage/getallpendingpolish1ststage",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.polish1stStageResult)
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
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/polish1ststage/getorders",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr1(res.data.orderData)
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
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/polish1ststage/getemployee",
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
    { value: data._id, label: data.orderNo, purity: data.itemPurity, itemName: data.itemNameMulti }
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
    axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/polish1ststage/getpolish1ststagebysearch?searchQuery=${e.target.value}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.polish1data)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const Addcasting = () => {
    const token = datas
    const docsid = forms1._id
    const params = {
      submittedDate: forms1.submittedDate,
      employeeId: selectedMulti1.value,
      orderId: forms1.orderId,
      itemId: forms1.itemId,
      purity: forms1.purity,
      issuedGold: forms1.issuedGold
    }
    console.log(token)
    axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/polish1ststage/editpolish1stissued/${docsid}`, params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setCenteredModal(false)
        toast.success(res.data.message)
        actiordrs()
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
    Addcasting()
  }

  const navigate = useNavigate()

  const getonemmber = (data) => {
    sessionStorage.setItem("pols1id", data._id)
    sessionStorage.setItem("ordobid3", data.orderId)
    sessionStorage.setItem("pols1item", data.itemName)
    navigate("/stage3")
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
    // setselectedMulti({ value: data.orderId, label: data.orderNo })
    setselectedMulti1({ value: data.employeeId, label: data.employeeName })
  }

  return (
    <Fragment >
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <ExtensionsHeader title="Polish 1st Stage Details" />


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
                <Link to="/Addpolish"> <Button className="m-1" color="primary">
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>  Add
                </Button></Link>
              ) : (
                ""
              )}
              {access.orderEdit === true || adrole === "admin" ? (
                <Link to="/polish1stres"> <Button className="m-1" color="warning">
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
                    ITEM
                  </th>
                  <th>
                    PURITY
                  </th>
                  <th  >
                    KARIGAR NAME
                  </th>
                  <th  >
                    Gold out
                  </th>
                  <th  >
                    Status
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
                      <Moment format="DD/MM/YYYY">{data.submittedDate}</Moment>
                    </td>
                    <td>
                      {data.orderNo}
                    </td>
                    <td>
                      {data.itemName}
                    </td>
                    <td>
                      {data.purity}K
                    </td>
                    <td>
                      {data.employeeName}
                    </td>
                    <td>
                      {data.issuedGold}
                    </td>
                    <td>
                      {data.status}
                    </td>

                    <td>
                      {/* <Link to="/components/breadcrumbs">  */}
                      {access.orderAdd === true || adrole === "admin" ? (
                        <Button size="sm" style={{ margin: "5px" }}
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
                        <Button size="sm" style={{ margin: "5px" }}
                          onClick={() => {
                            cadtada(data)
                          }}
                          outline color='success'>
                          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
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

        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Edit polish 1st stage</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => { handleSubmit(e) }}>
              <Row className="mb-1">

                <Col className="mt-1" sm="12">
                  <Label for="name" style={{ color: "black" }}>
                    Sales Order No : <span className="text-danger">*</span>
                  </Label>
                  <Input value={forms1.orderNo} />
                  {/* <Select
                    value={selectedMulti}
                    onChange={handleMulti1}
                    required
                    name="orderId"
                    options={ordrid} /> */}
                </Col>

                <Col className="mt-1" sm="12">
                  <Label for="name" style={{ color: "black" }}>
                    Item  : <span className="text-danger">*</span>
                  </Label>
                  <Input value={forms1.itemName} />
                  {/* <select value={forms1.itemId} className="form-select" required onChange={(e) => handleChange(e)} name="itemId">
                    <option value="">Select</option>
                    {items.map((data) => (
                      <option value={data.id}>{data.itemName}</option>
                    ))}
                  </select> */}
                </Col>

                <Col className="mt-1" sm="12">
                  <Label for="name" style={{ color: "black" }}>
                    Date : <span className="text-danger">*</span>
                  </Label>
                  <Input
                    required
                    // max={ordrdate}
                    // min={itemdate}
                    value={forms1.submittedDate}
                    type="date" onChange={(e) => handleChange(e)} placeholder="Enter date" name="submittedDate" />
                </Col>

                <Col className="mt-1" sm="12">
                  <Label for="name" style={{ color: "black" }}>
                    Purity : <span className="text-danger">*</span>
                  </Label>
                  <Input value={forms1.purity} placeholder="Purity" />
                  {/* <option value="">Select</option>
                <option value="18k">18k</option>
                <option value="22k">22k</option>
                <option value="24k">24k</option>
              </select> */}
                </Col>


                <Col className="mt-1" sm="12">
                  <Label for="name" style={{ color: "black" }}>
                    Karigar : <span className="text-danger">*</span>
                  </Label>
                  <Select
                    name="employeeId"
                    value={selectedMulti1}
                    onChange={handleMulti}
                    options={empid}
                    required
                  />
                </Col>

                <Col className="mt-1" sm="12">
                  <Label for="name" style={{ color: "black" }}>
                    Gold Out : <span className="text-danger">*</span>
                  </Label>
                  <Input onChange={(e) => handleChange(e)} required value={forms1.issuedGold} name="issuedGold" type="text" placeholder="Enter Gold Weight" />
                </Col>

              </Row>
              <Row style={{ float: "right" }}>
                <Col>
                  {/* <Link to={"/drawing"}> */}
                  <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                    Submit
                  </Button>
                  {/* </Link> */}
                  <Link to={"/polish-details"}>
                    <Button outline size="sm" className="me-1 mt-1" color="danger" type="button">
                      Cancel
                    </Button></Link>

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
