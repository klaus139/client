import React from 'react';
import ScrollService from '../../../Utilities/ScrollService';
import "./Profile.css";

import Typical from 'react-typical';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parents'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://web.facebook.com/nicholas.igunbor'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://web.google.com'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='https://www.instagram.com/nick_k1aus/?hl=en'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.youtube.com/channel/UC3xggYQLlmnDyrKiuLjw-lw'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='https://www.twitter.com/Nick_k1aus'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        <a href='https://www.github.com/klaus139'>
                            <i className='fa fa-github'></i>
                        </a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {' '}
                        Hello, I'M <span className='highlighted-text'>Nicholas</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                    {" "}
                    <h1>
                    {" "}
                    <Typical
                    loops={Infinity}
                    steps={[
                        "Ethusiastic Developer🛑",
                        2000,
                        "Full Stack Developer 💻",
                        2000,
                        "Node.js Developer 🕹",
                        2000,
                        "React.js / React Native Developer📲",
                        2000,
                        "Javascript Developer 🖱",
                        2000,
                    ]}
                    />
                    </h1>
                    <span className='profile-role-tagline'>
                        Knack for building scalable and efficient web applications
                    </span>
                    </span> 
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >Hire Me
                    </button>
                    <a href='NICHOLAS.pdf' download='Nicholas igunbor.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>

        </div>  
      
    </div>
  )
}