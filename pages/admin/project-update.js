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

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const newProject = {
                 id: project.id,
                name: projectName.value
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
            // cập nhật vào mảng projectList
            // const newProjectList = projectList.map((project)=>{
            //     return project.id == newProject.id? newProject:project
            // })

            // lưu vào localStorage dưới dạng chuỗi
         //   localStorage.setItem("projects",JSON.stringify(newProjectList));

            // điều hướng về trang projects
        
        });
    });

  return `
    <div class="container">
        <h1>sửa dự án </h1>
        <form action="" id="form-update">
        <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" value="${project.name}"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">sưa</button>
                
            </div>

        </form>
    </div>
  `
}

export default AdminProjectUpdatePage;
