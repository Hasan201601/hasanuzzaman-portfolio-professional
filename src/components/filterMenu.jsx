import React, { useState } from 'react';
import { projects } from '../data/projectsData';
import Project from './project';

const allCategoryValues = ["all", ...new Set(projects.map((curElem) => curElem.category))]
const FilterMenu = () => {
    const [items, setItems] = useState(projects);
    console.log(items)
    const [category, setCategory] = useState(allCategoryValues)
    const item = items[0];

    const filterItem = (categItem) => {
        if (categItem === "all") {
            setItems(projects)
            return
        }
        const updatedItems = projects.filter((curElem) => {
            return curElem.category === categItem
        })
        setItems(updatedItems)
    }
    console.log(allCategoryValues)
    return (
        <div>
            <div className="menu-tabs">
                <div className="menu-tab">
                    {
                        category.map((item, index) => (<button key={index} className='menu-tab-btn' onClick={() => filterItem(item)}>{item}</button>))
                    }
                </div>
                <div className="pl-list">
                    {items.map((item) => (
                        <Project key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterMenu;