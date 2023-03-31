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


const Addsetting = () => {

    const ordid = sessionStorage.getItem("ordobid7")
    const settid = sessionStorage.getItem("malaid")
    const settitem = sessionStorage.getItem("malaitem")
    const [form, setform] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [selectedMulti2, setselectedMulti2] = useState([{ label: "", value: "", item: "" }])
    console.log(selectedMulti2)

    const navigate = useNavigate()
    const [inputList, setInputList] = useState([{ stoneOutWeight: "", item: "", pieces: "", quantityGmCts: "", StoneRange: "" }])

    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const list = [...inputList]
        list[index][name] = value
        setInputList(list)
        console.log(index)

    }
    const handleRemoveClick = index => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }

    const handleAddClick = () => {
        setInputList([...inputList, { stoneOutWeight: "", item: "", pieces: "", quantityGmCts: "", StoneRange: "" }])
        setselectedMulti2([...selectedMulti2, { label: "", value: "", item: "" }])
    }


    const handleChange1 = (e) => {
        const myUser = { ...form }
        myUser[e.target.name] = e.target.value
        setform(myUser)
    }


    // const [ordr, setordr] = useState([])
    const [orders, setorders] = useState([])
    const [stpkts, setstpkts] = useState([])
    // const [purity1, setpurity1] = useState([])
    const [customer, setcustomer] = useState([])
    const gets = localStorage.getItem("userData")
    const data1 = JSON.parse(gets)
    console.log(data1.fullName)
    const datas = localStorage.getItem("accessToken")
    console.log(datas)

    const [selectedMulti1, setselectedMulti1] = useState({ label: "", value: "" })

    console.log(selectedMulti1)
    function handleMulti(data) {
        setselectedMulti1(data)
    }


    // const [selectedMulti, setselectedMulti] = useState({ label: "", value: "" })
    // const [ordritem, setordritem] = useState([])
    // // const [itemval, setitemval] = useState([])
    // const [itemvaldate, setitemvaldate] = useState([])
    // const [orderdate, setorderdate] = useState([])
    // // console.log(selectedMulti.value)
    // function handleMulti1(data) {
    //     setpurity1(data.purity)
    //     setordritem(data.itemName)
    //     setorderdate(data.itemdate)
    //     // const set = [...orders, data]
    //     setselectedMulti(data)
    //     // setorders(set)
    // }

   
    // console.log(selectedMulti.value)
    function handleMulti2(data, i) {
        console.log(data)
        inputList[i]['item'] = data.item
        console.log(data.item)
        const set = [...orders, data]
        selectedMulti2[i]['label'] = data.label
        selectedMulti2[i]['value'] = data.value
        selectedMulti2[i]['item'] = data.item
        setorders(set)
    }

    // const handleChangewe = (e) => {
    //     const token = datas
    //     console.log(token)
    //     const myUser = { ...form }
    //     console.log(form)
    //     myUser[e.target.name] = e.target.value
    //     setform(myUser)
    //     const params = {
    //         orderId: selectedMulti.value,
    //         id: e.target.value
    //     }
    //     axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/mala/getbandinireceivewt", params,
    //         {
    //             headers: { Authorization: `Bearer ${token}` }
    //         }, {}
    //     ).then((res) => {
    //         if (res.status === 200) {
    //             console.log(res.data.weightOut)
    //             // setitemval(res.data.weightOut)
    //             setitemvaldate(res.data.receivedDate)
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

    const actiordrs123 = () => {
        const token = datas
        // const docid = ordid
        const params = {
          orderId:ordid,
          itemName:settitem
        }
        axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/mala/getmalabyid`, params,
          {
            headers: { Authorization: `Bearer ${token}` }
          }, {}
        ).then((res) => {
          if (res.status === 200) {
            console.log(res.data)
            setform(res.data.malaFound)
            setInputList(res.data.malaFound.otherDetails)
            // setitemval(res.data.malaFound.outWeight)
            // setselectedMulti({ label: res.data.malaFound.orderNo, value: res.data.malaFound.orderId })
            setselectedMulti1({ label: res.data.malaFound.employeeName, value: res.data.malaFound.employeeId })
            
            setInputList(res.data.malaFound.otherDetails)
            const vsr = res.data.malaFound.otherDetails
            console.log(vsr)
            const label = vsr.map((data) => (
                { value: data.stoneOutWeight, label: data.stoneOutWeight, item: data.item }
            ))
            setselectedMulti2(label)
            console.log(res.data.malaFound.otherDetails)

            // setInputList(res.data.malaFound.otherDetails)
            // setselectedMulti2({ label: res.data.malaFound.otherDetails.stoneOutWeight, value: res.data.malaFound.otherDetails.stoneOutWeight, item: res.data.malaFound.otherDetails.item })
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

 
    // const actiordrs = () => {
    //     const token = datas
    //     console.log(token)
    //     axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/mala/getorders",
    //         {
    //             headers: { Authorization: `Bearer ${token}` }
    //         }, {}
    //     ).then((res) => {
    //         if (res.status === 200) {
    //             console.log(res.data)
    //             setordr(res.data.orderData)
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
        axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/mala/getemployee",
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
    console.log(pktsid)

    // const ordrid = ordr.map((data) => (
    //     { value: data._id, label: data.orderNo, purity: data.itemPurity, itemName: data.itemNameMulti, itemdate: data.deliveryDate }
    // ))

    const empid = customer.map((data) => (
        { value: data._id, label: data.fullName }
    ))

    useEffect(() => {
        activecust()
        // actiordrs()
        actipckts()
        actiordrs123()
    }, [])

    const Addcasting = () => {
        const token = datas
        const docsid = settid
        //const data=[]
        const data = inputList.map((x, i) => (
            {
                stoneOutWeight: selectedMulti2[i]["value"],
                item: selectedMulti2[i]["item"],
                pieces: x.pieces,
                quantityGm: x.quantityGm,
                quantityGmCts :(x.quantityGm === "Cts") ? parseFloat(x.quantityGmCts).toFixed(2) : parseFloat(x.quantityGmCts).toFixed(3) 
                // quantityGmCts: parseFloat(x.quantityGmCts).toFixed(3)
                //  finishIn : x.finishIn,
                //  scapIn : x.scapIn, 
                //  loss : x.loss 
            }
        ))
        const params = {
            submittedDate: form.submittedDate,
            orderId: form.orderId,
            employeeId: selectedMulti1.value,
            itemId: form.itemId,
            outWeight: parseFloat(form.outWeight).toFixed(3),
            purity: form.purity,
            otherDetails: data
            //  purity: inputList.purity,
            //  weightOut: inputList.weightOut,
            //  finishIn: inputList.finishIn,
            //  scapIn: inputList.scapIn,
            //  loss: inputList.loss

        }
        console.log(token)
        axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/mala/editissuedmala/${docsid}`, params,
            {
                headers: { Authorization: `Bearer ${token}` }
            }, {}
        ).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                toast.success(res.data.message)
                navigate("/mala-details")
                setIsSubmitting(false)
                // setcustomer(res.data.employeeData)
            }
            }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
            setIsSubmitting(false)
        }
    })

    }

    const castsubmit = (e) => {
        e.preventDefault()
        Addcasting()
        setIsSubmitting(true)
    }

    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <BreadCrumbsPage data={[{ title: "Edit Mala" }]} />

                <Card className="mt-1">
                    <CardHeader>
                        {/* <h5>Issued To Bandini Details</h5> */}
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={(e) => { castsubmit(e) }}>
                            <Row>
                                <Col md={2}>
                                    <Label for="name" style={{ color: "black" }}>
                                        Sales Order No : <span className="text-danger">*</span>
                                    </Label>
                                    <Input value={form.orderNo} />
                                    {/* <Select
                                        value={selectedMulti}
                                        onChange={handleMulti1}
                                        // value={ordrid.find(function (ordrid) {
                                        //     return ordrid.value === selectedMulti
                                        // })}
                                        required
                                        name="orderId"
                                        options={ordrid} /> */}
                                </Col>
                                <Col sm="2">
                                    <Label for="name" style={{ color: "black" }}>
                                        Item  : <span className="text-danger">*</span>
                                    </Label>
                                    <Input value={form.itemName} />
                                    {/* <select className="form-select" required onChange={(e) => handleChangewe(e)} name="itemId">
                                        <option value="">Select</option>
                                        {ordritem.map((data) => (
                                            <option value={data.id}>{data.itemName}</option>
                                        ))}
                                    </select> */}
                                </Col>
                                <Col sm="2">
                                    <Label for="name" style={{ color: "black" }}>
                                        Purity  : <span className="text-danger">*</span>
                                    </Label>
                                    <Input required name="purity" value={form.purity} placeholder="Purity" onChange={e => handleInputChange(e, i)} type="text" />

                                </Col>

                                <Col md="2">
                                    <Label>
                                        Date :<span className="text-danger">*</span>
                                    </Label>
                                    <Input
                                        // max={orderdate}
                                        // min={itemvaldate}
                                        value={form.submittedDate}
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
                                    <Input
                                        name="outWeight" required value={form.outWeight}
                                        type="text" id="select-basic" placeholder="Enter Weight Out" className="form-control mb-1" />
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
                                                    // defaultValue={selectedMulti2}
                                                    // defaultValue={selectedMulti2.label}
                                                    onChange={e => handleMulti2(e, i)}
                                                    // defaultValue={{""}}
                                                    // onChange={handleMulti1}
                                                    value={pktsid.find(function (pktsid) {
                                                        return pktsid.value  === selectedMulti2[i]['value']
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
                                                    <Input id="exampleSelect" type="select"
                                                        name="quantityGm"
                                                        value={x.quantityGm}
                                                        onChange={e => handleInputChange(e, i)}
                                                        required>
                                                        <option>Select</option>
                                                        {/* <option>Cts</option> */}
                                                        <option value="Cts">Cts</option>
                                                        {/* <option value="grms">grams</option> */}
                                                    </Input>
                                                </Col>
                                            </Col>

                                            {x.quantityGm === "Cts" ? (<>
                                                <Col md='2' sm='12' className='mb-1'>
                                                    <Label>Quantity Cts  <span className="text-danger">*</span></Label>
                                                    <Input required type='text' id='nameMulti' placeholder='Enter Stone Cts'
                                                        name="quantityGmCts"
                                                        value={x.quantityGmCts}
                                                        onChange={e => handleInputChange(e, i)}
                                                    />
                                                </Col>
                                            </>) : null}
                                            {x.quantityGm === "grms" ? (<>
                                                <Col md='2' sm='12' className='mb-1'>
                                                    <Label>Quantity Gms  <span className="text-danger">*</span></Label>
                                                    <Input required type='text' id='nameMulti' placeholder='Enter Stone Gms'
                                                        name="quantityGmCts"
                                                        value={x.quantityGmCts}
                                                        onChange={e => handleInputChange(e, i)}
                                                    />
                                                </Col>
                                            </>) : null}

                                         
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
                                    <Button disabled={isSubmitting} outline size="sm" className="me-1 mt-1" color="success" type="submit">
                                    {isSubmitting ? 'Submitting...' : 'Submit'} <ArrowRightCircle className='font-medium-2 pl-1' />
                                    </Button>
                                    {/* </Link> */}
                                    <Link to={"/mala-details"}>
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