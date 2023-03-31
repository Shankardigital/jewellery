// ** React Imports
import {
  Fragment, useEffect,
  useState, useRef
} from "react"
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
import { Link } from 'react-router-dom'
import Nav from './Nav'
import axios from "axios"
import ReactHTMLTableToExcel from "react-html-table-to-excel"
// import html2canvas from "html2canvas"
// import pdfMake from "pdfmake"
import Moment from 'react-moment'
import sj2 from "../../../assets/images/latest/sj2.png"
// import { useReactToPrint } from "react-to-print";
// import jewllery from "../../../assets/images/latest/jewllery.jfif"

import { useReactToPrint } from "react-to-print"

function Stage1() {

  const [ghats, setghat] = useState([])
  const [castdata, setcastdata] = useState([])
  const [bandini, setbandini] = useState([])
  const [polish1, setpolish1st] = useState([])
  const [polish2, setpolish2nd] = useState([])
  const [polishwast, setpolishwast] = useState([])
  const [polishloss, setpolishloss] = useState([])
  console.log(polishloss)
  const [settings, setsettings] = useState([])
  const [malas, setmalas] = useState([])
  const [finishi, setfinishi] = useState([])
  const [sellling, setsellling] = useState([])
  const [costing, setcosting] = useState([])
  const [finishtotal, setfinishtotal] = useState([])
  const [items1, setitems1] = useState([])

  const datas = localStorage.getItem("accessToken")
  const finid = sessionStorage.getItem("finordid")
  const finitem = sessionStorage.getItem("finorditem")

  const actiordrs = () => {
    // const docid = ordid
    const params = {
      orderId: finid,
      itemId: finitem
    }
    const token = datas
    axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/finishing/getfinishreport`, params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setghat(res.data.ghatReport)
        setcastdata(res.data.castingArr)
        setpolish1st(res.data.polish1stArr)
        setpolish2nd(res.data.polish2ndArr)
        setpolishwast(res.data.polishTotalWaste)
        setpolishloss(res.data.polishTotalLoss)
        setsettings(res.data.settingReport)
        setbandini(res.data.bandiniReport)
        setmalas(res.data.malaReport)
        setfinishi(res.data.finsishingStone)
        setfinishtotal(res.data.finishingStoneTotal)
        setsellling(res.data.sellingDetails)
        setcosting(res.data.costingDetails)
        setitems1(res.data.itemName)
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
  }, [])

  // const genPdf = () => {
  //   html2canvas(document.getElementById("empTable")).then((canvas) => {
  //     const data = canvas.toDataURL()
  //     const pdfExportSetting = {
  //       content: [
  //         {
  //           image: data,
  //           width: 500
  //         }
  //       ]
  //     }
  //     pdfMake.createPdf(pdfExportSetting).download("file.pdf")
  //   })
  // }

  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
    ><Fragment>

        <BreadCrumbsPage data={[{ title: "Details" }]} />

        {/* <Nav /> */}
        <div className=" p-1">
          <Link style={{ float: "right" }} to="/costing-details"> <Button className='m-1' color='info'> <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Back</Button></Link>
        </div>
        <Card className="mt-5">
          <CardBody>
            <Row>
              <Col sm='12'>

                <Card>
                  <div>
                    <div style={{ float: "right" }}>
                      <Button
                        onClick={handlePrint}
                        //  onClick={genPdf}
                        size="sm" className='m-1' color='danger'><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</Button>
                      <ReactHTMLTableToExcel
                        className="btn btn-sm btn-success fa fa-file-excel-o "
                        table="empTable"
                        filename="ReportExcel"
                        sheet="Sheet"
                        buttonText=" Excel"
                        style={{ color: "white" }}
                      />
                      {/* <Button size="sm" className='m-1' color='success'> <i class="fa fa-file-excel-o" aria-hidden="true"></i> EXCEL</Button> */}
                    </div>
                  </div>
                  <CardBody>

                    <div id="empTable" ref={componentRef}>

                      <Table style={{ border: "1px solid gray" }} className="table table-bordered align-middle table-nowrap table-responsive" size='sm' id="empTable" >

                        <tbody style={{ border: "1px solid gray" }} className='text-center  table-bordered'>
                          <tr style={{ border: "1px solid gray" }} >
                            <td style={{ border: "1px solid gray", textAlign: "center" }} colSpan="13" className='text-center text-danger' >|| JAI SHREE SHYAM ||</td>
                          </tr>
                          <tr style={{ border: "1px solid gray" }} >
                            <td style={{ border: "1px solid gray" }} colSpan="13"  >
                              <Row>
                                <Col md="2">
                                  <img style={{ width: "100px" }} src={sj2} />
                                </Col>
                                <Col md="9">
                                  <h1 style={{ textAlign: "center" }} className='text-center text-danger mt-1'> OM SANTOSH JEWELLERS PVT LTD</h1>
                                </Col>
                              </Row>
                            </td>
                          </tr>
                          <tr style={{ border: "1px solid gray" }} >
                            <td style={{ border: "1px solid gray", textAlign: "center" }} colSpan="13" className='text-center text-danger' >Plot No 5, House No 8-2-267/1/a/5, Aurora Colony Phase 2, Banjarahills Road No 3, Hyderabad, T.S.</td>
                          </tr>
                          <tr style={{ border: "1px solid gray", textAlign: "center" }} >
                            <td style={{ border: "1px solid gray" }} colSpan="2" className='text-center text-danger' >Order No</td>
                            <td style={{ border: "1px solid gray" }} colSpan="2" className='text-center' >{sellling.orderNo}</td>
                            <td style={{ border: "1px solid gray" }} colSpan="2" className='text-center text-danger' >Item</td>
                            <td style={{ border: "1px solid gray" }} colSpan="2" className='text-center' >{items1}</td>
                            <td style={{ border: "1px solid gray" }} colSpan="2" className='text-center text-danger' >Party Name</td>
                            <td style={{ border: "1px solid gray" }} colSpan="3" className='text-center ' >{sellling.customerName}</td>
                          </tr>
                          <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                            <td style={{ border: "1px solid gray" }} colSpan="13" className='text-center'>
                              <Row style={{ padding: "10px" }} className="p-1">
                                <Col md={4}>
                                  <img src={`http://103.186.185.77:5023/${sellling.orderItemImage}`} style={{ width: "170px", height: "170px" }} />
                                  {/* <img src={`http://103.186.185.77:5023/${sellling[0].cadImage}`} style={{ width: "200px" }} />
                                                <img src={`http://103.186.185.77:5023/${sellling[0].finishedImg}`} style={{ width: "200px" }} /> */}
                                </Col>
                                <Col md={4}>
                                  {/* <img src={`http://103.186.185.77:5023/${sellling[0].orderItemImage}`} style={{ width: "200px" }} /> */}
                                  <img src={`http://103.186.185.77:5023/${sellling.cadImage}`} style={{ width: "170px", height: "170px" }} />
                                  {/* <img src={`http://103.186.185.77:5023/${sellling[0].finishedImg}`} style={{ width: "200px" }} /> */}
                                </Col>
                                <Col md={4}>
                                  {/* <img src={`http://103.186.185.77:5023/${sellling[0].orderItemImage}`} style={{ width: "200px" }} />
                                                <img src={`http://103.186.185.77:5023/${sellling[0].cadImage}`} style={{ width: "200px" }} /> */}
                                  <img src={`http://103.186.185.77:5023/${sellling.finishedImg}`} style={{ width: "170px", height: "170px" }} />
                                </Col>
                              </Row>
                            </td>
                          </tr>
                          <tr style={{ border: "1px solid gray", textAlign: "center" }} className='text-center' >
                            <th style={{ border: "1px solid gray" }} colSpan="13" className="text-danger">Casting Details</th>
                          </tr>

                          <tr style={{ border: "1px solid gray" }} className='text-center text-danger'>
                            <th style={{ border: "1px solid gray" }} colSpan="2" >
                              Date
                            </th>
                            <th style={{ border: "1px solid gray" }} colSpan="2">
                              Karigar
                            </th>
                            <th style={{ border: "1px solid gray" }} >
                              Wt Out
                            </th>
                            <th style={{ border: "1px solid gray" }} >
                              Finish In
                            </th>
                            <th style={{ border: "1px solid gray" }} >
                              Scap In
                            </th>
                            <th style={{ border: "1px solid gray" }} >
                              Loss
                            </th >
                            <th style={{ border: "1px solid gray" }} >
                              Fine
                            </th>
                            <th style={{ border: "1px solid gray" }} >

                            </th >
                            <th style={{ border: "1px solid gray" }} >

                            </th>
                            <th style={{ border: "1px solid gray" }} >

                            </th>

                          </tr>
                          {castdata.map((data) => (
                            <tr style={{ border: "1px solid gray", textAlign: "center" }} >
                              <td style={{ border: "1px solid gray" }} colSpan="2" scope="row">
                                <Moment format="DD/MM/YYYY" >
                                  {data.date}
                                </Moment>
                              </td>
                              <td style={{ border: "1px solid gray" }} colSpan="2">
                                {data.employeeName}
                              </td>
                              <td style={{ border: "1px solid gray" }} >
                                {data.weightOut}
                              </td>

                              <td style={{ border: "1px solid gray" }} >
                                {data.finishIn}
                              </td >
                              <td style={{ border: "1px solid gray" }}>
                                {data.scapIn}
                              </td>
                              <td style={{ border: "1px solid gray" }}>
                                {data.loss}
                              </td>
                              <td style={{ border: "1px solid gray" }}>
                                {data.fine}
                              </td>
                              <td style={{ border: "1px solid gray" }}>

                              </td>
                              <td style={{ border: "1px solid gray" }}> </td>
                              <td style={{ border: "1px solid gray" }}> </td>
                            </tr>
                          ))}
                           <tr style={{ border: "1px solid gray" }}>
                            <td style={{ border: "1px solid gray" }} className="p-1" colSpan="13">  </td>
                          </tr>

                          <tr style={{ border: "1px solid gray", textAlign: "center" }} className='text-center' >
                            <th style={{ border: "1px solid gray" }} colSpan="13" className="text-success">Ghat Details</th>
                          </tr>
                          <tr style={{ border: "1px solid gray" }} className='text-center text-success'>
                            <th style={{ border: "1px solid gray" }} colSpan="2" >
                              Date
                            </th>
                            <th style={{ border: "1px solid gray" }} colSpan="2">
                              Karigar
                            </th>
                            <th style={{ border: "1px solid gray" }} >
                              Gross
                            </th>
                            <th style={{ border: "1px solid gray" }} >
                              Nett
                            </th>
                            <th style={{ border: "1px solid gray" }} >
                              Wasteage
                            </th>
                            <th style={{ border: "1px solid gray" }} >
                              Total
                            </th >
                            <th style={{ border: "1px solid gray" }} >
                              Fine
                            </th>
                            <th style={{ border: "1px solid gray" }} >

                            </th >
                            <th style={{ border: "1px solid gray" }} >

                            </th>
                            <th style={{ border: "1px solid gray" }} >

                            </th>

                          </tr>
                          {ghats.map((data) => (
                            <tr style={{ border: "1px solid gray", textAlign: "center" }} >
                              <td style={{ border: "1px solid gray" }} colSpan="2" scope="row">
                                <Moment format="DD/MM/YYYY" >
                                  {data.date}
                                </Moment>
                              </td>
                              <td style={{ border: "1px solid gray" }} colSpan="2">
                                {data.employeeName}
                              </td>
                              <td style={{ border: "1px solid gray" }} >
                                {data.gross}
                              </td>

                              <td style={{ border: "1px solid gray" }} >
                                {data.nett}
                              </td >
                              <td style={{ border: "1px solid gray" }}>
                                {data.wasteage}
                              </td>
                              <td style={{ border: "1px solid gray" }}>
                                {data.total}
                              </td>
                              <td style={{ border: "1px solid gray" }}>
                                {data.fine}
                              </td>
                              <td style={{ border: "1px solid gray" }}>

                              </td>
                              <td style={{ border: "1px solid gray" }}> </td>
                              <td style={{ border: "1px solid gray" }}> </td>
                            </tr>
                          ))}

                          <tr style={{ border: "1px solid gray" }}>
                            <td style={{ border: "1px solid gray" }} className="p-1" colSpan="13">  </td>
                          </tr>
                          <tr style={{ border: "1px solid gray" }} className="text-center text-warning">
                            <th style={{ border: "1px solid gray" }} colSpan="13">Polish Details</th>
                          </tr>
                          <tr style={{ border: "1px solid gray" }} className='text-center text-warning'>
                            <td style={{ border: "1px solid gray" }} colSpan="5">
                              <Table size='sm' responsive bordered hover>
                                <tbody>
                                  <tr style={{ border: "1px solid gray" }}>
                                    <th style={{ border: "1px solid gray" }}>
                                      G.P.Out
                                    </th>
                                    <th style={{ border: "1px solid gray" }}>
                                      G.P.In
                                    </th>
                                    <th style={{ border: "1px solid gray" }}>
                                      Loss
                                    </th>
                                  </tr>
                                  {polish1.map((data) => (
                                    <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                                      <td style={{ border: "1px solid gray" }} scope="row">
                                        {data.gpOut}
                                      </td>
                                      <td style={{ border: "1px solid gray" }}>
                                        {data.gpIn}
                                      </td>
                                      <td style={{ border: "1px solid gray" }}>
                                        {data.gploss}
                                      </td>
                                    </tr>
                                  ))}


                                </tbody>
                              </Table>
                            </td>

                            <td style={{ border: "1px solid gray" }} colSpan="5">
                              <Table size='sm' responsive bordered hover>
                                <tbody>
                                  <tr style={{ border: "1px solid gray" }}>
                                    <th style={{ border: "1px solid gray" }}>
                                      F.P.Out
                                    </th>
                                    <th style={{ border: "1px solid gray" }} >
                                      F.P.In
                                    </th>
                                    <th style={{ border: "1px solid gray" }}>
                                      Loss
                                    </th>
                                    {/* <th style={{ border: "1px solid gray" }}>
                                      T Loss
                                    </th>
                                    <th style={{ border: "1px solid gray" }}>
                                      Waste
                                    </th> */}
                                  </tr>

                                  <tr style={{ border: "1px solid gray", textAlign: "center" }}>

                                    {polish2.length === 0 ? (
                                      <>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>

                                      </>
                                    ) : (
                                      <>
                                        {polish2.map((data) => (
                                          <>
                                            <td style={{ border: "1px solid gray" }} scope="row">
                                              {data.fpOut}
                                            </td>
                                            <td style={{ border: "1px solid gray" }}>
                                              {data.fpIn}
                                            </td>
                                            <td style={{ border: "1px solid gray" }}>
                                              {data.fploss}
                                            </td>
                                          </>
                                        ))}
                                      </>
                                    )}

                                  </tr>

                                </tbody>
                              </Table>
                            </td>
                            <td style={{ border: "1px solid gray" }} colSpan="3">
                              <Table size='sm' responsive bordered hover>
                                <tbody>
                                  <tr style={{ border: "1px solid gray" }}>

                                    <th style={{ border: "1px solid gray" }}>
                                      T Loss
                                    </th>
                                    <th style={{ border: "1px solid gray" }}>
                                      Waste
                                    </th>
                                  </tr>

                                  <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                                    <>
                                      <td style={{ border: "1px solid gray" }}>{polishloss}</td>
                                      <td style={{ border: "1px solid gray" }}>{polishwast}</td>

                                    </>
                                  </tr>

                                </tbody>
                              </Table>
                            </td>

                          </tr>
                          <tr style={{ border: "1px solid gray" }}>
                          </tr>
                          <tr style={{ border: "1px solid gray" }}>
                            <td style={{ border: "1px solid gray" }} className="p-1" colSpan="13"></td>
                          </tr>
                          {settings.length === 0 ? (
                            ""
                          ) : (
                            <>
                              <tr style={{ border: "1px solid gray" }} className="text-center text-info">
                                <th style={{ border: "1px solid gray" }} colSpan="13">Setting Details</th>
                              </tr>
                              <tr style={{ border: "1px solid gray" }} className='text-center text-info'>
                                <th style={{ border: "1px solid gray" }}>
                                  Setting
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Date Out
                                </th>
                                <th style={{ border: "1px solid gray" }} colSpan="2">
                                  Date In
                                </th>
                                <th style={{ border: "1px solid gray" }} colSpan="2">
                                  Wt Out
                                </th>
                                <th style={{ border: "1px solid gray" }} >
                                  Wt In
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Stone
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Nett
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Chura
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Loss
                                </th>
                                <th colSpan="2" style={{ border: "1px solid gray" }}>
                                  Nett Chura
                                </th>

                              </tr>
                              {settings.map((data) => (
                                <>
                                  <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                                    <td style={{ border: "1px solid gray" }} scope="row">
                                      {data.employeeName}
                                    </td>
                                    <td style={{ border: "1px solid gray" }}>
                                      <Moment format="DD/MM/YYYY">
                                        {data.submittedDate}
                                      </Moment>
                                    </td>
                                    <td style={{ border: "1px solid gray" }} colSpan="2">
                                      <Moment format="DD/MM/YYYY">
                                        {data.receivedDate}
                                      </Moment>
                                    </td>
                                    <td style={{ border: "1px solid gray" }} colSpan="2">
                                      {data.outWeight}
                                    </td>
                                    <td style={{ border: "1px solid gray" }}>
                                      {data.inWeight}
                                    </td>
                                    <td style={{ border: "1px solid gray" }}>
                                      {data.stoneWeight}
                                    </td>
                                    <td style={{ border: "1px solid gray" }}>
                                      {data.netWeight}
                                    </td>
                                    <td style={{ border: "1px solid gray" }}>
                                      {data.balance}
                                    </td>
                                    <td style={{ border: "1px solid gray" }} className="text-danger">
                                      {data.wastage}
                                    </td>
                                    <td style={{ border: "1px solid gray" }} colSpan="2" className="text-danger">
                                      {data.nettChura}
                                    </td>
                                  </tr>
                                  <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }} colSpan="2">Tikili ({data.tikliPieces})</td>
                                    <td style={{ border: "1px solid gray" }} colSpan="2">{data.tikliweight}</td>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }} colSpan="2"></td>
                                  </tr>
                                  <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <th style={{ border: "1px solid gray" }} colSpan="2">Total</th>
                                    <th style={{ border: "1px solid gray" }} colSpan="2">{data.total}</th>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }}></td>
                                    <td style={{ border: "1px solid gray" }} colSpan="2"></td>
                                  </tr>
                                </>
                              ))}
                            </>
                          )}
                          {bandini.length === 0 ? (
                            ""
                          ) : (
                            <>
                              <tr style={{ border: "1px solid gray" }} className="text-center text-success">
                                <th style={{ border: "1px solid gray" }} colSpan="13">Bandini Details</th>
                              </tr>
                              <tr style={{ border: "1px solid gray" }} className='text-center text-success'>
                                <th style={{ border: "1px solid gray" }}>
                                  Bandini
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Date Out
                                </th>
                                <th style={{ border: "1px solid gray" }} colSpan="2">
                                  Date In
                                </th>
                                <th style={{ border: "1px solid gray" }} colSpan="2">
                                  Wt Out
                                </th>
                                <th style={{ border: "1px solid gray" }} >
                                  Wt In
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Stone
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Nett
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Chura
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Loss
                                </th>
                                <th colSpan="2" style={{ border: "1px solid gray" }}>
                                  Nett Chura
                                </th>

                              </tr>
                              {bandini.map((data) => (
                                <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                                  <td style={{ border: "1px solid gray" }} scope="row">
                                    {data.employeeName}
                                  </td>
                                  <td style={{ border: "1px solid gray" }} >
                                    <Moment format="DD/MM/YYYY">
                                      {data.submittedDate}
                                    </Moment>
                                  </td>
                                  <td style={{ border: "1px solid gray" }} colSpan="2">
                                    <Moment format="DD/MM/YYYY">
                                      {data.receivedDate}
                                    </Moment>
                                  </td>
                                  <td style={{ border: "1px solid gray" }} colSpan="2">
                                    {data.outWeight}
                                  </td>
                                  <td style={{ border: "1px solid gray" }}>
                                    {data.inWeight}
                                  </td>
                                  <td style={{ border: "1px solid gray" }}>
                                    {data.stoneWeight}
                                  </td>
                                  <td style={{ border: "1px solid gray" }}>
                                    {data.netWeight}
                                  </td>
                                  <td style={{ border: "1px solid gray" }}>
                                    {data.balance}
                                  </td>
                                  <td style={{ border: "1px solid gray" }} className="text-danger">
                                    {data.wastage}
                                  </td>
                                  <td style={{ border: "1px solid gray" }} colSpan="2" className="text-danger">
                                    {data.nettChura}
                                  </td>
                                </tr>
                              ))}
                              <tr style={{ border: "1px solid gray" }}>
                                <td style={{ border: "1px solid gray" }} className="p-1" colSpan="13"></td>
                              </tr>
                            </>
                          )}

                          {malas.length === 0 ? (
                            ""
                          ) : (
                            <>
                              <tr style={{ border: "1px solid gray" }} className="text-center text-warning">
                                <th style={{ border: "1px solid gray" }} colSpan="13">Mala Details</th>
                              </tr>
                              <tr style={{ border: "1px solid gray" }} className='text-center text-warning'>
                                <th style={{ border: "1px solid gray" }}>
                                  Mala
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Date Out
                                </th>
                                <th style={{ border: "1px solid gray" }} colSpan="2">
                                  Date In
                                </th>
                                <th style={{ border: "1px solid gray" }} colSpan="2">
                                  Wt Out
                                </th>
                                <th style={{ border: "1px solid gray" }} >
                                  Wt In
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Stone
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Nett
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Chura
                                </th>
                                <th style={{ border: "1px solid gray" }}>
                                  Loss
                                </th>
                                <th style={{ border: "1px solid gray" }} colSpan="2">
                                  Nett Chura
                                </th>

                              </tr>
                              {malas.map((data) => (
                                <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                                  <td style={{ border: "1px solid gray" }} scope="row">
                                    {data.employeeName}
                                  </td>
                                  <td style={{ border: "1px solid gray" }}>
                                    <Moment format="DD/MM/YYYY">
                                      {data.submittedDate}
                                    </Moment>
                                  </td>
                                  <td style={{ border: "1px solid gray" }} colSpan="2">
                                    <Moment format="DD/MM/YYYY">
                                      {data.receivedDate}
                                    </Moment>
                                  </td>
                                  <td style={{ border: "1px solid gray" }} colSpan="2">
                                    {data.outWeight}
                                  </td>
                                  <td style={{ border: "1px solid gray" }}>
                                    {data.inWeight}
                                  </td>
                                  <td style={{ border: "1px solid gray" }}>
                                    {data.stoneWeight}
                                  </td>
                                  <td style={{ border: "1px solid gray" }}>
                                    {data.netWeight}
                                  </td>
                                  <td style={{ border: "1px solid gray" }}>
                                    {data.balance}
                                  </td>
                                  <td style={{ border: "1px solid gray" }} className="text-danger">
                                    {data.wastage}
                                  </td>
                                  <td colSpan="2" style={{ border: "1px solid gray" }} className="text-danger">
                                    {data.nettChura}
                                  </td>
                                </tr>
                              ))}
                            </>
                          )}

                          {/* costing Details */}
                          <tr style={{ border: "1px solid gray" }}>
                            <td style={{ border: "1px solid gray" }} className="p-1" colSpan="13"></td>
                          </tr>
                          <tr style={{ border: "1px solid gray" }} className="text-center text-dark">
                            <th style={{ border: "1px solid gray", color: "green" }} colSpan="13">Costing Details</th>
                          </tr>
                          <tr style={{ border: "1px solid gray", color: "green" }} className='text-center text-dark'>
                            <th style={{ border: "1px solid gray", color: "green" }} >
                              Gross
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }}>
                              Stone
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }}>
                              Nett
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }} >
                              Casting
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }}>
                              Ghat
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }} >
                              Polish
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }}>
                              Setting
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }}>
                              Bandini
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }}>
                              mala
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }}>
                              Total
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }}>
                              Fine
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }}>
                              Profit
                            </th>
                            <th style={{ border: "1px solid gray", color: "green" }}>
                              Cash
                            </th>


                          </tr>
                          {/* {sellling.map((data) => ( */}
                          <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                            <td style={{ border: "1px solid gray" }} scope="row">
                              {/* <Moment format="DD/MM/YYYY"> */}
                              {costing.Gross}
                              {/* </Moment> */}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Stone}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Nett}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Casting}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Ghat}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Polish}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Setting}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Bandini}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Mala}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Total}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Fine}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Profit}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {costing.Cash}
                            </td>
                          </tr>
                          {/* costing Details */}
                          <tr style={{ border: "1px solid gray" }}>
                            <td style={{ border: "1px solid gray" }} className="p-1" colSpan="13"></td>
                          </tr>
                          <tr style={{ border: "1px solid gray" }} className="text-center text-dark">
                            <th style={{ border: "1px solid gray" }} colSpan="13">Selling Details</th>
                          </tr>
                          <tr style={{ border: "1px solid gray" }} className='text-center text-dark'>
                            <th style={{ border: "1px solid gray" }} colSpan="2">
                              Date
                            </th>
                            <th style={{ border: "1px solid gray" }} colSpan="2">
                              Order No
                            </th>
                            <th style={{ border: "1px solid gray" }} colSpan="4">
                              Party Name
                            </th>
                            <th style={{ border: "1px solid gray" }} >
                              Gross Wt
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              Stone
                            </th>
                            <th style={{ border: "1px solid gray" }} >
                              Nett
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              Fine
                            </th>


                          </tr>
                          {/* {sellling.map((data) => ( */}
                          <tr style={{ border: "1px solid gray", textAlign: "center" }}>
                            <td style={{ border: "1px solid gray" }} colSpan="2" scope="row">
                              <Moment format="DD/MM/YYYY">
                                {sellling.date}
                              </Moment>
                            </td>
                            <td colSpan="2" style={{ border: "1px solid gray" }}>
                              {sellling.orderNo}
                            </td>
                            <td style={{ border: "1px solid gray" }} colSpan="4" >
                              {sellling.customerName}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {sellling.grossWeight}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {sellling.stoneWt}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {sellling.netWt}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {sellling.fine}
                            </td>
                          </tr>
                          {/* // ))} */}

                          <tr style={{ border: "1px solid gray" }}>
                            <td style={{ border: "1px solid gray" }} className="p-1" colSpan="13"></td>
                          </tr>
                          <tr style={{ border: "1px solid gray" }} className="text-dark">
                            <th style={{ border: "1px solid gray" }} colSpan="6">Stone Costing Detail</th>
                            <th style={{ border: "1px solid gray" }} colSpan="6">Stone Selling Detail</th>
                          </tr>

                          <tr style={{ border: "1px solid gray" }} className='text-center text-danger'>
                            <th style={{ border: "1px solid gray" }}>
                              Item
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              Wt In Gr
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              Wt In Ct
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              Rate In Ct
                            </th>
                            <th style={{ border: "1px solid gray" }} colSpan="2">
                              Amount
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              Item
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              Wt In Gr
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              Wt In Ct
                            </th>
                            <th style={{ border: "1px solid gray" }}>
                              Rate In Ct
                            </th>
                            <th style={{ border: "1px solid gray" }} colSpan="2">
                              Amount
                            </th>
                          </tr>
                          {finishi.map((data) => (
                            <tr style={{ border: "1px solid gray", textAlign: "center" }}>

                              <td style={{ border: "1px solid gray" }} scope="row">
                                {data.costItemType}
                              </td>
                              <td style={{ border: "1px solid gray" }}>
                                {data.costWeightInGr}
                              </td>
                              <td style={{ border: "1px solid gray" }}>
                                {data.costWeightInCtc}
                              </td>
                              <td style={{ border: "1px solid gray" }}>
                                {data.costRatePerCtc}
                              </td>
                              <td style={{ border: "1px solid gray" }} colSpan="2">
                                {data.costAmount}
                              </td>

                              <td style={{ border: "1px solid gray" }}>
                                {data.sellItemType}
                              </td>
                              <td style={{ border: "1px solid gray" }} >
                                {data.sellWeightInGr}
                              </td>
                              <td style={{ border: "1px solid gray" }}>
                                {data.sellWeightInCtc}
                              </td>
                              <td style={{ border: "1px solid gray" }}>
                                {data.sellRatePerCtc}
                              </td>
                              <td style={{ border: "1px solid gray" }} colSpan="2">
                                {data.sellAmount}
                              </td>
                            </tr>
                          ))}

                          {/* <tr style={{border:"1px solid gray"}}>
    <td style={{border:"1px solid gray"}} scope="row">
      Ruby
    </td>
    <td style={{border:"1px solid gray"}}>
      1.428
    </td>
    <td style={{border:"1px solid gray"}}>
      7.14
    </td>
    <td style={{border:"1px solid gray"}}>
      250.00
    </td>
    <td style={{border:"1px solid gray"}}>
      1,785.00
    </td>
    <td style={{border:"1px solid gray"}}>
      Ruby
    </td>
    <td style={{border:"1px solid gray"}} >
      1.428
    </td>
    <td style={{border:"1px solid gray"}}>
      7.14
    </td>
    <td style={{border:"1px solid gray"}}>
      450.00
    </td>
    <td style={{border:"1px solid gray"}}>
      3,213.00
    </td>
  </tr>
  <tr style={{border:"1px solid gray"}}>
    <td style={{border:"1px solid gray"}} scope="row">
      Fd
    </td>
    <td style={{border:"1px solid gray"}}>
      1.040
    </td>
    <td style={{border:"1px solid gray"}}>
      5.20
    </td>
    <td style={{border:"1px solid gray"}}>
      6,000.00
    </td>
    <td style={{border:"1px solid gray"}}>
      31,200.00
    </td>
    <td style={{border:"1px solid gray"}}>
      FD
    </td>
    <td style={{border:"1px solid gray"}} >
      1.164
    </td>
    <td style={{border:"1px solid gray"}}>
      5.82
    </td>
    <td style={{border:"1px solid gray"}}>
      13,000.00
    </td>
    <td style={{border:"1px solid gray"}}>
      75,660.00
    </td>
  </tr>
  <tr style={{border:"1px solid gray"}}>
    <td style={{border:"1px solid gray"}} scope="row">
      CPF
    </td>
    <td style={{border:"1px solid gray"}}>
      3.510
    </td>
    <td style={{border:"1px solid gray"}}>
      17.55
    </td>
    <td style={{border:"1px solid gray"}}>
      45.00
    </td>
    <td style={{border:"1px solid gray"}}>
      789.75
    </td>
    <td style={{border:"1px solid gray"}}>
      CPF
    </td>
    <td style={{border:"1px solid gray"}} >
      3.510
    </td>
    <td style={{border:"1px solid gray"}}>
      17.55
    </td>
    <td style={{border:"1px solid gray"}}>
      75.00
    </td>
    <td style={{border:"1px solid gray"}}>
      1,316.25
    </td>
  </tr>

  <tr style={{border:"1px solid gray"}}>
    <td style={{border:"1px solid gray"}} scope="row">
      Ruby Mani
    </td>
    <td style={{border:"1px solid gray"}}>
      11.670
    </td>
    <td style={{border:"1px solid gray"}}>
      58.35
    </td>
    <td style={{border:"1px solid gray"}}>
      72.00
    </td>
    <td style={{border:"1px solid gray"}}>
      4,201.20
    </td>
    <td style={{border:"1px solid gray"}}>
      Ruby Mani
    </td>
    <td style={{border:"1px solid gray"}} >
      11.400
    </td>
    <td style={{border:"1px solid gray"}}>
      57.00
    </td>
    <td style={{border:"1px solid gray"}}>
      95.00
    </td>
    <td style={{border:"1px solid gray"}}>
      5,415.00
    </td>
  </tr>
  <tr style={{border:"1px solid gray"}}>
    <td style={{border:"1px solid gray"}} scope="row">
      CPS
    </td>
    <td style={{border:"1px solid gray"}}>
      2.650
    </td>
    <td style={{border:"1px solid gray"}}>
      13.25
    </td>
    <td style={{border:"1px solid gray"}}>
      45.00
    </td>
    <td style={{border:"1px solid gray"}}>
      596.25
    </td>
    <td style={{border:"1px solid gray"}}>
      CPS
    </td>
    <td style={{border:"1px solid gray"}} >
      2.650
    </td>
    <td style={{border:"1px solid gray"}}>
      13.25
    </td>
    <td style={{border:"1px solid gray"}}>
      80.00
    </td>
    <td style={{border:"1px solid gray"}}>
      1,060.00
    </td>
  </tr>
  <tr style={{border:"1px solid gray"}}>
    <td style={{border:"1px solid gray"}} scope="row">
      0
    </td>
    <td style={{border:"1px solid gray"}}>

    </td>
    <td style={{border:"1px solid gray"}}>

    </td>
    <td style={{border:"1px solid gray"}}>

    </td>
    <td style={{border:"1px solid gray"}}>

    </td>
    <td style={{border:"1px solid gray"}}>
      Making
    </td>
    <td style={{border:"1px solid gray"}} >
      38.982
    </td>
    <td style={{border:"1px solid gray"}}>
      -
    </td>
    <td style={{border:"1px solid gray"}}>
      80.00
    </td>
    <td style={{border:"1px solid gray"}}>
      3,118.56
    </td>
  </tr> */}

                          <tr style={{ border: "1px solid gray" }} className="text-danger">
                            <th style={{ border: "1px solid gray" }} scope="row">
                              Total
                            </th>
                            <td style={{ border: "1px solid gray" }}>
                              {finishtotal.costtotalWtingr}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {finishtotal.costtotalWtinct}
                            </td>
                            <td style={{ border: "1px solid gray" }}>

                            </td>
                            <td style={{ border: "1px solid gray" }} colSpan="2">
                              {finishtotal.costtotalamount}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              Total
                            </td>
                            <td style={{ border: "1px solid gray" }} >
                              {finishtotal.selltotalWtingr}
                            </td>
                            <td style={{ border: "1px solid gray" }}>
                              {finishtotal.selltotalWtinct}
                            </td>
                            <td style={{ border: "1px solid gray" }}>

                            </td>
                            <td style={{ border: "1px solid gray" }} colSpan="2">
                              {finishtotal.selltotalamount}
                            </td>
                          </tr>

                          {/* <tr style={{border:"1px solid gray"}} className="text-danger">
    <th style={{border:"1px solid gray"}} colSpan="5">Mala</th>
    <th style={{border:"1px solid gray"}} colSpan="5">Mala</th>
  </tr>

  <tr style={{border:"1px solid gray"}}>
    <td style={{border:"1px solid gray"}} scope="row">
      40 Ruby Mani
    </td>
    <td style={{border:"1px solid gray"}}>
      52.900
    </td>
    <td style={{border:"1px solid gray"}}>
      264.50
    </td>
    <td style={{border:"1px solid gray"}}>
      72.00
    </td>
    <td style={{border:"1px solid gray"}}>
      19,044.00
    </td>
    <td style={{border:"1px solid gray"}}>
      Ruby Mani
    </td>
    <td style={{border:"1px solid gray"}} >
      52.900
    </td>
    <td style={{border:"1px solid gray"}}>
      264.50
    </td>
    <td style={{border:"1px solid gray"}}>
      95.00
    </td>
    <td style={{border:"1px solid gray"}}>
      25,127.50
    </td>
  </tr>
  <tr style={{border:"1px solid gray"}}>
    <td style={{border:"1px solid gray"}} scope="row">
      15 CPS
    </td>
    <td style={{border:"1px solid gray"}}>
      2.000
    </td>
    <td style={{border:"1px solid gray"}}>
      1.00
    </td>
    <td style={{border:"1px solid gray"}}>
      45.00
    </td>
    <td style={{border:"1px solid gray"}}>
      450.00
    </td>
    <td style={{border:"1px solid gray"}}>
      CPS
    </td>
    <td style={{border:"1px solid gray"}} >
      2.000
    </td>
    <td style={{border:"1px solid gray"}}>
      13.00
    </td>
    <td style={{border:"1px solid gray"}}>
      80.00
    </td>
    <td style={{border:"1px solid gray"}}>
      800.00
    </td>
  </tr>
  <tr style={{border:"1px solid gray"}}>
    <td style={{border:"1px solid gray"}} scope="row">

    </td>
    <td style={{border:"1px solid gray"}}>
      -
    </td>
    <td style={{border:"1px solid gray"}}>
      -
    </td>
    <td style={{border:"1px solid gray"}}>
      -
    </td>
    <td style={{border:"1px solid gray"}}>
      -
    </td>
    <td style={{border:"1px solid gray"}}>
      -
    </td>
    <td style={{border:"1px solid gray"}} >
      -
    </td>
    <td style={{border:"1px solid gray"}}>
      -
    </td>
    <td style={{border:"1px solid gray"}}>
      -
    </td>
    <td style={{border:"1px solid gray"}}>
      -
    </td>
  </tr>
  <tr style={{border:"1px solid gray"}}>
    <td style={{border:"1px solid gray"}} colSpan="4" className="text-end text-danger">
      Total
    </td>
    <td style={{border:"1px solid gray"}} className="text-end text-danger">
      19,494.00
    </td>
    <td style={{border:"1px solid gray"}} colSpan="4" className="text-end text-danger">
      Total
    </td>
    <td style={{border:"1px solid gray"}} className="text-end text-danger">
      25,927.50
    </td>
  </tr>
  <tr style={{border:"1px solid gray"}}>
    <td style={{border:"1px solid gray"}} colSpan="4" className="text-end text-danger">
      Grand Total
    </td>
    <td style={{border:"1px solid gray"}} className="text-end text-danger">
      152,936.20
    </td>
    <td style={{border:"1px solid gray"}} colSpan="4" className="text-end text-danger">
      Grand Total
    </td>
    <td style={{border:"1px solid gray"}} className="text-end text-danger">
      257,550.31
    </td>
  </tr> */}

                        </tbody>
                      </Table>
                    </div>

                  </CardBody>
                </Card>
              </Col>

            </Row>
          </CardBody>
        </Card>

      </Fragment>
    </div>
  )
}

export default Stage1