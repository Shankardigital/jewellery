// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import Prism from 'prismjs'

// ** Custom Components
import Card from '@components/card-snippet'
import BreadCrumbs from '@components/breadcrumbs'
import { Row, Col, CardText, Table, Button, Badge, Modal, ModalHeader, Form, ModalBody, ModalFooter, Label, InputBadge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Input } from 'reactstrap'
import { MoreVertical, Edit, Trash, Delete } from 'react-feather'
import ReactPaginate from 'react-paginate'
import toast from 'react-hot-toast'
import axios from "axios"


// // ** Demo Components
// import DividerText from './DividerText'
// import DividerIcons from './DividerIcons'
// import DividerStyle from './DividerStyle'
// import DividerColors from './DividerColors'
// import DividerDefault from './DividerDefault'
// import DividerPosition from './DividerPosition'

// // ** Source Code
// import {
//   dividerIcon,
//   dividerText,
//   dividerStyle,
//   dividerColors,
//   dividerDefault,
//   dividerPosition
// } from './DividerSourceCode'

const Divider = () => {
  const [formModal, setFormModal] = useState(false)

  const [formModal1, setFormModal1] = useState(false)


  // const [formModal, setFormModal] = useState(false)
  // const modelopen = setFormModal(true)
  const [customer, setcustomer] = useState([])
  const [actitm, setactitm] = useState([])
  const [forms, setforms] = useState([])
  console.log(forms)
  const [forms1, setforms1] = useState([])
  const [forms0, setforms0] = useState("")
  const [forms3, setforms3] = useState("")
  console.log(forms0)

  const [forms2, setforms2] = useState([])
  console.log(forms2)

  // const gets = localStorage.getItem("userData")
  // const data1 = JSON.parse(gets)
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


  const handleChange0 = (e) => {
    const newadmin = { ...forms1 }
    newadmin[e.target.name] = e.target.value
    setforms1(newadmin)
    const count = forms1.qtCt * e.target.value
    console.log(count)
    setforms0(count)
  }
  const handleChange01 = (e) => {
    const newadmin = { ...forms1 }
    newadmin[e.target.name] = e.target.value
    setforms1(newadmin)
    const count = forms1.qtAmount * e.target.value
    console.log(count)
    setforms0(count)
  }
  const handleChange3 = (e) => {
    const newadmin = { ...forms2 }
    newadmin[e.target.name] = e.target.value
    setforms2(newadmin)
    const count = forms2.qtCt * e.target.value
    console.log(count)
    setforms3(count)
  }
  const handleChange4 = (e) => {
    const newadmin = { ...forms2 }
    newadmin[e.target.name] = e.target.value
    setforms2(newadmin)
    const count = forms2.qtAmount * e.target.value
    console.log(count)
    setforms3(count)
  }

  const handleChange2 = (e) => {
    const newadmin = { ...forms2 }
    newadmin[e.target.name] = e.target.value
    setforms2(newadmin)
  }

  const profiledet = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/stonestorage/getallstonestorages",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setcustomer(res.data.stoneStorageResult)
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

  const activeitems = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/stonestorage/allactiveitemtype",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setactitm(res.data.itemTypeResult)
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


  const adddepart = () => {
    const token = datas
    const params = {
      pkNo: forms1.pkNo,
      itemTypeId: forms1.itemTypeId,
      pieces: forms1.pieces,
      qtGrms: forms1.qtGrms,
      qtCt: forms1.qtCt,
      qtAmount: forms1.qtAmount,
      totalAmount: forms0
    }
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/stonestorage/addstonestorage", params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        setforms1("")
        setforms0("")
        setFormModal(false)
        profiledet()
        // setcustomer(res.data.departmentResult)
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

  const deprt = (e) => {
    e.preventDefault()
    adddepart()
  }

  const editdepart = () => {
    const token = datas
    const fmid = forms2._id
    const params = {
      pkNo: forms2.pkNo,
      itemTypeId: forms2.itemTypeId,
      pieces: forms2.pieces,
      qtGrms: forms2.qtGrms,
      qtCt: forms2.qtCt,
      qtAmount: forms2.qtAmount,
      status: forms2.status,
      totalAmount: forms3
    }
    console.log(token)
    axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/stonestorage/editstonestorage/${fmid}`, params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        setforms1("")
        setforms3("")
        setFormModal1(false)
        profiledet()
        // setcustomer(res.data.departmentResult)
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

  const eddeprt = (e) => {
    e.preventDefault()
    editdepart()
  }

  const deldepart = (data) => {
    const token = datas
    const fmid1 = data._id
    console.log(token)
    axios.delete(`http://103.186.185.77:5023/omsanthoshjewellery/admin/stonestorage/deletestonestoragebyid/${fmid1}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        // setforms1("")
        profiledet()
        // setcustomer(res.data.departmentResult)
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

  // const delteprt = (e) => {
  //     e.preventDefault()
  //     deldepart(e)
  // }


  const manageDelete = (data) => {
    const confirmBox = window.confirm("Do you really want to Delete?")
    if (confirmBox === true) {
      deldepart(data)
    }
  }

  const datavalu = (data) => {
    setforms2(data)
    setforms3(data.totalAmount)
    setFormModal1(true)
  }

  const custsearch = (e) => {
    const myUser = { ...forms }
    myUser[e.target.name] = e.target.value
    setforms(myUser)

    const token = datas
    console.log(token)
    axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/stonestorage/searchstonestoragebyname?searchQuery=${e.target.value}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setcustomer(res.data.stoneStorageResult)
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


  useEffect(() => {
    profiledet()
    activeitems()
  }, [])

  const [listPerPage] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = customer.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(customer.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  // const clearform = {
  //     setforms1({
  //         "forms1":""
  //     })
  // }
  const clear = () => {
    setforms0("")
    setFormModal(false)
  }

  return (
    <Fragment>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <BreadCrumbs data={[{ title: 'Stone Storage' }]} />
        
        {access.stonest === true || adrole === "admin" ? (
          <Card title="Stone Storage"><Row className='mb-1'>
            <Col md={4}>
              <Input
                name="search"
                value={forms.search}
                onChange={custsearch}
                type='text' placeholder="Search..."></Input></Col>
            <Col>
              <div style={{ float: "right" }}>
                <Button color='primary' onClick={() => setFormModal(!formModal)}>Add Stone</Button>
              </div></Col></Row>
            <Row>
              <Col>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Packet No</th>
                      <th>Item</th>
                      <th>Pieces</th>
                      <th>Quantity</th>
                      <th >Total Amount</th>
                      <th>Status</th>
                      <th style={{ width: "160px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lists.map((data, key) => (
                      <tr key={key} >

                        <td>{((pageNumber - 1) * 10) + key + 11}</td>
                        <td>{data.pkNo}</td>
                        <td>{data.itemType}</td>
                        <td>{data.pieces}</td>
                        <td>{data.qtCt}</td>
                        <td>{data.totalAmount}</td>
                        {/* <td>{data.status}</td> */}
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
                          <Button onClick={() => manageDelete(data)} style={{ margin: "5px" }} outline size='sm' color='danger' > <i class="fa fa-trash" aria-hidden="true"></i></Button>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
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
            </Row>
          </Card>
        ) : (
          <Card>
            <h5 className='text-center'>You don't have permission to access</h5>
          </Card>
        )}

        <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <Form onSubmit={(e) => { deprt(e) }} >
            <ModalHeader toggle={() => setFormModal(!formModal)}> Add </ModalHeader>
            <ModalBody>

              <Row>
                <Col md="6">
                  <Label>
                    Pk No
                  </Label>
                  <Input required name='pkNo' onChange={(e) => { handleChange(e) }} type="text" placeholder="Pk No" className="form-control mb-1" />

                  <Label>
                    Pieces
                  </Label>
                  <Input required name='pieces' onChange={(e) => { handleChange(e) }} type="number" placeholder="Enter Pieces" className="form-control mb-1" />

                  <Label>
                    Qty In Ct
                  </Label>
                  <Input required name='qtCt' onChange={(e) => { handleChange01(e) }} type="number" placeholder="Enter  Qty In Ct" className="form-control mb-1" />
                  <Label>
                    Total Amount
                  </Label>
                  <Input disabled
                    value={forms0}
                    required name='totalAmount' type="number" placeholder=" Total Amount" className="form-control mb-1" />
                </Col>
                <Col md="6">
                  <Label>
                    Item Type
                  </Label>
                  <Input required name='itemTypeId' onChange={(e) => { handleChange(e) }} type="select" id="select-basic" className="form-control mb-1">
                    <option value="">Select Item</option>
                    {actitm.map((data) => (
                      <option value={data._id}>{data.itemName}</option>
                    ))}
                    {/* <option value="Dimond">Dimond</option>
                  <option value="Ruby">Ruby</option>
                  <option value="Fd">Fd</option> */}
                  </Input>

                  <Label>
                    Qty In Gr
                  </Label>
                  <Input required name='qtGrms' onChange={(e) => { handleChange(e) }} type="text" placeholder="Enter Qty In Gr" className="form-control mb-1" />

                  <Label>
                    Qty per Amount
                  </Label>
                  <Input required name='qtAmount' onChange={(e) => { handleChange0(e) }} type="text" placeholder=" Qty per Amount" className="form-control mb-1" />

                </Col>
              </Row>

            </ModalBody>
            <ModalFooter>
              <Button color='success' type='submit'
              //  onClick={() => setFormModal(!formModal)}
              >
                Submit
              </Button>{' '}
              <Button color='danger' type='button'
                onClick={() => clear()}

              >
                Cancel
              </Button>{' '}
            </ModalFooter>
          </Form>
        </Modal>

        <Modal isOpen={formModal1} toggle={() => setFormModal1(!formModal1)} className='modal-dialog-centered'>
          <Form onSubmit={(e) => { eddeprt(e) }} >
            <ModalHeader toggle={() => setFormModal1(!formModal1)}>Edit</ModalHeader>
            <ModalBody>

              <Row>
                <Col md="6">
                  <Label>
                    Pk No
                  </Label>
                  <Input value={forms2.pkNo} required name='pkNo' onChange={(e) => { handleChange2(e) }} type="text" placeholder="Pk No" className="form-control mb-1" />

                  <Label>
                    Pieces
                  </Label>
                  <Input value={forms2.pieces} required name='pieces' onChange={(e) => { handleChange2(e) }} type="number" placeholder="Enter Pieces" className="form-control mb-1" />

                  <Label>
                    Qty In Ct
                  </Label>
                  <Input value={forms2.qtCt} required name='qtCt' onChange={(e) => { handleChange4(e) }} type="number" placeholder="Enter  Qty In Ct" className="form-control mb-1" />
                  <Label>
                    Total Amount
                  </Label>
                  <Input disabled value={forms3} required name='totalAmount' onChange={(e) => { handleChange2(e) }} type="number" placeholder=" Total Amount" className="form-control mb-1" />
                </Col>
                <Col md="6">
                  <Label>
                    Item Type
                  </Label>
                  <Input value={forms2.itemTypeId} required name='itemTypeId' onChange={(e) => { handleChange2(e) }} type="select" id="select-basic" className="form-control mb-1">
                    <option value="">Select Item</option>
                    {actitm.map((data) => (
                      <option value={data._id}>{data.itemName}</option>
                    ))}
                  </Input>

                  <Label>
                    Qty In Gr
                  </Label>
                  <Input value={forms2.qtGrms} required name='qtGrms' onChange={(e) => { handleChange2(e) }} type="number" placeholder="Enter Qty In Gr" className="form-control mb-1" />

                  <Label>
                    Qty per Amount
                  </Label>
                  <Input value={forms2.qtAmount} required name='qtAmount' onChange={(e) => { handleChange3(e) }} type="number" placeholder=" Qty per Amount" className="form-control mb-1" />

                  <Label>
                    Status
                  </Label>
                  <select value={forms2.status} required name='status' onChange={(e) => { handleChange2(e) }} className="form-select mb-1" >
                    <option value="">Select</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>

                </Col>
              </Row>


            </ModalBody>
            <ModalFooter>
              <Button color='success' type='submit'
              //  onClick={() => setFormModal(!formModal)}
              >
                Submit
              </Button>{' '}
              <Button color='danger' type='button'
                onClick={() => setFormModal1(!formModal1)}
              >
                Cancel
              </Button>{' '}
            </ModalFooter>
          </Form>
        </Modal>

        {/* <Row>
      <Col sm='12'>
        <Card title='Uncontrolled' code={accordionControlled}>
          <CardText>You may want to open one item at a time, for that you can use accordion.</CardText>
          <AccordionUncontrolled />
        </Card>
      </Col>
      <Col sm='12'>
        <Card title='Controlled' code={accordionControlled}>
          <CardText>Manage a state to control your collapse component.</CardText>
          <AccordionControlled />
        </Card>
      </Col>
      <Col sm='12'>
        <Card code={accordionWithoutArrow} title='Accordion Without Arrow'>
          <CardText>
            Use class <code>.accordion-without-arrow</code> class with <code>&lt;Accordion&gt;</code> for accordion
            without arrow.
          </CardText>
          <AccordionWithoutArrow />
        </Card>
      </Col>
      <Col sm='12'>
        <Card title='Border' code={accordionBorder}>
          <CardText>
            Use class <code>.accordion-border</code> class with your accordion to create a bordered accordion.
          </CardText>
          <AccordionBorder />
        </Card>
      </Col>
      <Col sm='12'>
        <Card title='Margin' code={accordionMargin}>
          <CardText>
            Use class <code>.accordion-margin</code> class with your accordion to create a accordion with margin.
          </CardText>
          <AccordionMargin />
        </Card>
      </Col>
      <Col sm='12'>
        <Card title='Hover' code={accordionHover}>
          <AccordionHover />
        </Card>
      </Col>
    </Row> */}
      </div>
    </Fragment>
  )
}
export default Divider
