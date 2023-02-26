import axios from "axios";
import menuAdmin from "../../components/menuAdmin";
import { router, useEffect, useState } from "../../libs";

const AdminProjectUpdatePage = ({data: {id}}) => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng

   // const projectList = JSON.parse(localStorage.getItem("projects"))||[];
    //const currentProject = projectList.find((project)=> project.id == id)
    const [project,setProject]= useState({});
    useEffect(()=>{
        // fetch(`http://localhost:3000/projects/${id}`)
        // .then((Response)=>Response.json())
        // .then((data)=>{
        //     setProject(data)
        // })
        axios.get(`http://localhost:3000/projects/${id}`).then(({data})=>setProject(data));
    },[])
    useEffect(() => {
        const form = document.getElementById("form-update");
        const projectName = document.getElementById("project-name");
        const src = document.getElementById("imgdemo");
        const title = document.getElementById("title");
        const titleDetail = document.getElementById("titleDetail");

        const link = document.getElementById("link");
        
        form.addEventListener("submit",async (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const urls = await uploadImage(src.files);
            const newProject = {
                 id: project.id,
                name: projectName.value,
                src:urls,
                title:title.value,
                titleDetail:titleDetail.value,
                demotech:demoTech.value,
                link:link.value
            };
           
            axios.put(`http://localhost:3000/projects/${id}`,newProject).then(()=>{
                router.navigate("/admin/projects")
            })
        
        });
    });

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
            const response = await axios.put(api, formData, {
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
    <div class="container project-update">
    <form action="" id="form-update">
        <h1>sửa dự án </h1>
             <div class="form-group mb-3">
                <label for="" class="form-label">Name Project</label>
                <input type="text"  class="form-control" id="project-name" value="${project.name}"/>
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Image Demo</label>
                <input type="file" required multiple  class="form-control" id="imgdemo""/> <img class="w-25" src="${project.src}" alt=""></input>
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Title Project</label>
                <input type="text"  class="form-control" id="title" value="${project.title}"/>
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Demo Project</label>
                <input type="text"  class="form-control" id="titleDetail" value="${project.titleDetail}"/>
            </div>
            <div class="form-group mb-3">
            <label for="" class="form-label">Demo tech</label>
            <input type="text"  class="form-control" id="demoTech" value="${project.demoTech}"/>
        </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Link Git</label>
                <input type="text"  class="form-control" id="link" value="${project.link}"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">sưa</button>
                
            </div>

        </form>
    </div>
  `
}

export default AdminProjectUpdatePage;
