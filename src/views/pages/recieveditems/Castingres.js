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
import Moment from 'react-moment'
import Select from 'react-select'
import toast from 'react-hot-toast'
// ** Custom Components
import ExtensionsHeader from "@components/extensions-header"
// import { format } from 'date-fns'
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
  const [forms1, setforms1] = useState([])
  console.log(forms1)
  const [ordr, setordr] = useState([])
  const [forms01, setforms01] = useState([])
//   const [ordr1, setordr1] = useState([])
//   const [customer, setcustomer] = useState([])
//   const [items, setitems] = useState([])

  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  console.log(datas)


  const handleChange = (e) => {
    const myUser = { ...forms1 }
    myUser[e.target.name] = e.target.value
    setforms1(myUser)
  }

  const handleChange0 = (e) => {
    const myUser = { ...forms1 }
    myUser[e.target.name] = e.target.value
    setforms1(myUser)
    const count = parseFloat(forms1.weightOut) - (parseFloat(forms1.scapIn) + parseFloat(e.target.value))
    console.log(count.toFixed(3))
    setforms01(count.toFixed(3))
  }

  const handleChange01 = (e) => {
    const newadmin = { ...forms1 }
    newadmin[e.target.name] = e.target.value
    setforms1(newadmin)
    const count = parseFloat(forms1.weightOut) - (parseFloat(forms1.finishIn) + parseFloat(e.target.value))
    console.log(count.toFixed(3))
    setforms01(count.toFixed(3))
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
//       // }
//     console.log(datess)
//   }
  
//   const face = { dates: datess}

//   const cadfilter = () => {
//     const token = datas
//     const params = face
//     console.log(token)
//     axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/filterWithDates", params,
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
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/getallreceivedcasting",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.castingResult)
        
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

//   const actiordrs123 = () => {
//     const token = datas
//     console.log(token)
//     axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/getorders",
//       {
//         headers: { Authorization: `Bearer ${token}` }
//       }, {}
//     ).then((res) => {
//       if (res.status === 200) {
//         console.log(res.data)
//         setordr1(res.data.orderData)
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


//   const activecust = () => {
//     const token = datas
//     console.log(token)
//     axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/getemployee",
//       {
//         headers: { Authorization: `Bearer ${token}` }
//       }, {}
//     ).then((res) => {
//       if (res.status === 200) {
//         console.log(res.data)
//         setcustomer(res.data.employeeData)
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

//   const ordrid = ordr1.map((data) => (
//     { value: data._id, label: data.orderNo, purity: data.itemPurity, itemName: data.itemNameMulti }
//   ))
//   console.log(ordrid)

//   const empid = customer.map((data) => (
//     { value: data._id, label: data.fullName }
//   ))

  useEffect(() => {
    actiordrs()
    // actiordrs123()
    // activecust()
  }, [])

  const custsearch = (e) => {
    const myUser = { ...forms }
    myUser[e.target.name] = e.target.value
    setforms(myUser)

    const token = datas
    console.log(token)
    axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/receivedcastingsearch?searchQuery=${e.target.value}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.castingFound)
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
        receivedDate:forms1.receivedDate,
        weightOut: parseFloat(forms1.weightOut).toFixed(3),
        finishIn: parseFloat(forms1.finishIn).toFixed(3),
        scapIn: parseFloat(forms1.scapIn).toFixed(3),
        loss: parseFloat(forms01).toFixed(3)
    }
    console.log(token)
    axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/editreceivedcasting/${docsid}`, params,
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

  const castsubmit = (e) => {
    e.preventDefault()
    Addcasting()
  }


//   const navigate = useNavigate()

//   const getonemmber = (data) => {
//     sessionStorage.setItem("castid", data._id)
//     sessionStorage.setItem("castitem", data.itemName)
//     sessionStorage.setItem("ordobid1", data.orderId)
//     navigate("/stage10")
//   }

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
    setforms01(data.loss)
    // setselectedMulti({value:data.orderId, label: data.orderNo})
    // setselectedMulti1({value:data.employeeId, label: data.employeeName})
  }


  return (
    <Fragment >
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <ExtensionsHeader title="Casting Received list" />


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
                    <Col><Button outline onClick={ () => { cadfilter() }} size="sm" color="success" >Search <i class="fa fa-search" aria-hidden="true"></i></Button></Col>
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
            <Link to="/casting"> <Button className="m-1" color="primary">
              <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>  Back
              </Button></Link>

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
                    Karigar
                  </th>
                  <th>
                  PURITY
                  </th>
                  <th  >
                 Finish In
                  </th>
                  {/* <th  >
                  FINISH IN
                  </th>
                  <th  >
                  SCRAP IN
                  </th>
                  <th  >
                  LOSS
                  </th> */}

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
                    <Moment format="DD/MM/YYYY">{data.receivedDate}</Moment>
                     
                    </td>
                    <td>
                      {data.orderNo}
                    </td>
                    <td>
                      {data.itemName}
                    </td>
                    <td>
                      {data.employeeName}
                    </td>
                    <td>
                      {data.purity}k
                    </td>
                    <td>
                      {data.finishIn}
                    </td>
                    <td>
                      {/* <Button size="sm"
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
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Edit Casting Received </ModalHeader>
          <ModalBody>

          <Form onSubmit={ (e) => { castsubmit(e) }}>
            <Row className="mb-1">
            <Col sm="12">
              <Label for="name" style={{ color: "black" }}>
              Date : <span className="text-danger">*</span>
              </Label>
                <Input 
                required
                value={forms1.receivedDate}
                // min={ordr.submittedDate}
                // max={ordr1.deliveryDate}
                 onChange={ (e) => { handleChange(e) }}
                  type="date" name="receivedDate" id="select-basic" placeholder="Enter date" className="form-control mb-1"/>
              </Col>

              <Col sm="12">
              <Label for="name" style={{ color: "black" }}>
              Weight Out : <span className="text-danger">*</span>
              </Label>
                <Input value={forms1.weightOut}
                //  onChange={ (e) => { handleChange(e) }}
                  type="text" name="weightOut" id="select-basic" placeholder="Enter Weight Out" className="form-control mb-1"/>
              </Col>
              <Col sm="12">
              <Label for="name" style={{ color: "black" }}>
              Finish In : <span className="text-danger">*</span>
              </Label>
                <Input  value={forms1.finishIn} required onChange={ (e) => { handleChange0(e) }} type="" name="finishIn" id="select-basic" placeholder="Enter Finish In" className="form-control mb-1"/>
              </Col>
              <Col sm="12">
              <Label for="name" style={{ color: "black" }}>
              Scrap In : <span className="text-danger">*</span>
              </Label>
                <Input required  value={forms1.scapIn} onChange={(e) => { handleChange01(e) }} type="" name="scapIn" id="select-basic" placeholder="Enter Scrap In" className="form-control mb-1"/>
              </Col>

              <Col sm="12">
              <Label for="name" style={{ color: "black" }}>
              Loss : <span className="text-danger">*</span>
              </Label>
                <Input value={forms01} onChange={ (e) => { handleChange(e) }} type="number" name="loss" id="select-basic" placeholder="Enter Loss" className="form-control mb-1"/>
              </Col>
             
            </Row>
            <Row style={{ float: "right" }}>
              <Col>
              {/* <Link to={"/casting"}> */}
                <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                  Submit 
                </Button>
                {/* </Link> */}
              {/* <Link to={"/casting"}> */}
                <Button onClick={() => { setCenteredModal(false) }} outline size="sm" className="me-1 mt-1" color="danger" type="button">
                   Cancel
                </Button>
                {/* </Link> */}
                
              </Col>
            </Row>
          </Form>
         
          </ModalBody>
        </Modal>
      </div>
    </Fragment>
  )
}

export default Casting
