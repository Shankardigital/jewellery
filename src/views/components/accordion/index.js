// // ** React Imports
// import { Fragment, useEffect, useState } from 'react'

// // ** Third Party Components
// import Prism from 'prismjs'

// // ** Custom Components
// import Card from '@components/card-snippet'
// import BreadCrumbs from '@components/breadcrumbs'

// // ** Reactstrap Imports
// import { Row, Col, CardText, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap'
// import { Edit, Trash } from 'react-feather'

// // ** Source Code
// // import {
// //   accordionHover,
// //   accordionBorder,
// //   accordionMargin,
// //   accordionControlled,
// //   accordionWithoutArrow
// // } from './AccordionSourceCode'

// // // ** Demo Components
// // import AccordionHover from './AccordionHover'
// // import AccordionBorder from './AccordionBorder'
// // import AccordionMargin from './AccordionMargin'
// // import AccordionControlled from './AccordionControlled'
// // import AccordionUncontrolled from './AccordionUncontrolled'
// // import AccordionWithoutArrow from './AccordionWithoutArrow'

// const Accordion = () => {
//   useEffect(() => {
//     Prism.highlightAll()
//   }, [])

//   const [formModal, setFormModal] = useState(false)

//   const [formModal1, setFormModal1] = useState(false)

//   return (
//     <Fragment>
//       <div
//         data-aos="fade-down"
//         data-aos-easing="linear"
//         data-aos-duration="1000">
//         <BreadCrumbs data={[{ title: 'Items' }]} />
//         <Card >
//           <Row className='mb-1'>
//             <Col md={4}>
//               <Input type='text' placeholder="search..." /></Col>
//             <Col>
//               <div style={{ float: "right" }}>
//                 <Button color='primary' onClick={() => setFormModal1(!formModal)}>Add Item</Button>
//                 </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <Table responsive>
//                 <thead>
//                   <tr>
//                     <th>S.No</th>
//                     <th>Item Type</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>1</td>
//                     <td>Dimond</td>
//                     <td>Active</td>
//                     <td> <Edit className='me-50' style={{ color: 'green' }} size={20} onClick={() => setFormModal1(!formModal1)} />
//                       <Trash className='me-50' style={{ color: 'red' }} size={20} /></td>
//                   </tr>
//                   <tr>
//                     <td>2</td>
//                     <td>Rubi</td>
//                     <td>Active</td>
//                     <td> <Edit className='me-50' style={{ color: 'green' }} size={20} onClick={() => setFormModal1(!formModal1)} />
//                       <Trash className='me-50' style={{ color: 'red' }} size={20} /></td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Col>
//           </Row>
//         </Card>

//         <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
//           <ModalHeader toggle={() => setFormModal(!formModal)}>Add</ModalHeader>
//           <ModalBody>
//             <div className='mb-2'>
//               <Label className='form-label' for='email'>
//                 Enter Item Name:
//               </Label>
//               <Input type='text' id='email' placeholder='Enter Item Name' />
//             </div>
//             <div className='mb-2'>
//               <Label className='form-label' for='password'>
//                 Status:
//               </Label>
//               <Input type='select' id='password' >
//                 <option>Active</option>
//                 <option>In Active</option></Input>
//             </div>
//           </ModalBody>
//           <ModalFooter>
//             <Button color='primary' onClick={() => setFormModal(!formModal)}>
//               Submit
//             </Button>{' '}
//           </ModalFooter>
//         </Modal>

//         <Modal isOpen={formModal1} toggle={() => setFormModal1(!formModal1)} className='modal-dialog-centered'>
//           <ModalHeader toggle={() => setFormModal1(!formModal1)}>Edit</ModalHeader>
//           <ModalBody>
//             <div className='mb-2'>
//               <Label className='form-label' for='email'>
//                 Enter Item Name:
//               </Label>
//               <Input type='text' id='email' placeholder='Enter Item Name' />
//             </div>
//             <div className='mb-2'>
//               <Label className='form-label' for='password'>
//                 Status:
//               </Label>
//               <Input type='select' id='password' >
//                 <option>Active</option>
//                 <option>In Active</option></Input>
//             </div>
//           </ModalBody>
//           <ModalFooter>
//             <Button color='primary' onClick={() => setFormModal1(!formModal1)}>
//               Submit
//             </Button>{' '}
//           </ModalFooter>
//         </Modal>

//         {/* <Row>
//         <Col sm='12'>
//           <Card title='Uncontrolled' code={accordionControlled}>
//             <CardText>You may want to open one item at a time, for that you can use accordion.</CardText>
//             <AccordionUncontrolled />
//           </Card>
//         </Col>
//         <Col sm='12'>
//           <Card title='Controlled' code={accordionControlled}>
//             <CardText>Manage a state to control your collapse component.</CardText>
//             <AccordionControlled />
//           </Card>
//         </Col>
//         <Col sm='12'>
//           <Card code={accordionWithoutArrow} title='Accordion Without Arrow'>
//             <CardText>
//               Use class <code>.accordion-without-arrow</code> class with <code>&lt;Accordion&gt;</code> for accordion
//               without arrow.
//             </CardText>
//             <AccordionWithoutArrow />
//           </Card>
//         </Col>
//         <Col sm='12'>
//           <Card title='Border' code={accordionBorder}>
//             <CardText>
//               Use class <code>.accordion-border</code> class with your accordion to create a bordered accordion.
//             </CardText>
//             <AccordionBorder />
//           </Card>
//         </Col>
//         <Col sm='12'>
//           <Card title='Margin' code={accordionMargin}>
//             <CardText>
//               Use class <code>.accordion-margin</code> class with your accordion to create a accordion with margin.
//             </CardText>
//             <AccordionMargin />
//           </Card>
//         </Col>
//         <Col sm='12'>
//           <Card title='Hover' code={accordionHover}>
//             <AccordionHover />
//           </Card>
//         </Col>
//       </Row> */}
//       </div>
//     </Fragment>
//   )
// }
// export default Accordion


