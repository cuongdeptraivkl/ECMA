import {menuList } from "../data"
import iconLinkMenu from "./iconLinkMenu"
import logo from "./logo"
import menuNavbar from "./menuNavbar"


const Navbar = () => {
  return `
  <nav id="navbar-example2" class="navbar navbarFixded px-3 mb-3">
      ${logo()}          
      <ul class="nav nav-pills">  
        ${menuNavbar()}
      </ul>  
      ${iconLinkMenu()}
  </nav>   
  `
}

export default Navbar

