import { Fragment } from "react";
import AllProjects from "../components/allProjects";
import ScrollToTop from "../components/scrollToTop";


const Projects = () => {
    return (
        <Fragment>
            <ScrollToTop></ScrollToTop>
            <AllProjects></AllProjects>
        </Fragment>
    );
};

export default Projects;