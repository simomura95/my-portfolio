import { Link } from "react-router-dom"

function SocialButton(props) {
    return (
        <Link to={props.link} target="_blank" rel="noopener noreferrer" className={`btn ${props.theme}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d={props.imgPath} />
            </svg>
        </Link>
    )
}

export default SocialButton