import React from "react"
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import { Link } from "react-router-dom"
import { ChevronRight } from "react-feather"
function Navs() {

  return (
    <div>
      <Nav className="justify-content-start" >
        <NavItem>
          <Link to="/components/breadcrumbs">
            <NavLink>Drawing </NavLink>
          </Link>
        </NavItem>

        <NavItem>
          <NavLink>
            <ChevronRight style={{ float: "right" }} size={17} />
          </NavLink>
        </NavItem>

        <NavItem>
          <Link to="/stage1">
            <NavLink>Wax </NavLink>
          </Link>
        </NavItem>

        <NavItem>
          <NavLink>
            <ChevronRight style={{ float: "right" }} size={17} />
          </NavLink>
        </NavItem>

        <NavItem>
          <Link to="/stage10">
            <NavLink>Casting </NavLink>
          </Link>
        </NavItem>

        <NavItem>
          <NavLink>
            <ChevronRight style={{ float: "right" }} size={17} />
          </NavLink>
        </NavItem>

        
        <NavItem>
          <Link to="/stage9">
            <NavLink>Ghat Details </NavLink>
          </Link>
        </NavItem>

        <NavItem>
          <NavLink>
            <ChevronRight style={{ float: "right" }} size={17} />
          </NavLink>
        </NavItem>

        <NavItem>
          <Link to="/stage3">
            <NavLink>Polish Details </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <NavLink>
            <ChevronRight style={{ float: "right" }} size={17} />
          </NavLink>
        </NavItem>

        <NavItem>
          <Link to="/stage4"><NavLink>Setting Details</NavLink></Link>
        </NavItem>

        <NavItem>
          <NavLink>
            <ChevronRight style={{ float: "right" }} size={17} />
          </NavLink>
        </NavItem>

        {/* <NavItem>
          <Link to='/stage5' >
            <NavLink>Polish Details</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/stage6'> <NavLink>Setting Details</NavLink></Link>
        </NavItem> */}
        <NavItem>
        
          <Link to="/stage7">
            <NavLink>Bandini Details</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <NavLink>
            <ChevronRight style={{ float: "right" }} size={17} />
          </NavLink>
        </NavItem>
        {/* https://areducationapi.areducations.in/ */}

        {/* <NavItem>
          <Link to="/stage11">
            <NavLink>Malla</NavLink>
          </Link>
        </NavItem>

        <NavItem>
          <NavLink>
            <ChevronRight style={{ float: "right" }} size={17} />
          </NavLink>
        </NavItem> */}


        {/* <NavItem>
         
          <Link to="/stage5">
            <NavLink>Stone Setting Details</NavLink>
          </Link>
        </NavItem> */}

       
        <Link to="/stage8">
            <NavLink>Costing Details</NavLink>
          </Link>
          <NavItem>
          <NavLink>
            <ChevronRight style={{ float: "right" }} size={17} />
          </NavLink>
        </NavItem>
        <Link to="/components/blockui">
            <NavLink>Finish</NavLink>
          </Link>

      </Nav>
    </div>
  )
}

export default Navs
