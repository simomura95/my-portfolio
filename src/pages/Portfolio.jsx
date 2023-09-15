import projects from "../files/portfolioProjects"
import PortfolioCard from "../components/PortfolioCard"

function Portfolio() {
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

    return(
        <>
        <div className="py-5 text-center container">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">My portfolio</h1>
                <p className="lead">
                    Besides this fully responsive website, I have developed several projects to solidify and apply my knowledge.
                    Here I present a concise overview of each project, along with a direct link to its corresponding repository on <a href="https://github.com/simomura95">my GitHub account</a>.
                </p>
                <p className="lead">
                    Feel free to explore and delve into each project to gain a deeper understanding of my capabilities as a developer.
                </p>
            </div>
        </div>

        <div className="album py-5">
            <div className="container">
            <h2 className="text-center pb-3">Python projects</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {projects.pythonProjects.map(createCard)}
                </div>
            </div>

            <div className="container">
            <h2 className="text-center pb-3">JavaScript & React projects</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {projects.jsProjects.map(createCard)}
                </div>
            </div>
        </div>
        </>
    )
}

export default Portfolio