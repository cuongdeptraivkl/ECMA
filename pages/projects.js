import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projectList } from "../data";

const ProjectPage = ()=>{
    console.log(projectList.map(item => 
        /*html*/
        `
        <p>Project Id: ${item.id}</p>
        `).join(""));
        
    return `
     <div id="myprojects" class="container-fluid">
     <div id="carouselExampleAutoplaying" class="carousel slide slide-show-projects container-fluid" data-bs-ride="carousel"  >
     <h1 class="text-center text-project">Projects</h1>
     <div class="carousel-inner container">
     <a href="github.com">
       <div class="carousel-item active item-project">
           <img src="src/img/coza.png" class="d-block w-75 container">
         <h3 class="w-h-75"><a href="github.com">đây là Tiêu đề ảnh thứ nhất</a></h3>
         <p>đây là tittle của ảnh thứu nahast</p>
       </div>
       </a>
       <div class="carousel-item  item-project">
       <a href="github.com">
           <img src="src/img/coza.png" class="d-block w-75 container">
           <h3><a href="github.com">đây là Tiêu đề ảnh thứ nhất</a></h3>
         <p>đây là tittle của ảnh thứu 2</p>
      </a>
       </div>
       <div class="carousel-item  item-project">
           <img src="src/img/coza.png" class="d-block w-75 container">
           <h3><a href="github.com">đây là Tiêu đề ảnh thứ nhất</a></h3>
         <p>đây là tittle của ảnh thứu 3</p>
 
       </div>
     </div>
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
    // ${ProjectList({ projects: projectList})}
}
export default ProjectPage;