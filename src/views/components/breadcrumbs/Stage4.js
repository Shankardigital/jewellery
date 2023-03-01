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
  Form,
  Table
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
  const [ordrtot, setordrtot] = useState([])
  console.log(ordr.outWeight)
  const [ordr1, setordr1] = useState([])
  const [ordr01, setordr01] = useState([])
//{stoneOutWeight: "22", item: "Ruby", pieces: "5", quantityGm: "Cts", quantityGmCts: "50.00", returnPieces:"0", returnPiecesWt:"0", netPieces:"0", netPiecesWt:"0"}
  console.log(ordr01)
  // const [pieces, setpieces] = useState([])
  // const [weight, setweight] = useState([])
  console.log(ordr01)
  // console.log(ordr)
  // const [Files, setFiles] = useState("")
  // const [customer, setcustomer] = useState([])
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  // const caid = sessionStorage.getItem("pols2id")
  const ordid = sessionStorage.getItem("ordobid5")
  const settid = sessionStorage.getItem("setid")
  const settitem = sessionStorage.getItem("setitem")

  const handleChange = (i, e) => {
    console.log(i)
    const dv = [...ordr01]
    dv[i][e.target.name] = e.target.value
    setordr01(dv)
    console.log(ordr)
    ordr01[i].netPieces = ordr01[i].pieces - e.target.value

    // const totalps = parseFloat(ordr01[i].pieces) + parseFloat(ordr01[i].pieces)
    // console.log(totalps)
  }

  // const [returns1, setreturns1] = useState([])
  // console.log(returns1)

  // const totalvalue = (i) => {
  //   const dv = [...ordr01]
  //     // dv[i][e.target.name] = e.target.value
  //     setordr01(dv)
  //     console.log(dv)
  //   const ispiecevalue = dv[i].pieces
  //   console.log(ispiecevalue)
  // }


  const actiordrs = () => {
    const token = datas
    const params = {
      orderId: ordid,
      itemName: settitem
    }
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/setting/getsettingbyid", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.settingResult)
        setordrtot(res.data.tikliTotalWt)
        console.log(res.data.tikliTotalWt)
        setordr01(res.data.settingResult.otherDetails)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const sum = ordr01.reduce(function (prev, current) {
    return prev + +current.pieces
  }, 0)

  const sum5 = ordr01.reduce(function (prev, current) {
    return prev + +current.returnPieces
  }, 0)

  const sum3 = ordr01.reduce(function (prev, current) {
    return prev + +current.netPieces
  }, 0)
  const sum1 = ordr01.reduce(function (prev, current) {
    return prev + +current.quantityGmCts
  }, 0)
  console.log(ordr01.length)
  let  sum4 = 0
  if (ordr01.length > 0) {
   sum4 = ordr01.reduce(function (prev, current) {
    console.log(prev)
    console.log(current.netPiecesWt)
    return (prev + +current.netPiecesWt)
  }, 0)
}
  console.log(sum4)
  const totalsum4 = sum4 / 5
    console.log(totalsum4)

  const sum6 = ordr01.reduce(function (prev, current) {
    return prev + +current.returnPiecesWt
  }, 0)

  // const [totalsum4, settotalsum4] = useState([])
  const [netwet, setnetwet] = useState([])
  const [forms01, setforms01] = useState([])
  const [forms02, setforms02] = useState([])
  console.log(forms02)
  console.log(netwet)
  // const [baln, setbaln] = useState([])

  const handleChanges1 = (e) => {
    const myUser = { ...ordr }
    myUser[e.target.name] = e.target.value
    setordr(myUser)
    console.log(ordr.outWeight)
    const netweights = e.target.value - parseFloat(totalsum4)
    setnetwet(netweights.toFixed(3))

  }

  const handleChange1 = (i, e) => {
    console.log(i)
    const dv = [...ordr01]
    dv[i][e.target.name] = e.target.value
    setordr01(dv)
    console.log(dv)
    console.log(ordr)
    ordr01[i].netPiecesWt = ordr01[i].quantityGmCts - e.target.value
    const totalgm = parseFloat(ordr01[i].quantityGmCts) + parseFloat(ordr01[i].quantityGmCts)
    console.log(totalgm)
    const netweights = ordr.inWeight - parseFloat(totalsum4)
    console.log(netweights)
    setnetwet(netweights.toFixed(3))

    // const totalrtgm = parseFloat(e.target.value) + parseFloat(e.target.value)
    // console.log(totalrtgm)

    // const res = toString(count).split("/")

    // console.log(res)

    // const dv1 = ordr01[i].netPieces

    // const dv2 = ordr01[i].netPiecesWt

    // dv1["dv1"] = res
    // dv2["dv2"] = res

    //  setreturns1(count)
    // ordr01[i].quantityGm = ordr01[i].quantityGmCts - e.target.value
    // console.log(ordr01[i].quantityGm)
    // console.log(sum4)
    // if (ordr01[i].quantityGm === "Cts") {
    //   const details = sum4 / 5
    //   settotalsum4(details.toFixed(3))
    //   console.log(details)
    // } else {
    //   const details = sum4 
    //   settotalsum4(details.toFixed(3))
    //   console.log(details)
    // }
  }

  const handleChanges0 = (e) => {
    const myUser = { ...ordr }
    myUser[e.target.name] = e.target.value
    setordr(myUser)
    // console.log(ordr.outWeight)
    // const netweights = e.target.value - parseFloat(sum4)
    // setnetwet(netweights)

  }

  const handleChange2 = (e) => {
    const myUser = { ...ordr }
    myUser[e.target.name] = e.target.value
    setordr(myUser)
    const count = (netwet * e.target.value) / 100
    console.log(count)
    setforms02(count.toFixed(3))
    const count2 = parseFloat(ordrtot) - (parseFloat(netwet)  + parseFloat(ordr.netWeights) + parseFloat(ordr.wastages) + parseFloat(count))
    setforms01(count2.toFixed(3))
  }

  const balanace = ordrtot - netwet
  console.log(balanace)


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

  useEffect(() => {
    actiordrs()
    qrdetails()
    // totalvalue()
  }, [])

  const updateset = () => {
    const docsetid = settid
    const token = datas
    //const data=[]
    const data = ordr01.map((x) => (
      {
        pkNo: x.stoneOutWeight,
        pieces: x.pieces,
        weight: x.quantityGmCts,
        quantityGm:x.quantityGm,
        returnPieces: x.returnPieces,
        returnPiecesWt: parseFloat(x.returnPiecesWt).toFixed(2),
        netPieces: parseFloat(x.netPieces),
        netPiecesWt: parseFloat(x.netPiecesWt).toFixed(2)

      }
    ))
    const params = {
      receivedDate: ordr.receivedDate,
      outWeight: ordrtot,
      inWeight: parseFloat(ordr.inWeight).toFixed(3),
      stoneWeight: parseFloat(totalsum4).toFixed(3),
      netWeight: parseFloat(netwet).toFixed(3),
      balance: parseFloat(forms01).toFixed(3),
      wastage: parseFloat(forms02).toFixed(3),
      // totalPieces: parseFloat(sum),
      // totalPiecesWt: parseFloat(sum1).toFixed(2),
      totalReturnPieces: parseFloat(sum5),
      totalReturnPiecesWt: parseFloat(sum6).toFixed(2),
      totalNetPieces: parseFloat(sum3),
      totalNetPiecesWt: parseFloat(sum4).toFixed(2),
      updatedOtherDetails: data
    }
    console.log(token)
    axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/setting/editsetting/${docsetid}`, params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        navigate("/setting-details")
        // setcustomer(res.data.employeeData)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const setsubmit = (e) => {
    e.preventDefault()
    updateset()
  }

  const percent = []
    for (let i = 0; i < 5; i = i + 0.1) {
      percent.push(i.toFixed(1))
    }
  console.log(percent)

  return (
    <Fragment>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <BreadCrumbsPage data={[{ title: "Setting Details" }]} />
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
            <h5>Setting Details </h5>
          </CardHeader>
          <CardBody>
            <Form onSubmit={(e) => { setsubmit(e) }}>
              <Row>
                <Col md={2}>
                  <Label>
                    Sales Order No <span className="text-danger">*</span>
                  </Label>
                  <Input value={ordr.orderNo} placeholder="Seles Order No" />
                </Col>
                <Col md={2}>
                  <Label>
                    Item <span className="text-danger">*</span>
                  </Label>
                  <Input value={ordr.itemName}  placeholder="Item" />
                </Col>
                <Col md={2}>
                  <Label>
                    Date <span className="text-danger">*</span>
                  </Label>
                  <Input
                  max={ordr1.deliveryDate}
                  min={ordr.submittedDate}
                  required onChange={(e) => { handleChanges0(e) }} name="receivedDate" type="date" placeholder="Date" className="form-control mb-1" />
                </Col>
                <Col md={2}>
                  <Label>
                    Karigar <span className="text-danger">*</span>
                  </Label>
                  <Input required value={ordr.employeeName} placeholder="Karigar Name" />
                </Col>
                <Col md={2}>
                  <Label>
                    Out Weight <span className="text-danger">*</span>
                  </Label>
                  <Input required value={ordrtot} type="text" placeholder="Enter Out Weight" className="form-control mb-1" />
                </Col>
                <Col md={2}>
                  <Label>
                    In Weight <span className="text-danger">*</span>
                  </Label>
                  <Input required type="text" name="inWeight" onChange={(e) => { handleChanges1(e) }} placeholder="Enter In Weight" className="form-control mb-1" />
                </Col>

                <Col md={2}>
                  <Label>
                    Stone Weight <span className="text-danger">*</span>
                  </Label>
                  <Input required type="text" value={totalsum4.toFixed(3)} placeholder="Enter Stone Weight" className="form-control mb-1" />
                </Col>
                <Col md={2}>
                  <Label>
                    Net Weight <span className="text-danger">*</span>
                  </Label>
                  <Input required value={netwet} type="text" placeholder="Enter Net Weight" className="form-control mb-1" />
                </Col>

                <Col md={2}>
                  <Label>
                    Percentage <span className="text-danger">*</span>
                  </Label>
                  <select required
                   onChange={(e) => { handleChange2(e) }}
                    className="form-select">
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
                  <Input value={forms02} required type="text" name="inWeight" placeholder="Enter Wastage" className="form-control mb-1" />
                </Col>
                <Col md={2}>
                  <Label>
                    Balance <span className="text-danger">*</span>
                  </Label>
                  <Input required disabled
                    value={forms01}
                    type="text" placeholder="Balance" className="form-control mb-1" />
                </Col>
              </Row>

              {ordr01.map((index, i) => {
                // index.returnPieces= (index.returnPieces) ? index.returnPieces : 0
                return (<>
                  {/* {ordr01.map((index, i) => ( */}
                  <Row key={index}>
                    <Col md={5}>
                      <p>Issue</p>
                      <Row>
                        <div className="col-12 col-md-4"><Label>
                          Pk No. <span className="text-danger">*</span>
                        </Label>
                          <Input  disabled value={index.stoneOutWeight} type="text" placeholder="Pk No" className="form-control mb-1" />
                        </div>
                        <div className="col-12 col-md-4"><Label>
                          pieces <span className="text-danger">*</span>
                        </Label>
                          <Input value={index.pieces} disabled type="text" placeholder=" pieces" className="form-control mb-1" />
                        </div>
                        <div className="col-12 col-md-4"><Label>
                          Weight <span className="text-danger">*</span>
                        </Label>
                          <Input value={index.quantityGmCts} disabled type="text" placeholder="Weight" className="form-control mb-1" />
                        </div>
                      </Row>

                    </Col>
                    <Col md={4}>
                      <p>Return</p>
                      <Row>
                        <div className="col-12 col-md-6"><Label>
                          pieces<span className="text-danger">*</span>
                        </Label>
                          <Input
                            required
                            max={index.pieces}
                            onChange={(e) => { handleChange(i, e) }} name="returnPieces" value={index.returnPieces} type="number" placeholder="pieces" className="form-control mb-1" />
                        </div>
                        <div className="col-12 col-md-6"><Label>
                          Weight <span className="text-danger">*</span>
                        </Label>
                          <Input required max={index.quantityGmCts} type="text" onChange={(e) => { handleChange1(i, e) }} name="returnPiecesWt" value={index.returnPiecesWt} placeholder="Weight" className="form-control mb-1" />
                        </div>

                      </Row>
                    </Col>
                    <Col md={3}>
                      <p>Nett</p>
                      <Row>
                        <div className="col-12 col-md-6"><Label>
                          pieces<span className="text-danger">*</span>
                        </Label>
                          <Input disabled type="text" name="netPieces" key={i} value={index.netPieces} placeholder=" pieces" className="form-control mb-1" />
                        </div>
                        <div className="col-12 col-md-6"><Label>
                          Weight <span className="text-danger">*</span>
                        </Label>
                          <Input disabled type="text" name="netPiecesWt" key={i} value={index.netPiecesWt} placeholder="Weight" className="form-control mb-1" />
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </>
                )
              })}<hr />

              <Row className="mt-2">
                <Col md={5}>
                  <Row>
                    <Col md="4">Total</Col>
                    <Col md="4"><p className="text-center">{sum}</p> </Col>
                    <Col md="4">
                      <div>
                        <p className="text-center">{sum1.toFixed(2)}</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row>
                    <Col md="4">
                      <p className="text-center">
                       
                          <span>{sum5}</span>
                     
                        </p></Col>
                    <Col md="4">
                      <p className="text-center">{sum6.toFixed(2)}</p></Col>
                  </Row>
                </Col>
                <Col md={3}>
                  <Row>
                    <Col md="4"> <p className="text-center">{sum3}</p></Col>
                    <Col md="4"> <p className="text-center">{sum4.toFixed(2)}</p></Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-1" style={{ float: "right" }}>
                <Col>
                  {/* <Link to={"/setting-details"}> */}
                  <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                    Submit <ArrowRightCircle className='font-medium-2 pl-1' />
                  </Button>
                  {/* </Link> */}
                  <Link to={"/setting-details"}>
                    <Button outline size="sm" className="me-1 mt-1" color="danger" type="button">
                      <X className='font-medium-2 pl-1' /> Cancel
                    </Button>
                  </Link>
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
