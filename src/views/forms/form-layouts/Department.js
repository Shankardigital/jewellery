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

const Departments = () => {

    const [formModal, setFormModal] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    // const modelopen = setFormModal(true)
    const [customer, setcustomer] = useState([])
    const [forms, setforms] = useState([])
    const [forms1, setforms1] = useState([])
    const [forms2, setforms2] = useState([])
    console.log(forms2)

    const datas = localStorage.getItem("accessToken")
    // const rolesss = localStorage.getItem("userData")
    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    const adrole = data1.role
    const access = data1.rolesPermissions
    console.log(access)
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
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/department/getalldepartments",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.departmentResult)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })

    }

    const clearForm = () => {
        setforms1({ departmentName: "" })
    }

    const adddepart = () => {
        const token = datas
        const params = {
            departmentName: forms1.departmentName
        }
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/department/adddepartment", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                toast.success(res.data.message)
                clearForm()
                profiledet()
                setIsSubmitting(false)
                // setcustomer(res.data.departmentResult)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
                setIsSubmitting(false)
            }
        })


    }

    const deprt = (e) => {
        e.preventDefault()
        adddepart()
        setIsSubmitting(true)
    }

    const editdepart = () => {
        const token = datas
        const fmid = forms2._id
        const params = {
            departmentName: forms2.departmentName,
            status: forms2.status
        }
        console.log(token)
        axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/department/editdepartment/${fmid}`, params,
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
                setIsSubmitting(false)
                // setcustomer(res.data.departmentResult)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                setIsSubmitting(false)
                toast.error(error.response.data.message)
            }
        })
    }

    const eddeprt = (e) => {
        e.preventDefault()
        editdepart()
        setIsSubmitting(true)
    }

    const deldepart = (data) => {
        const token = datas
        const fmid1 = data._id
        console.log(token)
        axios.delete(`http://103.186.185.77:5023/omsanthoshjewellery/admin/department/deletedepartmentbyid/${fmid1}`,
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
        axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/department/getdepartmentbyname?searchQuery=${e.target.value}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.deptResult)
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
                <Breadcrumbs title='Department' data={[{ title: 'Department' }]} />

                {access.dptView === true || adrole === "admin" ? (
                    <Row >
                        <Col sm="4">
                            <Card>
                                <CardBody>
                                    <h5>Add Department</h5>
                                    {access.dptAdd === true || adrole === "admin" ? (
                                        <Form onSubmit={(e) => { deprt(e) }} >
                                            <div className='mt-1' >
                                                <Label> Department</Label> <span className='text-danger'>*</span>
                                                <Input value={forms1.departmentName} onChange={(e) => { handleChange(e) }} required type='text' name='departmentName' placeholder='Department' />
                                            </div>

                                            <div className='text-end mt-1'>
                                                <Button disabled={isSubmitting}  type='submit' color='success' > {isSubmitting ? 'Submitting...' : 'Submit'}</Button>
                                            </div>
                                        </Form>
                                    ) : (
                                        ""
                                    )}
                                </CardBody>
                            </Card>
                        </Col>

                        <Col sm='8'>
                            <Card>
                                <div>
                                    <h5 className='p-1'>Department List</h5>
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
                                            <th>Department</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lists.map((data, key) => (
                                            <tr key={key} >
                                                {data.fixedValue === "fixed" ? (
                                                    <>
                                                        <td>{((pageNumber - 1) * 10) + key + 11}</td>
                                                        <td>{data.departmentName}</td>
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
                                                            {access.dptEdit === true || adrole === "admin" ? (
                                                                <Button onClick={() => datavalu(data)} style={{ margin: "5px" }} outline size='sm' color='success' > <i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </td>
                                                    </>
                                                ) : (
                                                    <>
                                                        <td>{((pageNumber - 1) * 10) + key + 11}</td>
                                                        <td>{data.departmentName}</td>
                                                        <td>{data.status === "active" ? (
                                                            <Badge pill color='light-success' className='me-1'>
                                                                Active
                                                            </Badge>

                                                        ) : (
                                                            <Badge pill color='light-primary' className='me-1'>
                                                                Inactive
                                                            </Badge>
                                                        )}</td>

                                                        <td className='input-group'>
                                                            {access.dptEdit === true || adrole === "admin" ? (
                                                                <div className='text-end mt-1'>
                                                                    <Button onClick={() => datavalu(data)} style={{ margin: "5px" }} outline size='sm' color='success' > <i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}
                                                            {access.dptrDelete === true || adrole === "admin" ? (
                                                                <div className='text-end mt-1'>
                                                                    <Button onClick={() => manageDelete(data)} style={{ margin: "5px" }} outline size='sm' color='danger' > <i class="fa fa-trash" aria-hidden="true"></i></Button>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}

                                                        </td>
                                                    </>
                                                )}

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
                        <h5 className="text-center p-1">You don't have permission to access</h5>
                    </Card>
                )}


                <Modal size='sm' isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
                    <Form
                        onSubmit={(e) => { eddeprt(e) }}
                    >
                        <ModalHeader toggle={() => setFormModal(!formModal)}> Edit Department </ModalHeader>
                        <ModalBody>

                            <Row>
                                {forms2.fixedValue === "fixed" ? (
                                    <>
                                        <Col md="12">
                                            <Label>
                                                Department
                                            </Label>
                                            <Input value={forms2.departmentName} onChange={(e) => { handleChange2(e) }} required type='text' name='departmentName' placeholder="Departement" className="form-control mb-1" />
                                        </Col>
                                    </>
                                ) : (
                                    <>
                                        <Col md="12">
                                            <Label>
                                                Department
                                            </Label>
                                            <Input value={forms2.departmentName} onChange={(e) => { handleChange2(e) }} required type='text' name='departmentName' placeholder="Departement" className="form-control mb-1" />
                                            <Label>
                                                Status
                                            </Label>
                                            <select value={forms2.status} onChange={(e) => { handleChange2(e) }} required name='status' className='form-select'>
                                                <option value="">Select</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                            </select>
                                        </Col>
                                    </>
                                )}


                            </Row>

                        </ModalBody>
                        <ModalFooter>
                            <Button disabled={isSubmitting} color='success' type='submit'>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
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
export default Departments
