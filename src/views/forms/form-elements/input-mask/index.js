// ** React Imports
import { Fragment, useRef, useState  } from 'react'
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardTitle, CardHeader, Input, Form, Button, Label } from 'reactstrap'

import Wizard from '@components/wizard'
import Address from '../../wizard/steps/Address'
import SocialLinks from '../../wizard/steps/SocialLinks'
import PersonalInfo from '../../wizard/steps/PersonalInfo'
import AccountDetails from '../../wizard/steps/AccountDetails'

const InputMask = () => {


  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'account-details',
      title: 'Ghat Details',
      // subtitle: 'Enter Your Account Details.',
      content: <AccountDetails stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'personal-info',
      title: 'Polish Details',
      // subtitle: 'Add Personal Info',
      content: <PersonalInfo stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'step-address',
      title: 'Setting Details',
      // subtitle: 'Add Address',
      content: <Address stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'social-links',
      title: 'Bandini Details',
      // subtitle: 'Add Social Links',
      content: <SocialLinks stepper={stepper} type='wizard-vertical' />
    }
  ]

  return (
    <Fragment>
      <Breadcrumbs title='Orders' data={[{ title: 'Orders' }]} />

<div className='vertical-wizard' style={{height:'80%'}}>
      <Wizard
        type='vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
 
      {/* <Row>
        <Card>
          <CardBody>
            <Col sm='12'>
              <div className='d-flex' style={{ float: 'right' }}>
                <Button className='me-1' outline color='secondary' type='reset'>
                  Cancel
                </Button>
                <Button color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button>
              </div>
            </Col>
          </CardBody>
        </Card>
      </Row> */}
    </Fragment>
  )
}
export default InputMask