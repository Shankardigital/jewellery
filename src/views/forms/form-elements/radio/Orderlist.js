// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { MoreVertical, Edit, Trash } from 'react-feather'
import {
    Row, Col, Card,
    Dropdown, Modal, ModalHeader, ModalBody, ModalFooter,
    CardBody, Table,
    Badge, UncontrolledDropdown,
    DropdownMenu, DropdownItem, DropdownToggle, Input, Button
} from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import ReactPaginate from 'react-paginate'
import axios from "axios"
// import { data } from 'jquery'
import { Link, useNavigate } from 'react-router-dom'
import Moment from 'react-moment'
import imgdel from "../../../../assets/images/delete.gif"
import toast from 'react-hot-toast'

const Orderlist = () => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [customer, setcustomer] = useState([])
    // const [customer1, setcustomer1] = useState([])
    const [forms, setforms] = useState([])
    const [forms1, setforms1] = useState([])
    console.log(forms1._id)

    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    console.log(data1.fullName)
    const datas = localStorage.getItem("accessToken")
    const adrole = data1.role
    const access = data1.rolesPermissions
    console.log(datas)

    const profiledet = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/order/getallorders",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.orderResult)
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
        axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/order/searchorder?orderNo=${e.target.value}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.orderResult)
                // setcustomer1(res.data.orderResult.orderlist)
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }


    const orderdel = () => {
        const token = datas
        const deteid = forms1._id
        console.log(token)
        axios.delete(`http://103.186.185.77:5023/omsanthoshjewellery/admin/order/deleteorderbyid/${deteid}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setModal(false)
                profiledet()
                toast.success(res.data.message)
                // setcustomer(res.data.orderResult)
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
        sessionStorage.setItem("ordid", data._id)
        navigate("/editorder")
    }

    const getdelte = (data) => {
        setforms1(data)
        // console.log(data._id)
        setModal(true)
    }


    return (
        <Fragment >
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Sales Order List' data={[{ title: 'Sales Order List' }]} />
                {access.orderView === true || adrole === "admin" ? (
                    <Row
                    >
                        <Col sm='12'>
                            <Card>
                                <div>
                                    <Row className='p-1'>
                                        <Col md="7">
                                            {access.orderAdd === true || adrole === "admin" ? (
                                                <Link to="/forms/elements/radio">
                                                    <Button className='m-1' color='primary'>Add New Order</Button>
                                                </Link>
                                            ) : (
                                                ""
                                            )}
                                        </Col>
                                        <Col md="5">
                                            <Row>

                                                <Col md="10">

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
                                            <th style={{ width: "100px" }}>Date </th>
                                            <th>Order No</th>
                                            <th>Customer Name</th>
                                            <th>Item Name</th>
                                            <th>Purity</th>
                                            <th>Gross Weight</th>
                                            <th>Gold Weight</th>
                                            <th>Diamond Range</th>
                                            <th>Stone Range</th>
                                            <th>Delivery Date</th>
                                            {/* <th>Stage</th> */}
                                            {/* <th>Status</th> */}
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lists.map((data, key) => (
                                            <tr key={key} >
                                                <td>{((pageNumber - 1) * 10) + key + 11}</td>
                                                <td>
                                                    <Moment format="DD/MM/YYYY">
                                                        {data.date}
                                                    </Moment>
                                                </td>
                                                <td>{data.orderNo}</td>
                                                <td>{data.customerDetails}</td>
                                                <td>
                                                    {
                                                        data.itemNameMulti.map((data) => (
                                                            <span>{data.itemName}, </span>
                                                        ))}
                                                </td>
                                                <td>{data.itemPurity}K</td>
                                                <td>{data.grossWeight}</td>
                                                <td>{data.goldWeight}</td>
                                                <td>
                                                    {data.itemDimondRangeCarat === "NaN" ? (
                                                        "0"
                                                    ) : (
                                                        <span> {data.itemDimondRangeCarat}</span>
                                                    )}
                                                </td>
                                                <td>
                                                    {data.itemStoneCarat === "NaN" ? (
                                                        "0"
                                                    ) : (
                                                        <span> {data.itemStoneCarat}</span>
                                                    )}
                                                </td>
                                                <td>
                                                    <Moment format="DD/MM/YYYY">
                                                        {data.deliveryDate}
                                                    </Moment>
                                                </td>
                                                {/* <td>
                                                {data.stage === "1" ? (
                                                    "CAD"
                                                ) : (
                                                    ""
                                                )}
                                                {data.stage === "2" ? (
                                                    "Casting"
                                                ) : (
                                                    ""
                                                )}
                                                {data.stage === "3" ? (
                                                    "Ghat"
                                                ) : (
                                                    ""
                                                )}
                                                {data.stage === "4" ? (
                                                    "Polish 1st"
                                                ) : (
                                                    ""
                                                )}
                                                {data.stage === "5" ? (
                                                    "Setting"
                                                ) : (
                                                    ""
                                                )}
                                                {data.stage === "6" ? (
                                                    "Polish 2nd"
                                                ) : (
                                                    ""
                                                )}
                                                {data.stage === "7" ? (
                                                    "Bandini"
                                                ) : (
                                                    ""
                                                )}
                                                {data.stage === "8" ? (
                                                    "Mala"
                                                ) : (
                                                    ""
                                                )}
                                                {data.stage === "9" ? (
                                                    "Finish"
                                                ) : (
                                                    ""
                                                )}
                                                {data.stage === "" ? (
                                                    "Start"
                                                ) : (
                                                    ""
                                                )}

                                            </td> */}
                                                {/* <td>{data.status === "active" ? (
                                                    <Badge pill color='light-success' className='me-1'>
                                                        Active
                                                    </Badge>

                                                ) : (
                                                    <Badge pill color='light-primary' className='me-1'>
                                                        Inactive
                                                    </Badge>
                                                )}</td> */}

                                                <td>
                                                    {data.stage === "9" ? (
                                                        <a className='text-danger'>---</a>
                                                    ) : (
                                                        <>
                                                            {access.orderEdit === true || adrole === "admin" ? (
                                                                <Button
                                                                    className='mt-1'
                                                                    onClick={() => {
                                                                        getonemmber(data)
                                                                    }}
                                                                    outline size='sm' color='success' > <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                                </Button>
                                                            ) : (
                                                                ""
                                                            )}
                                                            {access.orderDelete === true || adrole === "admin" ? (
                                                                <Button
                                                                    onClick={() => {
                                                                        getdelte(data)
                                                                    }}
                                                                    className='mt-1' outline size='sm' color='danger'><i class="fa fa-trash-o" aria-hidden="true"></i></Button>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </>
                                                    )}


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

                <Modal size='sm' isOpen={modal} toggle={toggle}>
                    <ModalHeader style={{ background: "none" }} toggle={toggle}></ModalHeader>
                    <ModalBody>
                        <div className='text-center'>
                            <img style={{ width: "350px" }} src={imgdel} />
                            <h4>
                                Do you want delete
                            </h4>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={orderdel}>
                            Yes
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </Fragment>
    )
}
export default Orderlist
