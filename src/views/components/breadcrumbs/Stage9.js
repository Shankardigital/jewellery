// ** React Imports
import { Fragment, useEffect, useState } from "react"
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
const BreadCrumbs = () => {

  const navigate = useNavigate()
  const [ordr, setordr] = useState([])
  console.log(ordr)
  const [ordr1, setordr1] = useState([])
  const [forms01, setforms01] = useState([])
  const [forms02, setforms02] = useState([])
  console.log(forms02)

  // console.log(ordr)
  // const [Files, setFiles] = useState("")
  // const [customer, setcustomer] = useState([])
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  const caid = sessionStorage.getItem("ghatid")
  const caitem = sessionStorage.getItem("ghatitem")
  const ordid = sessionStorage.getItem("ordobid2")

  const handleChange = (e) => {
    const myUser = { ...ordr }
    myUser[e.target.name] = e.target.value
    setordr(myUser)
    // const count = ordr.issuedWeight - (e.target.value + forms02)
    // console.log(count)
    // setforms01(count)
  }

  const getvalue = ordr.issuedWeight - (parseFloat(ordr.receivedWeights) + parseFloat(ordr.wastages))
  console.log(getvalue)

  const recvalue = (getvalue.toString())
  console.log(recvalue)

  const [errorObject, seterrorObject] = useState({
    finishIn: ""
  })

  const activecust = () => {
    const docid = caid
    const token = datas
    const params = {
      receivedDate: ordr.receivedDate,
      wastage: parseFloat(forms02).toFixed(3),
      issuedWeight: parseFloat(ordr.issuedWeight).toFixed(3),
      receivedWeight: parseFloat(ordr.receivedWeight).toFixed(3),
      balance: parseFloat(forms01).toFixed(3)
    }
    // const dataArray = new FormData()
    // for (let i = 0; i < Files.length; i++) {
    //   dataArray.append("uploadImg", Files[i])
    // }
    console.log(token)
    axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/editghatdetails/${docid}`, params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        navigate("/ghat-details")
        // setcustomer(res.data.employeeData)
      }
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data.message)
        toast.error(error.response.data.message)
      }
    })

  }

  const validateFun = (e) => {
    console.log(e)
    console.log(ordr)
    if (ordr.receivedWeight === "") {
      const error = { ...errorObject }
      error["receivedWeight"] = "Enter valid value"
      seterrorObject(error)
    } else {
      activecust()
    }
  }

  const handleChange2 = (e) => {
    const myUser = { ...ordr }
    myUser[e.target.name] = e.target.value
    setordr(myUser)
    const count = (ordr.receivedWeight * e.target.value) / 100
    console.log(count)
    setforms02(count.toFixed(3))
    const count2 = parseFloat(ordr.issuedWeight) - (parseFloat(ordr.receivedWeight) + parseFloat(count) + parseFloat(ordr.receivedWeights) + parseFloat(ordr.wastages))
    setforms01(count2.toFixed(3))
  }


  const actiordrs = () => {
    const token = datas
    const params = {
      orderId: ordid,
      itemName: caitem
    }
    // const docid = ordid
    axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/getghatdetailsbyid`, params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.GhatDetails)
      }
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data.message)
        toast.error(error.response.data.message)
      }
    })

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
      }
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data.message)
        toast.error(error.response.data.message)
      }
    })

  }

  const handlesubmit = (e) => {
    validateFun(e)
    e.preventDefault()
    // activecust()
  }


  // const [percent, setpercent] = useState([])
  // console.log(percent)
  const percent = []
  for (let i = 0; i < 5; i = i + 0.1) {
    percent.push(i.toFixed(1))
    // setpercent(perdata)
    // setpercent(i.toFixed(1))
  }
  console.log(percent)
  // console.log(perdata)
  useEffect(() => {
    actiordrs()
    qrdetails()
    // perfun()
  }, [])

  return (
    <Fragment>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <BreadCrumbsPage data={[{ title: "Gold Issue (or) Ghat Details" }]} />
        {/* <Nav /> */}
        <Card className="mt-1">
          <CardBody>
            <Row>
              <Col md={2}>
                <img className="mt-2" src={`http://103.186.185.77:5023/${ordr1.itemImage}`} style={{ width: "130px" }} />
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
                            {ordr.itemName}
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
            <h5>Gold Issue (or) Ghat Details</h5>
          </CardHeader>

          <CardBody>
            <Form onSubmit={(e) => { handlesubmit(e) }}>
              <Row>
                <Col md={3}>
                  <Label>
                    Sales Order No <span className="text-danger">*</span>
                  </Label>
                  <Input required value={ordr.orderNo} type="text" placeholder="Order No">
                    {/* <option value="">Select</option>
                    <option value="OSJ05">OSJ01</option>
                    <option value="OSJ05">OSJ02</option>
                    <option value="OSJ05">OSJ03</option>
                    <option value="OSJ05">OSJ04</option>
                    <option value="OSJ05">OSJ05</option> */}
                  </Input>
                </Col>
                <Col md={3}>
                  <Label>
                    Date <span className="text-danger">*</span>
                  </Label>
                  <Input required
                    onChange={(e) => { handleChange(e) }}
                    // max={new Date().toISOString().split("T")[0]}
                    min={ordr.submittedDate}
                    max={ordr1.deliveryDate}
                    //  value={ordr.submittedDate}
                    type="date" name="receivedDate" placeholder="Date" className="form-control mb-1" />
                </Col>
                <Col md={3}>
                  <Label>
                    Received From <span className="text-danger">*</span>
                  </Label>
                  <Input required value={ordr.employeeName} id="select-basic" className="form-control mb-1">
                    {/* <option>Select Name</option>
                  <option>Santosh / 901222222</option>
                  <option>Sameer / 9012222233</option>
                  <option>Shanker / 90122222343</option>
                  <option>Syed / 90162222534</option>
                  <option>Sharath / 96572222</option> */}
                  </Input>
                </Col>
                <Col md={3}>
                  <Label>
                    Issued Weight <span className="text-danger">*</span>
                  </Label>
                  <Input required name="issuedWeight" value={ordr.issuedWeight}
                    //  onChange={ (e) => { handleChange(e) }}
                    type="text" placeholder="Enter Gold Weight Grams/kgs" className="form-control mb-1" />
                </Col>
                <Col md={2}>
                  <Label>
                  Last  Received <span className="text-danger">*</span>
                  </Label>
                  <Input disabled value={ordr.receivedWeights} required  type="text" placeholder="Enter Gold Weight Grams/kgs" className="form-control mb-1" />
                 
                </Col>
                <Col md={2}>
                  <Label>
                    Received Weight <span className="text-danger">*</span>
                  </Label>
                  <Input value={ordr.receivedWeight} required name="receivedWeight" onChange={(e) => { handleChange(e) }} type="text" placeholder="Enter Gold Weight Grams/kgs" className="form-control mb-1" />
                  <span style={{ color: "#ff0000" }}>
                    {errorObject.receivedWeight}
                  </span>
                </Col>
                <Col md={2}>
                  <Label>
                  Last Wastage <span className="text-danger">*</span>
                  </Label>
                  <Input disabled value={ordr.wastages} required  type="text" placeholder="Enter Gold Weight Grams/kgs" className="form-control mb-1" />
                 
                </Col>
                <Col md={2}>
                  <Label>
                    Percentage <span className="text-danger">*</span>
                  </Label>
                  <select required onChange={(e) => { handleChange2(e) }} className="form-select">
                    <option value="">Select</option>
                    {percent.map((x) => {
                      return <option value={x} >{x}</option>
                    })}
                  </select>
                </Col>
                <Col md={2}>
                  <Label>
                    Wastage <span className="text-danger">*</span>
                  </Label>
                  <Input value={forms02} required name="balance" type="number" placeholder="Wastage" className="form-control mb-1" />
                </Col>
                <Col md={2}>
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
export default BreadCrumbs
