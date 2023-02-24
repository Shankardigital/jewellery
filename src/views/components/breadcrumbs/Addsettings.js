// ** React Imports
import { Fragment, useState, useEffect } from "react"
import BreadCrumbsPage from "@components/breadcrumbs"
import {
    CardTitle,
    CardHeader,
    InputGroupText,
    InputGroup,
    Card,
    CardBody,
    Button,
    Row,
    Col,
    Badge,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Alert,
    Input,
    Label,
    Form
} from "reactstrap"
// import qrcode from "../../../assets/images/qr.png"
// import gold from "../../../assets/images/gold.jpg"
import { ArrowRightCircle, X } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Select from 'react-select'
import axios from "axios"
import toast from 'react-hot-toast'
// import { data } from "jquery"

// const options = [
//   { value: 'OSJ01', label: '01 PKt' },
//   { value: 'OSJ02', label: '02 PKt' },
//   { value: 'OSJ03', label: ' 03 PKt' },
//   { value: 'OSJ04', label: ' 04 PKt' },
//   { value: 'OSJ05', label: ' 05 PKt' }
// ]

const Addsetting = () => {

    // const [formValues, setFormValues] = useState([{ orderId: "", purity: "", weightOut: "", finishIn: "", scapIn: "", loss: "" }])
    const [form, setform] = useState([])

    // const handleChange = (i, e) => {
    //   const newFormValues = [...formValues]
    //   newFormValues[i][e.target.name] = e.target.value
    //   setFormValues(newFormValues)
    // }

    // const addFormFields = () => {
    //   setFormValues([...formValues, { orderId: "", purity: "", weightOut: "", finishIn: "", scapIn: "", loss: "" }])
    // }

    // const removeFormFields = (i) => {
    //   const newFormValues = [...formValues]
    //   newFormValues.splice(i, 1)
    //   setFormValues(newFormValues)
    // }

    // const [zzz, setzzz] = useState([])
    // console.log(zzz)
    const navigate = useNavigate()
    const [inputList, setInputList] = useState([{ stoneOutWeight: "", item: "", pieces: "", quantityGmCts: "", StoneRange: "" }])

    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const list = [...inputList]
        list[index][name] = value
        setInputList(list)
        console.log(index)

    }

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }

    const handleAddClick = () => {
        setInputList([...inputList, { stoneOutWeight: "", item: "", pieces: "", quantityGmCts: "", StoneRange: "" }])
    }

    const [ordr, setordr] = useState([])
    const [orders, setorders] = useState([])
    const [stpkts, setstpkts] = useState([])
    const [purity1, setpurity1] = useState([])
    const [customer, setcustomer] = useState([])
    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    console.log(data1.fullName)
    const datas = localStorage.getItem("accessToken")
    console.log(datas)

    const [selectedMulti1, setselectedMulti1] = useState([])

    console.log(selectedMulti1)
    function handleMulti(data) {
        setselectedMulti1(data)
    }


    const [selectedMulti, setselectedMulti] = useState()
    const [itemval, setitemval] = useState([])
    const [ordritem, setordritem] = useState([])
    const [ordrdate, setordrdate] = useState([])
    const [ordritdate, setoritdrdate] = useState([])
    // console.log(selectedMulti.value)
    function handleMulti1(data) {
        setpurity1(data.purity)
        // setordritem(data.itemName)
        setordrdate(data.itemdat)
        setselectedMulti(data)

        const token = datas
        const params = {
            orderId: data.value
        }
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/ghatdetails/getorderitemdetils", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setordritem(res.data.itemData)

            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })

    }
    const [selectedMulti2, setselectedMulti2] = useState()

    const handleChange1 = (e) => {
        const myUser = { ...form }
        myUser[e.target.name] = e.target.value
        setform(myUser)

    }

    // console.log(selectedMulti.value)
    function handleMulti2(data, i) {
        console.log(data)
        inputList[i]['item'] = data.item
        // setpurity1(data.purity)
        const set = [...orders, data]
        setselectedMulti2(data)
        setorders(set)
    }
    const [totalwe, settotalwe] = useState([])
    const handleChange12 = (e) => {
        const myUser = { ...form }
        myUser[e.target.name] = e.target.value
        setform(myUser)
        const count = parseFloat(itemval) + parseFloat(e.target.value)
        settotalwe(count.toFixed(3))
    }

    const actiordrs = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/setting/getorders",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setordr(res.data.orderData)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })

    }

    const actipckts = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/setting/getactivestonestorage",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setstpkts(res.data.activestonestorage)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })

    }

    const activecust = () => {
        const token = datas
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/setting/getemployee",
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setcustomer(res.data.employeeData)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })

    }

    const pktsid = stpkts.map((data) => (
        { value: data.stoneOutWeight, label: data.stoneOutWeight, item: data.item }
    ))

    const ordrid = ordr.map((data) => (
        { value: data._id, label: data.orderNo, purity: data.itemPurity, itemName: data.itemNameMulti, itemdat: data.deliveryDate }
    ))

    const empid = customer.map((data) => (
        { value: data._id, label: data.fullName }
    ))

    useEffect(() => {
        activecust()
        actiordrs()
        actipckts()
    }, [])

    const handleChangewe = (e) => {
        const token = datas
        console.log(token)
        const myUser = { ...form }
        console.log(form)
        myUser[e.target.name] = e.target.value
        setform(myUser)
        const params = {
            orderId: selectedMulti.value,
            id: e.target.value
        }
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/setting/getPolishreceivewt", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                setitemval(res.data.weightOut)
                setoritdrdate(res.data.receivedDate)
                console.log(res.data.weightOut)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })

    }


    const Addcasting = () => {
        const token = datas
        //const data=[]
        const data = inputList.map((x, i) => (
            {
                stoneOutWeight: orders[i]["value"],
                item: orders[i]["item"],
                pieces: x.pieces,
                quantityGm: x.StoneRange,
                quantityGmCts: (x.StoneRange === "Cts") ? parseFloat(x.quantityGmCts).toFixed(2) : parseFloat(x.quantityGmCts).toFixed(3)
            }
        ))
        const params = {
            submittedDate: form.submittedDate,
            orderId: selectedMulti.value,
            employeeId: selectedMulti1.value,
            purity: purity1,
            itemId: form.itemId,
            outWeight: parseFloat(itemval).toFixed(3),
            tikliPieces: parseFloat(form.tikliPieces),
            tikliweight: parseFloat(form.tikliweight).toFixed(3),
            totalWeight: parseFloat(totalwe).toFixed(3),
            otherDetails: data
            //  purity: inputList.purity,
            //  weightOut: inputList.weightOut,
            //  finishIn: inputList.finishIn,
            //  scapIn: inputList.scapIn,
            //  loss: inputList.loss

        }
        console.log(token)
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/setting/addsetting", params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                navigate("/setting-details")
                // setcustomer(res.data.employeeData)
            }
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data.message)
                toast.error(error.response.data.message)
            }
        })

    }

    const castsubmit = (e) => {
        e.preventDefault()
        Addcasting()
    }

    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <BreadCrumbsPage data={[{ title: "Add Setting" }]} />

                <Card className="mt-1">
                    <CardHeader>
                        <h5>Issued To Setting Details </h5>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={(e) => { castsubmit(e) }}>
                            <Row>
                                <Col md={2}>
                                    <Label for="name" style={{ color: "black" }}>
                                        Sales Order No : <span className="text-danger">*</span>
                                    </Label>
                                    <Select
                                        value={selectedMulti}
                                        onChange={handleMulti1}
                                        // value={ordrid.find(function (ordrid) {
                                        //     return ordrid.value === selectedMulti
                                        // })}
                                        required
                                        name="orderId"
                                        options={ordrid} />
                                </Col>
                                <Col sm="2">
                                    <Label for="name" style={{ color: "black" }}>
                                        Item  : <span className="text-danger">*</span>
                                    </Label>
                                    <select className="form-select" required onChange={(e) => handleChangewe(e)} name="itemId">
                                        <option value="">Select</option>
                                        {ordritem.map((data) => (
                                            <option value={data._id}>{data.itemName}</option>
                                        ))}
                                    </select>
                                </Col>
                                <Col sm="2">
                                    <Label for="name" style={{ color: "black" }}>
                                        Purity  : <span className="text-danger">*</span>
                                    </Label>
                                    <Input required name="purity" value={purity1} placeholder="Purity" onChange={e => handleInputChange(e, i)} type="text" />

                                </Col>

                                <Col md="2">
                                    <Label>
                                        Date :<span className="text-danger">*</span>
                                    </Label>
                                    <Input
                                        max={ordrdate}
                                        min={ordritdate}
                                        name="submittedDate" type="date" placeholder="Enter Date" className="form-control mb-1"
                                        onChange={(e) => { handleChange1(e) }}
                                        required
                                    />

                                </Col>
                                <Col sm="2">
                                    <Label for="name" style={{ color: "black" }}>
                                        Select Employee : <span className="text-danger">*</span>
                                    </Label>
                                    <Select
                                        name="employeeId"
                                        // onChange={ (e) => { handleChange1(e) } }
                                        value={selectedMulti1}
                                        onChange={handleMulti}
                                        options={empid}
                                        required
                                    />
                                </Col>

                                <Col sm="2">
                                    <Label for="name" style={{ color: "black" }}>
                                        Weight Out :
                                    </Label>
                                    <Input value={itemval}
                                        name="outWeight" required
                                        // onChange={(e) => { handleChange1(e) }}
                                        type="text" id="select-basic" placeholder="Enter Weight Out" className="form-control mb-1" />
                                </Col>
                                <Col sm="2">
                                    <Label for="name" style={{ color: "black" }}>
                                        Tikili Pieces:
                                    </Label>
                                    <Input required
                                        name="tikliPieces" onChange={(e) => { handleChange1(e) }}
                                        type="text" id="select-basic" placeholder="Enter Tikili Pieces" className="form-control mb-1" />
                                </Col>
                                <Col sm="2">
                                    <Label for="name" style={{ color: "black" }}>
                                        Tikili Weight:
                                    </Label>
                                    <Input required
                                        name="tikliweight" onChange={(e) => { handleChange12(e) }}
                                        type="text" id="select-basic" placeholder="Enter Tikili Weight" className="form-control mb-1" />
                                </Col>
                                <Col sm="2">
                                    <Label for="name" style={{ color: "black" }}>
                                        Total :
                                    </Label>
                                    <Input required
                                        name="totalWeight" value={totalwe}
                                        type="text" id="select-basic" placeholder="Enter Tikili Weight" className="form-control mb-1" />
                                </Col>

                                {inputList.map((x, i) => {
                                    return (
                                        <div className="box row">
                                            <Col md={2}>
                                                <Label for="name" style={{ color: "black" }}>
                                                    Stone Packet : <span className="text-danger">*</span>
                                                </Label>
                                                <Select
                                                    // value={selectedMulti}
                                                    onChange={e => handleMulti2(e, i)}
                                                    // defaultValue={{""}}
                                                    // onChange={handleMulti1}
                                                    value={pktsid.find(function (pktsid) {
                                                        return pktsid.value === selectedMulti2
                                                    })}
                                                    // value={x.orderId}
                                                    required
                                                    // classNamePrefix="select"
                                                    // clearIndicator
                                                    name="stoneOutWeight"
                                                    options={pktsid} />
                                            </Col>
                                            <Col sm="2">
                                                <Label for="name" style={{ color: "black" }}>
                                                    Item  : <span className="text-danger">*</span>
                                                </Label>
                                                <Input required name="item" value={x.item} placeholder="Item" onChange={e => handleInputChange(e, i)} type="text" />

                                            </Col>

                                            <Col sm="2">
                                                <Label for="name" style={{ color: "black" }}>
                                                    Pieces :
                                                </Label>
                                                <Input
                                                    name="pieces" required value={x.pieces} onChange={e => handleInputChange(e, i)}
                                                    type="text" id="select-basic" placeholder="Enter Pieces" className="form-control mb-1" />
                                            </Col>

                                            <Col md='2' sm='12' className='mb-1'>
                                                <Label>Quantity Gms/Cts  <span className="text-danger">*</span></Label>
                                                <Col>
                                                    <select id="exampleSelect"
                                                        name="StoneRange"
                                                        className="form-select"
                                                        value={x.StoneRange}
                                                        onChange={e => handleInputChange(e, i)}
                                                        required>
                                                        <option value="">Select</option>
                                                        {/* <option>Cts</option> */}
                                                        <option value="Cts">Cts</option>
                                                        <option value="grms">grams</option>
                                                    </select>
                                                </Col>
                                            </Col>

                                            {x.StoneRange === "Cts" ? (<>
                                                <Col md='2' sm='12' className='mb-1'>
                                                    <Label>Quantity Cts  <span className="text-danger">*</span></Label>
                                                    <Input type='text' id='nameMulti' placeholder='Enter Stone Cts'
                                                        name="quantityGmCts"
                                                        required
                                                        value={x.quantityGmCts}
                                                        onChange={e => handleInputChange(e, i)}
                                                    />
                                                </Col>
                                            </>) : null}
                                            {x.StoneRange === "grms" ? (<>
                                                <Col md='2' sm='12' className='mb-1'>
                                                    <Label>Quantity Gms  <span className="text-danger">*</span></Label>
                                                    <Input type='text' id='nameMulti' placeholder='Enter Stone Gms'
                                                        name="quantityGmCts"
                                                        value={x.quantityGmCts}
                                                        required
                                                        onChange={e => handleInputChange(e, i)}
                                                    />
                                                </Col>
                                            </>) : null}

                                            {/* <Col sm="2">
                        <Label for="name" style={{ color: "black" }}>
                          Finish In:
                        </Label>
                        <Input type="text" required value={x.finishIn} onChange={e => handleInputChange(e, i)} name="finishIn" id="select-basic" placeholder="Enter Finish In" className="form-control mb-1" />
                      </Col>

                      <Col sm="2">
                        <Label for="name" style={{ color: "black" }}>
                          Scrap In:
                        </Label>
                        <Input type="text" required value={x.scapIn} onChange={e => handleInputChange(e, i)} name="scapIn" id="select-basic" placeholder="Enter Scrap In" className="form-control mb-1" />
                      </Col>

                      <Col sm="2">
                        <Label for="name"  style={{ color: "black" }}>
                          Loss:
                        </Label>
                        <Input required value={x.loss} onChange={e => handleInputChange(e, i)} type="text" name="loss" id="select-basic" placeholder="Enter Loss" className="form-control mb-1" />
                      </Col> */}

                                            {/* <input
                        name="firstName"
                        placeholder="Enter First Name"
                        value={x.firstName}
                        onChange={e => handleInputChange(e, i)}
                      />
                      <input
                        className="ml10"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={x.lastName}
                        onChange={e => handleInputChange(e, i)}
                      /> */}
                                            <Col sm="2" style={{ marginTop: "30px" }}>
                                                <div className="btn-box">
                                                    {inputList.length !== 1 && <button
                                                        className="mr10 btn btn-outline-danger text-end btn-sm" style={{ float: "right" }}
                                                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                                                    {inputList.length - 1 === i && <button className="btn btn-outline-info btn-sm" onClick={handleAddClick}>Add</button>}
                                                </div>
                                            </Col>

                                        </div>
                                    )
                                })}

                            </Row>
                            <Row className="mt-1" style={{ float: "right" }}>
                                <Col>
                                    {/* <Link to={"/casting"}> */}
                                    <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                                        Submit <ArrowRightCircle className='font-medium-2 pl-1' />
                                    </Button>
                                    {/* </Link> */}
                                    <Link to={"/setting-details"}>
                                        <Button outline size="sm" className="me-1 mt-1" color="danger" type="button">
                                            <X className='font-medium-2 pl-1' /> Cancel
                                        </Button></Link>

                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>


            </div>
        </Fragment>
    )
}
export default Addsetting