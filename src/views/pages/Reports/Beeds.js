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

const Beeds = () => {
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
                            <div style={{float:"right"}}>
                                <Button className='m-1' color='danger'><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</Button>
                                <Button className='m-1' color='success'> <i class="fa fa-file-excel-o" aria-hidden="true"></i> EXCEL</Button>
                            </div>
                            </div>
                        <CardBody>
                           
                            <Table size='sm' responsive bordered hover>
                                <thead>
                                <tr>
                                        <td colSpan="5" className='text-center text-danger' >|| JAI SHREE SHYAM ||</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="5"  >
                                                <h1 className='text-center text-danger'> OM SANTOSH JEWELLERS PVT LTD</h1>
                                            </td>
                                        </tr>
                                <tr className='text-center' >
                                        <td colSpan="5" className="text-danger">Beeds Inventory</td>
                                    </tr>
                                    <tr className='text-center text-danger'>
                                        <th>
                                            Packet No
                                        </th>
                                        <th>
                                            Item
                                        </th>
                                        <th>
                                            Qty Ct
                                        </th>
                                        <th>
                                            Rate Ct
                                        </th>
                                        <th style={{width:"160px"}} >
                                            Amount
                                        </th>
                                        {/* <th>
                                            Kharigar Name
                                        </th>
                                        <th>
                                            OB Qty Ct
                                        </th>
                                        <th>
                                            Receipt Qty Ct
                                        </th>
                                        <th>
                                            Issue Qty Ct
                                        </th>
                                        <th>
                                            CB Qty Ct
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody  className='text-center'>
                                    <tr>
                                        <th scope="row">
                                            1
                                        </th>
                                        <td>
                                            Emerald Beeds Small Round Cutting
                                        </td>
                                        <td>
                                           333.05
                                        </td>
                                        <td>
                                            110.00
                                        </td>
                                        <td>
                                            36,635.50
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            2
                                        </th>
                                        <td>
                                        Emerald Beeds Small Oval Plain
                                        </td>
                                        <td>
                                           333.05
                                        </td>
                                        <td>
                                            110.00
                                        </td>
                                        <td>
                                            36,635.50
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            3
                                        </th>
                                        <td>
                                            Emerald Beeds Small Plain
                                        </td>
                                        <td>
                                           333.05
                                        </td>
                                        <td>
                                            110.00
                                        </td>
                                        <td>
                                            36,635.50
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot className='text-center' >
                                    <tr className='text-danger'>
                                        <td></td>
                                        <td></td>
                                        <td colspan="2" >
                                           Total
                                        </td>

                                        {/* <tr>
                                     
                                        <td>Total</td> 
                                        </tr> */}
                                        
                                        <td>120535.201</td>
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
export default Beeds
