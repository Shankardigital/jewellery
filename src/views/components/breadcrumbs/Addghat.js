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
import { useNavigate, Link } from 'react-router-dom'
import Nav from './Nav'
import Select from 'react-select'
import axios from "axios"
import toast from 'react-hot-toast'

// const options = [
//   { value: 'OSJ01', label: 'OSJ 01' },
//   { value: 'OSJ02', label: 'OSJ 02' },
//   { value: 'OSJ03', label: 'OSJ 03' },
//   { value: 'OSJ04', label: 'OSJ 04' },
//   { value: 'OSJ05', label: 'OSJ 05' }
// ]

// const options1 = [
//   { value: 'OSJ01', label: 'OSJ 01' },
//   { value: 'OSJ02', label: 'OSJ 02' },
//   { value: 'OSJ03', label: 'OSJ 03' },
//   { value: 'OSJ04', label: 'OSJ 04' },
//   { value: 'OSJ05', label: 'OSJ 05' }
// ]

const Adddrawing = () => {

  const [form, setform] = useState([])
  // const [picker, setPicker] = useState(new Date())
  console.log(form)
  const navigate = useNavigate()


  const handleChange = (e) => {
    const myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }

  const [selectedMulti1, setselectedMulti1] = useState([])
  const [purity1, setpurity1] = useState([])
  console.log(purity1)
  console.log(selectedMulti1)
  function handleMulti(data) {
    setselectedMulti1(data)

  }
  const [selectedMulti, setselectedMulti] = useState()
const [ordritem, setordritem] = useState([])
const [itemval, setitemval] = useState([])
const [itemdate, setitemdate] = useState([])
const [delvdate, setdelvdate] = useState([])
console.log(delvdate)
const [ordr, setordr] = useState([])
  
const [customer, setcustomer] = useState([])
const gets = localStorage.getItem("userData")
const data1 = JSON.parse(gets)
console.log(data1.fullName)
const datas = localStorage.getItem("accessToken")
console.log(datas)

// const [items1, setitems] = useState([])
  // console.log(ordritem)
  // console.log(selectedMulti.purity)
  function handleMulti1(data) {
    setpurity1(data.purity)
    // setordritem(data.itemName)
    setdelvdate(data.deldat)
    setselectedMulti(data)
    if (selectedMulti && selectedMulti.value !== data.value) {
      setordritem([])
    }
    // setordritem("")
  const token = datas
  const params = {
    orderId:data.value
  }

  console.log(token)
  axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/getorderitemdetils", params,
    {
      headers: { Authorization: `Bearer ${token}` }
    }, {}
  ).then((res) => {
    if (res.status === 200) {
      console.log(res.data)
      setordritem(res.data.itemData)
      
    }
      }).catch(function (error) {
      if (error.response) {
          console.log(error.response.data.message)
          // toast.error(error.response.data.message)
      }
  })
  }

  const actiordrs = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/getorders",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.orderData)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const handleChangewe = (e) => {
    const token = datas
    console.log(token)
    const myUser = { ...form }
    console.log(form)
    myUser[e.target.name] = e.target.value
    setform(myUser)
    const params = {
      orderId:selectedMulti.value,
      id:e.target.value
    }
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/castingitemweight", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data.weightOut)
        setitemval(res.data.weightOut)
        setitemdate(res.data.receivedDate)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            // toast.error(error.response.data.message)
        }
    })

  }


  const activecust = () => {

    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/getemployee",
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
    { value: data._id, label: data.orderNo, purity: data.itemPurity, itemName:data.itemNameMulti, deldat:data.deliveryDate}

  ))
  console.log(ordrid)

  const empid = customer.map((data) => (
    { value: data._id, label: data.fullName }
  ))

  useEffect(() => {
    activecust()
    actiordrs()
    // setordritem([])
  }, [])

  const addOrders = () => {
    const token = datas
    const params = {
      orderId: selectedMulti.value,
      employeeId: selectedMulti1.value,
      submittedDate: form.submittedDate,
      itemId:form.itemId,
      purity: purity1,
      issuedWeight: parseFloat(itemval).toFixed(3)
    }
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/addghatdetails", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        navigate("/ghat-details")

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

  return (
    <Fragment>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <BreadCrumbsPage data={[{ title: "Add Ghat Details" }]} />

        {/* <Nav style={{width:'100%'}}/> */}


        <Card className="mt-1">
          <CardHeader>
            <h5>Issued To Gold Issue (or) Ghat Details</h5>
          </CardHeader>

          <CardBody>
            <Form onSubmit={(e) => { handleSubmit(e) }}>
              <Row className="mb-1">
              
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
                    Item  : <span className="text-danger">*</span>
                  </Label>
                  <select className="form-select" required onChange={(e) => handleChangewe(e)} name="itemId">
                    <option value="">Select</option>
                    {ordritem.map((data) => (
                    <option value={data._id}>{data.itemName}</option>
                    ))}
                    {/* <option value="Chain">Chain</option>
                    <option value="Bangle">Bangle</option> */}
                  </select>
                </Col>

                <Col sm="3">
                  <Label for="name" style={{ color: "black" }}>
                    Date : <span className="text-danger">*</span>
                  </Label>
                  <Input
                  required
                  max={delvdate}
                  min={itemdate}
                    // max={new Date().toISOString().split("T")[0]}
                    type="date" onChange={(e) => handleChange(e)} placeholder="Enter date" name="submittedDate" />
                </Col>

                <Col sm="3">
                  <Label for="name" style={{ color: "black" }}>
                    Purity : <span className="text-danger">*</span>
                  </Label>
                  <Input required value={(purity1)}  type="text" placeholder="Purity" />
                  {/* <select value={ordrid.itemPurity} onChange = {handleMulti1} name="purity" className="form-select">
                <option value="">Select</option>
                <option value="18k">18k</option>
                <option value="22k">22k</option>
                <option value="24k">24k</option>
              </select> */}
                </Col>
                <Col sm="3">
                  <Label for="name" style={{ color: "black" }}>
                    Issued To : <span className="text-danger">*</span>
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
                    Gold Weight : <span className="text-danger">*</span>
                  </Label>
                  <Input value={itemval} name="issuedWeight" type="text" placeholder="Enter Gold Weight" />
                </Col>

              </Row>
              <Row style={{ float: "right" }}>
                <Col>
                  {/* <Link to={"/drawing"}> */}
                  <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                    Submit <ArrowRightCircle className='font-medium-2 pl-1' />
                  </Button>
                  {/* </Link> */}
                  <Link to={"/ghat-details"}>
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
export default Adddrawing
