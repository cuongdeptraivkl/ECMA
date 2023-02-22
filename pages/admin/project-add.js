//import {projectList} from '../../data/index'
// import { projectList } from "../../data";
import menuAdmin from "../../components/menuAdmin";
import { router, useEffect } from "../../libs";

const AdminProjectsAddPage = () => {
    //kiểm tra trên localStorage có dữ liệu hay không, nếu có thfi lấy còn không thì gán vào mảng rỗng

    // const projectList = JSON.parse(localStorage.getItem('projects')) || [];
    // console.log(projectList);
  useEffect(()=>{
    const form = document.getElementById("form-add");
   // console.log(form);
    const projectName = document.querySelector('#projectName');
    const title = document.querySelector('#title');
    const imageDemo = document.querySelector('#imgdemo');
    const linkGit = document.querySelector('#linkgit');
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if(projectName.value=="" && title.value=="" && imageDemo.value=="" && linkGit.value==""){
        alert('Please enter all your info,thanks!')
      }else{
        //tạo ra 1 object mưới lấy  từ form
      const newProject  ={
       // id:projectList.length +1,
       name: projectName.value,
       title:title.value,
       src : imageDemo.value,
       link:linkGit.value
      };
      // thêm vào mảng projectList
     // projectList.push(newProject);
      fetch('http://localhost:3000/projects',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(newProject)
      }).then(()=>{
        router.navigate('/admin/projects')
      })
     
      }
    })
  }, [])
  return `
  ${menuAdmin()}
   <div class = "container">
   <form  id="form-add">
    <h1> ADD PROJECT</h1>
      
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@Name</span>
        <input type="text" id="projectName"  class="form-control" required placeholder="name Project" aria-label="Username" aria-describedby="basic-addon1">
      </div>


      <div class="input-group mb-3">

        <span class="input-group-text" id="basic-addon1">@Title</span>
        <input type="text" id="title" class="form-control" required placeholder="Title" aria-label="Username" aria-describedby="basic-addon1">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@Image</span>
        <input type="file" id="imgdemo" class="form-control" required placeholder="Image demo" aria-label="Username" aria-describedby="basic-addon1">
     </div>


    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@Link</span>
        <input type="text" id="linkgit" class="form-control" required placeholder="Link Project" aria-label="Username" aria-describedby="basic-addon1">
    </div>



      <a href="admin/projects"> <button type="button" class="btn btn-danger">Admin</button></a>
      <button class="btn btn-primary">Add </button>
      <div class="form-group">
      </div>
    </form>
   </div>
   `
}
export default AdminProjectsAddPage;


