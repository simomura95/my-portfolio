import languageSkillsText from "../files/languageSkillsText"
import { useTheme } from "../contexts/themeContext";

function LanguageSkillsSection() {
    const {isDark} = useTheme()
    
    function createLanguageSkill(skill, index) {
        return (
            <div key={index} className="row justify-content-md-start justify-content-center align-items-center mb-3">
                <p className={`col-sm-4 me-sm-4 mb-0 ${isDark ? "light-dark-color" : "dark-light-color"}`} key={index}>{skill.language}</p>
                <p className="col-sm-5 mb-0" >{skill.level}</p>
            </div>
        )
    }

    return(
        <div>
            <h2 className="display-6 fw-bold">Language proficiency</h2>
                {languageSkillsText.map(createLanguageSkill)}
        </div>
    )
}

export default LanguageSkillsSection;