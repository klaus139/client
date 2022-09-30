import React, {useEffect} from "react"
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import './AboutMe.css';


export default function AboutMe(props){

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    const SCREEN_CONSTSANTS = {
        description: "Full stack web and mobile developer with background knowledge of NODE.js stacks with react, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.",
        highlights:{
            bullets:[
                "Full stack web and mobile developer",
                "Background knowledge of NODE.js and Javascript ",
                "Interactive Front End react developer",
                "Scrum certified and Agile development",
                "Building applications with utmost efficiency",
                "Managing databases and servers",
            ],
            heading: "Here are a Few Highlights:"

        }
    }
    const renderHighlights = ()=>{
        return (
            SCREEN_CONSTSANTS.highlights.bullets.map((value, i)=>(
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
        
    }
    
    return (
        <div className="about-me-container screen-container" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"A little about me"}/>
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                    <span className="about-me-description">
                        {SCREEN_CONSTSANTS.description} 
                        </span>
                    <div className="about-me-highlights">
                        <div className='highlights-heading'>
                            <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                        </div>
                        {renderHighlights()}
                    </div>
                    <div className="about-me-options">
                    <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >Hire Me
                    </button>
                    <a href='NICHOLAS.pdf' download='Nicholas igunbor.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
    