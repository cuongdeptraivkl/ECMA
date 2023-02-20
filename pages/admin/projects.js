
import Header from "../../components/Header";
import menuAdmin from "../../components/menuAdmin";

import {projectList } from "../../data";
import { router, useEffect, useState } from "../../libs";

const AdminProjectsPage = () => {
    // biến project có tác dụng lưu trữ, và thằng setProject sẽ làm nhiệm vụ cập nhật lại project
    const [projects, setProjects] = useState(projectList)
    // hàm useEffect sẽ được gọi sau khi return xong
    useEffect(()=>{
        // const projects = JSON.parse(localStorage.getItem('projects')) ||[];
        // setProjects(projects)
        fetch('http://localhost:3000/projects')
        .then((Response)=>Response.json())
        .then(data=>setProjects(data))
    },[])
    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove'); // [btn,btn,btn]
        const btnUpdate = document.querySelectorAll('.btn-update')
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
               // console.log(id);
                // lọc ra 1 mảng mới không bao gồm id đã click vào
                
            })
        }
        // for (let btn of btnUpdate){
        //     btn.addEventListener('click',function(){
        //         const id = btn.dataset.id;
        //         console.log(id);
             
        //     })
        // }
    })
    /*html*/
    return `
   ${menuAdmin()}
 
    
   
    <table class="table table-bordered">
    <thead>
        <tr>
            <th>Số Thứ Tự</th>            <th>Ten du an</th>
            <th>Xóa</th>
        </tr>
    </thead>
    <tbody>
        ${projects.map((project, index) => `
      
            <tr>
                <td>${index + 1}</td>
                <td>${project.name}</td>
                <td>
                    <button data-id="${project.id}" class="btn btn-remove btn-danger">Remove</button>
                    <a href="/admin/projects/${project.id}/update"> <button data-id="${project.id}" class="btn btn-primary btn-update">sửa</button></a>
                </td>
            </tr>
        `).join("")}
        
    </tbody>
</table>
    `
};


export default AdminProjectsPage;