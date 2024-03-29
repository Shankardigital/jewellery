

// ** React Imports
import { Fragment, useState, useEffect } from "react"
import BreadCrumbsPage from "@components/breadcrumbs"
import {
  CardTitle,
  CardHeader,
  Table,
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
import { useNavigate, Link } from 'react-router-dom'
import Nav from './Nav'
import Select from 'react-select'
import axios from "axios"
import toast from 'react-hot-toast'
// import { data } from "jquery"

// const options = [
//   { value: 'OSJ01', label: 'OSJ 01' },
//   { value: 'OSJ02', label: 'OSJ 02' },
//   { value: 'OSJ03', label: 'OSJ 03' },
//   { value: 'OSJ04', label: 'OSJ 04' },
//   { value: 'OSJ05', label: 'OSJ 05' }
// ]

// const options1 = [
//   { value: 'OSJ01', label: 'OSJ 01' },
//   { value: 'OSJ02', label: 'OSJ 02' },
//   { value: 'OSJ03', label: 'OSJ 03' },
//   { value: 'OSJ04', label: 'OSJ 04' },
//   { value: 'OSJ05', label: 'OSJ 05' }
// ]

const Adddrawing = () => {

  const [form, setform] = useState([])
  // const [picker, setPicker] = useState(new Date())
  console.log(form)
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)


  // const [selectedMulti1, setselectedMulti1] = useState([])
  // const [purity1, setpurity1] = useState([])
  // const [stone1, setstone] = useState([])
  // const [nett1, setnett] = useState([])
  const [purper, setpurper] = useState([])
  console.log(purper)
  const [fineval, setfineval] = useState([])
  const [netval, setnetval] = useState([])
  // console.log(stone1)


  const handleChange = (e) => {
    const myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
    const count2 = e.target.value - form.stone
    setnetval(count2.toFixed(3))
    console.log(count2)
    if (form.itemPurity === "18") {
      setpurper("76")
    } else if (form.itemPurity === "22") {
      setpurper("92")
    } else {
      setpurper("100")
    }

    const count = count2 * purper / 100
    console.log(count)
    setfineval(count.toFixed(3))

  }

  // console.log(selectedMulti1)
  // function handleMulti(data) {
  //   setselectedMulti1(data)

  // }
  const [selectedMulti, setselectedMulti] = useState({ label: "", value: "" })
  // const [ordritem, setordritem] = useState([])
  // const [itemval, setitemval] = useState([])
  // console.log(itemval)
  console.log(selectedMulti)
  function handleMulti1(data) {
    // setpurity1(data.purity)
    // console.log(data.stone)

    setselectedMulti(data)

  }

  // const purpers123 = form.itemPurity === "18"

  const [ordr, setordr] = useState([])
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas = localStorage.getItem("accessToken")
  const finiid = sessionStorage.getItem("finingdid")

  console.log(datas)
  const [costdet, setcostdet] = useState([])
  const [totalcgst, settotalcgst] = useState([])
  const [totalsgst, settotalsgst] = useState([])
  const [totaligst, settotaligst] = useState([])
  const [totalam, settotalam] = useState([])
  // const [selldet, setselldet] = useState([])
  console.log(costdet)
  // console.log(selldet)

  // const handleChangecost = (e, i) => {
  //   if (costdet[i].costItemType === "Making" || costdet[i].costItemType === "IGI" || costdet[i].costItemType === "Gold 18K" || costdet[i].costItemType === "Gold 22K" || costdet[i].costItemType === "Gold 24K") {
  //   const myUser = [...costdet]
  //   myUser[i][e.target.name] = e.target.value
  //   setcostdet(myUser)
  //   } 

  // }

  const handleChangecost1 = (e, i, name) => {
    console.log(e.target.name)
    if (costdet[i].costItemType === "Making" || costdet[i].costItemType === "IGI" || costdet[i].costItemType === "Gold 18K" || costdet[i].costItemType === "Gold 22K" || costdet[i].costItemType === "Gold 24K") {
    const myUser = [...costdet]
    myUser[i][e.target.name] = e.target.value
    setcostdet(myUser)
   if (name === "IGI") {
      console.log(e.target.value)
      costdet[i].costAmount = costdet[i].costWeightInCtc * e.target.value
    } else {
        costdet[i].costAmount = costdet[i].costWeightInGr * e.target.value
    }
  } else {
    if (name === "IGI") {
      console.log(e.target.value)
      costdet[i].costAmount = costdet[i].costWeightInCtc
    } else {
        costdet[i].costAmount = costdet[i].costWeightInGr
    }
  }
  }

  const handleChangecost2 = (e, i) => {
    const myUser = [...costdet]
    if (costdet[i].costItemType === "Making" || costdet[i].costItemType === "IGI" || costdet[i].costItemType === "Gold 18K" || costdet[i].costItemType === "Gold 22K" || costdet[i].costItemType === "Gold 24K") {
      myUser[i][e.target.name] = e.target.value
      setcostdet(myUser)
      costdet[i].costAmount = parseFloat(costdet[i].costRatePerCtc) * e.target.value
    } else {
      costdet[i].costAmount = parseFloat(costdet[i].costRatePerCtc)
    }
  
  }

  const handleChangecost3 = (e, i) => {
    if (costdet[i].costItemType === "Making" || costdet[i].costItemType === "IGI" || costdet[i].costItemType === "Gold 18K" || costdet[i].costItemType === "Gold 22K" || costdet[i].costItemType === "Gold 24K") {
    const myUser = [...costdet]
    myUser[i][e.target.name] = e.target.value
    setcostdet(myUser)
    costdet[i].costAmount = parseFloat(costdet[i].costRatePerCtc) * e.target.value
    } else {
        costdet[i].costAmount = parseFloat(costdet[i].costRatePerCtc) 
    }
  }

  const handleChangecost4 = (e, i, name) => {
    console.log(e.target.name)
    const myUser = [...costdet]
    myUser[i][e.target.name] = e.target.value

    setcostdet(myUser)
    if (name === "Making" ||  name === "Gold 18K" ||  name === "Gold 22K" || name === "Gold 24K") {
        costdet[i].sellAmount = costdet[i].sellWeightInGr * e.target.value
    } else {
      costdet[i].sellAmount = costdet[i].sellWeightInCtc * e.target.value
    }
  }

  const handleChangecost5 = (e, i) => {
    if (costdet[i].costItemType === "Making" || costdet[i].costItemType === "Gold 18K" || costdet[i].costItemType === "Gold 22K"  || costdet[i].costItemType === "Gold 24K") {
      const myUser = [...costdet]
      myUser[i][e.target.name] = e.target.value
      setcostdet(myUser)
      costdet[i].sellWeightInCtc = e.target.value * 5
      costdet[i].sellAmount = parseFloat(costdet[i].sellRatePerCtc) * (e.target.value)
    } else {
      const myUser = [...costdet]
      myUser[i][e.target.name] = e.target.value
      setcostdet(myUser)
      costdet[i].sellWeightInCtc = e.target.value * 5
      costdet[i].sellAmount = parseFloat(costdet[i].sellRatePerCtc) * (e.target.value * 5)
    }

    
  }

  const handleChangecost6 = (e, i) => {
    if (costdet[i].costItemType === "Making" || costdet[i].costItemType === "Gold 18K" || costdet[i].costItemType === "Gold 22K"  || costdet[i].costItemType === "Gold 24K") {
    const myUser = [...costdet]
    myUser[i][e.target.name] = e.target.value
    setcostdet(myUser)
    costdet[i].sellAmount = parseFloat(costdet[i].sellRatePerCtc) * e.target.value / 5
    costdet[i].sellWeightInGr = e.target.value / 5
    } else {
      const myUser = [...costdet]
      myUser[i][e.target.name] = e.target.value
      setcostdet(myUser)
      costdet[i].sellAmount = parseFloat(costdet[i].sellRatePerCtc) * e.target.value
      costdet[i].sellWeightInGr = e.target.value / 5
    }
  }

  // const handleChangesell = (e, i) => {
  //   const myUser1 =  [...selldet]
  //   myUser1[i][e.target.name] = e.target.value
  //   setselldet(myUser1)
  // }

  // const handleChangewe = (e) => {
  //   const token = datas
  //   console.log(token)
  //   const myUser = { ...form }
  //   console.log(form)
  //   myUser[e.target.name] = e.target.value
  //   setform(myUser)
  //   const params = {
  //     orderId: selectedMulti.value,
  //     itemName: e.target.value
  //   }
  //   axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/finishing/getItemDetailWithOrder", params,
  //     {
  //       headers: { Authorization: `Bearer ${token}` }
  //     }, {}
  //   ).then((res) => {
  //     if (res.status === 200) {
  //       console.log(res.data)
  //       setitemval(res.data.orderData)
  //       setstone(res.data.orderData.stone)
  //       // setnett(res.data.orderData.nett)
  //       setcostdet(res.data.stoneFinishArr)
  //       // setselldet(res.data.sellingFinishArr)
  //     }
  //   },
  //     (error) => {
  //       if (error.response && error.response.status === 400) {
  //         toast.error(error.response.data.message)
  //         console.log(error.data.message)

  //       }
  //     }
  //   )
  // }

  const actiordrsfin = () => {
    const token = datas
    const docuid = finiid
    console.log(token)
    axios.post(`http://103.186.185.77:5023/omsanthoshjewellery/admin/finishing/getfinishbyid/${docuid}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setform(res.data.finishData)
        setcostdet(res.data.finishData.stoneDetails)
        setnetval(res.data.finishData.nett)
        setfineval(res.data.finishData.fine)
        settotalam(res.data.finishData.totalAmount)
        // setordritem(res.data.finishData.itemName)
        setselectedMulti({ label: res.data.finishData.orderNo, value: res.data.finishData.orderId })
        settotalcgst(res.data.finishData.cgst)
        settotalsgst(res.data.finishData.sgst)
        settotaligst(res.data.finishData.igst)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    })

  }
  const actiordrs = () => {
    const token = datas
    console.log(token)
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/finishing/getorders",
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setordr(res.data.orderData)
        // setpurity1(res.data.orderData)
      }
        }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data.message)
            // toast.error(error.response.data.message)
        }
    })

  }

  const ordrid = ordr.map((data) => (
    { value: data._id, label: data.orderNo, purity: data.itemPurity, itemName: data.itemNameMulti }
  ))
  console.log(ordrid)

  useEffect(() => {
    actiordrsfin()
    actiordrs()
  }, [])

  // const sum = costdet.reduce(function (prev, current) {
  //   return prev + +current.pieces
  // }, 0)
  // console.log(sum)

  // const sum2 = costdet.reduce(function (prev, current) {
  //   return prev + +current.costWeightInGr0
  // }, 0)
  const costWeightInGr = costdet.map((x) => (
   (x.costItemType !== "IGI" && x.costItemType !== "Making" &&  x.costItemType !== "Gold 18K" && x.costItemType !== "Gold 22K" && x.costItemType !== "Gold 24K") ? parseFloat(x.costWeightInGr).toFixed(3) : '0'
  ))
    const sum2 = costWeightInGr.reduce(function (prev, next) {
    return prev + +next
  }, 0)

  const costWeightInCtc = costdet.map((x) => (
    (x.costItemType !== "IGI" && x.costItemType !== "Making" &&  x.costItemType !== "Gold 18K" && x.costItemType !== "Gold 22K" && x.costItemType !== "Gold 24K") ? parseFloat(x.costWeightInCtc).toFixed(3) : '0'
   ))

  const sum3 = costWeightInCtc.reduce(function (prev, current) {
    return prev + +current
  }, 0)
  // console.log(sum3)

  const sum4 = costdet.reduce(function (prev, current) {
    return prev + +current.costAmount
  }, 0)
  // console.log(sum4)
  const sellWeightInGr = costdet.map((x) => (
    (x.sellItemType !== "IGI" && x.sellItemType !== "Making" &&  x.sellItemType !== "Gold 18K" && x.sellItemType !== "Gold 22K" && x.sellItemType !== "Gold 24K") ? parseFloat(x.sellWeightInGr).toFixed(3) : '0'
   ))

  const sum5 = sellWeightInGr.reduce(function (prev, current) {
    return prev + +current
  }, 0)

  const sellWeightInCtc = costdet.map((x) => (
    (x.sellItemType !== "IGI" && x.sellItemType !== "Making" &&  x.sellItemType !== "Gold 18K" && x.sellItemType !== "Gold 22K" && x.sellItemType !== "Gold 24K") ? parseFloat(x.sellWeightInCtc).toFixed(3) : '0'
   ))

  const sum6 = sellWeightInCtc.reduce(function (prev, current) {
    return prev + +current
  }, 0)

  const sum7 = costdet.reduce(function (prev, current) {
    return prev + +current.sellAmount
  }, 0)

  const handleChange12 = (e) => {
    const myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
    const counts = sum7 * parseFloat(e.target.value) / 100
    settotalcgst(counts)
    const counts12 = sum7 + counts + Math.round(totalsgst)
    settotalam(counts12)
  }

  const handleChange123 = (e) => {
    const myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
    const counts = sum7 * parseFloat(e.target.value) / 100
    console.log(counts)
    settotalsgst(counts)
    const counts12 = sum7 + counts + Math.round(totalcgst)
    settotalam(counts12)
  }

  const handleChange1234 = (e) => {
    const myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
    const counts = sum7 * parseFloat(e.target.value) / 100
    settotaligst(counts)
    const counts12 = sum7 + Math.round(counts)
    settotalam(counts12)
  }

  const addOrders = () => {
    const token = datas
    const docuid = finiid
    const data = costdet.map((x) => (
      {
        costItemType: x.costItemType,
        costWeightInGr: parseFloat(x.costWeightInGr).toFixed(3),
        costWeightInCtc: parseFloat(x.costWeightInCtc).toFixed(2),
        costRatePerCtc: parseFloat(x.costRatePerCtc).toFixed(2),
        costAmount: parseFloat(x.costAmount).toFixed(2),
        sellItemType: x.sellItemType,
        sellWeightInGr: parseFloat(x.sellWeightInGr).toFixed(3),
        sellWeightInCtc: parseFloat(x.sellWeightInCtc).toFixed(2),
        sellRatePerCtc: parseFloat(x.sellRatePerCtc).toFixed(2),
        sellAmount: parseFloat(x.sellAmount).toFixed(2)
      }
    ))

    // const datasell = selldet.map((x) => (
    //   {
    //     sellItemType: x.sellItemType,
    //     sellWeightInGr: parseFloat(x.sellWeightInGr).toFixed(3),
    //     sellWeightInCtc: parseFloat(x.sellWeightInCtc).toFixed(2),
    //     sellRatePerCtc: parseFloat(x.sellRatePerCtc).toFixed(2),
    //     sellAmount: parseFloat(x.sellAmount).toFixed(2)
    //   }
    // ))
    const params = {
      orderId: selectedMulti.value,
      itemId: form.itemId,
      itemPurity: form.itemPurity,
      stone: form.stone,
      nett: netval,
      fine: parseFloat(fineval).toFixed(3),
      gross: parseFloat(form.gross).toFixed(3),
      cgst: parseFloat(form.cgst),
      sgst: parseFloat(form.sgst),
      cgst: parseFloat(totalcgst),
      sgst: parseFloat(totalsgst),
      igst: parseFloat(totaligst),
      cgstptg: parseFloat(form.cgstptg),
      sgstptg: parseFloat(form.sgstptg),
      igstptg: parseFloat(form.igstptg),
      totalAmount: Math.round(totalam),
      stoneDetails: data,
      // stoneSellingDetails:datasell,
      costtotalWtingr: parseFloat(sum2).toFixed(3),
      costtotalWtinct: parseFloat(sum3).toFixed(2),
      costtotalamount: parseFloat(sum4),
      selltotalWtingr: parseFloat(sum5).toFixed(3),
      selltotalWtinct: parseFloat(sum6).toFixed(2),
      selltotalamount: Math.round(sum7)
    }
    console.log(token)
    axios.put(`http://103.186.185.77:5023/omsanthoshjewellery/admin/finishing/editfinishing/${docuid}`, params,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)
        navigate("/costing-details")
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

  const [Files, setFiles] = useState("")
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
      toast.error("file format not supported. Pls choose jpg/jpeg/png")
    }
    // setFiles(e.target.files)
  }


  const finishimg = () => {
    const token = datas
    console.log(token)
    const dataArray = new FormData()
    dataArray.append("orderId", selectedMulti.value)
    dataArray.append("itemId", form.itemId)
    for (let i = 0; i < Files.length; i++) {
      dataArray.append("finishingImg", Files[i])
    }
    axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/finishing/uploadfinishingimg", dataArray,
      {
        headers: { Authorization: `Bearer ${token}` }
      }, {}
    ).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        // setordr(res.data.orderData)
        // setpurity1(res.data.orderData)
      }
        // }).catch(function (error) {
        // if (error.response) {
        //     console.log(error.response.data.message)
        //     toast.error(error.response.data.message)
        // }
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addOrders()
    finishimg()
    setIsSubmitting(true)
  }

  return (
    <Fragment>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <BreadCrumbsPage data={[{ title: "Finishing Details" }]} />

        {/* <Nav style={{width:'100%'}}/> */}

        <Card className="mt-1">
          <CardHeader>
            <h5>Finishing Details</h5>
          </CardHeader>

          <CardBody>
            <Form onSubmit={(e) => { handleSubmit(e) }}>
              <Row className="mb-1">
                <Col sm="2">
                  <Label for="name" style={{ color: "black" }}>
                    Sales Order No : <span className="text-danger">*</span>
                  </Label>
                  <Select
                    value={selectedMulti}
                    onChange={handleMulti1}
                    required
                    name="orderId"
                    // options={ordrid}
                     />
                </Col>
                <Col sm="2">
                  <Label for="name" style={{ color: "black" }}>
                    Item  : <span className="text-danger">*</span>
                  </Label>
                  <Input name="itemId" value={form.itemName}/>
                  {/* <select className="form-select" required
                    onChange={(e) => handleChangewe(e)}
                    name="itemId">
                    <option value="">Select</option>
                    {ordritem.map((data) => (
                      <option value={data.itemId}>{data.itemName}</option>
                    ))}
                  </select> */}
                </Col>
                <Col sm="2">

                  <Label for="name" style={{ color: "black" }}>
                    Purity : <span className="text-danger">*</span>
                  </Label>
                  <Input required value={form.itemPurity} type="text" placeholder="purity" />

                </Col>
                <Col sm="2">
                  <Label for="name" style={{ color: "black" }}>
                    Gross : <span className="text-danger">*</span>
                  </Label>
                  <Input value={form.gross} required onChange={(e) => handleChange(e)} name="gross" type="text" placeholder="Enter Gold Weight" />
                </Col>
                <Col sm="2">
                  <Label for="name" style={{ color: "black" }}>
                    Stone : <span className="text-danger">*</span>
                  </Label>
                  <Input required value={form.stone} name="issuedWeight" type="text" placeholder="Enter Gold Weight" />
                </Col>
                <Col sm="2">
                  <Label for="name" style={{ color: "black" }}>
                    Nett : <span className="text-danger">*</span>
                  </Label>
                  <Input required value={netval} name="issuedWeight" type="text" placeholder="Enter Gold Weight" />
                </Col>
                <Col sm="2">
                  <Label for="name" style={{ color: "black" }}>
                    Fine : <span className="text-danger">*</span>
                  </Label>
                  <Input required value={fineval} name="fine" type="text" placeholder="Enter Gold Weight" />
                </Col>

                <Col md="3" sm="12" className="mb-1">
                      <Label className="form-label" for="EmailMulti">
                        Item Image                                     
                      </Label>
                      <Input
                        type="file"
                        className="form-control"
                        name="finishingImg"
                        onChange={changeHandler}
                        
                      />
                    </Col>

              </Row>
              <Row>
                <Col md={16}>
                  <Table className="mt-2" responsive bordered>
                    <thead>
                      <tr className="text-center">
                        <th colSpan="5">Stone Costing Detail</th>
                        <th colSpan="5">Stone Selling Detail</th>
                      </tr>
                      <tr className="text-danger text-center">
                        <td className="tabpad">Item</td>
                        <td className="tabpad">Wt in Gr</td>
                        <td className="tabpad">Wt in Ct</td>
                        <td className="tabpad">Rate in Ct</td>
                        <td className="tabpad">Amount</td>
                        <td className="tabpad">Item</td>
                        <td className="tabpad">Wt in Gr</td>
                        <td className="tabpad">Wt in Ct</td>
                        <td className="tabpad">Rate in Ct</td>
                        <td className="tabpad">Amount</td>
                      </tr>
                    </thead>
                    <tbody>
                      {costdet.map((data, i) => (
                        <tr className="text-center">
                          <td className="tabpad"> {data.costItemType} </td>
                          <td className="tabpad"> <input dir="rtl" name="costWeightInGr" disabled={false}  value={data.costWeightInGr} onChange={(e) => { handleChangecost2(e, i) }} className="tableinput" type="text" /> </td>
                          <td className="tabpad"> <input dir="rtl" name="costWeightInCtc" value={data.costWeightInCtc} onChange={(e) => { handleChangecost3(e, i) }} className="tableinput" type="text" /> </td>
                          <td className="tabpad"> <input dir="rtl" name="costRatePerCtc" value={data.costRatePerCtc} onChange={(e) => { handleChangecost1(e, i, data.costItemType) }} className="tableinput" type="text" /> </td>
                          <td className="tabpad"> <input dir="rtl" name="costAmount" value={Math.round(data.costAmount)}
                          //  onChange={(e) => { handleChangecost(e, i) }} 
                           className="tableinput" type="text" /> </td>
                          <td className="tabpad"> {data.sellItemType} </td>
                          <td className="tabpad"> <input dir="rtl" value={data.sellWeightInGr} name="sellWeightInGr" onChange={(e) => { handleChangecost5(e, i) }} className="tableinput" type="text" /> </td>
                          <td className="tabpad"> <input dir="rtl" value={data.sellWeightInCtc} name="sellWeightInCtc" onChange={(e) => { handleChangecost6(e, i) }} className="tableinput" type="text" /> </td>
                          <td className="tabpad"> <input dir="rtl" value={data.sellRatePerCtc} name="sellRatePerCtc" onChange={(e) => { handleChangecost4(e, i, data.sellItemType) }} className="tableinput" type="text" /> </td>
                          <td className="tabpad"> <input dir="rtl" value={Math.round(data.sellAmount)} name="sellAmount"
                          //  onChange={(e) => { handleChangecost(e, i) }} 
                           className="tableinput" type="text" /> </td>
                        </tr>
                      ))}

                      <tr className="text-center">
                        <td className="tabpad"> Total </td>
                        <td className="tabpad"> <input dir="rtl" value={sum2.toFixed(3)} className="tableinput" type="text" /> </td>
                        <td className="tabpad"> <input dir="rtl" value={sum3.toFixed(2)} className="tableinput" type="text" /> </td>
                        <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                        <td className="tabpad"> <input dir="rtl" value={Math.round(sum4)} className="tableinput" type="text" /> </td>
                        <td className="tabpad"> Total </td>
                        <td className="tabpad"> <input dir="rtl" value={sum5.toFixed(3)} className="tableinput" type="text" /> </td>
                        <td className="tabpad"> <input dir="rtl" value={sum6.toFixed(2)} className="tableinput" type="text" /> </td>
                        <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                        <td className="tabpad"> <input dir="rtl" value={Math.round(sum7)} className="tableinput" type="text" /> </td>
                      </tr>
                    </tbody>
                  </Table>


                  <div>
                    <Row className="mt-1">
                      <Col md={9}>
                        <div className="text-end">
                          <Label className="mt-1">CGST :</Label>
                        </div>
                      </Col>

                      <Col md={3}>
                        {form.igstptg === "1.5" || form.igstptg === "0.25" || form.igstptg === "3" ? (
                          <Row >
                            <Col>
                              <select value="0" disabled onChange={(e) => handleChange12(e)} name="cgstptg" className="form-select">
                                <option value="0">Select</option>
                                <option value="0.125">0.125</option>
                                <option value="0.75">0.75</option>
                                <option value="1.5">1.5</option>
                              </select>
                            </Col>
                            <Col>
                              <Input value="0" name="cgst" type="text" placeholder="CGST"></Input>
                            </Col>
                          </Row>
                        ) : (
                          <Row >
                            <Col>
                              <select  value={form.cgstptg} onChange={(e) => handleChange12(e)} name="cgstptg" className="form-select">
                                <option value="0">Select</option>
                                <option value="0.125">0.125</option>
                                <option value="0.75">0.75</option>
                                <option value="1.5">1.5</option>
                              </select>
                            </Col>
                            <Col>
                              <Input value={Math.round(totalcgst)} name="cgst" type="text" placeholder="CGST"></Input>
                            </Col>
                          </Row>

                        )}
                      </Col>
                    </Row>
                    {form.igstptg === "1.5" || form.igstptg === "0.25" || form.igstptg === "3" ? (
                      <Row className="mt-1">
                        <Col md={9}>
                          <div className="text-end">
                            <Label className="mt-1">SGST :</Label>
                          </div>
                        </Col>
                        <Col md={3}>
                          <Row >
                            <Col>
                              <select value="0" disabled onChange={(e) => handleChange123(e)} name="sgstptg" className="form-select">
                                <option value="0">Select</option>
                                <option value="0.125">0.125</option>
                                <option value="0.75">0.75</option>
                                <option value="1.5">1.5</option>
                              </select>
                            </Col>
                            <Col>
                              <Input name="sgst" value="0" type="text" placeholder="SGST"></Input>
                            </Col>

                          </Row>
                        </Col>
                      </Row>
                    ) : (
                      <Row className="mt-1">
                        <Col md={9}>
                          <div className="text-end">
                            <Label className="mt-1">SGST :</Label>
                          </div>
                        </Col>
                        <Col md={3}>
                          <Row >
                            <Col>
                              <select  value={form.sgstptg} onChange={(e) => handleChange123(e)} name="sgstptg" className="form-select">
                                <option value="0">Select</option>
                                <option value="0.125">0.125</option>
                                <option value="0.75">0.75</option>
                                <option value="1.5">1.5</option>
                              </select>
                            </Col>
                            <Col>
                              <Input name="sgst" value={Math.round(totalsgst)} type="text" placeholder="SGST"></Input>
                            </Col>

                          </Row>
                        </Col>
                      </Row>

                    )}
                    <Row className="mt-1">
                      <Col md={9}>
                        <div className="text-end">
                          <Label className="mt-1">IGST :</Label>
                        </div>
                      </Col>
                      <Col md={3}>
                        {form.sgstptg === "0.125" || form.sgstptg === "0.75" || form.sgstptg === "1.5" || form.cgstptg === "0.125" || form.cgstptg === "0.75" || form.cgstptg === "1.5" ? (
                          <Row >
                            <Col>
                              <select value="0" disabled name="igstptg" onChange={(e) => handleChange1234(e)} className="form-select">
                                <option value="0">Select</option>
                                <option value="0.25">0.25</option>
                                <option value="1.5">1.5</option>
                                <option value="3">3</option>
                              </select>
                            </Col>
                            <Col>
                              <Input name="igst" value="0" type="text" placeholder="IGST"></Input>
                            </Col>
                          </Row>
                        ) : (
                          <Row >
                            <Col>
                              <select value={form.igstptg} name="igstptg" onChange={(e) => handleChange1234(e)} className="form-select">
                                <option value="0">Select</option>
                                <option value="0.25">0.25</option>
                                <option value="1.5">1.5</option>
                                <option value="3">3</option>
                              </select>
                            </Col>
                            <Col>
                              <Input name="igst" value={Math.round(totaligst)} type="text" placeholder="IGST"></Input>
                            </Col>
                          </Row>

                        )}
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col md={9}>
                        <div className="text-end">
                          <Label className="mt-1">Total :</Label>
                        </div>
                      </Col>
                      <Col md={3}>
                        <div >

                          <Input value={Math.round(totalam)} onChange={(e) => handleChange(e)} name="totalAmount" required type="text" placeholder="Total"></Input>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  {/* </Col> */}
                  {/* <Col md={6}>
                <Table className="mt-2" responsive bordered>
                  <thead>
                    <tr className="text-center">
                      <th colSpan="5">Stone Selling Detail</th>
                    </tr>
                    <tr className="text-danger text-center">
              
                    
                    </tr>
                  </thead>
                  <tbody>
                  {selldet.map((data, i) => (
                      <tr className="text-center">
                    
                 
                    </tr>
                    ))}
                  
                  <tr className="text-center">
                     
                    </tr> */}
                  {/* <tr className="text-center">
                      <td className="tabpad"> Making </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                  
                    </tr>
                    <tr className="text-center">
                      <td className="tabpad"> IGI </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                    
                    </tr>
                    <tr className="text-center">
                      <td className="tabpad"> Gold 18k </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                     
                    </tr>
                    <tr className="text-center text-danger">
                      <td className="tabpad"> Total </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      <td className="tabpad"> <input dir="rtl" className="tableinput" type="text" /> </td>
                      
                    </tr> */}
                  {/* </tbody>
                </Table> */}
                </Col>

              </Row>
              <Row style={{ float: "right" }}>
                <Col>
                  {/* <Link to={"/drawing"}> */}
                  <Button disabled={isSubmitting} outline size="sm" className="me-1 mt-1" color="success" type="submit">
                  {isSubmitting ? 'Submitting...' : 'Submit'} <ArrowRightCircle className='font-medium-2 pl-1' />
                  </Button>
                  {/* </Link> */}
                  <Link to={"/costing-details"}>
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
export default Adddrawing