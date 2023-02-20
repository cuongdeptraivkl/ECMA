
const ProjectList = ({ projects }) => {
    return `
    ${
        projects.map((item) => {
            return `
                <div>
                    <p>Project Id: ${item.id}</p>
                    <img src="${item.src}" class="d-block w-50" alt="...">
                    <h2><a href="/projects/${item.id}">Project Name: ${item.name}</a></h2>
                    <p>${item.title}</p>
                </div>
            `
        }).join("")
    }
  `
}

export default ProjectList