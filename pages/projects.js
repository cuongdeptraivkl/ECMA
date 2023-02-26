
import { projectList } from "../data";
import { useEffect, useState } from "../libs";

const ProjectPage = ()=>{
  const [projects, setProjects] = useState(projectList)
  
  useEffect(()=>{
    fetch('http://localhost:3000/projects')
    .then((Response)=>Response.json())
    .then(data=>setProjects(data))
  },[])
        
    return `
    
    
    
    <div id="myprojects" class="container-fluid">
    <div id="carouselExampleAutoplaying" class="carousel slide slide-show-projects container-fluid" data-bs-ride="carousel"  data-interval="100" >
    <h1 class="text-center text-project">Projects</h1>
    <div class="carousel-inner container">

    ${projects.map((item) =>`
              
                  <div class="carousel-item active item-project">
                     <div class="over-img-project container">  <a href="/projects/${item.id}"> <img src="${item.src}" class="d-block img-projects container">  </a></div>            
                      <h3 class="w-h-75 h3-project-item"><a href="/projects/${item.id}">${item.name}</a></h3>
                      <p>${item.title}</p>
                  </div>
                   
                    
                 `).join("")}
                
            </div>
            <h3 class="text-center h3-project"><a href="https://github.com/cuongdeptraivkl">See more on Github <i class='bx bxl-github'></i></a></h3>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
            
      </div>
    `;
   
}
export default ProjectPage;