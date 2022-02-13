import React from 'react';
import { projects } from '../data/projectsData';
import Product from './project';

const ProjectHome = () => {
    return (
        <div>
            <div className="ph" >
                <div className="pl-texts">
                    <h1 className="pl-title">Recent Projects</h1>
                    <p className="pl-desc">
                        This projects are created with updated technologies. I love to create new projects with new challenges.
                    </p>
                </div>
                <div className="pl-list">
                    {projects.slice(0, 3).map((item) => (
                        <Product key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectHome;