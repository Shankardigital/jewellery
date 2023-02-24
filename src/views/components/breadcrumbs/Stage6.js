// ** React Imports
import { Fragment } from "react"
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
import qrcode from "../../../assets/images/qr.png"
import gold from "../../../assets/images/gold.jpg"
import { ArrowRightCircle, X } from 'react-feather'
import { Link } from 'react-router-dom'
import Nav from './Nav'
const BreadCrumbs = () => {
  return (
    <Fragment>
      <div 
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000">
      <BreadCrumbsPage data={[{ title: "Setting Details" }]} />
     {/* <Nav /> */}
      <Card className="mt-1">
        <CardBody>
          <Row>
          <Col md={4}>
            <img src={gold} style={{ width: "250px" }} />
          </Col>
          <Col md={6}>
              <h5 className="text-center ">Setting Details</h5>

              <div>
                <Row className="mt-2 ">
                  <Col>
                    <ul className="list-unstyled">
                      <li className="mb-75">
                        <span className="   me-25">Customer Name : </span>
                        <span>vivek</span>
                      </li>
                      <li className="mb-75">
                        <span className="   me-25">Aprox Gold : </span>
                        <span>20 grams</span>
                      </li>
                      <li className="mb-75">
                        <span className="   me-25">Diamond : </span>
                        <span>10 cts</span>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="list-unstyled">
                      <li className="mb-75">
                        <span className="   me-25">Size & Purity : </span>
                        <span>20cts / 24k </span>
                      </li>
                      <li className="mb-75">
                        <span className="   me-25">Remarks : </span>
                        <span>working</span>
                      </li>
                      <li className="mb-75">
                        <span className="   me-25">Status : </span>
                        <span>Started</span>
                      </li>
                    </ul>
                  </Col>
                </Row>

              </div>
              {/* <p className='text-center'>The excellent set of cameras offer excellent 
                images as well as capable of recording crisp videos.
                 However, expandable storage and a fingerprint scanner 
                 would have made it a perfect option to go for around this price range.</p> */}
            </Col>
            <Col md={2}>
              <img className="mt-1" src={qrcode} style={{ width: "130px" }} />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="mt-1">
        <CardHeader>
          <h5>Setting Details</h5>
        </CardHeader>

        <CardBody>
          <Form>
            <Row>
              <Col md={2}>
                <Label>
                  Setting
                </Label>
                <Input type="text" placeholder="Setting" className="form-control mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Date Out
                </Label>
                <Input type="date" placeholder=" Date Out" className="form-control  mb-1" />
              </Col>

              <Col md={2}>
                <Label>
                  Date In
                </Label>
                <Input type="date" placeholder="Date In" className="form-control  mb-1" />
              </Col>

              <Col md={2}>
                <Label>
                  Wt Out
                </Label>
                <Input type="text" placeholder="Wt Out" className="form-control  mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Wt In
                </Label>
                <Input type="text" placeholder="Wt In" className="form-control  mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Stone
                </Label>
                <Input type="text" placeholder="Stone" className="form-control  mb-1" />
              </Col>

            </Row>
            <Row className="mt-1" >
              <Col md={2}>
                <Label>
                  Net
                </Label>
                <Input type="text" placeholder="Net" className="form-control  mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Chura
                </Label>
                <Input type="text" placeholder="Chura" className="form-control  mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Loss
                </Label>
                <Input type="text" placeholder="Loss" className="form-control  mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Nett Chura
                </Label>
                <Input type="text" placeholder="Nett Chura" className="form-control  mb-1" />
              </Col>
            </Row>
            <Row style={{ float: "right" }}>
              <Col>
              <Link to={"/stage7"}>
                <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                  Next stage<ArrowRightCircle className='font-medium-2 pl-1' />
                </Button></Link>
               <Link to={"/stage5"}>
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
export default BreadCrumbs
