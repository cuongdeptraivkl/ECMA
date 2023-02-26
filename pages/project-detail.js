
import { router, useEffect, useState } from '../libs';
import axios from 'axios';
import'../style.css'
import navbarProjectDetail from '../components/navbarProjectDetail';
const ProjectDetailPage = ({ data: { id } }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/projects/${id}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.log(error);
        router.navigate('/notfound');
      });
  }, [id]);

  if (!project) {
    return '';
  }
/*html*/
  return `
    ${navbarProjectDetail()}
    <div class="container-fluid bg-project-detail">
            <div class="row">
                <div class="col-md-9 left-project-detail">

                    <div class="aboutWeb container">
                        <h1 class="text-center">About WEB </h1>
                        <p> <span class="color-name-web">${project.name}</span> <span> ${project.titleDetail}
                            </span></p>
                        <div class="text-center img-leftdetail-project">
                            <img width="75%" src="${project.src}" alt="">
                        </div>
                    </div>


                    <div class="tech container">
                        <h1 class="text-center" id="technology">Technology</h1>
                        <p>${project.demotech}</p>

                        <div class="text-center">
                            <img width="70%" src="src/img/image-removebg-preview.png" alt="">
                        </div>
                    </div>

                   



                    <img class="img-left-project1" src="../src/img/the moon.png" alt="">
                    <img class="img-left-project2" src="../src/img/the moon.png" alt="">

                </div>
                <div class=" col-md-3 right-project-detail">
                    <h3 class="text-center h1-right-project-detail">Can You Like Too</h3>
                    <div class="recommend">
                        <ul>
                            <li><a href="">
                                    <h4>${project.name}</h4>
                                </a></li>
                            <li><a href="">
                                    <p>${project.title}</p>
                                </a></li>
                        </ul>
                        <a href=""><img src="${project.src}" alt=""></a>
                    </div>
                   

                    <h3 class="text-center h3-project"><a href="${project.link}">See more on Github <i class='bx bxl-github'></i></a></h3>
                </div>
            </div>
        </div>
  `;
};

export default ProjectDetailPage;
