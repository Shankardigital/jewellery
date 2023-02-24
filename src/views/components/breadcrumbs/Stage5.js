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
      <BreadCrumbsPage data={[{ title: "Stone Details Setting" }]} />
      {/* <Nav /> */}
      <Card className="mt-1">
        <CardBody>
          <Row>
          <Col md={4}>
            <img src={gold} style={{ width: "250px" }} />
          </Col>
          <Col md={6}>
              <h5 className="text-center">Stone Details Setting</h5>

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
          <h5> Issued To Stone Details Setting</h5>
        </CardHeader>

        <CardBody>
          <Form>
            <Row className="mb-1">

              <Col md={2}>
                <Label>
                  Pk No
                </Label>
                <Input type="text" placeholder="Pk No" className="form-control mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Item
                </Label>
                <Input type="select" name="select" id="select-basic">
                  <option>Select Item</option>
                  <option>Dimond</option>
                  <option>Ruby</option>
                  <option>Fd</option>
                </Input>
              </Col>
              <Col md={2}>
                <Label>
                  Pieces
                </Label>
                <Input type="text" placeholder="Enter Pieces" className="form-control mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Qnt In Gr
                </Label>
                <Input type="text" placeholder="Enter Qnt In Gr" className="form-control mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Qnt In Ct
                </Label>
                <Input type="text" placeholder="Enter  Qnt In Ct" className="form-control mb-1" />
              </Col>
            </Row>
            <Row className="mt-1" style={{ float: "right" }}>
              <Col>
              <Link to={"/stage8"}>
                  <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                    Next stage <ArrowRightCircle className='font-medium-2 pl-1' />
                  </Button></Link>
                 <Link to={"/stage7"}>
                <Button outline size="sm" className="me-1 mt-1" color="danger" type="button">
                  <X className='font-medium-2 pl-1' /> Cancel
                </Button></Link>

              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>

      <Card className="mt-1">
        <CardHeader>
          <h5>Stone Details Setting</h5>
        </CardHeader>

        <CardBody>
          <Form>
            <Row className="mb-1">

              <Col md={2}>
                <Label>
                  Pk No
                </Label>
                <Input type="text" placeholder="Pk No" className="form-control mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Item
                </Label>
                <Input type="select" name="select" id="select-basic">
                  <option>Select Item</option>
                  <option>Dimond</option>
                  <option>Ruby</option>
                  <option>Fd</option>
                </Input>
              </Col>
              <Col md={2}>
                <Label>
                  Pieces
                </Label>
                <Input type="text" placeholder="Enter Pieces" className="form-control mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Qnt In Gr
                </Label>
                <Input type="text" placeholder="Enter Qnt In Gr" className="form-control mb-1" />
              </Col>
              <Col md={2}>
                <Label>
                  Qnt In Ct
                </Label>
                <Input type="text" placeholder="Enter  Qnt In Ct" className="form-control mb-1" />
              </Col>
            </Row>
            <Row className="mt-1" style={{ float: "right" }}>
              <Col> 
              <Link to={"/stage8"}>
                  <Button outline size="sm" className="me-1 mt-1" color="success" type="submit">
                    Next stage <ArrowRightCircle className='font-medium-2 pl-1' />
                  </Button></Link>
                <Link to={"/stage7"}>
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
