import React, { useState, useEffect } from "react"
import {
    CardBody,
    CardHeader,
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    Form,
    Label,
    Input
} from "reactstrap"
// import Breadcrumbs from '@components/breadcrumbs'
import toast from 'react-hot-toast'
// import Breadcrumbs from "../../components/Common/Breadcrumb"
// import { ToastContainer, toast } from "react-toastify"
import axios from "axios"
import Select from "react-select"

const Roles = () => {
    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    const datas = data1.accessToken
    const adrole = data1.role

    // const [staff, setstaff] = useState([])

    // const getAllfeature = () => {
    //     const token = datas
    //     const dataArray = new FormData()
    //     dataArray.append("branchId", localStorage.getItem("ids"))
    //     axios
    //         .post(
    //             "http://103.186.185.77:5021/api/v1/admin/branch/getallactivebranchmanagers", dataArray,
    //             {
    //                 headers: { Authorization: `Bearer ${token}` }
    //             }
    //         )
    //         .then(res => {
    //             setstaff(res.data.profiles)
    //         })
    // }

    // useEffect(() => {
    //     getAllfeature()
    // }, [])

    // const [selectedOptions, setSelectedOptions] = useState([])

    // function handleSelect(details) {
    //     setSelectedOptions(details)
    //     // getAllRoles(details.value)
    //     const token = datas
    //     const dataArray = new FormData()
    //     dataArray.append("_id", details.value)
    //     axios
    //         .post(
    //             "http://103.186.185.77:5021/api/v1/admin/branch/getbranchManager", dataArray,
    //             {
    //                 headers: { Authorization: `Bearer ${token}` }
    //             }
    //         )
    //         .then(res => {
    //             if (res.data.profile.roleAndPermit === 0) {
    //                 setchecked(res.data.profile.roleAndPermit)
    //             } else {
    //                 setchecked(res.data.profile.roleAndPermit[0])
    //             }
    //         })
    // }

    // const optionGroup1 = staff.map(response => ({
    //     value: response._id,
    //     label: response.name
    // }))

    // // const getAllRoles = val => {
    // //     const token = datas
    // //     const dataArray = new FormData()
    // //     dataArray.append("_id", val)
    // //     axios
    // //         .post(
    // //             "http://103.186.185.77:5021/api/v1/admin/branch/getbranchManager",
    // //             dataArray,
    // //             {
    // //                 headers: { Authorization: `Bearer ${token}` },
    // //             }
    // //         )
    // //         .then(res => {
    // //             if (res.data.profile.roleAndPermit === 0) {
    // //                 setchecked(res.data.profile.roleAndPermit)
    // //             } else {
    // //                 setchecked(res.data.profile.roleAndPermit[0])
    // //             }
    // //         })
    // // }

    const check = {
        orderAdd: false,
        orderEdit: false,
        orderView: false,
        // allordersview:false,
        orderDelete: false,

        customerAdd: false,
        customerEdit: false,
        customerView: false,
        customerDelete: false,

        dptAdd: false,
        dptEdit: false,
        dptView: false,
        dptrDelete: false,

        empAdd: false,
        empEdit: false,
        empView: false,
        empDelete: false,

        metalAdd: false,
        metalView: false,
        metalpur: false,
        metaluse: false,

        categories: false,
        subcategories: false,
        expence: false,

        purlist: false,
        returnlist: false,

        orderrep: false,
        finrep: false,
        stonest: false
    }
    const [roles, setroles] = useState(check)
    console.log(roles)
    const [customer, setcustomer] = useState([])

    const handleChange1 = e => {
        const myUser = { ...roles }
        myUser[e.target.name] = (e.target.checked)
        setroles(myUser)
        console.log(myUser)
    }

    // const miny = check
    // console.log(miny)

    const [selectedMulti1, setselectedMulti1] = useState([])
    console.log(selectedMulti1)

    const activecust = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/getactiveemployee",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.employeeResult)
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }

    const empid = customer.map((data) => (
        { value: data._id, label: data.fullName }
    ))

    useEffect(() => {
        activecust()
    }, [])

    // const getAllRoles = (data) => {
    //     const token = datas
    //     const docuids = data.value
    //     axios
    //         .post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/updateemployeepermission/${docuids}`,                {
    //                 headers: { Authorization: `Bearer ${token}` }
    //             }, {}
    //         )
    //         .then(res => {
    //             if (res.data.profile.employeeResult === 0) {
    //                 setroles(res.data.profile.employeeResult)
    //             } else {
    //                 setroles(res.data.profile.employeeResult[0])
    //             }
    //         })
    // }

    const getAllRoles = (data) => {
        const gets = localStorage.getItem("userData")
        const data1 = JSON.parse(gets)
        const datas = data1.accessToken

        const token = datas
        const docuids = data.value
        console.log(token)
        axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/getemployeepermissions/${docuids}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setroles(res.data.employeeResult.rolesPermissions[0])
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }

    console.log(selectedMulti1)
    function handleMulti(data) {
        setselectedMulti1(data)
        getAllRoles(data)
    }


    const Addrole = () => {
        const token = datas
        const driverid = selectedMulti1.value
        const params = {
            rolesPermissions: [roles]
        }
        // dataArray.append("rolesPermissions", miny)
        axios
            .put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/updateemployeepermission/${driverid}`, params,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            )
            .then(
                res => {
                    if (res.status === 200) {
                        toast(res.data.message)
                    }
                },
                error => {
                    if (error.response && error.response.status === 400) {
                        toast(error.response.data.message)
                    }
                }
            )
    }


    const handleSubmit = e => {
        e.preventDefault()
        Addrole()
    }


    return (
        <React.Fragment>
            <div className="page-content">
                <Container>
                    {/* <Breadcrumbs title="Logic Cars" breadcrumbItem="Departments" /> */}

                    <Row>
                        <Col md={12}>
                            <Card>
                                <CardHeader className="bg-white">
                                    <CardTitle>Role & Permissions</CardTitle>
                                </CardHeader>

                                <CardBody>

                                    {adrole === "admin" ? (
                                        <Form
                                            onSubmit={e => {
                                                handleSubmit(e)
                                            }}
                                        >
                                            <Row>
                                                <Col md={4}>
                                                    <Label>Employee Name</Label>
                                                    <Select
                                                        name="employeeId"
                                                        value={selectedMulti1}
                                                        onChange={handleMulti}
                                                        options={empid}
                                                        required
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className=" mt-3">
                                                {/* <h5 className="  ">Role Permissions</h5> */}
                                                <Col md={2}>
                                                    {" "}
                                                    <p className="">Order Management : </p>
                                                </Col>{" "}
                                               <Col md={1}></Col>
                                                {/* <Col md={2}>
                                               < div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.allordersview}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.allordersview}
                                                            name="allordersview"
                                                            type='checkbox' id="read" />
                                                        <Label className='form-check-label' for="read">
                                                            View
                                                        </Label>
                                                    </div>
                                                </Col> */}
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.orderView}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.orderView}
                                                            name="orderView"
                                                            type='checkbox' id="read2" />
                                                        <Label className='form-check-label' for="read2">
                                                            View
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.orderAdd}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.orderAdd}
                                                            name="orderAdd"
                                                            type='checkbox' id="read" />
                                                        <Label className='form-check-label' for="read">
                                                            Add
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.orderEdit}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.orderEdit}
                                                            name="orderEdit"
                                                            type='checkbox' id="read1" />
                                                        <Label className='form-check-label' for="read1">
                                                            Edit
                                                        </Label>
                                                    </div>
                                                </Col>
                                                
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input
                                                            checked={roles.orderDelete}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.orderDelete}
                                                            name="orderDelete"
                                                            type='checkbox' id="read3" />
                                                        <Label
                                                            className='form-check-label' for="read3">
                                                            Delete
                                                        </Label>
                                                    </div>
                                                </Col>{" "}
                                                <Col md={1}></Col>
                                            </Row>
                                            <Row className="mt-2">
                                                <Col md={2}>
                                                    {" "}
                                                    <p className="">Customer : </p>
                                                </Col>{" "}
                                               <Col md={1}></Col>
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.customerView}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.customerView}
                                                            name="customerView"
                                                            type='checkbox' id="custread2" />
                                                        <Label className='form-check-label' for="custread2">
                                                            View
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={2}>
                                                    <div className='form-check  me-lg-5'>
                                                        <Input checked={roles.customerAdd}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.customerAdd}
                                                            name="customerAdd"
                                                            type='checkbox' id="custread" />
                                                        <Label className='form-check-label' for="custread">
                                                            Add
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.customerEdit}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.customerEdit}
                                                            name="customerEdit"
                                                            type='checkbox' id="custread1" />
                                                        <Label className='form-check-label' for="custread1">
                                                            Edit
                                                        </Label>
                                                    </div>
                                                </Col>
                                                
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input disabled type='checkbox' id="custread3" />
                                                        <Label className='form-check-label' for="custread3">
                                                            Delete
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={1}></Col>
                                            </Row>

                                            <Row className="mt-2">
                                                <Col md={2}>
                                                    {" "}
                                                    <p className="">Departments : </p>
                                                </Col>{" "}
                                               <Col md={1}></Col>
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.dptView}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.dptView}
                                                            name="dptView"
                                                            type='checkbox' id="dept2" />
                                                        <Label className='form-check-label' for="dept2">
                                                            View
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={2}>
                                                    <div className='form-check  me-lg-5'>
                                                        <Input checked={roles.dptAdd}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.dptAdd}
                                                            name="dptAdd"
                                                            type='checkbox' id="dept" />
                                                        <Label className='form-check-label' for="dept">
                                                            Add
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.dptEdit}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.dptEdit}
                                                            name="dptEdit"
                                                            type='checkbox' id="dept1" />
                                                        <Label className='form-check-label' for="dept1">
                                                            Edit
                                                        </Label>
                                                    </div>
                                                </Col>
                                                
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.dptrDelete}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.dptrDelete}
                                                            name="dptrDelete"
                                                            type='checkbox' id="dept3" />
                                                        <Label className='form-check-label' for="dept3">
                                                            Delete
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={1}></Col>
                                            </Row>

                                            <Row className="mt-2">
                                                <Col md={2}>
                                                    {" "}
                                                    <p className="">Employees : </p>
                                                </Col>{" "}
                                               <Col md={1}></Col>
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.empView}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.empView}
                                                            name="empView"

                                                            type='checkbox' id="empl2" />
                                                        <Label onClick={e => { handleChange1(e) }} className='form-check-label' for="empl2">
                                                            View
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={2}>
                                                    <div className='form-check  me-lg-5'>
                                                        <Input checked={roles.empAdd}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.empAdd}
                                                            name="empAdd"
                                                            type='checkbox' id="empl" />
                                                        <Label className='form-check-label' for="empl">
                                                            Add
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.empEdit}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.empEdit}
                                                            name="empEdit"
                                                            type='checkbox' id="empl1" />
                                                        <Label className='form-check-label' for="empl1">
                                                            Edit
                                                        </Label>
                                                    </div>
                                                </Col>
                                               
                                                <Col md={2}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input disabled type='checkbox' id="empl3" />
                                                        <Label className='form-check-label' for="empl3">
                                                            Delete
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={1}></Col>
                                            </Row>

                                            <Row className="mt-2">
                                                <Col md={2}>
                                                    {" "}
                                                    <p className="">Metal In Hand : </p>
                                                </Col>{" "}
                                               <Col md={1}></Col>
                                                {/* <Col md={2}>
                                                <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.metalView}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.metalView}
                                                            name="metalView"
                                                            type='checkbox' id="dept2" />
                                                        <Label className='form-check-label' for="dept2">
                                                            View
                                                        </Label>
                                                    </div>
                                                </Col> */}
                                                <Col md={2}>
                                                    <div className='form-check  me-lg-5'>
                                                        <Input checked={roles.metalAdd}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.metalAdd}
                                                            name="metalAdd"
                                                            type='checkbox' id="metal" />
                                                        <Label className='form-check-label' for="metal">
                                                            Add
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={3}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.metalpur}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.metalpur}
                                                            name="metalpur"
                                                            type='checkbox' id="metal1" />
                                                        <Label className='form-check-label' for="metal1">
                                                            Purchase List
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={3}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.metaluse}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.metaluse}
                                                            name="metaluse"
                                                            type='checkbox' id="metal2" />
                                                        <Label className='form-check-label' for="metal2">
                                                            Metal Uses
                                                        </Label>
                                                    </div>
                                                </Col>

                                                <Col md={1}></Col>
                                            </Row>

                                            <Row className="mt-2">
                                                <Col md={2}>
                                                    {" "}
                                                    <p className="">Expense : </p>
                                                </Col>{" "}
                                               <Col md={1}></Col>
                                                {/* <Col md={2}>
                                                <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.ExpeView}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.ExpeView}
                                                            name="ExpeView"
                                                            type='checkbox' id="dept2" />
                                                        <Label className='form-check-label' for="dept2">
                                                            View
                                                        </Label>
                                                    </div>
                                                </Col> */}

                                                <Col md={2}>
                                                    <div className='form-check  me-lg-5'>
                                                        <Input checked={roles.categories}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.categories}
                                                            name="categories"
                                                            type='checkbox' id="Expen" />
                                                        <Label
                                                            // onClick={e => { handleChange1(e) }}

                                                            className='form-check-label' for="Expen">
                                                            Categories
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={3}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.subcategories}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.subcategories}
                                                            name="subcategories"
                                                            type='checkbox' id="Expen1" />
                                                        <Label onClick={e => { handleChange1(e) }} className='form-check-label' for="Expen1">
                                                            Sub-Categories
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={3}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.expence}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.expence}
                                                            name="expence"
                                                            type='checkbox' id="Expen2" />
                                                        <Label onClick={e => { handleChange1(e) }} className='form-check-label' for="Expen2">
                                                            Expenses List
                                                        </Label>
                                                    </div>
                                                </Col>

                                                <Col md={1}></Col>
                                            </Row>
                                            <Row className="mt-2">
                                                <Col md={2}>
                                                    {" "}
                                                    <p className="">Purchase : </p>
                                                </Col>{" "}
                                                <Col md={1}></Col>
                                                <Col md={2}>
                                                    <div className='form-check  me-lg-5'>
                                                        <Input checked={roles.purlist}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.purlist}
                                                            name="purlist"
                                                            type='checkbox' id="Purcha" />
                                                        <Label onClick={e => { handleChange1(e) }} className='form-check-label' for="Purcha">
                                                            Purchase List
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col md={3}>
                                                    <div className='form-check me-3 me-lg-5'>
                                                        <Input checked={roles.returnlist}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.returnlist}
                                                            name="returnlist"
                                                            type='checkbox' id="Purcha1" />
                                                        <Label onClick={e => { handleChange1(e) }} className='form-check-label' for="Purcha1">
                                                            Returns List
                                                        </Label>
                                                    </div>
                                                </Col>
                                                {/* <Col md={3}>
      <div className='form-check me-3 me-lg-5'>
              <Input type='checkbox' id="Purcha2" />
              <Label className='form-check-label' for="Purcha2">
                  Metal Uses
              </Label>
          </div>
      </Col> */}

                                                <Col md={1}></Col>
                                            </Row>

                                            <Row className="mt-2">
                                                <Col md={2}>
                                                    {" "}
                                                    <p className="">Order Reports : </p>
                                                </Col>{" "}
                                                <Col md={1}></Col>
                                                <Col md={2}>
                                                    <div className='form-check  me-lg-5'>
                                                        <Input checked={roles.orderrep}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.orderrep}
                                                            name="orderrep"
                                                            type='checkbox' id="report" />
                                                        <Label onClick={e => { handleChange1(e) }} className='form-check-label' for="report">
                                                            Allows
                                                        </Label>
                                                    </div>
                                                </Col>
                                                {/* <Col md={2}>
      <div className='form-check me-3 me-lg-5'>
              <Input type='checkbox' id="metal1" />
              <Label className='form-check-label' for="metal1">
                  Purchase List
              </Label>
          </div>
      </Col>
      <Col md={2}>
      <div className='form-check me-3 me-lg-5'>
              <Input type='checkbox' id="metal2" />
              <Label className='form-check-label' for="metal2">
                  Metal Uses
              </Label>
          </div>
      </Col> */}

                                                <Col md={1}></Col>
                                            </Row>
                                            <Row className="mt-2">
                                                <Col md={2}>
                                                    {" "}
                                                    <p className="">Finance Reports : </p>
                                                </Col>{" "}
                                                <Col md={1}></Col>
                                                <Col md={2}>
                                                    <div className='form-check  me-lg-5'>
                                                        <Input checked={roles.finrep}
                                                            onClick={e => {
                                                                handleChange1(e)
                                                            }}
                                                            value={roles.finrep}
                                                            name="finrep"
                                                            type='checkbox' id="finreport" />
                                                        <Label onClick={e => { handleChange1(e) }} className='form-check-label' for="finreport">
                                                            Allows
                                                        </Label>
                                                    </div>
                                                </Col>
                                                {/* <Col md={2}>
      <div className='form-check me-3 me-lg-5'>
              <Input type='checkbox' id="metal1" />
              <Label className='form-check-label' for="metal1">
                  Purchase List
              </Label>
          </div>
      </Col>
      <Col md={2}>
      <div className='form-check me-3 me-lg-5'>
              <Input type='checkbox' id="metal2" />
              <Label className='form-check-label' for="metal2">
                  Metal Uses
              </Label>
          </div>
      </Col> */}

                                                <Col md={1}></Col>
                                            </Row>
                                            <Row className="mt-2">
                                                <Col md={2}>
                                                    {" "}
                                                    <p className="">Stone Storage  : </p>
                                                </Col>{" "}
                                                <Col md={1}></Col>
                                                <Col md={2}>
                                                    <div className='form-check  me-lg-5'>
                                                        <Input checked={roles.stonest}
                                                            onClick={e => { handleChange1(e) }}
                                                            value={roles.stonest}
                                                            name="stonest"
                                                            type='checkbox' id="stonreport" />
                                                        <Label onClick={e => { handleChange1(e) }} className='form-check-label' for="stonreport">
                                                            Allows
                                                        </Label>
                                                    </div>
                                                </Col>
                                                {/* <Col md={2}>
      <div className='form-check me-3 me-lg-5'>
              <Input type='checkbox' id="metal1" />
              <Label className='form-check-label' for="metal1">
                  Purchase List
              </Label>
          </div>
      </Col>
      <Col md={2}>
      <div className='form-check me-3 me-lg-5'>
              <Input type='checkbox' id="metal2" />
              <Label className='form-check-label' for="metal2">
                  Metal Uses
              </Label>
          </div>
      </Col> */}

                                                <Col md={1}></Col>
                                            </Row>


                                            <div className="mt-3" style={{ float: "right" }}>
                                                <button
                                                    type="submit"
                                                    style={{ width: "120px" }}
                                                    className="btn btn-success m-1"
                                                >
                                                    Submit <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </Form>
                                    ) : (
                                        <>
                                            <h5 className='text-center'>You don't have permission to access</h5>
                                        </>
                                    )}

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Roles