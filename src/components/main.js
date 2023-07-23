import React from "react";
import ProjectBox from "./project-box";
import { projects } from "./data";
import "./globalstyles.css";
import About from "./about";
import { useLocation } from "react-router";
import { Routes, Route } from "react-router-dom";








export default function Main ({categoriesFilter, allButton, count, ViewProject, darkModeOn}) {

 
    function BoxHandler() {

        let checkedCategoriesArr = []
            
        categoriesFilter.forEach((el)=>{
            
            if(allButton.checked===true) {
                checkedCategoriesArr.push(el.catName)
            } else if (allButton.checked===false && el.checked===true){
                    checkedCategoriesArr.push(el.catName)
                }
                
            
        })

        
        return (projects.map((project)=>{
            for(let i =0; i< checkedCategoriesArr.length; i++) {
                if(project.cat.includes(checkedCategoriesArr[i])) {

                    return <ProjectBox
                    key={project.name}
                    cover= {project.cover} 
                    name = {project.name} 
                    color = {project.color} 
                    visible={false} 
                    count={count}
                    ViewProject = {ViewProject}
                    darkModeOn = {darkModeOn}
                    />
                     

                }

                
               
            }

            return <ProjectBox 
            key={project.name}
            cover= {project.cover} 
            name = {project.name} 
            color = {project.color} 
            visible={true} 
            count={count}
            ViewProject = {ViewProject}
            darkModeOn = {darkModeOn}

            />

        }))
     }
            








    return (
        
        <div className="main">

            
            <div className="box--wrap" >
                
           
                    
               <BoxHandler />
                    
         

            </div>
    

            <About darkModeOn={darkModeOn} ViewProject={ViewProject}/>

            
        </div>
    
    )
    
} 