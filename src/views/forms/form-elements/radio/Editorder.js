// ** React Imports
import { Fragment, useEffect, useState } from "react"

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Input,
  Form,
  Button,
  Label,
  FormGroup
} from "reactstrap"

// ** Custom Components
import Breadcrumbs from "@components/breadcrumbs"

// ** Demo Components
import RadioBasic from "./RadioBasic"
import RadioColors from "./RadioColors"
import axios from "axios"
import toast from 'react-hot-toast'

import Select from 'react-select'
import { useNavigate, Link } from 'react-router-dom'


// const options = [
//   { value: 'sai', label: 'sai / 900000001' },
//   { value: 'ravi', label: 'ravi / 900000001' },
//   { value: 'venkat', label: 'venkat / 900000001' },
//   { value: 'senkar', label: 'senkar / 900000001' },
//   { value: 'srikanth', label: 'srikanth / 900000001' }
// ]

const Radio = () => {

  const [form, setform] = useState([])
  console.log(form)
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)


  const handleChange = (e) => {
    const myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }

  const [Files, setFiles] = useState("")

  const [inputList, setInputList] = useState([{ itemName: "" }])
  console.log(inputList)

  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
    console.log(index)

  }

  // handle click event of the Remove button


  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { itemName: "" }])
  }


  const changeHandler = (e) => {
    const file = e.target.files
    console.log(file)
    const ext = file[0].name.split(".").pop()
    const type = ext
    console.log(type)
    if (
      type === "jpg" ||
      type === "jpeg" ||
      type === "png" 
    ) {
      setFiles(e.target.files)
      console.log(e.target.files)
      console.log("e.target.files")
    } else {
      e.target.value = null
      toast.error("file format not supported.Pls choose jpg/jpeg/png")
    }
    // setFiles(e.target.files)
  }

  const [selectedMulti1, setselectedMulti1] = useState([])
  console.log(selectedMulti1.value)
  function handleMulti(data) {
    setselectedMulti1(data)

  }

  // const handleRemoveClick = index => {
  //   const list = [...inputList]
  //   list.splice(index, 1)
  //   setInputList(list)
  // }

  const [customer, setcustomer] = useState([])
  // const [forms, setforms] = useState([])
  // console.log(customer)

  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  console.log(datas)
  const datas1 =  sessionStorage.getItem("ordid")

  const custlist = () => {
    const docid = datas1
    const token = datas
    const params = {
        id:docid
    }
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/order/getorderbyid", params,
        {
            headers: { Authorization: `Bearer ${token}` }
        }, {}
    ).then((res) => {
        if (res.status === 200) {
            console.log(res.data)
            setform(res.data.orderObj)
            setselectedMulti1(res.data.orderObj.customer)
            setInputList(res.data.orderObj.itemNameMulti)
            // settest1(res.data.orderResult.customerId)
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


  const activecust = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/order/getcustomertoassignorder",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setcustomer(res.data.customersFound)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }

  const empid = customer.map((data) => (
    { value: data._id, label: data.customerName }
  ))

  console.log(empid)


  useEffect(() => {
    activecust()
    custlist()
  }, [])


  const addOrders = () => {
    const token = datas
    const docid = datas1
    const data12 =  inputList.map((x) => (
      {  
        itemName : (x.itemName),
        itemId:(x._id) ? x._id : null
      }
    ))

    const dataArray = new FormData()
    dataArray.append("date", form.date)
    console.log(data12)
    dataArray.append("itemNameMulti", JSON.stringify(data12))
    dataArray.append("itemPurity", form.itemPurity)
    dataArray.append("grossWeight", parseFloat(form.grossWeight).toFixed(3))
    dataArray.append("goldWeight", parseFloat(form.goldWeight).toFixed(3))
    dataArray.append("itemDimondRange", form.itemDimondRange)
    if (form.itemDimondRange === "") {
      dataArray.append("itemDimondRangeCarat", "0")
    } else {
      dataArray.append("itemDimondRangeCarat", parseFloat(form.itemDimondRangeCarat).toFixed(2))
    }
    dataArray.append("itemStoneRange", form.itemStoneRange)
    if (form.itemStoneRange === "") {
      dataArray.append("itemStoneCarat", "0")
    } else {
      dataArray.append("itemStoneCarat", parseFloat(form.itemStoneCarat).toFixed(2))
    }
    dataArray.append("itemSpecialRemarks", form.itemSpecialRemarks)
    dataArray.append("deliveryDate", form.deliveryDate)
    dataArray.append("customerId", selectedMulti1.value)
    for (let i = 0; i < Files.length; i++) {
      dataArray.append("itemImage", Files[i])
    }
    console.log(token)
    axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/order/editorder/${docid}`, dataArray,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        navigate("/orderlist")
        setIsSubmitting(false)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
            setIsSubmitting(false)
        }
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addOrders()
    setIsSubmitting(true)
  }

  // const deleteitem = (data) => {
  //   // data.preventDefault()
  //   const token = datas
  //   const orderid = datas1
  //   const params = {
  //     itemId : data.itemId
  //   }
  //   // const  = data.itemId
  //   axios.delete(`http://103.186.185.77:5023/omsanthoshjewellery/admin/order/deleteorderitem/${orderid}`, params,
  //   {
  //     headers: { Authorization: `Bearer ${token}` }
  //   }, {}
  // ).then((res) => {
  //   if (res.status === 200) {
  //     console.log(res.data)
  //     // toast.success(res.data.message)
  //   }
  // },
  //   (error) => {
  //     if (error.response && error.response.status === 400) {
  //       toast.error(error.response.data.message)
  //       console.log(error.data.message)

  //     }
  //   }
  // )
  // }

  const handleRemoveClick = index => {
    console.log(index)
    // console.log(data)
    const list = [...inputList]
    console.log(list[index]._id)
    setInputList(list)
   
    const token = datas
    const iteid = list[index]._id
     console.log(list[index]._id)
    const orderdata = {
      orderId : datas1
    }
    list.splice(index, 1)
    // const  = data.itemId
    axios.delete(`http://103.186.185.77:5023/omsanthoshjewellery/admin/order/deleteorderitem/${iteid}`, orderdata,
    {
      headers: { Authorization: `Bearer ${token}` }
    }, {}
  ).then((res) => {
    if (res.status === 200) {
      console.log(res.data)
      // toast.success(res.data.message)

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

  // const deprt = (e) => {
  //     e.preventDefault()
  // }

  return (
    <Fragment>
      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <Breadcrumbs title="Edit Sales Order" data={[{ title: "Edit Sales Order" }]} />
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                {/* <CardTitle
                tag="h4"
                className="text-center"
                style={{ color: "#fa2841de" }}
              >
                 Sales Order
              </CardTitle> */}
              </CardHeader>
              <CardBody>
                <Form method="post"
                  onSubmit={(e) => {
                    handleSubmit(e)
                  }}>

                  <Row>
                    {inputList.map((x, i) => {
                      return (
                        <div className="box row">
                          <Col md='3' sm='12' className='mb-1'>
                            <Label className='form-label' for='nameMulti'>
                              Item Name <span className="text-danger">*</span>
                            </Label>
                            <Input type='text' id='nameMulti' placeholder='Enter Item Name' name="itemName"
                              value={x.itemName}
                              onChange={e => handleInputChange(e, i)}
                              required 
                              // pattern="^[a-zA-Z]*$"
                              />
                          </Col>
                          <Col sm="3" style={{ marginTop: "20px" }}>
                            <div className="btn-box">
                              {inputList.length !== 1 && <a
                                className="mr10 btn btn-outline-danger btn-sm m-1"
                                onClick={() => handleRemoveClick(i)}>Remove</a>}
                              {inputList.length - 1 === i && <button className="btn btn-sm btn-outline-info m-1" onClick={handleAddClick}>Add</button>}
                            </div>
                          </Col>

                        </div>
                      )
                    })}
                  </Row>
                  <Row>
                    <Col md="3" sm="12" className="mb-1">
                      <Label className="form-label" for="nameMulti">
                        Date <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="date"
                        id="nameMulti"
                        placeholder="Enter Date"
                        name="date"
                        value={form.date}
                        onChange={(e) => {
                          handleChange(e)
                        }}
                        max={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </Col>
                    {/* <Col md="3" sm="12" className="mb-1">
                    <Label className="form-label" for="lastNameMulti">
                      Bill No
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="lastNameMulti"
                      placeholder="Enter Bill No"
                      name="billno"
                      value={form.billno}
                      onChange={(e) => {
                        handleChange(e)
                      }}
                    />
                  </Col> */}

                    {/* <Col md="3" sm="12" className="mb-1">
                    <Label className="form-label" for="EmailMulti">
                      Order No <span className="text-danger">*</span>
                    </Label> 
                    <Input
                      type="number"
                      id="EmailMulti"
                      placeholder="Enter Order No"
                      name="number"
                      value={form.number}
                      onChange={(e) => {
                        handleChange(e)
                      }}
                      required
                    />
                  </Col> */}
                    <Col md="3" sm="12" className="mb-1">
                      <Label className="form-label" for="EmailMulti">
                        Item Image <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="file"
                        className="form-control"
                        name="itemImage"
                        // multiple
                        onChange={changeHandler}
                        // required
                      />
                    </Col>

                    <Col md="3" className="mb-1">
                      <Label>Select Customers Details <span className="text-danger">*</span> </Label>

                      <Select
                        //  onChange={(e) => {
                        //   handleChange(e)
                        // }}
                        value={selectedMulti1}
                        onChange={handleMulti}
                        required
                        name="customerId"
                        options={empid} />

                      {/* <Input id="exampleSelect" type="select" name="CustomesDetails"
                        value={form.CustomesDetails}
                        onChange={(e) => {
                          handleChange(e)
                        }} required>
                        <option>Select Customes Details</option>
                        <option>sai / 1 / 900000001</option>
                        <option>ravi / 2 / 900000002</option>
                        <option>venkat / 3 / 900000003</option>
                        <option>srikanth / 3 / 900000003</option>
                      </Input>
                */}
                    </Col>

                    {/* <Col md="3" className="mb-1">
                    <Label>Customes Mobile No  <span className="text-danger">*</span></Label> 
                    <Col>
                      <Input id="exampleSelect" type="text" placeholder="Enter Moble No" name="Mobile"
                        value={form.CustomesDetails}
                        onChange={(e) => {
                          handleChange(e)
                        }} required/>
                    </Col>
                  </Col> */}


                    <Col md='3' sm='12' className='mb-1'>
                      <Label>Item Purity  <span className="text-danger">*</span></Label>
                      <Col>
                        <Input id="exampleSelect" type="select" name="itemPurity"
                          value={form.itemPurity}
                          onChange={(e) => {
                            handleChange(e)
                          }} required>
                          <option value="">Select Purity</option>
                          <option value="18">18k</option>
                          <option value="22">22k</option>
                          <option value="24">24k</option>
                        </Input>
                      </Col>
                    </Col>
                    <Col md="3" sm="12" className="mb-1">
                      <Label className="form-label" for="EmailMulti">
                        Gross Weight <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="text"
                        value={form.grossWeight}
                        className="form-control"
                        name="grossWeight"
                        placeholder='Enter Gross Weight'
                        multiple
                        onChange={(e) => {
                          handleChange(e)
                        }}
                        required
                      />
                    </Col>


                    <Col md='3' sm='12' className='mb-1'>
                      <Label className='form-label' for='nameMulti'>
                        Gold Weight  <span className="text-danger">*</span>
                      </Label>
                      <Input  type="text" id='nameMulti' placeholder='Enter Item Weight' name="goldWeight"
                        value={form.goldWeight}
                        onChange={(e) => {
                          handleChange(e)
                        }} required />
                    </Col>

                    <Col md='3' sm='12' className='mb-1'>
                      <Label>Item Diamond Range </Label>
                      <Col>
                        <Input id="exampleSelect" type="select"
                          name="itemDimondRange"
                          value={form.itemDimondRange}
                          onChange={(e) => {
                            handleChange(e)
                          }}

                        >
                          <option value="">Select Diamond Range</option>
                          <option value="carat">Cts</option>
                        </Input>
                      </Col>
                    </Col>
                    {form.itemDimondRange === "carat" ? (<>
                      <Col md='3' sm='12' className='mb-1'>
                        <Label>Item Diamond Range Cts  </Label>
                        <Input  type='text' id='nameMulti' placeholder='Enter Diamond Cts'
                          name="itemDimondRangeCarat"
                          value={form.itemDimondRangeCarat}
                          onChange={(e) => {
                            handleChange(e)
                          }}
                        />
                      </Col>
                    </>) : null}
                    <Col md='3' sm='12' className='mb-1'>
                      <Label>Item Stone Range </Label>
                      <Col>
                        <Input id="exampleSelect" type="select"
                          name="itemStoneRange"
                          value={form.itemStoneRange}
                          onChange={(e) => {
                            handleChange(e)
                          }} >
                          <option value="">Select Stone Range</option>
                          {/* <option>Cts</option> */}
                          <option value="carat">Cts</option>
                          {/* <option>Weight</option> */}
                        </Input>
                      </Col>
                    </Col>

                    {form.itemStoneRange === "carat" ? (<>
                      <Col md='3' sm='12' className='mb-1'>
                        <Label>Item Stone Cts </Label>
                        <Input type='text' id='nameMulti' placeholder='Enter Stone Cts'
                          name="itemStoneCarat"
                          value={form.itemStoneCarat}
                          onChange={(e) => {
                            handleChange(e)
                          }}
                        />
                      </Col>
                    </>) : null}

                    <Col md='3' sm='12' className='mb-1'>
                      <Label className='form-label' for='nameMulti' name="Itemsize"
                      >
                        Delivery Date  <span className="text-danger">*</span>
                      </Label>
                      <Input
                        value={form.deliveryDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => {
                          handleChange(e)
                        }} required
                        type='date' name='deliveryDate' id='nameMulti' placeholder='Enter Item size' />
                    </Col>

                    <Col md="3" sm="12" className="mb-1">
                      <Label className="form-label" for="EmailMulti">
                        Item Special Remarks <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="textarea"
                        id="EmailMulti"
                        placeholder="Enter Item Special Remarks"
                        name="itemSpecialRemarks"
                        value={form.itemSpecialRemarks}
                        onChange={(e) => {
                          handleChange(e)
                        }} required
                      />
                    </Col>

                    <Col sm="12" className="mt-2">
                      <div className="d-flex" style={{ float: "right" }}>
                        <Button
                          style={{ margin: "5px" }}
                          color="success"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>

                        <Link to="/orderlist">
                          <Button
                            style={{ margin: "5px" }}
                            className="me-1"
                            outline
                            color="danger"
                            type="reset"
                          >
                            Cancel
                          </Button>
                        </Link>
                        {/* <Link to="/orderlist"> */}

                        {/* </Link> */}

                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}
export default Radio
