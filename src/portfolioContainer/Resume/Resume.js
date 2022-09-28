import React, {useState} from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './Resume.css';


export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
    
    function fadeInScreenHandler(screen) {
        if (screen.fadeScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = 
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    function ResumeHeading(props) {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'>
                        <span>{props.heading ? props.heading : ""}</span>
                        {props.fromDate && props.toDate ? (
                            <div className='heading-date'>
                                {props.fromDate + "_" + props.toDate}
                            </div>
                        ) : (
                            <div></div>

                        )}
                    </div>
                    <div className='resume-sub-heading'>
                        <span>{props.subHeading ? props.subHeading : ''}</span>
                    </div>
                    <div className='resume-heading-description'>
                        <span>{props.description ? props.description : ''}</span>
                    </div>
                </div>
            </div>
        );

    }

    
    const resumeBullets =[
        {label: "Education", logoSrc: "education.svg"}, 
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "interests", logoSrc: "interests.svg"},
    ];
    
    const programmingSkillDetails = [
        {skill: "Javascript", ratingPercentage: 85},
        {skill: "React", ratingPercentage: 71},
        {skill: "Node.js", ratingPercentage: 85},
        {skill: "HTML", ratingPercentage: 95},
        {skill: "CSS", ratingPercentage: 75},
        {skill: "MongoDB", ratingPercentage: 85},
        {skill: "Python", ratingPercentage: 65},
        {skill: "Bash", ratingPercentage: 55},
        {skill: "Github", ratingPercentage: 95},
    ];
    const projectsDetails = [
        {
            title: "Personal Portfolio Website", 
            duration: {fromDate: "2022", toDate: "2022"},
            description: "A personal portfolio website to showcase my skills and projects",
            subHeading: "Technologies Used: React Js, Node Js, Bootstrap",
        },
        {
            title: "Content Management System", 
            duration: {fromDate: "2022", toDate: "2022"},
            description: "A webApp that allows users to create, edit and delete content",
            subHeading: "Technologies Used: Html, CSS, Python Django, Bootstrap, MongoDB",
        },
        {
            title: "Landing Page", 
            duration: {fromDate: "2021", toDate: "2021"},
            description: "A landing page for a fictional company",
            subHeading: "Technologies Used: Html, CSS, Bootstrap, Javascript",
        },
    ];
    
    


    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading 
            heading={"University of Benin, Nigeria"}
            subHeading={"M.sc. Environmental and Public Health"}
            fromDate={"2018"}
            toDate={"2022"}
            />
             <ResumeHeading 
            heading={"National Youth Service Corps"}
            subHeading={"Akwa Ibom State, Nigeria"}
            fromDate={"2016"}
            toDate={"2017"}
            />
             <ResumeHeading 
            heading={"University of Benin, Nigeria"}
            subHeading={"B.sc. Microbiology"}
            fromDate={"2011"}
            toDate={"2015"}
            />
             <ResumeHeading 
            heading={"High School"}
            subHeading={"Notre Dame High School"}
            fromDate={"2008"}
            toDate={"2002"}
            />
        </div>,
        <div className='resume-screen-container' key="work-experience">
             <ResumeHeading 
            heading={"Decagon Institute of Software Engineering"}
            subHeading={"FULL STACK DEVELOPER"}
            fromDate={"2022"}
            toDate={"present"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Currently working as a full stack Node js developer
                </span>
            </div>

            <div className='experience-description'>
                <span className='resume-description-text'>
                - Developed a personal portfolio website to showcase my skills and projects
                </span>
                <br/>
                <span className='resume-description-text'>
                - Integrated the web app with backnd services to 
                create nee user onboarding application with dynamic form content. 
                </span>
                <br/>
                <span className='resume-description-text'>
                - I stretched my mental capacity by learning new technologies and designs.
                </span>
            </div>,
            <div className='resume-screen-container programming-skills-container'
             key="programming-skills">
              {programmingSkillDetails.map((skill, index)=>(
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className='skill-percentage'>
                            <div style={{width: skill.ratingPercentage + "%"}}
                            className='active-percentage'>
                            </div>

                        </div>
                    </div>
                ))}
            </div>,

             <div className='resume-screen-container' key="projects">
                {projectsDetails.map((projectsDetails, index)=>(
                    <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                    />
               ))}
             </div>,

             <div className='resume-screen-container' key="interests">
                
                <ResumeHeading
                heading='Teaching'
                description='I love teaching and sharing my knowledge with others'
                />
                <ResumeHeading
                heading='Music'
                description='I love listening to music and playing the guitar'
                />
                <ResumeHeading
                heading='Travel'
                description='I love travelling and exploring new places'
                />
             </div>

        </div>
    ];

    const handleCarousal =(index)=>{
        let offsetHeight = 360;
        let newCarousalOffset ={
            style: {transform: "translateY("+ index * offsetHeight * -1 + "px)" },
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = ()=>{
        return resumeBullets.map((bullet, index)=>(
        <div
            onClick={()=>handleCarousal(index)}
            className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}
            >
                <img className='bullet-logo'
                
                src={require(`../../assets/logo.svg/${bullet.logoSrc}`)}
                alt="oops,,, no internet connection"
                />
            </div>
        ))
    }

    const getResumeScreen = ()=>{
        return(
            <div
            style={carousalOffSetStyle.style}
            className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
                <div className='resume-card'>
                    <div classname='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>  
                    </div>
                    <div classname='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    )
}
