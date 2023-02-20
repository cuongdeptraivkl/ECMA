import {menuList } from "../data"
import logo from "./logo"
import menuNavbar from "./menuNavbar"


const Navbar = () => {
  return `

  <nav id="navbar-example2" class="navbar navbarFixded px-3 mb-3">
      ${logo()}
  
  <ul class="nav nav-pills">
    
        ${menuNavbar()}
   
  </ul>
  <div></div>
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="https://www.facebook.com/cuong.dev.8123"><i class='bx bxl-facebook-circle'></i></a>
    </li>
    <li class="nav-item">
         <a class="nav-link" href="https://github.com/cuongdeptraivkl"><i class='bx bxl-github' ></i></a>
     </li>
     <li class="nav-item">
     <a class="nav-link" href="mcuongdev.it@gmail.com"><i class='bx bxl-gmail' ></i></a>
 </li>
    <li class="nav-item">
       <a class="nav-link" href="/admin/projects"><i class='bx bxs-user-circle' ></i></a>
     </li>
  </ul>
  </nav>
  
 
      
  `
}

export default Navbar

