import { useTheme } from "../contexts/themeContext"

function PortfolioCard(props) {
    const {isDark} = useTheme()
    
    return(
        <div className="col d-flex align-items-stretch mb-3">
            <div className="card shadow-sm border-secondary">
                { props.img && <img src={props.img} className="card-img-top object-fit-fill" width="100%" height="225" aria-label="Website preview" />}
                <div className={`card-body d-flex flex-column ${props.img ? "rounded-bottom" : "rounded"} ${isDark ? "dark-light-bg" : "light-dark-bg"}`}>
                    <p className="card-text">
                        {props.text}
                    </p>
                    <div className="d-flex flex-row gap-2 mt-auto">
                        <a href={props.github} className="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener noreferrer">Check repository</a>
                        {props.website && <a href={props.website} className="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener noreferrer">Check website</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard