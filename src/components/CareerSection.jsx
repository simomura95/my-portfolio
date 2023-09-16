import { useTheme } from "../contexts/themeContext"

function CareerSection(props) {
    const {isDark} = useTheme()

    function CreateParagraph(paragraph, index) {
        return <p key={index}>{paragraph}</p>
    }

    function createEntry(entry, index) {
        console.log(index)
        return (
            <div key={index}>
                <div className={`lead fw-bold mb-3 ${isDark ? "light-dark-color" : "dark-light-color"}`}>
                    {entry.subtitle && <p className="mb-0">{entry.subtitle}</p>}
                    {entry.location && <p className="mb-0">{entry.location}</p>}
                </div>
                {entry.text.map(CreateParagraph)}
                {index < props.data.length-1 && <hr className={`my-4 ${isDark ? "light-dark-color" : "dark-light-color"}`}/>}
            </div>
        )
    }
    
    return (
        <div key={props.index} className="my-5">
            <div className={`text-lg-start text-center p-4 rounded-5 ${isDark ? "dark-mode" : "light-mode"}`}>
                {props.title && <h2 className="display-6 fw-bold mb-3z">{props.title}</h2> }
                {/* {console.log(props.data)} */}
                {props.data.map(createEntry)}
            </div>
        </div>
    )
}

export default CareerSection