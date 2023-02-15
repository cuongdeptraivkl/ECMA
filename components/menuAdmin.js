import { menuAdmin } from "../data"
const menuAdmin = () =>{
    return `
        ${menuAdmin.map((params)=>{
            return `<a href="${$params.path}">${params.name}</a>`
        }).join("")}
    `
}
export default menuAdmin;