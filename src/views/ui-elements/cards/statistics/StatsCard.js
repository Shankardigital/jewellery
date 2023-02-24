// ** Third Party Components
import classnames from 'classnames'
import { TrendingUp, User, Box } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'


const StatsCard = ({ cols }) => {
  const data = [
    {
      title: '100k',
      subtitle: 'Total Orders Amount',
      color: 'light-primary',
      icon: <TrendingUp size={24} />
    },
    {
      title: '200k',
      subtitle: 'Procesing Orders Amount',
      color: 'light-info',
      icon: <User size={24} />
    },
    {
      title: '300k',
      subtitle: 'Pending Orders Amount',
      color: 'light-danger',
      icon: <Box size={24} />
    },
    {
      title: '400k',
      subtitle: 'Collected Orders Amount',
      color: 'light-success',
      icon: <i class="fa fa-inr" style={{fontSize:"24px"}} aria-hidden="true"></i>
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const colMargin = Object.keys(cols)
      const margin = index === 2 ? 'sm' : colMargin[0]
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1
          })}
        >
          <div className='d-flex align-items-center'>
            <Avatar color={item.color} icon={item.icon} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </div>
          </div>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      {/* <CardHeader>
      <CardTitle tag='h4'>Orders Amount</CardTitle> 
      </CardHeader> */}
        {/* <CardText className='card-text font-small-2 me-25 mb-0'>Updated 1 month ago</CardText> */}
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
