// ** React Imports
import { Fragment, useState, useEffect } from "react"

// ** Reactstrap Imports
import { Card, CardBody, Table, Button, Row, Col, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, Label, Form } from 'reactstrap'
import { Check, Briefcase, Plus } from 'react-feather'
// ** Demo Components
// import gold from "../../../assets/images/gold.jpg"
import qr from "../../../assets/images/qr.png"
import { Link, useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import axios from "axios"
// ** Custom Components
import ExtensionsHeader from "@components/extensions-header"
import { format } from 'date-fns'
import Flatpickr from 'react-flatpickr'
import Moment from 'react-moment'
// import gold4 from "../../../assets/images/gold4.jpg"
// import gold6 from "../../../assets/images/gold6.jpg"
// import gold5 from "../../../assets/images/gold5.jpg"

const Bandinidetails = () => {

  const [centeredModal, setCenteredModal] = useState(false)
  const [show, setshow] = useState(false)

  const [actitm, setactitm] = useState([])
  const [forms, setforms] = useState([])
  console.log(actitm)

  const datas = localStorage.getItem("accessToken")
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  const adrole = data1.role
  const access = data1.rolesPermissions

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
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/bandini/filterWithDates", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setactitm(res.data.twoDatesData)
        setshow(false)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const activeitems = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/bandini/getallpendingbandini",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setactitm(res.data.bandiniResult)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const custsearch = (e) => {
    const myUser = { ...forms }
    myUser[e.target.name] = e.target.value
    setforms(myUser)

    const token = datas
    console.log(token)
    axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/bandini/getbandinibysearch?searchQuery=${e.target.value}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setactitm(res.data.bandiniFound)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }


  useEffect(() => {
    activeitems()
  }, [])

  const navigate = useNavigate()
  const getonemmber = (data) => {
    sessionStorage.setItem("bandid", data._id)
    sessionStorage.setItem("banditem", data.itemName)
    sessionStorage.setItem("ordobid6", data.orderId)
    navigate("/stage7")
  }
  const getonemmber1 = (data) => {
    sessionStorage.setItem("bandid", data._id)
    sessionStorage.setItem("banditem", data.itemName)
    sessionStorage.setItem("ordobid6", data.orderId)
    navigate("/editbandini")
  }


  const [listPerPage] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = actitm.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(actitm.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <Fragment >
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <ExtensionsHeader title="Bandini Department" />
        {/* <div className='d-flex flex-column align-items-end text-end'>
        <Row>
          <Col md={4}>
            <Input
              defaultValue=''
              id='firstName'
              name='firstName'
              placeholder="search"
            /></Col>
          <Col md={4}>
            <Input id="exampleSelect" type="select" name="CustomesDetails"
              required>
              <option>Select Stage</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
          <Col md={4}>
            <Input
              defaultValue=''
              id='firstName'
              name='firstName'
              type="date"
            /></Col></Row>
      </div> */}

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
                <Link to="/addbandini"> <Button className="m-1" color="primary">
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>  Add
                </Button></Link>
              ) : (
                ""
              )}
              {access.orderEdit === true || adrole === "admin" ? (
                <Link to="/bandinires"> <Button className="m-1" color="warning">
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
                    Sales Order No
                  </th>
                  <th>
                    ITEM
                  </th>
                  <th>
                    Purity
                  </th>
                  <th  >
                    Karigar Name
                  </th>
                  <th  >
                    Out Weight
                  </th>
                  <th  >
                    Stone Out Weight
                  </th>
                  {/* <th >
                  Item
                  </th> */}
                  <th >
                    pieces
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
                      {data.purity}
                    </td>
                    <td>
                      {data.employeeName}
                    </td>
                    <td>
                      {data.outWeight}
                    </td>
                    <td>
                      {data.totalQuantityGmCts}
                    </td>
                    {/* <td>
                  {data.totalItems}
                  </td> */}
                    <td>
                      {data.totalPieces}
                    </td>

                    <td>
                      {/* <Link to="/stage4"> */}
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
                            getonemmber1(data)
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
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Vertically Centered</ModalHeader>
          <ModalBody>
            <div className='d-flex flex-column align-items-center text-center' >
              <img
                width='300'
                alt='user-avatar'
                src={qr}
              /></div>

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

export default Bandinidetails
