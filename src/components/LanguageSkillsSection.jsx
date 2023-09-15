import languageSkillsText from "../files/languageSkillsText"

function LanguageSkillsSection() {
    
    function createLanguageSkill(skill, index) {
        return (
            <>
                <dt className="col-sm-4 me-sm-4" key={index}>{skill.language}</dt>
                <dd className="col-sm-5" >{skill.level}</dd>
            </>
        )
    }

    return(
        <div>
                    <h2 className="display-6 fw-bold">Language proficiency</h2>
                    <dl className="row justify-content-md-start justify-content-center align-items-center">
                        {languageSkillsText.map(createLanguageSkill)}
                    </dl>
                </div>
    )
}

export default LanguageSkillsSection;