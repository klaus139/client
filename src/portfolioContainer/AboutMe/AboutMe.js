import React from "react";
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";

export default function AboutMe(props){
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubsciption = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    return (
        <div className="about-me-container screen-container" id={props.id || ""}>
            <div className="about-me-parent">
                <screenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
            </div>

        </div>
    );
}