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
import Moment from 'react-moment'


// ** Demo Components
// import BasicCheckbox from './CheckboxBasic'
// import ColoredCheckbox from './CheckboxColors'
import axios from "axios"

const Paymetal = () => {

    // const [formModal, setFormModal] = useState(false)
    // const modelopen = setFormModal(true)
    const [customer, setcustomer] = useState([])
    const [forms, setforms] = useState([])
    // const [forms1, setforms1] = useState([])
    // const [forms2, setforms2] = useState([])
    // console.log(forms2)

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
    // const handleChange2 = (e) => {
    //     const newadmin = { ...forms2 }
    //     newadmin[e.target.name] = e.target.value
    //     setforms2(newadmin)
    // }

    const profiledet = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/metalinhand/getallmetals",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.metalInHandResult)
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

    // const adddepart = () => {
    //     const token = datas
    //     const params = {
    //         departmentName: forms1.departmentName
    //     }
    //     console.log(token)
    //     axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/department/adddepartment", params,
    //         {
    //             headers: { Authorization: `Bearer ${token}` }
    //         }, {}
    //     ).then((res) => {
    //         if (res.status === 200) {
    //             console.log(res.data)
    //             toast.success(res.data.message)
    //             clearForm()
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

    // const deprt = (e) => {
    //     e.preventDefault()
    //     adddepart()
    // }

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

    const custsearch = (e) => {
        const myUser = { ...forms }
        myUser[e.target.name] = e.target.value
        setforms(myUser)

        const token = datas
        console.log(token)
        axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/metalinhand/searchmetalinhand?searchQuery=${e.target.value}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.metalInHandData)
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
                <Breadcrumbs title='Purchase Metal' data={[{ title: 'Purchase Metal' }]} />
                <Row >

                    <Col sm='12'>
                        {access.metalpur === true || adrole === "admin" ? (
                               <Card>
                               <div>
                                   {/* <h5 className='p-1'>Metal in Hand List</h5> */}
                                   <Row className='p-1'>
                                       <Col md="7">
                                           {/* <Button onClick={() => setFormModal(!formModal)} color='primary'>Add Metal</Button> */}
                                       </Col>
                                       <Col md="5">
                                           <Row>
   
                                               <Col md="11">
   
                                                   <Input
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
                                           <th>Date</th>
                                           <th>Party Name</th>
                                           <th>Purity</th>
                                           <th>Weight</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       {lists.map((data, key) => (
                                           <tr key={key} >
                                             <td>{((pageNumber - 1) * 10) + key + 11}</td>
                                             <td>
                                               <Moment format='DD/MM/YYYY'>{data.submittedDate}</Moment>
                                               </td>
                                             <td>{data.partyName}</td>
                                             <td>{data.purity}K</td>
                                             <td>{data.weight}</td>
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

            </div>
        </Fragment >
    )
}
export default Paymetal
