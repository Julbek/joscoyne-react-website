import React from "react";
import "./globalstyles.css";
import MenuButton from "./menu-button";
import { projects } from "./data";
import AllButton from "./all-button";





export default function LowerBar({categoriesFilter, setCategoriesFilter, categories, allButton,setAllButton}) {

   

    //Bellow the "All" button state, which is separate from the other as it is a default feature. T
  
  









    /*Bellow the ButtonClick Function, which is defined here in the parent component and sent to the button siblings as a prop, 
    as certain conditions must be met, sibbling button components must be aware of the state of each other*/ 
  


    function ButtonClick(catName) {

        /*The following iteration defines the state of each button.
        if clicked, its state will swap from checked to unchecked or viceversa.
        The final update will occur in the categoriesFilter state array, 
        as it is the one that determines the final render of the buttons*/ 

        let updateCategoriesFilter = categoriesFilter.map((el) => {

            if(el.catName===catName && el.checked===false) {
                return {...el, checked:true}
            } else if (el.catName===catName && el.checked===true) {
                return {...el, checked:false}}
            
            return el

        });

        console.log("update:", updateCategoriesFilter)

        setCategoriesFilter((prevCategoriesFilter) => updateCategoriesFilter)





        /*The All uncheckes automatically when at least one category button is enabled */ 

        if(AllButton.checked=true) {
            setAllButton(
                {catName:"All", checked:false}
            )
        }



        /*The Bellow operations keep track of the category buttons states as a whole:
        if all of them are enabled or all disabled, the "All" button automatically enables and resets the menu */

        
        let count = 0;

        updateCategoriesFilter.forEach((el) => {
            if (el.checked===true) {
                count = count + 1
            }
        })
        console.log("cat:", updateCategoriesFilter)
        console.log("count:", count)

        if(count===updateCategoriesFilter.length || count===0) {
            return ResetButtons()
        } 

        return(updateCategoriesFilter)
    
    }


    //Reset Function when the "All" Button is clicked (after the filter buttons where activated)

    function ResetButtons () {
        
        setCategoriesFilter(categories)
        setAllButton({catName:"All", checked:true})
    }


    



    return (

        <div className="lower--bar">
           
            <div className="project--cat--menu--wrap">

                {categoriesFilter.map (element =>  
                <MenuButton
                    key={element.catName}
                    catName={element.catName}
                    checked={element.checked}
                    ButtonClick= {ButtonClick}

                 
                />)}
                
                <AllButton
                key={allButton.catName}
                catName = {allButton.catName}
                checked = {allButton.checked}
                ResetButtons = {ResetButtons}
                />
                

            </div>
                
           
        </div>

    )
}


