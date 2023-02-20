import logo from "./logo"


const menuAdmin = () => {
  return `
  
  <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
  

  ${logo()}    <a href="/admin/projects/add">  <button class="btn btn-outline-success">Thêm</button></a>

        
       
    
      
    </div>
</nav>
  `
}

export default menuAdmin
