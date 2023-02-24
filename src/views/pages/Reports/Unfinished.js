// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, Table, Button } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const Unfinished = () => {
    return (
        <Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Breadcrumbs title='Beeds' data={[{ title: 'Beeds' }]} />
                <Row>

                    <Col sm='12'>
                        <Card>
                            <div>
                                <div style={{ float: "right" }}>
                                    <Button className='m-1' color='danger'><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</Button>
                                    <Button className='m-1' color='success'> <i class="fa fa-file-excel-o" aria-hidden="true"></i> EXCEL</Button>
                                </div>
                            </div>
                            <CardBody>

                                <Table size='sm' responsive bordered hover>
                                    <thead>
                                        <tr>
                                            <td colSpan="6" className='text-center text-danger' >|| JAI SHREE SHYAM ||</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="6"  >
                                                <h1 className='text-center text-danger'> OM SANTOSH JEWELLERS PVT LTD</h1>
                                            </td>
                                        </tr>
                                        <tr className='text-center' >
                                            <td colSpan="6" className="text-danger">Unfinished</td>
                                        </tr>
                                        <tr className='text-center'>
                                            <th className="text-danger">
                                                S No
                                            </th>
                                            <th className="text-danger">
                                                Order No
                                            </th>
                                            <th className="text-danger">
                                                Item
                                            </th>
                                            <th className="text-danger">
                                                Ghat
                                            </th>
                                            <th className="text-danger">
                                                Ston
                                            </th>
                                            <th className="text-danger" >
                                                Nett
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        <tr>
                                            <th scope="row">
                                                1
                                            </th>
                                            <td>
                                                OSJ DI 260
                                            </td>
                                            <td>
                                                Victorian Necklace
                                            </td>
                                            <td>
                                                110.00
                                            </td>
                                            <td>
                                                2.356
                                            </td>
                                            <td className="text-danger">
                                                77.5524
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                2
                                            </th>
                                            <td>
                                                OSJ DI 260
                                            </td>
                                            <td>
                                                Victorian Necklace
                                            </td>
                                            <td>
                                                110.00
                                            </td>
                                            <td>
                                                2.356
                                            </td>
                                            <td className="text-danger">
                                                77.5524
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                3
                                            </th>
                                            <td>
                                                OSJ DI 260
                                            </td>
                                            <td>
                                                Victorian Necklace
                                            </td>
                                            <td>
                                                110.00
                                            </td>
                                            <td>
                                                2.356
                                            </td>
                                            <td className="text-danger">
                                                77.5524
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot className='text-center' >
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="text-danger" colspan="2" >
                                                Total
                                            </td>
                                            <td className="text-danger">120535.201</td>
                                        </tr>
                                    </tfoot>

                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
export default Unfinished
