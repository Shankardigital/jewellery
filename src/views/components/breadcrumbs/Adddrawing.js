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

  console.log(selectedMulti1)
  function handleMulti(data) {
    setselectedMulti1(data)

  }
  const [selectedMulti, setselectedMulti] = useState()
  console.log(selectedMulti)
  function handleMulti1(data) {
    setselectedMulti(data)
  }

  const [ordr, setordr] = useState([])
  const [customer, setcustomer] = useState([])
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  console.log(datas)

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
      // const dataArray = new FormData()
      // const data = {  }
      // console.log(data)

      const params = {
        orderID:selectedMulti,
        employeeId:selectedMulti1.value,
        submittedDate:form.submittedDate
      }

      // dataArray.append("employeeId", selectedMulti1.value)
      // dataArray.append("submittedDate", form.submittedDate)
      // dataArray.append("orderID", {selectedMulti})
    
      // for (let i = 0; i < selectedMulti.length; i++) {
      //   dataArray.append("orderID", selectedMulti[i].value)
      // }

      // "orderID":[

      // ]

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

  return (
    <Fragment>
      <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000">
        <BreadCrumbsPage data={[{ title: "CAD Department" }]} />

     {/* <Nav style={{width:'100%'}}/> */}
 

      <Card className="mt-1">
        <CardHeader>
          <h5>Issued To Drawing</h5>
        </CardHeader>

        <CardBody>
          <Form onSubmit={(e) => { handleSubmit(e) } }>
            <Row className="mb-1">
            <Col sm="3">
              <Label  for="name" style={{ color: "black" }}>
              Date : <span className="text-danger">*</span>
              </Label>
              <Input
              required
              max={new Date().toISOString().split("T")[0]}
              type="date" onChange={ (e) => handleChange(e) } placeholder="Enter date" name="submittedDate" />
              </Col>

               <Col sm="3">
              <Label  for="name" style={{ color: "black" }}>
              Sales Order No : <span className="text-danger">*</span>
              </Label>
              <Select 
                value={selectedMulti}
                onChange = {handleMulti1}
              required
              name="orderID" 
               isMulti options={ordrid} />
              </Col>
             
              <Col sm="3">
              <Label for="name" style={{ color: "black" }}>
               Select Employee : <span className="text-danger">*</span>
              </Label>
              <Select  
               name="employeeId" 
               value={selectedMulti1}
               onChange = {handleMulti}
               options={empid} 
               required
               />
              </Col>
             
            </Row>
            <Row style={{ float: "right" }}>
              <Col>
              {/* <Link to={"/drawing"}> */}
                <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                  Submit <ArrowRightCircle className='font-medium-2 pl-1' />
                </Button> 
                {/* </Link> */}
              <Link to={"/drawing"}>
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
