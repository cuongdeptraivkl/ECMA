import { menunavProject } from "../data"
const menuDetailProject = () => {
  return `
  ${menunavProject.map((menu) => {

    return `
    <ul class="nav nav-pills">    
        <li class="nav-item">
          <a class="nav-link" href="${menu.path}">${menu.name}</a>
        </li>  
      </ul>  
      
      `
    }).join("")}
    `
}

export default menuDetailProject
