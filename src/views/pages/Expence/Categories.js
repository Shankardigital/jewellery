// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardHeader, CardBody, Badge, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import toast from 'react-hot-toast'
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import html2canvas from "html2canvas"
import pdfMake from "pdfmake"

// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Catogery = () => {

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const [modal1, setModal1] = useState(false)
  const toggle1 = () => setModal1(!modal)

  const [customer, setcustomer] = useState([])
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

  const catgerory = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/category/getAllCategory",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setcustomer(res.data.categoryResult)
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
    const params = {
      categoryName: forms1.categoryName,
      code: forms1.code,
      note: forms1.note
    }
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/category/addcategory", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        setforms1("")
        catgerory()
        setModal(false)
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
    const params = {
      categoryName: forms2.categoryName,
      code: forms2.code,
      note: forms2.note,
      status: forms2.status
    }
    console.log(token)
    axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/category/editcategory/${fmid}`, params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        setforms1("")
        setModal1(false)
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

  // const deldepart = (data) => {
  //   const token = datas
  //   const fmid1 = data._id
  //   console.log(token)
  //   axios.delete(`http://103.186.185.77:5023/omsanthoshjewellery/admin/department/deletedepartmentbyid/${fmid1}`,
  //     {
  //       headers: { Authorization: `Bearer ${token}` }
  //     }, {}
  //   ).then((res) => {
  //     if (res.status === 200) {
  //       console.log(res.data)
  //       toast.success(res.data.message)
  //       // setforms1("")
  //       catgerory()
  //       // setcustomer(res.data.departmentResult)
  //     }
  //   },
  //     (error) => {
  //       if (error.response && error.response.status === 400) {
  //         toast.error(error.response.data.message)
  //         console.log(error.data.message)

  //       }
  //     }
  //   )
  // }

  // const delteprt = (e) => {
  //     e.preventDefault()
  //     deldepart(e)
  // }


  // const manageDelete = (data) => {
  //   const confirmBox = window.confirm("Do you really want to Delete?")
  //   if (confirmBox === true) {
  //     deldepart(data)
  //   }
  // }

  const datavalu = (data) => {
    setforms2(data)
    setModal1(true)
  }

  const custsearch = (e) => {
    const myUser = { ...forms }
    myUser[e.target.name] = e.target.value
    setforms(myUser)

    const token = datas
    console.log(token)
    axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/category/getcategorybysearch?searchQuery=${e.target.value}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setcustomer(res.data.categoryResult)
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
    <Fragment>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <Breadcrumbs title='Expense' data={[{ title: 'Categories' }]} />
        <Row>

          <Col sm='12'>
            {access.categories === true || adrole === "admin" ? (
              <Card>
                <div>
                  {/* <Button className='m-1' color='danger'><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</Button> */}
                  {/* <Button className='m-1' color='success'> <i class="fa fa-file-excel-o" aria-hidden="true"></i> EXCEL</Button> */}

                </div>

                <CardBody>
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
                            <button onClick={genPdf} style={{ margin: "4px" }} class="btn btn-outline-danger" type="button"><i class="fa fa-print" aria-hidden="true"></i></button>
                            <button style={{ margin: "4px" }} onClick={toggle} class="btn btn-outline-info" type="button">Create <i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Table className='mb-4 mt-1' size='sm' responsive bordered hover id="empTable">
                    <thead>

                      <tr className='text-center'>
                        <th>
                          S No
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Code
                        </th>
                        <th>
                          Note
                        </th>
                        <th>
                          Status
                        </th>
                        <th style={{ width: "100px" }} >
                          Action
                        </th>
                        {/* <th>
                                            Kharigar Name
                                        </th>
                                        <th>
                                            OB Qty Ct
                                        </th>
                                        <th>
                                            Receipt Qty Ct
                                        </th>
                                        <th>
                                            Issue Qty Ct
                                        </th>
                                        <th>
                                            CB Qty Ct
                                        </th> */}
                      </tr>
                    </thead>
                    <tbody className='text-center'>
                      {lists.map((data, key) => (
                        <tr key={key} >
                          <td>{((pageNumber - 1) * 10) + key + 11}</td>
                          <td>{data.categoryName}</td>
                          <td>{data.code}</td>
                          <td>{data.note}</td>
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
                </CardBody>
              </Card>
            ) : (
              <Card>
                <h5 className='text-center p-2'>You don't have permission to access</h5>
              </Card>
            )}
          </Col>
        </Row>

        <Modal
          size='sm'
          isOpen={modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={toggle}
        // className={className}
        >
          <Form onSubmit={(e) => { deprt(e) }}>
            <ModalHeader toggle={toggle}>Create New Category</ModalHeader>
            <ModalBody>

              <div>
                <Label>
                  Name
                </Label>

                <Input required name='categoryName' onChange={(e) => { handleChange(e) }} type='text' className='form-control' placeholder='Enter Name' />
                <Label className='mt-1'>
                  Code
                </Label>
                <Input required name='code' onChange={(e) => { handleChange(e) }} type='text' className='form-control' placeholder='Enter Code' />
                <Label className='mt-1'>
                  Note
                </Label>
                <textarea required name='note' onChange={(e) => { handleChange(e) }} type='text' className='form-control' placeholder='Write Your Note ' />
              </div>

            </ModalBody>
            <ModalFooter>
              <Button type='submmit' color="success">
                Submit
              </Button>{' '}
              <Button color="danger" outline onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

        <Modal
          size='sm'
          isOpen={modal1}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={toggle1}
        // className={className}
        >
          <Form onSubmit={(e) => { eddeprt(e) }} >
            <ModalHeader toggle={() => setModal1(!modal1)}>Edit Expense Category</ModalHeader>
            <ModalBody>
              <div>
                <Label>
                  Name
                </Label>
                <Input required name='categoryName' value={forms2.categoryName} onChange={(e) => { handleChange2(e) }} type='text' className='form-control' placeholder='Enter Name' />
                <Label className='mt-1'>
                  Code
                </Label>
                <Input required name='code' value={forms2.code} onChange={(e) => { handleChange2(e) }} type='text' className='form-control' placeholder='Enter Code' />
                <Label className='mt-1'>
                  Status
                </Label>
                <select required name='status' value={forms2.status} onChange={(e) => { handleChange2(e) }} className='form-select'>
                  <option value="">Select</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <Label className='mt-1'>
                  Note
                </Label>
                <textarea required name='note' value={forms2.note} onChange={(e) => { handleChange2(e) }} type='text' className='form-control' placeholder='Write Your Note ' />
              </div>

            </ModalBody>
            <ModalFooter>
              <Button color="success" type='submit'>
                Submit
              </Button>{' '}
              <Button color="danger" outline onClick={() => { setModal1(false) }}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

      </div>
    </Fragment>
  )
}
export default Catogery
