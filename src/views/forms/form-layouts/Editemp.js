// ** Reactstrap Imports
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import axios from "axios"
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import Breadcrumbs from '@components/breadcrumbs'


const MultipleColumnForm = () => {

    const [pfdata, setpfdata] = useState([])
    const [form, setform] = useState([])
    console.log(form)

    const handleChange = (e) => {
        const newadmin = { ...pfdata }
        newadmin[e.target.name] = e.target.value
        setpfdata(newadmin)
    }

    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    console.log(data1.fullName)
    const datas = localStorage.getItem("accessToken")
    console.log(datas)

    const datas1 = sessionStorage.getItem("empid")
    console.log(datas1)

    const custlist = () => {
        const docid = datas1
        const token = datas
        const params = {
            id: docid
        }
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/getemployeebyid", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setpfdata(res.data.profileResult)
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }

    const depart = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/department/getalldepartments",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setform(res.data.departmentResult)
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }

    const navigate = useNavigate()

    const Addcust = (e) => {
        e.preventDefault()
        const docid = datas1
        const token = datas
        const params = {
            firstName: pfdata.firstName,
            lastName: pfdata.lastName,
            email: pfdata.email,
            phone: pfdata.phone,
            // password: pfdata.password,
            designation: pfdata.designation,
            departmentId: pfdata.departmentId,
            address: pfdata.address,
            state: pfdata.state,
            city: pfdata.city,
            country: pfdata.country,
            status: pfdata.status
        }
        axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/editemployeebyid/${docid}`, params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                // setpfdata(res.data.profileResult)
                // custlist()
                toast.success(res.data.message)
                navigate("/employeelist")
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

    }


    // const formsub = (e) => {
    //     e.preventDefault()
    //     Addcust()
    // }

    useEffect(() => {
        depart()
        custlist()
    }, [])


    return (
        <Row>
            <Col md="12">
                <Breadcrumbs title='Edit Employee' data={[{ title: 'Edit Employee' }]} />

                <Card>
                    <CardHeader>
                        {/* <CardTitle tag='h4'>Multiple Column</CardTitle> */}
                    </CardHeader>

                    <CardBody>
                        <Form onSubmit={Addcust}>
                            <Row>
                                <Col md='3' sm='12' className='mb-1'>
                                    <Label className='form-label' for='nameMulti'>
                                        First Name
                                    </Label>
                                    <Input value={pfdata.firstName} required onChange={(e) => handleChange(e)} type='text' name='firstName' id='nameMulti' placeholder='First Name' />
                                </Col>
                                <Col md='3' sm='12' className='mb-1'>
                                    <Label className='form-label' for='lastNameMulti'>
                                        Last Name
                                    </Label>
                                    <Input value={pfdata.lastName} required onChange={(e) => handleChange(e)} type='text' name='lastName' id='lastNameMulti' placeholder='Last Name' />
                                </Col>

                                <Col md='3' sm='12' className='mb-1'>
                                    <Label className='form-label' for='EmailMulti'>
                                        Email
                                    </Label>
                                    <Input value={pfdata.email} required onChange={(e) => handleChange(e)} type='email' name='email' id='EmailMulti' placeholder='Email' />
                                </Col>
                                <Col md='3' sm='12' className='mb-1'>
                                    <Label className='form-label' for='EmailMulti'>
                                        Mobile Number
                                    </Label>
                                    <Input value={pfdata.phone} required onChange={(e) => handleChange(e)} type='number' name='phone' id='EmailMulti' placeholder='Mobile Number' />
                                </Col>

                                <Col md='3' sm='12' className='mb-1'>

                                    <Label className='form-label' for='select-basic'>
                                        Designation
                                    </Label>
                                    <Input value={pfdata.designation} placeholder='Designation' required onChange={(e) => handleChange(e)} type='text' name='designation' id='select-basic'>

                                    </Input>
                                </Col>

                                <Col md='3' sm='12' className='mb-1'>

                                    <Label className='form-label' for='select-basic'>
                                        Department
                                    </Label>
                                    <Input value={pfdata.departmentId} required onChange={(e) => handleChange(e)} type='select' name='departmentId' id='select-basic'>
                                        <option>Select Department </option>

                                        {form.map((data) => (
                                            <option value={data._id}>{data.departmentName}</option>
                                        ))}

                                    </Input>
                                </Col>

                                <Col md='3' sm='12' className='mb-1'>
                                    <Label className='form-label' for='CountryMulti'>
                                        Country
                                    </Label>
                                    <select value={pfdata.country} className='form-select' required onChange={(e) => handleChange(e)} name='country'>
                                        <option value="">Select</option>
                                        <option value="India">India</option>
                                    </select>
                                </Col>
                                <Col md='3' sm='12' className='mb-1'>
                                    <Label className='form-label' for='CountryMulti'>
                                        state
                                    </Label>
                                    <Input value={pfdata.state} required onChange={(e) => handleChange(e)} type='text' name='state' id='CountryMulti' placeholder='state' />
                                </Col>

                                <Col md='3' sm='12' className='mb-1'>
                                    <Label className='form-label' for='cityMulti'>
                                        City
                                    </Label>
                                    <Input value={pfdata.city} required onChange={(e) => handleChange(e)} type='text' name='city' id='cityMulti' placeholder='City' />
                                </Col>
                                <Col md='3' sm='12' className='mb-1'>
                                    <Label className='form-label' for='CompanyMulti'>
                                        Address
                                    </Label>
                                    <Input value={pfdata.address} required onChange={(e) => handleChange(e)} type='text' name='address' id='CompanyMulti' placeholder='Address' />
                                </Col>
                                <Col md='3' sm='12' className='mb-1'>
                                    <Label className='form-label' for='CompanyMulti'>
                                        Status
                                    </Label>
                                    <select name='status' className='form-select' value={pfdata.status} required onChange={(e) => handleChange(e)} >
                                        <option value="">Select</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                    {/* <Input  type='text' name='address' id='CompanyMulti' placeholder='Address' /> */}
                                </Col>

                                <Col sm='12'>
                                    <div className='d-flex' style={{ float: 'right' }}>
                                        <Button className='m-1' color='success' type='submit' >
                                            Submit
                                        </Button>

                                        <Link to="/employeelist">
                                            <Button className='m-1' outline color='danger' type='reset'>
                                                Cancel
                                            </Button>
                                        </Link>

                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>

            </Col>
        </Row>


    )
}
export default MultipleColumnForm
