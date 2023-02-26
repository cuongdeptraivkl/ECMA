import iconLinkMenu from "./iconLinkMenu"
import logo from "./logo"
import menuDetailProject from "./menuDetailProject"


const navbarProjectDetail = () => {
  return`
  <nav id="navbar-example2" class="navbar navbarFixded px-3 mb-3">
    ${logo()}
    ${menuDetailProject()}
    ${iconLinkMenu()}
  </nav>
  `
}

export default navbarProjectDetail
