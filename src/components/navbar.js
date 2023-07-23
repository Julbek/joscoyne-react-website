import React from "react";
import LowerBar from "./lower-bar";
import UpperBar from "./upper-bar";

export default function NavBar({categoriesFilter, setCategoriesFilter, categories, allButton, setAllButton, count, setCount, ToggleMode, darkModeOn}) {
    
    const navBar = document.querySelector(".nav--bar")
    let [scrollPos, setScrollPos] = React.useState(window.pageYOffset)
    let [hideNavBar, setHideNavBar] = React.useState(false)
    let [navBarBackground, setNavbarBackground] = React.useState(false)


    React.useEffect(()=> {

        
        window.onscroll = () => {

            
            setScrollPos((prevScrollPos) => {
            
                if (prevScrollPos < window.pageYOffset ) {
                    
                    setHideNavBar(true)
                
                } else { 
                    
                    setHideNavBar(false)
                
                };

                console.log(prevScrollPos, window.pageYOffset)

                
                if (window.pageYOffset !== 0) {
                    setNavbarBackground(true)
                  
                
                } else {setNavbarBackground(false)
                    }

                return window.pageYOffset;
            });

        };


    }, []);


    var [navBarMode, setNavBarMode] = React.useState("light")


    


    React.useEffect(()=>{

        darkModeOn?setNavBarMode("dark"): setNavBarMode("light")

    })

    function GhostBarIn(){
        return setHideNavBar(false)
    }

    function GhostBarOut(){
        return setHideNavBar(true)
    }




    
    return (

        <div className="nav--bar--wrap">
           
            

            <div className={hideNavBar? "nav--bar--hidden" : "nav--bar" } id={navBarMode} style={navBarBackground? {backgroundColor:"RGB(255,255,255, 0.99)"}:{backgroundColor:"transparent"}}>

                
                <div className="nav--bar--elements--wrap">

                    <UpperBar ToggleMode={ToggleMode}/>

                    <LowerBar 
                    categoriesFilter={categoriesFilter} 
                    setCategoriesFilter = {setCategoriesFilter}
                    categories={categories}
                    allButton = {allButton}
                    setAllButton = {setAllButton}
                    count = {count}
                    setCount = {setCount}
                    
                    />

                </div>

            </div>
        
        </div>

    )
}







