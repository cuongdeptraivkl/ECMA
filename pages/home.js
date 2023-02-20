import Header from "../components/Header";
import AboutPage from "./about";
import banner from "./banner";
import ContactPage from "./contact";
import footer from "./footer";
import ProjectPage from "./projects";

const HomePage = () => {
    /*html*/
    return `
    ${Header()}
    ${banner()}
    ${AboutPage()}
    ${ProjectPage()}
    ${ContactPage()}
    ${footer()}
    `;
};
export default HomePage;
