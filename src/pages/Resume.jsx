import ResumeSection from "../components/ResumeSection"
import resumeText from "../files/resumeText"
import ITSkillsSection from "../components/ITSkillsSection"
import SoftSkillsSection from "../components/SoftSkillsSection"
import LanguageSkillsSection from "../components/LanguageSkillsSection"
import { useTheme } from "../contexts/themeContext"

function About() {
    const {isDark} = useTheme()

    function createSection(section, index) {
        return (
            <ResumeSection
                key={index}
                title={section.title}
                data={section.data}
            />
            )
    }

    return (
    <div className="container px-4 pt-5">
        {/* <!-- Section skills --> */}
        <div className={`d-flex flex-md-row flex-column justify-content-between p-4 rounded-5 ${isDark ? "dark-mode" : "light-mode"}`}>

            {/* <!-- IT skills --> */}
            <ITSkillsSection />

            {/* <!-- Soft and language skills --> */}
            <div className="d-flex flex-column justify-content-between col-md-5 mb-3 ps-md-5 text-md-start text-center">
                <SoftSkillsSection />                
                <LanguageSkillsSection />
            </div>
        </div>

        {resumeText.map(createSection)}
    </div>
    )
}

export default About