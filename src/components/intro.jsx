import { useContext } from "react";
import { ThemeContext } from "../context";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="i" id="home">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Hasanuzzaman Hasan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">MERN Developer</div>
              <div className="i-title-item">Freelancer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <div>
            <a href="https://drive.google.com/file/d/1KMpurmQO4Qj_LHIZvHr2HC-KfE4dlw1c/view?usp=sharing" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><button>Download Resume</button></a>
          </div>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke={darkMode ? "white" : "black"}
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: darkMode ? "white" : "black" }}
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <svg className="i-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#59b256" d="M38.4,-62.5C50.1,-52.3,60,-42.1,69.6,-29.3C79.3,-16.6,88.7,-1.2,89.2,14.6C89.8,30.5,81.4,46.9,67.8,53.7C54.1,60.6,35.1,57.9,19.7,58.4C4.3,58.9,-7.6,62.7,-20.3,62.2C-33.1,61.7,-46.6,56.9,-58.4,48C-70.1,39.1,-80,26,-78.9,13.2C-77.8,0.4,-65.8,-12.1,-57.7,-24.9C-49.6,-37.7,-45.4,-50.9,-36.4,-62.3C-27.5,-73.6,-13.7,-83.2,-0.2,-82.9C13.4,-82.6,26.8,-72.6,38.4,-62.5Z" transform="translate(100 100)" />
        </svg>
        <img className="i-img" src="https://i.ibb.co/WPhY5Ft/man.png" alt="" />
      </div>
    </div>
  );
};

export default Intro;
