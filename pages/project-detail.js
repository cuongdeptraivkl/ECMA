import Header from '../components/Header'
import { projectList } from '../data'
import { router } from '../libs';

const projectDetailPage = ({data:{id}}) => {// destructoring thằng id
    console.log(id);

    const project = projectList.find(function(project){
        return project.id == id
    })
    
    // check trước khi hiển thị ra
    if(!project){  
        return router.navigate("/notfound")
    }
    return `
          ${Header()}   
        <h1>${project.name}</h1>
   `
}
export default projectDetailPage;

