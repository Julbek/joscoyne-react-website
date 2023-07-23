
import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import ProjectView from './components/project-view.js';
import ParticleBackground from './components/TS-Particles/particle-background';
import Footer from './components/footer'
import { projects } from './components/data';
import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import JulianBektashi from './components/projects/JulianBektashi';


import "./components/globalstyles.css";




function App() {

  var [darkModeOn, setDarkModeOn] = React.useState(false)

 function ToggleMode() {
  if (darkModeOn===false) {
    return setDarkModeOn(true)
  }else {
    return setDarkModeOn(false)
  }
  
 }


  


  var categories = [] //Array of objects to be build from the Data
  var categoriesCache = [] //Array that will keep track of the categories in order to not be repeated in the categories bar. 

  



  //Bellow the categories array gets build with each obj containing the name category and if it has been checked(both will be sent at the button as props)
  
  for (let i = 0; i < projects.length; i++) {

      for (let j = 0; j < projects[i].cat.length; j++) {
  
          if (!categoriesCache.includes(projects[i].cat[j])) {
              categoriesCache.unshift(projects[i].cat[j])
              categories.unshift({catName:projects[i].cat[j], checked:false})

          }
  
      }
      
  }


  /* Bellow State version of the categories filter, in order to be update based on the conidtions defined. 
  This Array will be iterated and generate the number of buttons based on the number of categories, 
  and each button will recieve the apropriate category name and checked status as a prop. */

  var [categoriesFilter, setCategoriesFilter] = React.useState(categories); 

  var [allButton, setAllButton] = React.useState({catName:"All", checked: true }) // the "All" button is a special one and will have
  
  var[count, setCount] = React.useState(0)



  var[project, setProject] = React.useState("")




const Home = () => {
    return (
      <div className="home">
        <Navbar
          categoriesFilter={categoriesFilter}
          setCategoriesFilter={setCategoriesFilter}
          categories={categories}
          allButton={allButton}
          setAllButton={setAllButton}
          count={count}
          setCount={setCount}
          ToggleMode={ToggleMode}
          darkModeOn={darkModeOn}
        />

        <Main
          categoriesFilter={categoriesFilter}
          allButton={allButton}
          count={count}
          darkModeOn={darkModeOn}
        />
      </div>
    );
  }








    return (
      <div className="app">
        <ParticleBackground darkModeOn={darkModeOn} />

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects/:id" element={<ProjectView/>} />
        <Route path="/julian-bektashi" element={<JulianBektashi/>} />
      </Routes>
      
      
      </BrowserRouter>
        
        

        <Footer darkModeOn={darkModeOn} />
      </div>
    );
  
  } 

export default App;

