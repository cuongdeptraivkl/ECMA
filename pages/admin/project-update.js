import { useEffect } from "../../libs";

const AdminProjectUpdatePage = ({data:{id}}) => {
    // KIỂM TRA TRÊN localStorage có dữ liệu hay không
    // nếu có thì lấy ko thì gán rỗng

    const projectList = JSON.parse(localStorage.getItem("projects"))||[];
    const currenProject = projectList.find((project)=>project.id ==id)

    
    useEffect(()=>{
        
    })

  return (
    <div class="container">
        <h1>sửa dự án </h1>
        <form action="" id="form-update">
        <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" value="${currentProject.name}"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">sưa</button>
            </div>

        </form>
    </div>
  )
}

export default AdminProjectUpdatePage;
