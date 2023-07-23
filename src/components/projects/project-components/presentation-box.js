

import React from "react"
import "./presentation-box.css"

export default function PresentationBox({content, structure, imgSrc, imgSrc2, imgSrc3, imgSrc4, heading, text, heading2, text2, title, id}) {

    if(structure==="presentation--intro") {
        return (

            <div className="presentation--intro--box" id={`presentation--intro--box--${id}`}>

                <img className="presentation--intro--img"  src={imgSrc} id={`presentation--intro--img--${id}`} ></img>

                <div className="presentation--intro--text--wrap" id={`presentation--intro--text--wrap--${id}`}>
                    
                    <h4 className="presentation--intro--title" id={`presentation--intro--title--${id}`}>{title}</h4>
                    <div className="presentation--intro--description" id={`presentation--intro--description--${id}`}>{text}</div>
                    
                </div>

            </div>
            



        ) 
    } 

    if(structure==="img-text") {
        return (

            <div className="presentation--box" id={`presentation--box--${id}`}>

                <img className="presentation--img"  src={imgSrc} id={`presentation--img--${id}`} ></img>

                <div className="presentation--text--wrap" id={`presentation--text--wrap--${id}`}>
                    
                    <h4 className="presentation--heading" id={`presentation--heading--${id}`}>{heading}</h4>
                    <div className="presentation--description" id={`presentation--description--${id}`}>{text}</div>
                    
                </div>

            </div>
            



        ) 
    } 
        
    else if (structure==="text-img") {

        return (

            <div className="presentation--box" id={`presentation--box--${id}`}>
    
    
                <div className="presentation--text--wrap" id={`presentation--text--wrap--${id}`}>
                    
                    <h4 className="presentation--heading" id={`presentation--heading--${id}`}>{heading}</h4>
                    <p className="presentation--description" id={`presentation--description--${id}`}>{text}</p>
                    
                </div>
    
                <img className="presentation--img"  src={imgSrc} id={`presentation--img--${id}`} ></img>
    
            </div>
            
    
        )
    
    }

    else if (structure==="2-span-empty-template") {

        return (

            <div className="presentation--box--2span" id={`presentation--box--2span--${id}`}>
    
    
                <div className="presentation--text--wrap" id={`presentation--text--wrap--${id}`}>
                    
                    <h4 className="presentation--heading" id={`presentation--heading--${id}`}>{heading}</h4>
                    
                </div>
    
                <div className="content">{content}</div>
    
            </div>
            
    
        )
    }



    else if (structure==="2-span") {

        return (

            <div className="presentation--box--2span" id={`presentation--box--2span--${id}`}>
    
    
                <div className="presentation--text--wrap" id={`presentation--text--wrap--${id}`}>
                    
                    <h4 className="presentation--heading" id={`presentation--heading--${id}`}>{heading}</h4>
                    
                </div>
    
                <img className="presentation--img"  src={imgSrc} id={`presentation--img--${id}`} ></img>
    
            </div>
            
    
        )
    }

    else if (structure==="2-img-text") {
        return (

            <div className="presentation--box" id={`presentation--box--${id}`}>

                <div className="imgs--wrap">

                    <img className="presentation--img"  src={imgSrc} id={`presentation--img--${id}`} ></img>
                    <img className="presentation--img"  src={imgSrc2} id={`presentation--img--${id}`} ></img>


                </div>

                <div className="presentation--text--wrap" id={`presentation--text--wrap--${id}`}>
                    
                    <h4 className="presentation--heading" id={`presentation--heading--${id}`}>{heading}</h4>
                    <div className="presentation--description" id={`presentation--description--${id}`}>{text}</div>
                    
                </div>

            </div>
            



        ) 
    } 
    

    else if (structure==="text-2-img") {
        return (

            <div className="presentation--box" id={`presentation--box--${id}`}>

                <div className="presentation--text--wrap" id={`presentation--text--wrap--${id}`}>
                    
                    <h4 className="presentation--heading" id={`presentation--heading--${id}`}>{heading}</h4>
                    <div className="presentation--description" id={`presentation--description--${id}`}>{text}</div>
                    
                </div>

                <div className="imgs--wrap">

                    <img className="presentation--img"  src={imgSrc} id={`presentation--img--${id}`} ></img>
                    <img className="presentation--img"  src={imgSrc2} id={`presentation--img--${id}`} ></img>


                </div>

            </div>
            



        ) 
    }

    else if (structure==="img-2-img") {
        return (

            <div className="presentation--box" id={`presentation--box--${id}`}>
                
                <div className="img--wrap" id={`img--wrap--${id}`}>

                    <img className="presentation--img"  src={imgSrc} id={`presentation--img--${id}`} ></img>



                </div>

              

                <div className="imgs--wrap" id={`imgs--wrap--${id}`}>

                    <img className="presentation--img"  src={imgSrc2} id={`presentation--img--${id}`} ></img>
                    <img className="presentation--img"  src={imgSrc3} id={`presentation--img--${id}`} ></img>


                </div>

            </div>
            



        ) 
    }

    else if (structure==="1-img") {
        return (

            <div className="presentation--box---2span" id={`presentation--box--2span--${id}`}>

                <div className="one--img--wrap"  id={`one--img--wrap--${id}`}>

                    <img className="presentation--img"  src={imgSrc} id={`presentation--img--${id}`} ></img>
                </div>

            </div>
            



        ) 
    }

    else if (structure==="2-img") {
        return (

            <div className="presentation--box---2span" id={`presentation--box--2span--${id}`}>

                <div className="two--imgs--wrap"  id={`two--imgs--wrap--${id}`}>

                    <img className="presentation--img"  src={imgSrc} id={`presentation--img--${id}`} ></img>
                    <img className="presentation--img"  src={imgSrc2} id={`presentation--img--${id}`} ></img>

                </div>

            </div>
            



        ) 
    }


    else if (structure==="3-img") {
        return (

            <div className="presentation--box--2span" id={`presentation--box--2span--${id}`}>

                <div className="presentation--text--wrap" id={`presentation--text--wrap--${id}`}>
                    
                    <h4 className="presentation--heading" id={`presentation--heading--${id}`}>{heading}</h4>
                    <div className="presentation--description" id={`presentation--description--${id}`}>{text}</div>
                    
                </div>

                <div className="three--imgs--wrap"  id={`three--imgs--wrap--${id}`}>

                    <img className="presentation--img"  src={imgSrc} id={`presentation--img--${id}`} ></img>
                    <img className="presentation--img"  src={imgSrc2} id={`presentation--img--${id}`} ></img>
                    <img className="presentation--img"  src={imgSrc3} id={`presentation--img--${id}`} ></img>

                </div>

            </div>
            



        ) 
    }
    

    else if (structure==="4-img") {
        return (

            

            <div className="presentation--box--2span" id={`presentation--box--2span--${id}`}>

                <div className="presentation--text--wrap" id={`presentation--text--wrap--${id}`}>
                    
                    <h4 className="presentation--heading" id={`presentation--heading--${id}`}>{heading}</h4>
                    <div className="presentation--description" id={`presentation--description--${id}`}>{text}</div>
                    
                </div>

                <div className="four--imgs--wrap"  id={`four--imgs--wrap--${id}`}>

                    <img className="presentation--img"  src={imgSrc} id={`presentation--img--${id}`} ></img>
                    <img className="presentation--img"  src={imgSrc2} id={`presentation--img--${id}`} ></img>
                    <img className="presentation--img"  src={imgSrc3} id={`presentation--img--${id}`} ></img>
                    <img className="presentation--img"  src={imgSrc4} id={`presentation--img--${id}`} ></img>

                </div>

            </div>
            



        ) 
    }

    
    else if (structure==="text-text") {
        return (

            <div className="presentation--box" id={`presentation--box--${id}`}>

                <div className="presentation--text--1--wrap" id={`presentation--text--wrap--${id}`}>
                    
                    <h4 className="presentation--heading" id={`presentation--heading--${id}`}>{heading}</h4>
                    <div className="presentation--description" id={`presentation--description--${id}`}>{text}</div>
                    
                </div>

                <div className="presentation--text--2--wrap" id={`presentation--text--wrap--${id}`}>
                    
                    <h4 className="presentation--heading" id={`presentation--heading--${id}`}>{heading2}</h4>
                    <div className="presentation--description" id={`presentation--description--${id}`}>{text2}</div>
                    
                </div>

            

            </div>
            



        ) 
    }

}

