// ** React Imports
import { Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'
import sj from "../../../../assets/images/latest/sj.png"

// ** Utils
// import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/authentication'

// ** Third Party Components
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { useEffect, useState  } from 'react'
import axios from "axios"

// ** Default Avatar Image
// import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  // const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  // useEffect(() => {
  //   if (isUserLoggedIn() !== null) {
  //     setUserData(JSON.parse(localStorage.getItem('userData')))
  //   }
  // }, [])
  const [pfdata, setpfdata] = useState([])
  const gets = localStorage.getItem("userData")
  const data1 = JSON.parse(gets)
  console.log(data1.fullName)
  const datas =  localStorage.getItem("accessToken")
  console.log(datas)

const profiledet = () => {
  const token = datas 
   console.log(token)
  axios.post("http://103.186.185.77:5023/omsanthoshjewellery/admin/adminEmp/getprofile", 
  {
  headers: { Authorization: `Bearer ${token}` }
}, {}
  ).then((res) => {
   if (res.status === 200) {
    console.log(res.data)
    setpfdata(res.data.profileResult)
    // toast.success(res.data.message)
    // navigate("/otp")
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

useEffect(() => {
  profiledet()
}, [])

  //** Vars
  // const userAvatar = (userData && userData.avatar) || defaultAvatar

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name fw-bold'>{pfdata.fullName}</span>
          {/* <span className='user-status'>{(userData && userData.role) || 'Admin'}</span> */}
          <span className='user-status'>{data1.role}</span>
        </div>
        {pfdata.profilePic === undefined ? (
          <Avatar img={sj} imgHeight='40' imgWidth='40' status='online' />
        ) : (
        <Avatar img={`http://103.186.185.77:5023/${pfdata.profilePic}`} imgHeight='40' imgWidth='40' status='online' />
        )}

      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to='/pages/account-settings'>
          <User size={14} className='me-75' />
          <span className='align-middle'>Profile</span>
        </DropdownItem>
        {/* <DropdownItem tag={Link} to='/apps/email'>
          <Mail size={14} className='me-75' />
          <span className='align-middle'>Inbox</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/apps/todo'>
          <CheckSquare size={14} className='me-75' />
          <span className='align-middle'>Tasks</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/apps/chat'>
          <MessageSquare size={14} className='me-75' />
          <span className='align-middle'>Chats</span>
        </DropdownItem>
        <DropdownItem divider /> */}
        {/* <DropdownItem tag={Link} to='/pages/account-settings'>
          <Settings size={14} className='me-75' />
          <span className='align-middle'>Settings</span>
        </DropdownItem> */}
        {/* <DropdownItem tag={Link} to='/pages/pricing'>
          <CreditCard size={14} className='me-75' />
          <span className='align-middle'>Pricing</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/faq'>
          <HelpCircle size={14} className='me-75' />
          <span className='align-middle'>FAQ</span>
        </DropdownItem> */}
        <DropdownItem tag={Link} to='/login' onClick={() => dispatch(handleLogout())}>
          <Power size={14} className='me-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
