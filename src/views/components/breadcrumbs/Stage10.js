import { Fragment, useEffect, useState   } from "react"
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
import axios from "axios"
import toast from 'react-hot-toast'

function Stage1() {

  const navigate = useNavigate()
  const [ordr, setordr] = useState([])
  const [ordr12, setordr12] = useState([])
  console.log(ordr)
  const [ordr1, setordr1] = useState([])
  // const [forms0, setforms0] = useState([])
  const [forms01, setforms01] = useState([])
  // console.log(ordr)
  // const [Files, setFiles] = useState("")
  // const [customer, setcustomer] = useState([])
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  const caid = sessionStorage.getItem("castid")
  const caitem = sessionStorage.getItem("castitem")
  const ordid = sessionStorage.getItem("ordobid1")

  const handleChange = (e) => {
    const myUser = { ...ordr }
    myUser[e.target.name] = e.target.value
    setordr(myUser)
    // const count = parseFloat(ordr.weightOut) - (parseFloat(ordr.scapIn) + parseFloat(e.target.value))
    // console.log(count)
    // setforms01(count)
  }
  const handleChange0 = (e) => {
    const myUser = { ...ordr }
    myUser[e.target.name] = e.target.value
    setordr(myUser)
    const count = parseFloat(ordr.weightOut) - (parseFloat(ordr.scapIn) + parseFloat(e.target.value))
    console.log(count.toFixed(3))
    setforms01(count.toFixed(3))
  }

  // const handleChange0 = (e) => {
  //   const newadmin = { ...ordr }
  //   newadmin[e.target.name] = e.target.value
  //   setordr1(newadmin)
  //   const count = parseFloat(ordr.weightOut) - (parseFloat(e.target.value) + parseFloat(ordr.scapIn))
  //   console.log(count)
  //   setforms01(count)
  // }

  const handleChange01 = (e) => {
    const newadmin = { ...ordr }
    newadmin[e.target.name] = e.target.value
    setordr(newadmin)
    const count = parseFloat(ordr.weightOut) - (parseFloat(ordr.finishIn) + parseFloat(e.target.value))
    console.log(count.toFixed(3))
    setforms01(count.toFixed(3))
  }

  const actiordrs = () => {
    const token = datas
    // const docid = ordid
    const params = {
      orderId:ordid,
      itemName:caitem
    }
      axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/getcastingbyid`, params,
          {
              headers: { Authorization: `Bearer ${token}` }
          }, {}
      ).then((res) => {
          if (res.status === 200) {
              console.log(res.data)
              setordr(res.data.castResult)
              
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
              setordr12(res.data.orderDetails.itemNameMulti)
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
      const params = {
        id : docid,
        // itemName : caitem,
        receivedDate:ordr.receivedDate,
        weightOut: parseFloat(ordr.weightOut).toFixed(3),
        finishIn: parseFloat(ordr.finishIn).toFixed(3),
        scapIn: parseFloat(ordr.scapIn).toFixed(3),
        loss: parseFloat(forms01).toFixed(3)
      }
      // const dataArray = new FormData()
      // for (let i = 0; i < Files.length; i++) {
      //   dataArray.append("uploadImg", Files[i])
      // }
      console.log(token)
      axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/casting/editcasting`, params,
          {
              headers: { Authorization: `Bearer ${token}` }
          }, {}
      ).then((res) => {
          if (res.status === 200) {
              console.log(res.data)
              toast.success(res.data.message)
              navigate("/casting")
              // setcustomer(res.data.employeeData)
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

  const handlesubmit = (e) => {
    e.preventDefault()
    activecust()
  }

  useEffect(() => {
    actiordrs()
    qrdetails()
  }, [])

  return (
    <div 
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000"  
  ><Fragment>
      
    <BreadCrumbsPage data={[{ title: "Casting Details" }]} />

   {/* <Nav /> */}

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
                      <li className="mb-75">
                        <span className="  me-25">Item Name : </span>
                        <span>
                          {ordr12.map((data) => (
                          <span>{data.itemName}, </span>
                        ))} 
                        </span>
                      </li>
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

     <Card className="mt-1">
        <CardHeader>
          <h5> Casting Details :</h5> 
        </CardHeader>
        <CardBody>
          <Form onSubmit={ (e) => { handlesubmit(e) }}>
            <Row className="mb-1">
            <Col sm="3">
              <Label for="name" style={{ color: "black" }}>
              Date : <span className="text-danger">*</span>
              </Label>
                <Input 
                required
                min={ordr.submittedDate}
                max={ordr1.deliveryDate}
                 onChange={ (e) => { handleChange(e) }}
                  type="date" name="receivedDate" id="select-basic" placeholder="Enter date" className="form-control mb-1"/>
              </Col>

              <Col sm="2">
              <Label for="name" style={{ color: "black" }}>
              Weight Out : <span className="text-danger">*</span>
              </Label>
                <Input value={ordr.weightOut}
                //  onChange={ (e) => { handleChange(e) }}
                  type="text" name="weightOut" id="select-basic" placeholder="Enter Weight Out" className="form-control mb-1"/>
              </Col>
              <Col sm="2">
              <Label for="name" style={{ color: "black" }}>
              Finish In : <span className="text-danger">*</span>
              </Label>
                <Input  required onChange={ (e) => { handleChange0(e) }} type="" name="finishIn" id="select-basic" placeholder="Enter Finish In" className="form-control mb-1"/>
              </Col>
              <Col sm="2">
              <Label for="name" style={{ color: "black" }}>
              Scrap In : <span className="text-danger">*</span>
              </Label>
                <Input required onChange={(e) => { handleChange01(e) }} type="" name="scapIn" id="select-basic" placeholder="Enter Scrap In" className="form-control mb-1"/>
              </Col>

              <Col sm="2">
              <Label for="name" style={{ color: "black" }}>
              Loss : <span className="text-danger">*</span>
              </Label>
                <Input value={forms01}  type="number" name="loss" id="select-basic" placeholder="Enter Loss" className="form-control mb-1"/>
              </Col>
             
            </Row>
            <Row style={{ float: "right" }}>
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
      </Card></Fragment>
</div>
  )
}

export default Stage1