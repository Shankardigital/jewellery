// ** React Imports
import { Fragment, useEffect, useState  } from "react"
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

const BreadCrumbs = () => {

  const navigate = useNavigate()
  const [ordr, setordr] = useState([])
  const [ordr1, setordr1] = useState([])
  // const [ordr12, setordr12] = useState([])
  console.log(ordr)
  const [Files, setFiles] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // const [customer, setcustomer] = useState([])
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  const caid = sessionStorage.getItem("cadid")
  const ordid = sessionStorage.getItem("ordobid")

  const changeHandler = (e) => {
    const file = e.target.files
    console.log(file)
    const ext = file[0].name.split(".").pop()
    const type = ext
    console.log(type)
    if (
      type === "jpg" ||
      type === "jpeg" ||
      type === "png" 
    ) {
      setFiles(e.target.files)
      console.log(e.target.files)
      console.log("e.target.files")
    } else {
      e.target.value = null
      toast.error("file format not supported. Pls choose jpg/jpeg/png")
    }
    // setFiles(e.target.files)
    // profileimg() 
  }

  // const handleChange = (e) => {
  //   const myform = {...ordr}
  //   myform[e.target.name] = e.target.value
  //   setordr(myform)
  // }
  const handleChange1 = (e) => {
    const myform = {...ordr1}
    myform[e.target.name] = e.target.value
    setordr1(myform)
  }

  const actiordrs = () => {
    const docid = ordid
      const token = datas
      axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/getcadbyid/${docid}`,
          {
              headers: { Authorization: `Bearer ${token}` }
          }, {}
      ).then((res) => {
          if (res.status === 200) {
              console.log(res.data)
              setordr(res.data.CadDrawingsData)
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

  const qrdetails = () => {
    const docid = ordid
      const token = datas
      axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/getOrderDetails/${docid}`,
          {
              headers: { Authorization: `Bearer ${token}` }
          }, {}
      ).then((res) => {
          if (res.status === 200) {
              console.log(res.data)
              setordr1(res.data.orderDetails)
              // setordr12(res.data.orderDetails.itemNameMulti)
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
    const docid = caid
      const token = datas
      const dataArray = new FormData()
      dataArray.append("receivedDate", ordr1.receivedDate)
      for (let i = 0; i < Files.length; i++) {
        dataArray.append("uploadImg", Files[i])
      }
      console.log(token)
      axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/drawing/editcaddrawing/${docid}`, dataArray,
          {
              headers: { Authorization: `Bearer ${token}` }
          }, {}
      ).then((res) => {
          if (res.status === 200) {
              console.log(res.data)
              toast.success(res.data.message)
              navigate("/drawing")
              setIsSubmitting(false)
              // setcustomer(res.data.employeeData)
          }
      },
          (error) => {
              if (error.response && error.response.status === 400) {
                  toast.error(error.response.data.message)
                  console.log(error.data.message)
                  setIsSubmitting(false)

              }
          }
      )
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    activecust()
    setIsSubmitting(true)
  }

  useEffect(() => {
    actiordrs()
    qrdetails()
  }, [])
  

  return (
    <Fragment>
      <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000">
        <BreadCrumbsPage data={[{ title: "CAD Department Details" }]} />

     {/* <Nav style={{width:'100%'}}/> */}

      <Card className="mt-1">
        <CardBody>
          <Row>
          <Col md={2}>
            <img className="mt-2"  src={`http://103.186.185.77:5023/${ordr1.itemImage}`} style={{ width: "130px" }} />
          </Col>
          <Col md={8}>
              <h5 className="text-center mb-1">Order Details</h5>

              <div className="text-center justify">
                <Row className="mt-2 ">
                  <Col>
                    <ul className="list-unstyled">
                      <li className="mb-75">
                        <span className=" me-25">Order No: </span>
                        <span>{ordr1.orderNo}</span>
                      </li>
                      <li className="mb-75">
                        <span className=" me-25">Customer Name : </span>
                        <span>{ordr1.customerDetails}</span>
                      </li>
                      {/* <li className="mb-75">
                        <span className="  me-25">Item Name : </span>
                        <span>
                          {ordr12.map((data) => (
                          <span>{data.itemName}, </span>
                        ))} 
                        </span>
                      </li> */}
                      <li className="mb-75">
                        <span className="  me-25">Purity : </span>
                        <span>{ordr1.itemPurity}K </span>
                      </li>

                     
                    </ul>
                  </Col>
                  <Col>
                    <ul className="list-unstyled">
                    <li className="mb-75">
                        <span className="  me-25">Aprox Gold : </span>
                        <span>{ordr1.goldWeight} grams</span>
                      </li>
                      <li className="mb-75">
                        <span className="  me-25">Diamond : </span>
                        <span>{ordr1.itemDimondRangeCarat} cts</span>
                      </li>
                      <li className="mb-75">
                        <span className="  me-25">Stone : </span>
                        <span>{ordr1.itemStoneCarat} cts</span>
                      </li>
                      <li className="mb-75">
                        <span className="  me-25">Remarks : </span>
                        <span>{ordr1.itemSpecialRemarks}</span>
                      </li>
                     
                    </ul>
                  </Col>
                </Row>

              </div>
              {/* <p className='text-center'>The excellent set of cameras offer excellent 
                images as well as capable of recording crisp videos.
                 However, expandable storage and a fingerprint scanner 
                 would have made it a perfect option to go for around this price range.</p> */}
            </Col>
            <Col md={2}>
              <img className="mt-1" src={`http://103.186.185.77:5023/${ordr1.qrcodeImg}`} style={{ width: "130px" }} />
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* <Card className="mt-1">
        <CardHeader>
          <h5>Issued To Drawing</h5>
        </CardHeader>

        <CardBody>
          <Form>
            <Row className="mb-1">
               <Col sm="3">
              <Label  for="name" style={{ color: "black" }}>
              Select Order Ids : <span className="text-danger">*</span>
              </Label>
              <Select required isMulti options={options} />
              </Col>
              <Col sm="3">
              <Label for="name" style={{ color: "black" }}>
               Select Departement : <span className="text-danger">*</span>
              </Label>
                <Input required type="select" name="select" id="select-basic">
                  <option>Select Departement</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Accountant</option>
                  <option>Drawing Jewelley Master</option>
                  <option>Auto Cad Employee</option>
                  <option>Ghat Employee</option>
                  <option>Ghat Polish Employee</option>
                  <option>Setting Preparation Employee</option>
                  <option>Bandini Employee</option>
                  <option>Stones Detail / Bandini Manage Employee </option>
                </Input>
              </Col>
              <Col sm="3">
              <Label for="name" style={{ color: "black" }}>
               Select Name : <span className="text-danger">*</span>
              </Label>
                <Input required type="select" name="select" id="select-basic">
                  <option>Select Name</option>
                  <option>Santosh / 901222222</option>
                  <option>Sameer / 9012222233</option>
                  <option>Shanker / 90122222343</option>
                  <option>Syed / 90162222534</option>
                  <option>Sharath / 96572222</option>
                </Input>
              </Col>
    
            </Row>
            <Row style={{ float: "right" }}>
              <Col>
              <Link to={"/drawing"}>
                <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                  Submit <ArrowRightCircle className='font-medium-2 pl-1' />
                </Button> </Link>
              <Link to={"/drawing"}>
                <Button outline size="sm" className="me-1 mt-1" color="danger" type="button">
                  <X className='font-medium-2 pl-1' /> Cancel
                </Button></Link>
                
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card> */}

      <Card className="mt-1">
        <CardHeader>
          <h5>Drawing</h5>
        </CardHeader>

        <CardBody>
          <Form onSubmit={ (e) => { handlesubmit(e) } }>
            <Row className="mb-1">
            <Col sm="3">
              <Label for="name" style={{ color: "black" }}>
               Date : <span className="text-danger">*</span>
              </Label>
                <Input
                min={ordr1.date}
                max={ordr1.deliveryDate}
                onChange={ (e) => { handleChange1(e) }}
                //  value={ordr.submittedDate}
                  required  type="date" name="receivedDate" id="select-basic" />
              </Col>

            <Col sm="3">
              <Label  for="name" style={{ color: "black" }}>
              Sales Order No : <span className="text-danger">*</span>
              </Label>
              <Input value={ordr.orderNo} required   />
              </Col>
            
              <Col sm="3">
              <Label for="name" style={{ color: "black" }}>
              Employee Name : <span className="text-danger">*</span>
              </Label>
                <Input required value={ordr.employeeName} type="text" name="select" id="select-basic" />
              </Col>
              {/* <Col sm="3">
              <Label for="name" style={{ color: "black" }}>
              Select Status : 
              </Label>
                <Input type="select" name="select" id="select-basic">
                  <option>Select Status</option>
                  <option>Started</option>
                  <option>Completed</option>
                </Input>
              </Col> */}
            <Col sm="3">
            <Label for="name" style={{ color: "black" }}>
              Select Image : <span className="text-danger">*</span>
              </Label>
                <Input onChange={changeHandler}  required type="file" name="uploadImg" id="select-basic" />

                {/* onChange={changeHandler}  required type="file" name="uploadImg" id="select-basic" */}
              </Col>
            </Row>
            <Row style={{ float: "right" }}>
              <Col>
              {/* <Link to={"/drawing"}> */}
                <Button disabled={isSubmitting} outline size="sm" className="me-1 mt-1" color="success" type="submit">
                {isSubmitting ? 'Submitting...' : 'Submit'} <ArrowRightCircle className='font-medium-2 pl-1' />
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
export default BreadCrumbs
