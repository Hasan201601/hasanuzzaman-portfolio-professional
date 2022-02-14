import React, { useEffect, useState } from 'react';
import { projects } from '../data/projectsData';
import Project from './project';


const FilterMenu = () => {
    const allCategoryValues = ["all", ...new Set(projects.map((curElem) => curElem.category))]
    const [items, setItems] = useState(projects);
    const [category, setCategory] = useState("all")
    /* const filterItem = (categItem, index) => {
        console.log(index);
        if (categItem === "all") {
            setItems(projects)
            return
        }
        const updatedItems = projects.filter((curElem) => {
            return curElem.category === categItem
        })
        setItems(updatedItems)
    } */
    useEffect(
        () => {
            category === 'all' ? setItems(projects) : setItems(projects.filter((curElem) => {
                return curElem.category === category
            }));
        },
        [category]
    );
    const handleClick = (item) => {
        setCategory(item)
    }

    return (
        <div>
            <div className="menu-tabs">
                <div className="menu-tab">
                    {
                        allCategoryValues.map((item, index) => (<button key={index} className={category === item ? "menu-tab-btn  active-btn" : "menu-tab-btn"} onClick={() => handleClick(item)}>{item}</button>))
                    }
                </div>
                <div className="pl-list">
                    {items.map((item) => (
                        <Project key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default FilterMenu;