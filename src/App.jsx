import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Blogs from "./components/blogs";
import Footer from "./components/footer";
import Header from "./components/header";
import ProjectDetail from "./components/projectDetails";
import Toggle from "./components/toggle";
import { ThemeContext } from "./context";
import Home from "./pages/Home";
import Projects from "./pages/Projects";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white"
      }}
    >
      <Router>
        <Header />
        <Toggle />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects/:id">
            <ProjectDetail />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