// ** React Imports
import { Fragment, useEffect, useState } from 'react'

import { MoreVertical, Edit, Trash } from 'react-feather'
import { Row, Col, Card, CardBody, Table, Badge, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Input, Button, Label, Form } from 'reactstrap'

// ** Reactstrap Imports
// import {  CardTitle, CardHeader, Input, Form, Button, Label } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import ReactPaginate from 'react-paginate'
import toast from 'react-hot-toast'

// ** Demo Components
// import BasicCheckbox from './CheckboxBasic'
// import ColoredCheckbox from './CheckboxColors'
import axios from "axios"

const Items = () => {

    const [formModal, setFormModal] = useState(false)
    // const modelopen = setFormModal(true)
    const [customer, setcustomer] = useState([])
    const [forms, setforms] = useState([])
    const [forms1, setforms1] = useState([])
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
    const handleChange2 = (e) => {
        const newadmin = { ...forms2 }
        newadmin[e.target.name] = e.target.value
        setforms2(newadmin)
    }

    const profiledet = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/itemtype/getallitemtypes",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.itemTypeResult)
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }


    const clearForm = () => {
        setforms1({ itemName: "" })
    }

    const adddepart = () => {
        const token = datas
        const params = {
            itemName: forms1.itemName
        }
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/itemtype/additemtype", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                toast.success(res.data.message)
                clearForm()
                profiledet()
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
            itemName: forms2.itemName,
            status: forms2.status
        }
        console.log(token)
        axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/itemtype/edititemtype/${fmid}`, params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                toast.success(res.data.message)
                setforms1("")
                setFormModal(false)
                profiledet()
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

    const deldepart = (data) => {
        const token = datas
        const fmid1 = data._id
        console.log(token)
        axios.delete(`http://103.186.185.77:5023/omsanthoshjewellery/admin/itemtype/deleteitemtypebyid/${fmid1}`,
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
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

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
        setFormModal(true)
    }

    const custsearch = (e) => {
        const myUser = { ...forms }
        myUser[e.target.name] = e.target.value
        setforms(myUser)

        const token = datas
        console.log(token)
        axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/itemtype/searchitemtypebyname?searchQuery=${e.target.value}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.itemTypeResult)
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }


    useEffect(() => {
        profiledet()
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

    return (
        <Fragment >
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Items' data={[{ title: 'Items' }]} />

                {access.stonest === true || adrole === "admin" ? (
                    <Row >

                        <Col sm="4">
                            <Card>
                                <CardBody>
                                    <h5>Add Items</h5>
                                    <Form onSubmit={(e) => { deprt(e) }} >
                                        <div className='mt-1' >
                                            <Label>Item Name</Label> <span className='text-danger'>*</span>
                                            <Input value={forms1.itemName} onChange={(e) => { handleChange(e) }} required type='text' name='itemName' placeholder='Enter Item Name' />
                                        </div>
                                        <div className='text-end mt-1'>
                                            <Button type='submit' color='success' >Submit</Button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col sm='8'>
                            <Card>
                                <div>
                                    <h5 className='p-1'>Items List</h5>
                                    <Row className='p-1'>
                                        <Col md="7">
                                        </Col>
                                        <Col md="5">
                                            <Row>

                                                <Col md="11">

                                                    <Input className='m-1'
                                                        name="search"
                                                        value={forms.search}
                                                        onChange={custsearch}
                                                        type='text' placeholder='Search...' />
                                                </Col>

                                            </Row>

                                        </Col>
                                    </Row>
                                </div>

                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>S No</th>
                                            <th>ITEM TYPE</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lists.map((data, key) => (
                                            <tr key={key} >

                                                <td>{((pageNumber - 1) * 10) + key + 11}</td>
                                                <td>{data.itemName}</td>
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

                                {/* </CardBody> */}
                            </Card>
                        </Col>

                    </Row>
                ) : (
                    <Card>
                        <h5 className='text-center p-2'>You don't have permission to access</h5>
                    </Card>
                )}


                <Modal size='sm' isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
                    <Form
                        onSubmit={(e) => { eddeprt(e) }}
                    >
                        <ModalHeader toggle={() => setFormModal(!formModal)}> Edit Item </ModalHeader>
                        <ModalBody>

                            <Row>

                                <Col md="12">
                                    <Label>
                                        Item Name
                                    </Label>
                                    <Input value={forms2.itemName} onChange={(e) => { handleChange2(e) }} required type='text' name='itemName' placeholder=" Enter Item Name" className="form-control mb-1" />
                                    <Label>
                                        Status
                                    </Label>
                                    <select value={forms2.status} onChange={(e) => { handleChange2(e) }} required name='status' className='form-select'>
                                        <option value="">Select</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </Col>
                            </Row>

                        </ModalBody>
                        <ModalFooter>
                            <Button color='success' type='submit'>
                                Submit
                            </Button>{' '}
                            <Button outline color='danger' onClick={() => setFormModal(!formModal)}>
                                Cancel
                            </Button>{' '}
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        </Fragment >
    )
}
export default Items

