// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import VerticalForm from './VerticalForm'
import HorizontalForm from './HorizontalForm'
import VerticalFormIcons from './VerticalFormIcons'
import MultipleColumnForm from './MultipleColumnForm'
import HorizontalFormIcons from './HorizontalFormIcons'

const FormLayouts = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Add Employee' data={[{ title: 'Employee' }]} />
      <Row
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      >
        {/* <Col md='6' sm='12'>
          <HorizontalForm />
        </Col>
        <Col md='6' sm='12'>
          <HorizontalFormIcons />
        </Col>
        <Col md='6' sm='12'>
          <VerticalForm />
        </Col>
        <Col md='6' sm='12'>
          <VerticalFormIcons />
        </Col> */}
        <Col sm='12'>
          <MultipleColumnForm />
        </Col>
      </Row>
    </Fragment>
  )
}
export default FormLayouts
