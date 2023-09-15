import softSkillsText from "../files/softSkillsText"

function SoftSkillsSection() {
    
    function createSoftSkill(skill, index) {
        return (
            <li className="mb-2" key={index}>✓ {skill.text}</li>
        )
    }

    return(
        <div>
            <h2 className="display-6 fw-bold mb-2">Soft skills</h2>
            <ul className="list-unstyled">
                {softSkillsText.map(createSoftSkill)}
            </ul>
        </div>
    )

}

export default SoftSkillsSection;