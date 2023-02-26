import { render, router } from "./libs";

import AboutPage from "./pages/about";
import AdminProjectsAddPage from "./pages/admin/project-add";
import AdminProjectUpdatePage from "./pages/admin/project-update";
import AdminProjectsPage from "./pages/admin/projects";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import notFound from "./pages/notFound";
import PostsPage from "./pages/posts";
import projectDetailPage from "./pages/project-detail";
import ProjectsPage from "./pages/projects";
import scrollFunction from "./libs/scrollMenu";
import login from "./pages/login";
const app = document.querySelector("#app");

router.on("/", () => {
    render(HomePage, app)
});
router.on("/about", () => {
    render(AboutPage, app)
});
router.on("/contact", () => {
    render(ContactPage, app)
});
router.on("/posts", () => {
    render(PostsPage, app)
});
router.on("/projects", (abc) => {
    console.log(abc);
    render(ProjectsPage, app)
});
router.on("/projects/:id",(params)=>{
     console.log(params);
    render(function(){
        return projectDetailPage(params)
    },app)
})

router.on('/admin/projects', () => render(AdminProjectsPage, app));

router.on('/admin/projects/add', () => render(AdminProjectsAddPage, app));

router.on('login',() => render(login,app));

router.on('/register',() => render(login,app));


router.on("/admin/projects/:id/update",(params)=>{
    render(function(){
        return AdminProjectUpdatePage(params)
    
    },app)
})
router.notFound(()=>{
    render(notFound,app)
})
router.resolve();

