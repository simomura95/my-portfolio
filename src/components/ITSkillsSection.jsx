import ITSkillsText from "../files/ITSkillsText"
import { useTheme } from "../contexts/themeContext";

function ITSkillsSection() {
    const {isDark} = useTheme()
    
    function createITSkill(skill, index) {
        return (
            <div key={index}>
                <div className="lead fw-bold">{skill.name}</div>
                <div className={`progress mb-2 ${isDark ? "dark-light-bg" : "light-dark-bg"}`} role="progressbar" aria-label={skill.name} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
                    <div className={`progress-bar ${isDark ? "light-dark-bg" : "dark-light-bg"}`} style={{width: `${skill.level}%`}}></div>
                </div>
                {skill.text && <p>{skill.text}</p>}
            </div>
        )
    }

    return(
        <div className="col-md-6 mb-3 pe-md-5 text-md-start text-center">
                <h2 className="display-6 fw-bold mb-3">IT skills</h2>
                <div className="d-flex flex-column">
                    {ITSkillsText.map(createITSkill)}
                    <p className="fw-bold">Basic knowledge of Git and GitHub</p>
                    <p className="fw-bold">Academic knowledge of MATLAB, R and Java</p>
                </div>
            </div>
    )

}

export default ITSkillsSection;