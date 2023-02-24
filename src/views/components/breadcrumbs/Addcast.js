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
import { Link, useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Select from 'react-select'
import axios from "axios"
import toast from 'react-hot-toast'
// import { data } from "jquery"

// const options = [
//   { value: 'OSJ01', label: '01 PKt' },
//   { value: 'OSJ02', label: '02 PKt' },
//   { value: 'OSJ03', label: ' 03 PKt' },
//   { value: 'OSJ04', label: ' 04 PKt' },
//   { value: 'OSJ05', label: ' 05 PKt' }
// ]

const Addsetting = () => {

  // const [formValues, setFormValues] = useState([{ orderId: "", purity: "", weightOut: "", finishIn: "", scapIn: "", loss: "" }])
  const [form, setform] = useState([])

  // const handleChange = (i, e) => {
  //   const newFormValues = [...formValues]
  //   newFormValues[i][e.target.name] = e.target.value
  //   setFormValues(newFormValues)
  // }

  // const addFormFields = () => {
  //   setFormValues([...formValues, { orderId: "", purity: "", weightOut: "", finishIn: "", scapIn: "", loss: "" }])
  // }

  // const removeFormFields = (i) => {
  //   const newFormValues = [...formValues]
  //   newFormValues.splice(i, 1)
  //   setFormValues(newFormValues)
  // }

  // const [zzz, setzzz] = useState([])
  // console.log(zzz)
  const navigate = useNavigate()
  const [inputList, setInputList] = useState([{ orderId: "", purity: "", weightOut: "", itemNameMulti: [] }])

  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
    console.log(index)

  }

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }


  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { orderId: "", purity: "", weightOut: "", itemNameMulti: [] }])
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   alert(JSON.stringify(formValues))
  // }

  // const [form, setform] = useState([])
  // console.log(form)

  // const handleSubmit1 = (e) => {
  //     e.preventDefault()
  // }
  const handleChange1 = (e) => {
    const myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }


  const [ordr, setordr] = useState([])
  const [orders, setorders] = useState([])
  //const [purity1, setpurity1] = useState([])
  const [customer, setcustomer] = useState([])
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  console.log(datas)

  const [selectedMulti1, setselectedMulti1] = useState([])

  console.log(selectedMulti1)
  function handleMulti(data) {

    setselectedMulti1(data)
  }

  const [itemdate, setitemdate] = useState([])
  const [ites, setites] = useState([])
  const [ordrdate, setordrdate] = useState([])
  console.log(ordrdate)
  const [selectedMulti, setselectedMulti] = useState()
  // console.log(selectitem)
  console.log(selectedMulti)
  function handleMulti1(data, i) {
    console.log(data)
    setitemdate(data.caddate)
    setordrdate(data.ordrdate)
    inputList[i]['purity'] = data.purity
    inputList[i]['itemNameMulti'] = data.itemName
    console.log(inputList)
    //setpurity1(data.purity)
    const set = [...orders, data]
    setselectedMulti(data)
    // setselectitem(data)
    setorders(set)

    const token = datas
    const params = {
      orderId:data.value
    }
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/getorderitems", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setites(res.data.itemData)
        
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
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/getorders",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.orderData)
        // setitemdate(res.data.orderData.cadReceivedDate)  
        // setordrdate(res.data.orderData.orderDeliveryDate)
        
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
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/getemployee",
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

  const ordrid = ordr.map((data) => (
    { value: data._id, label: data.orderNo, purity: data.itemPurity, caddate:data.cadReceivedDate, ordrdate:data.orderDeliveryDate }
  ))
  // setselectitem(ordrid.itemName)
  console.log(ordrid)

  const empid = customer.map((data) => (
    { value: data._id, label: data.fullName }
  ))

  useEffect(() => {
    activecust()
    actiordrs()
  }, [])

  const Addcasting = () => {
    const token = datas
    //const data=[]
    const data = inputList.map((x, i) => (
      {
        orderId: orders[i]["value"],
        purity: orders[i]["purity"],
        itemId: x.itemId,
        weightOut: parseFloat(x.weightOut).toFixed(3)
        //  finishIn : x.finishIn,
        //  scapIn : x.scapIn, 
        //  loss : x.loss 
      }
    ))

    const params = {
      submittedDate: form.submittedDate,
      employeeId: selectedMulti1.value,
      castingDetails: data
      //  purity: inputList.purity,
      //  weightOut: inputList.weightOut,
      //  finishIn: inputList.finishIn,
      //  scapIn: inputList.scapIn,
      //  loss: inputList.loss

    }
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/addcasting", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        navigate("/casting")
        // setcustomer(res.data.employeeData)
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

  return (
    <Fragment>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <BreadCrumbsPage data={[{ title: "Add Casting" }]} />

        <Card className="mt-1">
          <CardHeader>
            <h5>Issued To Casting Details </h5>
          </CardHeader>
          <CardBody>
            <Form onSubmit={(e) => { castsubmit(e) }}>
              <Row>
                <Col md="3">
                  <Label>
                    Date <span className="text-danger">*</span>
                  </Label>
                  <Input
                  required
                  max={ordrdate}
                  min={itemdate}
                    // max={new Date().toISOString().split("T")[0]}
                    name="submittedDate" type="date" placeholder="Enter Date" className="form-control mb-1"
                    onChange={(e) => { handleChange1(e) }}
                  />

                </Col>
                <Col sm="3">
                  <Label for="name" style={{ color: "black" }}>
                    Select Employee : <span className="text-danger">*</span>
                  </Label>
                  <Select
                    name="employeeId"
                    // onChange={ (e) => { handleChange1(e) } }
                    value={selectedMulti1}
                    onChange={handleMulti}
                    options={empid}
                    required
                  />
                </Col>
                {inputList.map((x, i) => {
                  return (
                    <div className="box row">
                      <Col md={3}>
                        <Label for="name" style={{ color: "black" }}>
                          Sales Order No : <span className="text-danger">*</span>
                        </Label>
                        <Select
                          // value={selectedMulti}
                          onChange={e => handleMulti1(e, i)}
                          // defaultValue={{""}}
                          // onChange={handleMulti1}
                          value={ordrid.find(function (ordrid) {
                            return ordrid.value === selectedMulti
                          })}
                          // value={x.orderId}
                          required
                          // classNamePrefix="select"
                          // clearIndicator
                          name="orderID"
                          options={ordrid} />
                      </Col>
                      <Col sm="2">
                        <Label for="name" style={{ color: "black" }}>
                          Item  : <span className="text-danger">*</span>
                        </Label>
                        <select onChange={e => handleInputChange(e, i)} className="form-select" required name="itemId" placeholder="Item" type="text">
                          <option value="">Select</option>
                          {ites.map((data) => (
                            <option value={data._id} >{data.itemName}</option>
                          ))}
                        </select>
                        {/* <Select
                          // value={selectedMulti}
                          onChange={e => handleMulti1(e, i)}
                          // defaultValue={{""}}
                          // onChange={handleMulti1}
                          value={ordrid.find(function (ordrid) {
                            return ordrid.itemName === selectedMulti
                          })}
                          // value={x.orderId}
                          required
                          // classNamePrefix="select"
                          // clearIndicator
                          name="orderID"
                          options={ordrid.itemNam} /> */}
                      </Col>

                      <Col sm="2">
                        <Label for="name" style={{ color: "black" }}>
                          Purity  : <span className="text-danger">*</span>
                        </Label>
                        <Input required name="purity" value={x.purity} placeholder="Purity" type="text" />
                        {/* <option value="">Select</option>
                          <option value="18k">18k</option>
                          <option value="22K">22K</option>
                          <option value="24K">24K</option>
                        </Input> */}
                      </Col>

                      <Col sm="2">
                        <Label for="name" style={{ color: "black" }}>
                          Weight Out:
                        </Label>
                        <Input
                          name="weightOut" required value={x.weightOut} onChange={e => handleInputChange(e, i)}
                          type="text" id="select-basic" placeholder="Enter Weight Out" className="form-control mb-1" />
                      </Col>

                      <Col sm="3" className="mt-2">
                        <div className="btn-box">
                          {inputList.length !== 1 && <button
                            className="mr10 btn btn-danger btn-outline text-end" style={{ float: "right" }}
                            onClick={() => handleRemoveClick(i)}>Remove</button>}
                          {inputList.length - 1 === i && <button className="btn btn-info outline" onClick={handleAddClick}>Add</button>}
                        </div>
                      </Col>

                    </div>
                  )
                })}

              </Row>
              <Row className="mt-1" style={{ float: "right" }}>
                <Col>
                  {/* <Link to={"/casting"}> */}
                  <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                    Submit <ArrowRightCircle className='font-medium-2 pl-1' />
                  </Button>
                  {/* </Link> */}
                  <Link to={"/casting"}>
                    <Button outline size="sm" className="me-1 mt-1" color="danger" type="button">
                      <X className='font-medium-2 pl-1' /> Cancel
                    </Button></Link>

                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>


      </div>
    </Fragment>
  )
}
export default Addsetting
