import { useTheme } from "../contexts/themeContext"

function PortfolioCard(props) {
    const {isDark} = useTheme()
    
    return(
        <div className="col d-flex align-items-stretch">
            <div className="card shadow-sm border-secondary">
                { props.img && <img src={props.img} className="card-img-top object-fit-fill" width="100%" height="225" aria-label="Website preview" />}
                <div className={`card-body d-flex flex-column ${props.img ? "rounded-bottom" : "rounded"} ${isDark ? "dark-mode" : "light-mode"}`}>
                    <p className="card-text">
                        {props.text}
                    </p>
                    <div className="d-flex flex-row gap-2 mt-auto">
                        <a href={props.github} className="btn btn-sm btn-outline-secondary">Check repository</a>
                        {props.website && <a href={props.website} className="btn btn-sm btn-outline-secondary">Check website</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard