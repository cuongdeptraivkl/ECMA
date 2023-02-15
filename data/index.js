const projectList = [
    { 
        id: 1, 
        name: "Dự án mẫu"
    },
    {
        id: 2,
        name: "Dự án 1"
    },
    {
        id: 3,
        name: "Dự án tốt nghiệp"
    },
];

const menuList = [
    {name:"Home",path:"/"},
    {name:"About",path:"/about"},
    {name:"Contact",path:"/contact"},
    {name:"Post",path:"/posts"},
    {name:"Project",path:"/projects"},
    {name:"admin",path:"/admin/projects"}
];
const menuAdmin = [
    {name:"add",path:'/admin/projects/add'},
    {name:"update",path:'/admin/projects/:id/update'}
]
export { projectList, menuList ,menuAdmin};
