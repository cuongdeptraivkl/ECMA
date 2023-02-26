import { menuList, menunav } from "../data"


const menuNavbar = () => {

   return`
   ${menunav.map((menu) => {

    return `   
        <li class="nav-item">
          <a class="nav-link" href="${menu.path}">${menu.name}</a>
        </li>  
            
            `
  }).join("")}
  `
  
}

export default menuNavbar
