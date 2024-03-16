import React from 'react';
import SocialButton from '../components/SocialButton'
import socialButtonData from '../files/socialButtonData' ;
import { Link } from 'react-router-dom';
import CV from '../files/CV_Simone_Muraro_ENG.pdf'
import { useTheme } from '../contexts/themeContext';

function Home() {
    const {isDark} = useTheme()
    const buttonTheme = isDark ? "light-dark-bg" : "dark-light-bg"

    function createSocialButton(button, index) {
        return (
            <SocialButton
                key={index}
                link={button.link}
                imgPath={button.imgPath}
                theme={buttonTheme}
            />
        )
    }

    function downloadCV() {
        const link = document.createElement('a');
        link.href = CV;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.download = 'CV.pdf';
        link.click();
    }

    return (
        <div className="d-flex flex-column container-fluid px-4 py-5 justify-content-center home-bg">
            {/* First section */}
            <div className="row flex-lg-row align-items-center g-5 justify-content-center">
                {/* Profile pic */}
                <div className="col-lg-4 col-6 d-flex justify-content-center">
                    <img src='/images/CV_photo.png' className="d-block mx-lg-auto img-fluid rounded-circle" alt="Profile" width="300" height="500" loading="lazy" />
                </div>
                {/* Text */}
                <div className="col-lg-6 text-lg-start text-center px-sm-5">
                    <h1 className="display-2 fw-bold mb-3 ">Simone Muraro</h1>
                    <p className="fs-2">Software developer</p>
                    {/* <p className="fs-5">
                        I am actively seeking openings for a junior position.<br />
                        Please don't hesitate to reach out if you have any inquiries or potential opportunities.
                    </p> */}
                </div>
            </div>

            {/* Social buttons */}
            <div className="d-flex flex-sm-row flex-column gap-sm-5 gap-3 justify-content-center align-items-center m-sm-5 mb-4 pe-lg-4">
                {socialButtonData.map(createSocialButton)}
            </div>

            {/* Second section */}
            <div className="row flex-lg-row align-items-center g-5 justify-content-center">
                {/* Text */}
                <div className="col-lg-8 text-lg-start text-center px-sm-5">
                    <h2 className={`display-5 fw-bold mb-3 ${isDark ? "light-dark-color" : "dark-light-color"}`}>About me</h2>
                    <p className="fs-5">
                        After graduation, I started my career as an application consultant at Engineering SPA.<br></br>
                        Two years later, my interest in more technical work led me to delve into programming.<br></br>
                        After several months of full-time learning, I secured my current job at Wintech SPA.
                    </p>
                    <p className="fs-5">
                        My main strength is my logical and analytical way of thinking.<br></br>
                        I'm a fast learner, adaptable to any situation and willing to put in the effort required to achieve my goals.
                    </p>
                    <p className="fs-5">
                        In my free time I like to play video games, watching anime and TV series and do volunteer work.
                    </p>
                </div>

                {/* Buttons */}
                <div className="col-lg-2 d-flex flex-lg-column justify-content-center gap-5">
                    <Link to={"/portfolio"} className={`btn px-lg-0 px-4 ${buttonTheme}`}>
                        My projects
                    </Link>
                    <button
                        onClick={downloadCV}
                        className={`btn px-lg-0 px-4 ${buttonTheme}`}
                        >
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;