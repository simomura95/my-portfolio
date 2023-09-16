import NavItem from "./NavItem"
import DarkModeToggle from './DarkModeToggle';

function Navbar() {
        return (
            <nav className="navbar fixed-top navbar-expand-sm" data-bs-theme="dark" aria-label="Navbar">
                <div className="container-fluid">
                    <span className="navbar-brand ms-sm-2">Simone Muraro</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav ms-auto me-sm-2 mb-2 mb-sm-0">
                            <NavItem link="/" text="Home" />
                            <NavItem link="/portfolio" text="Portfolio" />
                            <NavItem link="/resume" text="Resume" />
                        </ul>
                        <DarkModeToggle/>
                    </div>
                </div>
            </nav>
        )
}

export default Navbar