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
        fetch(`http://localhost:3000/projects/${id}`)
        .then((Response)=>Response.json())
        .then((data)=>{
            setProject(data)
        })
    },[])
    useEffect(() => {
        const form = document.getElementById("form-update");
        const projectName = document.getElementById("project-name");
        const src = document.getElementById("imgdemo");
        const title = document.getElementById("title");
        const link = document.getElementById("link");
        
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const newProject = {
                 id: project.id,
                name: projectName.value,
                src:src.value,
                title:title.value   ,
                link:link.value
            };
            fetch(`http://localhost:3000/projects/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(newProject)
            }).then(()=>{
                router.navigate("/admin/projects")
            })
           
        
        });
    });

  return `
  ${menuAdmin()}
    <div class="container project-update">
    <form action="" id="form-update">
        <h1>sửa dự án </h1>
             <div class="form-group mb-3">
                <label for="" class="form-label">Name Project</label>
                <input type="text" required class="form-control" id="project-name" value="${project.name}"/>
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Image Demo</label>
                <input type="text" required class="form-control" id="imgdemo" value="${project.src}"/>
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Title Project</label>
                <input type="text" required class="form-control" id="title" value="${project.title}"/>
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Link Git</label>
                <input type="text" required class="form-control" id="link" value="${project.link}"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">sưa</button>
                
            </div>

        </form>
    </div>
  `
}

export default AdminProjectUpdatePage;
