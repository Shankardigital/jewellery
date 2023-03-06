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
import { useNavigate } from 'react-router-dom'
// ** Demo Components
// import BasicCheckbox from './CheckboxBasic'
// import ColoredCheckbox from './CheckboxColors'
import axios from "axios"


const Metal = () => {

    const [formModal, setFormModal] = useState(false)
    // const modelopen = setFormModal(true)
    const [customer, setcustomer] = useState([])
    // const [forms, setforms] = useState([])
    // const [forms1, setforms1] = useState([])
    const [forms2, setforms2] = useState([])
    console.log(forms2)

    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    const datas = localStorage.getItem("accessToken")
    const adrole = data1.role
    const access = data1.rolesPermissions
    // const fixedValue = []
    // const handleChange = (e) => {
    //     const newadmin = { ...forms1 }
    //     newadmin[e.target.name] = e.target.value
    //     setforms1(newadmin)
    // }
    const handleChange2 = (e) => {
        const newadmin = { ...forms2 }
        newadmin[e.target.name] = e.target.value
        setforms2(newadmin)
    }

    const profiledet = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/stock/allfinishedstockwtamount",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.finishedAll)
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }

    // const clearForm = () => {
    //     setforms1({ departmentName: ""})
    //   }

    const adddepart = () => {
        const token = datas
        const params = {
            submittedDate: forms2.submittedDate,
            partyName: forms2.partyName,
            purity: forms2.purity,
            weight: parseFloat(forms2.weight).toFixed(3)
        }
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/metalinhand/addmetalInHand", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                toast.success(res.data.message)
                setforms2("")
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

    const deprt = (e) => {
        e.preventDefault()
        adddepart()
    }

    // const editdepart = () => {
    //     const token = datas
    //     const fmid = forms2._id
    //     const params = {
    //         departmentName: forms2.departmentName,
    //         status: forms2.status
    //     }
    //     console.log(token)
    //     axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/department/editdepartment/${fmid}`, params,
    //         {
    //             headers: { Authorization: `Bearer ${token}` }
    //         }, {}
    //     ).then((res) => {
    //         if (res.status === 200) {
    //             console.log(res.data)
    //             toast.success(res.data.message)
    //             setforms1("")
    //             setFormModal(false)
    //             profiledet()
    //             // setcustomer(res.data.departmentResult)
    //         }
    //     },
    //         (error) => {
    //             if (error.response && error.response.status === 400) {
    //                 toast.error(error.response.data.message)
    //                 console.log(error.data.message)

    //             }
    //         }
    //     )
    // }

    // const eddeprt = (e) => {
    //     e.preventDefault()
    //     editdepart()
    // }

    // const deldepart = (data) => {
    //     const token = datas
    //     const fmid1 = data._id
    //     console.log(token)
    //     axios.delete(`http://103.186.185.77:5023/omsanthoshjewellery/admin/department/deletedepartmentbyid/${fmid1}`,
    //         {
    //             headers: { Authorization: `Bearer ${token}` }
    //         }, {}
    //     ).then((res) => {
    //         if (res.status === 200) {
    //             console.log(res.data)
    //             toast.success(res.data.message)
    //             // setforms1("")
    //             profiledet()
    //             // setcustomer(res.data.departmentResult)
    //         }
    //     },
    //         (error) => {
    //             if (error.response && error.response.status === 400) {
    //                 toast.error(error.response.data.message)
    //                 console.log(error.data.message)

    //             }
    //         }
    //     )
    // }

    // const delteprt = (e) => {
    //     e.preventDefault()
    //     deldepart(e)
    // }


    // const manageDelete = (data) => {
    //     const confirmBox = window.confirm("Do you really want to Delete?")
    //     if (confirmBox === true) {
    //         deldepart(data)
    //     }
    // }

    // const datavalu = (data) => {
    //     setforms2(data)
    //     setFormModal(true)
    // }

    // const custsearch = (e) => {
    //     const myUser = { ...forms }
    //     myUser[e.target.name] = e.target.value
    //     setforms(myUser)

    //     const token = datas
    //     console.log(token)
    //     axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/department/getdepartmentbyname?searchQuery=${e.target.value}`,
    //         {
    //             headers: { Authorization: `Bearer ${token}` }
    //         }, {}
    //     ).then((res) => {
    //         if (res.status === 200) {
    //             console.log(res.data)
    //             setcustomer(res.data.deptResult)
    //         }
    //     },
    //         (error) => {
    //             if (error.response && error.response.status === 400) {
    //                 toast.error(error.response.data.message)
    //                 console.log(error.data.message)

    //             }
    //         }
    //     )
    // }


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
    const navigate = useNavigate()
    const metaldata = (data) => {
        sessionStorage.setItem("stockpurity", data.percent)
        navigate("/stockes")
    }

    return (
        <Fragment >
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Finished Stock' data={[{ title: 'Finished Stock' }]} />
                <Row >

                    {/* <Col sm="4">
                        <Card>
                            <CardBody>
                                <h5>Add Metal</h5>
                                <Form onSubmit={(e) => { deprt(e) }} >
                                    <div className='mt-1' >
                                        <Label> Department</Label> <span className='text-danger'>*</span>
                                        <Input value={forms1.departmentName} onChange={(e) => { handleChange(e) }} required type='text' name='departmentName' placeholder='Department' />
                                    </div>
                                    <div className='text-end mt-1'>
                                        <Button type='submit' color='success' >Submit</Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col> */}

                    <Col sm='12'>
                        {access.metalAdd === true || adrole === "admin" ? (
                            <Card>
                            <div>
                                {/* <h5 className='p-1'>Metal in Hand List</h5> */}
                                <Row className=''>
                                    <Col md="7">
                                    </Col>
                                    <Col md="5">
                                        {/* <Button style={{ float: "right" }} onClick={() => setFormModal(!formModal)} color='primary'>Add Metal</Button> */}

                                        {/* <Col md="11">

                                                <Input
                                                    name="search"
                                                    value={forms.search}
                                                    onChange={custsearch}
                                                    type='text' placeholder='Search...' />
                                            </Col> */}

                                    </Col>
                                </Row>
                            </div>

                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>S No</th>
                                        <th>Percentage</th>
                                        <th>Weight</th>
                                        <th>Fine</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lists.map((data, key) => (
                                        <tr key={key} >
                                            <td>{key + 1}</td>
                                            <td>
                                                <a className='text-primary' onClick={() => { metaldata(data) }}>{data.percent}</a>
                                            </td>
                                            <td>{data.totalWeight}</td>
                                            <td>{data.totalFine}</td>
                                            <td>{data.totalAmount}</td>
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
                        ) : (
                            <Card>
                                <h5 className='text-center p-2'>You don't have permission to access</h5>
                            </Card>
                        )}

                    </Col>
                </Row>


                <Modal size='sm' isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
                    <Form
                        onSubmit={(e) => { deprt(e) }}
                    >
                        <ModalHeader toggle={() => setFormModal(!formModal)}> Add Metal </ModalHeader>
                        <ModalBody>
                            <Row >
                                <div>
                                    <Label>Date</Label>
                                    <Input name='submittedDate' type="date" onChange={(e) => { handleChange2(e) }} placeholder='Enter Name' className='form-control' />
                                </div>
                                <div>
                                    <Label>Party Name</Label>
                                    <Input name='partyName' type="text" onChange={(e) => { handleChange2(e) }} placeholder='Enter Name' className='form-control' />
                                </div>
                                <div>
                                    <Label>Purity</Label>
                                    <select name='purity' onChange={(e) => { handleChange2(e) }} className='form-select'>
                                        <option value="">Select </option>
                                        <option value="18">18K </option>
                                        <option value="22">22K </option>
                                        <option value="24">24K </option>
                                    </select>
                                </div>
                                <div>
                                    <Label>Weight</Label>
                                    <Input name='weight' onChange={(e) => { handleChange2(e) }} type="number" placeholder='Enter Weight' className='form-control' />
                                </div>
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
export default Metal
