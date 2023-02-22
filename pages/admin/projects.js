
import menuAdmin from "../../components/menuAdmin";
import {projectList } from "../../data";
import { router, useEffect, useState } from "../../libs";

const AdminProjectsPage = () => {
    // biến project có tác dụng lưu trữ, và thằng setProject sẽ làm nhiệm vụ cập nhật lại project
    const [projects, setProjects] = useState(projectList)
    // hàm useEffect sẽ được gọi sau khi return xong
    useEffect(()=>{
        fetch('http://localhost:3000/projects')
        .then((Response)=>Response.json())
        .then(data=>setProjects(data))
    },[])  
    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove'); // [btn,btn,btn]
        for(let btn of btns){
            // viết sự kiện cho button
            btn.addEventListener('click', function(){
                // lay data-id từ button
                const id = btn.dataset.id;
                
                fetch(`http://localhost:3000/projects/${id}`,{
                    method:"DELETE",
                }).then(()=>{
                    const newProjects = projects.filter(project => project.id != id)
                // thiết lập lại mảng projects ban đầu
                setProjects(newProjects)
                })
              
            })
        }
      
    })
    /*html*/
    return `
   ${menuAdmin()}
 
    
<div class="project container">
       
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Number</th>      
                <th>IMG</th>
                <th>Name Project</th>
                <th>Title</th>
                <th>Link</th>
                <th>Function</th>
            </tr>
        </thead>
        <tbody>
        ${projects.map((project, index) => `
  
        <tr>
            <td>${index + 1}</td>
            <td>${project.src}</td>
            <td>${project.name}</td>
            <td>${project.title}</td>
            <td>${project.link}</td>
            <td>
                <button data-id="${project.id}" class="btn btn-remove btn-danger">Remove</button>
                <a href="/admin/projects/${project.id}/update"> <button data-id="${project.id}" class="btn btn-primary btn-update">Edit</button></a>
            </td>
        </tr>
         `).join("")}
    
            </tbody>
    </table>

</div>
    `
};


export default AdminProjectsPage;