// ** React Imports
import { Fragment, useEffect, useState } from 'react'
// import {  } from 'react-router-dom'
// import AvatarGroup from '@components/avatar-group'
// import react from '@src/assets/images/icons/react.svg'
// import vuejs from '@src/assets/images/icons/vuejs.svg'
// import angular from '@src/assets/images/icons/angular.svg'
// import bootstrap from '@src/assets/images/icons/bootstrap.svg'
// import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
// import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
// import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Row, Col, Card, CardBody, Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Input, Button } from 'reactstrap'

// ** Reactstrap Imports
// import {  CardTitle, CardHeader, Input, Form, Button, Label } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import ReactPaginate from 'react-paginate'

// ** Demo Components
// import BasicCheckbox from './CheckboxBasic'
// import ColoredCheckbox from './CheckboxColors'
import axios from "axios"
// import { data } from 'jquery'
import { useNavigate, Link } from 'react-router-dom'

const Employeee = () => {

    const [customer, setcustomer] = useState([])
    const [forms, setforms] = useState([])
    console.log(customer)

    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    console.log(data1.fullName)
    const datas = localStorage.getItem("accessToken")
    const adrole = data1.role
    const access = data1.rolesPermissions
    console.log(access)
    console.log(datas)

    const profiledet = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/getallemployees",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.profilesResult)
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }

    const custsearch = (e) => {
        const myUser = { ...forms }
        myUser[e.target.name] = e.target.value
        setforms(myUser)

        const token = datas
        console.log(token)
        axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/getempbysearch?searchQuery=${e.target.value}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.profilesResult)
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

    const navigate = useNavigate()

    const getonemmber = (data) => {
        sessionStorage.setItem("empid", data._id)
        navigate("/edit-emp")
    }


    return (
        <Fragment >
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Employee List' data={[{ title: 'Employee List' }]} />

                {access.empView === true || adrole === "admin" ? (
                    <Row

                    >
                        <Col sm='12'>
                            <Card>
                                <div>
                                    <Row className='p-1'>
                                        <Col md="7">
                                            {/* <Button className='m-1' color='primary'>Add New</Button> */}
                                        </Col>
                                        <Col md="5">
                                            <Row>
                                                {/* <Col md="1">
                                                <label className='mt-2'>Search:</label>
                                            </Col> */}
                                                <Col md="10">

                                                    <Input className='m-1'
                                                        name="search"
                                                        value={forms.search}
                                                        onChange={custsearch}
                                                        type='text' placeholder='Search...' />
                                                </Col>
                                                {/* <Col md="4">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle color='transparent' size='sm' >
                                                      
                                                        <Input placeholder='Export' />
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                            <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                                                        </DropdownItem>
                                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                            <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </Col> */}
                                                {/* <Col md="7">
                                                <Button className='m-1' color='primary'>Pdf</Button>
                                                <Button className='m-1' color='success'>Excel</Button>
                                            </Col> */}
                                            </Row>

                                        </Col>
                                    </Row>
                                </div>

                                {/* <CardHeader>
              <CardTitle tag='h4' className='text-center' style={{ color: "#fa2841de" }}>Add Customer</CardTitle>
            </CardHeader> */}
                                {/* <CardBody> */}
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>S No</th>
                                            <th>Employee</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                            <th>Designation</th>
                                            <th>Department</th>
                                            <th>Address</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lists.map((data, key) => (
                                            <tr key={key} >
                                                {/* (currentPage - 1) / pageLimit) * pageLimit */}
                                                <td>{((pageNumber - 1) * 10) + key + 11}</td>
                                                <td>{data.fullName}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.email}</td>
                                                <td>{data.designation}</td>
                                                <td>{data.departmentName}</td>
                                                <td>{data.address}</td>
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
                                                    {/* <Link to="/editcust"> */}
                                                    {access.empEdit === true || adrole === "admin" ? (
                                                        <Button
                                                            onClick={() => {
                                                                getonemmber(data)
                                                            }}
                                                            outline size='sm' color='success' > <i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                                                    ) : (
                                                        ""
                                                    )}


                                                    {/* </Link> */}
                                                </td>

                                                {/* <td>
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                                                        <MoreVertical size={15} />
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                            <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                                                        </DropdownItem>
                                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                                            <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td> */}
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
            </div>
        </Fragment>
    )
}
export default Employeee
