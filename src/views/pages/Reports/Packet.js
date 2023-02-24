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

const Packets = () => {
    return (
        <Fragment>
             <div 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <Breadcrumbs title='Packet' data={[{ title: 'Packet' }]} />
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
                                        <td colSpan="10" className='text-center text-danger' >|| JAI SHREE SHYAM ||</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="10"  >
                                                <h1 className='text-center text-danger'> OM SANTOSH JEWELLERS PVT LTD</h1>
                                            </td>
                                        </tr>
                                <tr className='text-center' >
                                        <td colSpan="10" className="text-danger">Packet No 01 Emerald Beeds Small Round</td>
                                    </tr>
                                    <tr className='text-center text-danger'>
                                        <th>
                                            S No
                                        </th>
                                        <th style={{width:"100px"}}>
                                            Date
                                        </th>
                                        <th>
                                            Purchased From
                                        </th>
                                        <th>
                                            Issued Order No
                                        </th>
                                        <th style={{width:"160px"}} >
                                            Item
                                        </th>
                                        <th>
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
                                        </th>
                                    </tr>
                                </thead>
                                <tbody  className='text-center'>
                                    <tr>
                                        <th scope="row">
                                            1
                                        </th>
                                        <td>
                                            15-12-2022
                                        </td>
                                        <td>
                                           Cash
                                        </td>
                                        <td>
                                            OSJ 072
                                        </td>
                                        <td>
                                            Nakshi Jhumka
                                        </td>
                                        <td>
                                            Deepak
                                        </td>
                                        <td>
                                            486.50
                                        </td>
                                        <td>
                                           -
                                        </td>
                                        <td>
                                           2.85
                                        </td>
                                        <td>
                                           483.65
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            2
                                        </th>
                                        <td>
                                            15-12-2022
                                        </td>
                                        <td>
                                           Cash
                                        </td>
                                        <td>
                                            OSJ 072
                                        </td>
                                        <td>
                                            Nakshi Jhumka
                                        </td>
                                        <td>
                                            Deepak
                                        </td>
                                        <td>
                                            486.50
                                        </td>
                                        <td>
                                           -
                                        </td>
                                        <td>
                                           2.85
                                        </td>
                                        <td>
                                           483.65
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            3
                                        </th>
                                        <td>
                                            15-12-2022
                                        </td>
                                        <td>
                                           Cash
                                        </td>
                                        <td>
                                            OSJ 072
                                        </td>
                                        <td>
                                            Nakshi Jhumka
                                        </td>
                                        <td>
                                            Deepak
                                        </td>
                                        <td>
                                            486.50
                                        </td>
                                        <td>
                                           -
                                        </td>
                                        <td>
                                           2.85
                                        </td>
                                        <td>
                                           483.65
                                        </td>
                                        
                                    </tr>
                                </tbody>
                                
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            </div>
        </Fragment>
    )
}
export default Packets
