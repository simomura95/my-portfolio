import { useTheme } from "../contexts/themeContext"
import { useState } from "react"
// import allProjects from "../files/portfolioProjects"
import PortfolioCard from "../components/PortfolioCard"

function PortfolioSection (props) {
    const {isDark} = useTheme()
    const [show, setShow] = useState(false)

    function createCard(project, index) {
        return (
            <PortfolioCard
                key={index}
                img={project.img}
                text={project.text}
                github={project.github}
                website={project.website}
            />
        )
    }

    function toggleSection() {
        setShow(!show)
    }

    return(
            <div className={`px-3 pt-3 mb-2 border border-secondary rounded-5 ${isDark ? "dark-mode" : "light-mode"}`}>
                <div className="hand-pointer mb-2" onClick={toggleSection}>
                    <h3 className="me-3 mb-0 ">{props.title}</h3>
                    <span className={`${isDark ? "light-dark-color" : "dark-light-color"}`}>Click to {show ? "collapse" : "expand"}</span>
                </div>
                <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 ${show ? "slide-down" : "slide-up"}`}>
                    {props.projects.map(createCard)}
                </div>
            </div>
    )
}

export default PortfolioSection