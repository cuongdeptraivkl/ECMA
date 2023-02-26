import logo from "./logo"


const menuAdmin = () => {
  return `
  
  <nav class="navbar menuadmin bg-body-tertiary">
  <div class="container-fluid bg-navbar-dark">
  

        ${logo()}   
        <h3>List projects Github</h3>
        <a href="/admin/projects/add">  <button class="btn btn-outline-success">Add Project</button></a>

        
       
    
      
    </div>
</nav>
  `
}

export default menuAdmin
