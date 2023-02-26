//import {projectList} from '../../data/index'
// import { projectList } from "../../data";
import axios from "axios";
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
    const titleDetail = document.querySelector('#Product-detail-demo');
    const demoTech = document.querySelector('#demoTech');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();


    const urls = await uploadImage(imageDemo.files);
    console.log(urls);



      if(projectName.value=="" && title.value=="" && imageDemo.file=="" && linkGit.value==""){
        alert('Please enter all your info,thanks!')
      }else{
        //tạo ra 1 object mưới lấy  từ form
      const newProject  ={
       // id:projectList.length +1,
       name: projectName.value,
       title:title.value,
       src : urls,
       link:linkGit.value,
       titleDetail:titleDetail.value,
       demoTech:demoTech.value
      };
      axios.post('http://localhost:3000/projects',newProject).then(()=>{
        router.navigate('/admin/projects')
      })
     
      }
    })
  }, [])

  const uploadImage = async (files) => {
    if (files) {
      const CLOUD_NAME ="dxxdsgful"; 
      const PRESET_NAME = "uploadportfolio";
      const urls =[];
      const FOLDER_NAME = "Portfolio"
      const api =`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
      console.log(api);
      const formData = new FormData(); // key: value
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
        return urls;
      }
    }
  };

  return `
  ${menuAdmin()}
   <div class = "container">
   <form  id="form-add">
    <h1> ADD PROJECT</h1>
      
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Name</span>
        <input type="text" id="projectName"  class="form-control" required placeholder="name Project" aria-label="Username" aria-describedby="basic-addon1">
      </div>


      <div class="input-group mb-3">

        <span class="input-group-text" id="basic-addon1">Title</span>
        <input type="text" id="title" class="form-control" required placeholder="Title" aria-label="Username" aria-describedby="basic-addon1">
      </div>

      <div class="input-group mb-3">

        <span class="input-group-text" id="basic-addon1">Product detail demo</span>
        <input type="text" id="Product-detail-demo" class="form-control" required placeholder="Demo Web" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">

        <span class="input-group-text" id="basic-addon1">Demo Tech</span>
        <input type="text" id="demoTech" class="form-control" required placeholder="Technology" aria-label="Username" aria-describedby="basic-addon1">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Image</span>
        <input type="file" multiple id="imgdemo" class="form-control" required placeholder="Image demo" aria-label="Username" aria-describedby="basic-addon1">
     </div>


    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Link</span>
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


