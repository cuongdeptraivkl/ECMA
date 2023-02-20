import Header from "../components/Header";
import AboutPage from "./about";
import banner from "./banner";
import ContactPage from "./contact";
import ProjectPage from "./projects";

const HomePage = () => {
    /*html*/
    return `
    ${Header()}
    ${banner()}
    ${AboutPage()}
    ${ProjectPage()}
    ${ContactPage()}
    `;
};
export default HomePage;
