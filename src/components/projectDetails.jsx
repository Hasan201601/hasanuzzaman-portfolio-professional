import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { BiWorld } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai'
import { IoServerSharp } from 'react-icons/io5'
import { ThemeContext } from '../context';
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import { projects } from '../data/projectsData';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const ProjectDetail = () => {
    const { id } = useParams()
    console.log(id)
    console.log(projects)
    const project = projects.find(item => item.id === parseInt(id))
    console.log(project)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div style={{ paddingBottom: '50px' }}>
            <div className="pd" style={{
                backgroundColor: darkMode ? "#1b1b1b" : "#d6e7dd",
                border: darkMode ? "2px solid #1a1a1a" : "2px solid rgb(196, 195, 195)"
            }} >
                <div className="pd-browser" style={{ backgroundColor: "#59b256" }}>
                    <div className="pd-circle"></div>
                    <div className="pd-circle"></div>
                    <div className="pd-circle"></div>
                </div>
                <div style={{ width: '70%', margin: '0 auto' }}>
                    <Swiper slidesPerView={1} pagination={{
                        "clickable": true
                    }} className="mySwiper">
                        <SwiperSlide>
                            <img src={project?.img1} alt="" className="pd-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={project?.img2} alt="" className="pd-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={project?.img3} alt="" className="pd-img" />
                        </SwiperSlide>
                    </Swiper>

                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ textAlign: 'center' }}>{project.projectName}</h2>
                        <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '25px', margin: '0', padding: '0' }}>
                            <li style={{ marginLeft: '5px' }}><a href={project?.link} style={{ color: 'black' }}><BiWorld style={{ color: darkMode && 'white' }}></BiWorld></a> </li>
                            <li style={{ marginLeft: '5px' }}><a href={project?.clientSide} style={{ color: 'black' }}><AiFillGithub style={{ color: darkMode && 'white' }}></AiFillGithub></a></li>
                            <li style={{ marginLeft: '5px' }}><a href={project?.serverSide} style={{ color: 'black' }}><IoServerSharp style={{ color: darkMode && 'white' }}></IoServerSharp></a></li>
                        </ul>
                        <h4 className='proj-desc' style={{ color: 'grey' }}>{project.desc}</h4>
                        <h4 className='proj-desc' style={{ margin: '15px 0 5px 0' }}>Key Features</h4>
                        <div style={{ textAlign: 'center', marginLeft: '10px', paddingBottom: '10px' }}>
                            <p className='proj-desc'>{project?.features?.feature1}</p>
                            <p className='proj-desc'>{project?.features?.feature2}</p>
                            <p className='proj-desc'>{project?.features?.feature3}</p>
                        </div>
                        <h4 className='proj-desc' style={{ margin: '15px 0 7px 0' }}>Technologies Used</h4>
                        <p className='proj-desc'>{project.tech}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetail;