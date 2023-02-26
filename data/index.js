const projectList = [
    {   
        id: 1, 
        src:"./src/img/about.jpg",
        name: "Dự án mẫu",
        title:"đây là title của project",
        link:'github.com'
    },
    {   src:"./src/img/AVT.jpg",
        id: 2,
        name: "Dự án 1",
        title:"đây là title của project",
        link:'github.com'
    },
    {   src:"./src/img/other.jpg",
        id: 3,
        name: "Dự án tốt nghiệp",
        title:"đây là title của project",
        link:'github.com'
    },
];

const menuList = [
    {name:"Home",path:"/"},
    { src:"",name:"About",path:"/about"},
    { src:"",name:"Contact",path:"/contact"},
    { src:"",name:"Post",path:"/posts"},
    { src:"",name:"Project",path:"/projects"},
    { src:"",name:"admin",path:"/admin/projects"}
];
const menunav = [
    {name:"Home",path:"/#home"},
    {name:"About",path:"/#about"},
    {name:"Project",path:"/#myprojects"},
    {name:"Contact",path:"/#contact"}
];


const menunavProject = [
    {name:"About Web",path:`/projects/id/#aboutWeb`},
    {name:"Technology used",path:"/#technology"},
    {name:"Function",path:"/#Function"}
];

export { projectList, menuList ,menunav,menunavProject};
