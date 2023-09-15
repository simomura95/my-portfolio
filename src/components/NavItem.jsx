import { Link, useLocation } from 'react-router-dom';

function NavItem(props) {
    const location = useLocation();

    function collapseNavbar() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('show');
        }
    }

    return (
        <li className="nav-item">
            <Link className={` nav-link ${location.pathname === props.link && 'active'}`} to={props.link} onClick={collapseNavbar}>{props.text}</Link>
        </li>
    )
}

export default NavItem