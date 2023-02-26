
import axios from "axios";
import menuAdmin from "../../components/menuAdmin";
import {projectList } from "../../data";
import { router, useEffect, useState } from "../../libs";
const AdminProjectsPage = () => {
    // biến project có tác dụng lưu trữ, và thằng setProject sẽ làm nhiệm vụ cập nhật lại project
    const [projects, setProjects] = useState(projectList)
    // hàm useEffect sẽ được gọi sau khi return xong
    useEffect(()=>{
         axios.get('http://localhost:3000/projects').then(({data}) =>setProjects(data))
     },[])  

   
   
     useEffect(() => {
         const btns = document.querySelectorAll('.btn-remove'); // [btn,btn,btn]
         for(let btn of btns){
             // viết sự kiện cho button
             btn.addEventListener('click', function(){
                 // lay data-id từ button
                 const id = btn.dataset.id;
               const removeProject=  confirm('Are you sure you want to delete ?')
               if(removeProject){
                alert('Project has been deleted.')
                   axios.delete(`http://localhost:3000/projects/${id}`).then(()=>{
                       const newProjects = projects.filter(project => project.id != id)
                       // thiết lập lại mảng projects ban đầu
                       setProjects(newProjects)
                   })            
               }else{
                alert('"Cancel delete project.')
               }
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
                <th>Title Detail</th>
                <th>Title Tech</th>
                <th>Link</th>
                <th>Function</th>
            </tr>
        </thead>
        <tbody>
        ${projects.map((project, index) => `
  
        <tr>
            <td>${index + 1}</td>
            <td> <img width="100px" src="${project.src}" alt=""></td>
            <td>${project.name}</td>
            <td>${project.title}</td>
            <td>${project.titleDetail}</td>
            <td>${project.demotech}</td>
            <td>${project.link}</td>

            <td>
                <button data-id="${project.id}" class="btn btn-remove btn-danger">Remove</button>
                <a href="/admin/projects/${project.id}/update"> <button data-id="${project.id}"  class="btn btn-primary btn-update">Edit</button></a>
            </td>
        </tr>
         `).join("")}
    
            </tbody>
    </table>

</div>
    `
};


export default AdminProjectsPage;