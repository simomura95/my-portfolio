import projects from "../files/portfolioProjects"
import PortfolioSection from "../components/PortfolioSection"
import { useTheme } from "../contexts/themeContext"

function Portfolio() {
    const {isDark} = useTheme()

    function createSection(category, index) {
        return(
            <PortfolioSection
                key={index}
                title={category[0]}
                projects={category[1]}
            />
        )
    }

    return(
        <div className="pt-5 container">
            <div className="col-lg-6 col-md-8 mx-auto text-center mb-5">
                <h1 className="display-4">My portfolio</h1>
                <p className="lead">
                    Besides this fully responsive website, I have developed several projects to solidify and apply my knowledge.
                    Here I present a concise overview of each project, along with a direct link to its corresponding repository on <a href="https://github.com/simomura95">my GitHub account</a>.
                </p>
                <p className="lead">
                    Feel free to explore and delve into each project to gain a deeper understanding of my capabilities as a developer.
                </p>
            </div>

            <div className="mb-5">
                <h2 className={`text-center pb-3 display-6 ${isDark ? "light-dark-color" : "dark-light-color"}`}>Python projects</h2>
                {Object.entries(projects.pythonProjects).map(createSection)}
            </div>

            <div className="mb-5">
                <h2 className={`text-center pb-3 display-6 ${isDark ? "light-dark-color" : "dark-light-color"}`}>JavaScript projects</h2>
                {Object.entries(projects.jsProjects).map(createSection)}
            </div>
        </div>
    )
}

export default Portfolio