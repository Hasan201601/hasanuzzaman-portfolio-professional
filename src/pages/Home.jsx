import About from "../components/about";
import Contact from "../components/contact";
import Intro from "../components/intro";
import ProjectHome from "../components/projectHome";


const Home = () => {
    return (
        <div >
            <Intro />
            <About />
            <ProjectHome />
            <Contact />
        </div>
    );
};

export default Home;