import { useTheme } from "../contexts/themeContext"

function CareerSection(props) {
    const {isDark} = useTheme()

    function CreateParagraph(paragraph, index) {
        return <p key={index}>{paragraph}</p>
    }
    
    return (
        <div key={props.index} className="my-5">
            <div className={`text-lg-start text-center p-4 rounded-5 ${isDark ? "dark-mode" : "light-mode"}`}>
                { props.title && <h2 className="display-6 fw-bold mb-3">
                    {props.title}
                </h2> }
                { props.subtitle && <p className="lead fw-bold">
                    {props.subtitle}
                    <br /> 
                    {props.location}
                </p>}
                {props.text.map(CreateParagraph)}
            </div>
        </div>
    )
}

export default CareerSection