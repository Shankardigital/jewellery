// ** React Imports
import { Fragment, useState, useEffect } from "react"

// ** Reactstrap Imports
import { Card, Table, CardBody, Button, Row, Col, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, Label, Form } from 'reactstrap'
import { Check, Briefcase, Plus } from 'react-feather'
// ** Demo Components
// import gold from "../../../assets/images/gold.jpg"
import qr from "../../../assets/images/qr.png"
// import smlimg from "../../../assets/images/avatars/8-small.png"
import { Link, useNavigate } from 'react-router-dom'
import Breadcrumbs from '@components/breadcrumbs'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import toast from 'react-hot-toast'
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import html2canvas from "html2canvas"
import pdfMake from "pdfmake"

// ** Custom Components
// import ExtensionsHeader from "@components/extensions-header"
// import gold4 from "../../../assets/images/gold4.jpg"
// import gold6 from "../../../assets/images/gold6.jpg"
// import gold5 from "../../../assets/images/gold5.jpg"

const Expencelist = () => {

  const [centeredModal, setCenteredModal] = useState(false)
  const [show, setshow] = useState(false)
  const [show1, setshow1] = useState(false)

  const [customer, setcustomer] = useState([])
  const [catg, setcatg] = useState([])
  const [subcat, setsubcat] = useState([])
  const [forms, setforms] = useState([])
  const [forms1, setforms1] = useState([])
  const [forms2, setforms2] = useState([])
  console.log(forms2)

  const datas = localStorage.getItem("accessToken")
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  const adrole = data1.role
  const access = data1.rolesPermissions
  // const fixedValue = []
  const handleChange = (e) => {
    const newadmin = { ...forms1 }
    newadmin[e.target.name] = e.target.value
    setforms1(newadmin)
  }
  const handleChange2 = (e) => {
    const newadmin = { ...forms2 }
    newadmin[e.target.name] = e.target.value
    setforms2(newadmin)
  }

  const [Files, setFiles] = useState("")

  const changeHandler = (e) => {
    setFiles(e.target.files)
  }
  const [Files1, setFiles1] = useState("")

  const changeHandler1 = (e) => {
    setFiles1(e.target.files)
  }

  const catgerory = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/expenseList/getAllexpenseList",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setcustomer(res.data.expenseListResult)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const catge = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/expenseList/getActiveCategoryList",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setcatg(res.data.categoryResult)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }
  const subcatge = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/expenseList/getActiveSubCategoryList",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setsubcat(res.data.categoryResult)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const adddepart = () => {
    const token = datas
    const dataArray = new FormData()
      dataArray.append("date", forms1.date)
      dataArray.append("expenseReason", forms1.expenseReason)
      dataArray.append("categoryId", forms1.categoryId)
      dataArray.append("subCategoryId", forms1.subCategoryId)
      dataArray.append("account", forms1.account)
      dataArray.append("availableBalance", forms1.availableBalance)
      dataArray.append("amount", forms1.amount)
      dataArray.append("chequeNo", forms1.chequeNo)
      dataArray.append("voucherNo", forms1.voucherNo)
      dataArray.append("note", forms1.note)

      for (let i = 0; i < Files.length; i++) {
        dataArray.append("image", Files[i])
      }
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/expenseList/addexpenseList", dataArray,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        setforms1("")
        catgerory()
        setshow(false)
        // setcustomer(res.data.departmentResult)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const deprt = (e) => {
    e.preventDefault()
    adddepart()
  }

  const editdepart = () => {
    const token = datas
    const fmid = forms2._id
    const dataArray = new FormData()
      dataArray.append("date", forms2.date)
      dataArray.append("expenseReason", forms2.expenseReason)
      dataArray.append("categoryId", forms2.categoryId)
      dataArray.append("subCategoryId", forms2.subCategoryId)
      dataArray.append("account", forms2.account)
      dataArray.append("availableBalance", forms2.availableBalance)
      dataArray.append("amount", forms2.amount)
      dataArray.append("chequeNo", forms2.chequeNo)
      dataArray.append("voucherNo", forms2.voucherNo)
      dataArray.append("note", forms2.note)
      dataArray.append("status", forms2.status)

      for (let i = 0; i < Files1.length; i++) {
        dataArray.append("image", Files1[i])
      } 
    console.log(token)
    axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/expenseList/editexpenseList/${fmid}`, dataArray,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        setforms1("")
        setshow1(false)
        catgerory()
        // setcustomer(res.data.departmentResult)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const eddeprt = (e) => {
    e.preventDefault()
    editdepart()
  }

  const datavalu = (data) => {
    setforms2(data)
    setshow1(true)
  }
  const navigate = useNavigate()

  const datavalu1 = (data) => {
    sessionStorage.setItem("expenid", data._id)
    navigate("/expenceview")
  }

  const custsearch = (e) => {
    const myUser = { ...forms }
    myUser[e.target.name] = e.target.value
    setforms(myUser)

    const token = datas
    console.log(token)
    axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/expenseList/expenseListbysearch?searchQuery=${e.target.value}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setcustomer(res.data.expenseListResult)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }


  useEffect(() => {
    catgerory()
    catge()
    subcatge()
  }, [])

  const [listPerPage] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = customer.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(customer.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  const genPdf = () => {
    html2canvas(document.getElementById("empTable")).then((canvas) => {
      const data = canvas.toDataURL()
      const pdfExportSetting = {
        content: [
          {
            image: data,
            width: 500
          }
        ]
      }
      pdfMake.createPdf(pdfExportSetting).download("file.pdf")
    })
  }

  return (
    <Fragment >
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <Breadcrumbs title='Expense' data={[{ title: 'Expense List' }]} />

        {show ? (
          <Card>
            <CardBody>
              <h5>Create Expense</h5>
              <Form onSubmit={(e) => { deprt(e) }}>
                <Row>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Date
                    </Label>
                    <Input  required name='date' onChange={(e) => { handleChange(e) }} type="date" className="form-control" />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Expense Reason
                    </Label>
                    <Input required name='expenseReason' onChange={(e) => { handleChange(e) }} type="text" className="form-control" placeholder="Expense Reason" />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Category Name
                    </Label>
                    <select required name='categoryId' onChange={(e) => { handleChange(e) }} type="text" className="form-select" placeholder="Expense Reason" >
                      <option value="">Select</option>
                      {catg.map((data) => (
                      <option value={data._id}>{data.categoryName}</option>
                      ))}
                    </select>
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Sub-category Name
                    </Label>
                    <select required name='subCategoryId' onChange={(e) => { handleChange(e) }}  type="text" className="form-select" placeholder="Expense Reason" >
                      <option value="">Select</option>
                      {subcat.map((data) => (
                      <option value={data._id}>{data.subcategoryName}</option>
                      ))}
                    </select>
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Account
                    </Label>
                    <Input required name='account' onChange={(e) => { handleChange(e) }}  type="text" className="form-control" placeholder="Account " />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Available Balance
                    </Label>
                    <Input required name='availableBalance' onChange={(e) => { handleChange(e) }}  type="text" className="form-control" placeholder="Available Balance " />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Amount
                    </Label>
                    <Input required name='amount' onChange={(e) => { handleChange(e) }}  type="text" className="form-control" placeholder="Amount " />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Cheque No
                    </Label>
                    <Input required name='chequeNo' onChange={(e) => { handleChange(e) }}  type="text" className="form-control" placeholder="Cheque No " />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Voucher No
                    </Label>
                    <Input required name='voucherNo' onChange={(e) => { handleChange(e) }}  type="text" className="form-control" placeholder="Voucher No" />
                  </Col>
                  {/* <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Status
                    </Label>
                    <select className="form-select">
                      <option value="">Select</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </Col> */}
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Note
                    </Label>
                    <Input required name='note' onChange={(e) => { handleChange(e) }}  type="text" className="form-control" placeholder="Note" />
                  </Col>

                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Image
                    </Label>
                    <Input   onChange={changeHandler} name='image' type="file" className="form-control"  />
                  </Col>
                  

                  <div className="text-end mt-1">
                    {/* <Row style={{ marginTop: "30px" }}> */}
                    <Col>
                      <Button style={{ margin: "5px" }} type="submit" outline color="success" >Submit <i class="fa fa-check-circle-o" aria-hidden="true"></i></Button>
                      {/* </Col>
                    <Col> */}
                      <Button style={{ margin: "5px" }} onClick={() => { setshow(!show) }} outline color="danger" >Cancel <i class="fa fa-times-circle-o" aria-hidden="true"></i></Button></Col>
                    {/* </Row> */}
                  </div>
                </Row>
              </Form>
            </CardBody>
          </Card>
        ) : ("")}

        {show1 ? (
          <Card>
            <CardBody>
              <h5>Edit Expense</h5>
              <Form onSubmit={(e) => { eddeprt(e) }}>
              <Row>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Date
                    </Label>
                    <Input value={forms2.date}  required name='date' onChange={(e) => { handleChange2(e) }} type="date" className="form-control" />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Expense Reason
                    </Label>
                    <Input  value={forms2.expenseReason} required name='expenseReason' onChange={(e) => { handleChange2(e) }} type="text" className="form-control" placeholder="Expense Reason" />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Category Name
                    </Label>
                    <select value={forms2.categoryId} required name='categoryId' onChange={(e) => { handleChange2(e) }} className="form-select" >
                      <option value="">Select</option>
                      {catg.map((data) => (
                      <option value={data._id}>{data.categoryName}</option>
                      ))}
                    </select>
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Sub-category Name
                    </Label>
                    <select  value={forms2.subCategoryId}  required name='subCategoryId' onChange={(e) => { handleChange2(e) }}  type="text" className="form-select" placeholder="Expense Reason" >
                      <option value="">Select</option>
                      {subcat.map((data) => (
                      <option value={data._id}>{data.subcategoryName}</option>
                      ))}
                    </select>
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Account
                    </Label>
                    <Input value={forms2.account} required name='account' onChange={(e) => { handleChange2(e) }}  type="text" className="form-control" placeholder="Account " />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Available Balance
                    </Label>
                    <Input value={forms2.availableBalance} required name='availableBalance' onChange={(e) => { handleChange2(e) }}  type="text" className="form-control" placeholder="Available Balance " />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Amount
                    </Label>
                    <Input  value={forms2.amount} required name='amount' onChange={(e) => { handleChange2(e) }}  type="text" className="form-control" placeholder="Amount " />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Cheque No
                    </Label>
                    <Input  value={forms2.chequeNo} required name='chequeNo' onChange={(e) => { handleChange2(e) }}  type="text" className="form-control" placeholder="Cheque No " />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Voucher No
                    </Label>
                    <Input  value={forms2.voucherNo} required name='voucherNo' onChange={(e) => { handleChange2(e) }}  type="text" className="form-control" placeholder="Voucher No" />
                  </Col>
                  {/* <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Status
                    </Label>
                    <select className="form-select">
                      <option value="">Select</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </Col> */}
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Note
                    </Label>
                    <Input value={forms2.note} required name='note' onChange={(e) => { handleChange2(e) }}  type="text" className="form-control" placeholder="Note" />
                  </Col>

                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Image
                    </Label>
                    <Input   onChange={changeHandler1} name='image' type="file" className="form-control"  />
                  </Col>
                  <Col md={3}>
                    <Label className='form-label' for='date-time-picker'>
                      Status
                    </Label>
                    <select className="form-select" value={forms2.status}    onChange={(e) => { handleChange2(e) }} name='status'>
                      <option value="">Select</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </Col>

                  <div className="text-end mt-1">
                    {/* <Row style={{ marginTop: "30px" }}> */}
                    <Col>
                      <Button style={{ margin: "5px" }} type="submit" outline color="success" >Submit <i class="fa fa-check-circle-o" aria-hidden="true"></i></Button>
                      {/* </Col>
                    <Col> */}
                      <Button style={{ margin: "5px" }} onClick={() => { setshow1(!show1) }} outline color="danger" >Cancel <i class="fa fa-times-circle-o" aria-hidden="true"></i></Button></Col>
                    {/* </Row> */}
                  </div>
                </Row>
              </Form>
            </CardBody>
          </Card>
        ) : ("")}

        <Row>
        {access.expence === true || adrole === "admin" ? (
          <Card>
            <div >
              <Row>
                <Col md={12}>
                  <div style={{ float: "right" }}>
                    <div class="input-group m-1">
                      <input style={{ margin: "4px" }}
                       name="search"
                       value={forms.search}
                       onChange={custsearch}
                      type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <div class="input-group-append ">
                      <ReactHTMLTableToExcel
                            className="btn btn-outline-success fa fa-file-excel-o "
                            table="empTable"
                            filename="ReportExcel"
                            sheet="Sheet"
                            buttonText=""
                            style={{ color: "white" }}
                         />
                        {/* <button style={{ margin: "4px" }} class="btn btn-outline-success" type="button"><i class="fa fa-file-excel-o" aria-hidden="true"></i></button> */}
                        <button onClick={genPdf}  style={{ margin: "4px" }} class="btn btn-outline-danger" type="button"><i class="fa fa-print" aria-hidden="true"></i></button>
                        <button onClick={() => { setshow(!show) }} style={{ margin: "4px" }} class="btn btn-outline-info" type="button">Create <i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              {/* <Link to="/addghat"> <Button  className="m-1" color="primary">
          <i class="fa fa-plus-circle" aria-hidden="true"></i>  Add
            </Button></Link>
              <Button  className="m-1" style={{ float: "right" }} color="info">
                <i class="fa fa-filter" aria-hidden="true"></i>  Filter
              </Button>
              <Input style={{ width: "300px", float: "right" }} type="text" placeholder="Search..." className="form-control m-1" /> */}

            </div>
            <Table className="mb-4" size='sm' responsive bordered hover id="empTable">
              <thead>
                <tr className='text-center text-danger'>
                  <th >
                    S No
                  </th>
                  <th style={{ width: "100px" }}>
                    Date
                  </th>
                  <th>
                    Image
                  </th>
                  <th>
                    Expense Reason
                  </th>
                  <th  >
                    Category
                  </th>
                  <th  >
                    Sub Category
                  </th>
                  <th  >
                    Amount
                  </th>
                  <th  >
                    Account
                  </th>
                  <th  >
                    Status
                  </th>

                  <th style={{ width: "140px" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {lists.map((data, key) => (
                  <tr key={key} >
                    <td>{((pageNumber - 1) * 10) + key + 11}</td>
                    <td>{data.date}</td>
                    <td>
                      <img style={{width:"50px"}} src={`http://103.186.185.77:5023/${data.image}`}/>
                    </td>
                    <td>{data.expenseReason}</td>
                    <td>{data.categoryName}</td>
                    <td>{data.subCategoryName}</td>
                    <td>{data.amount}</td>
                    <td>{data.account}</td>
                    <td>{data.status === "active" ? (
                      <Badge pill color='light-success' className='me-1'>
                        Active
                      </Badge>

                    ) : (
                      <Badge pill color='light-primary' className='me-1'>
                        Inactive
                      </Badge>
                    )}</td>

                    <td>
                      <Button onClick={() => datavalu1(data)} style={{ margin: "5px" }} outline size='sm' color='info' ><i class="fa fa-eye" aria-hidden="true"></i></Button>
                      <Button onClick={() => datavalu(data)} style={{ margin: "5px" }} outline size='sm' color='success' > <i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                      {/* <Button onClick={() => manageDelete(data)} style={{ margin: "5px" }} outline size='sm' color='danger' > <i class="fa fa-trash" aria-hidden="true"></i></Button> */}

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
    <h5 className='text-center p-2'>You don't have permission to access</h5>
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

export default Expencelist
