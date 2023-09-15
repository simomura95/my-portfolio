import { Link, useLocation } from 'react-router-dom';

function NavItem(props) {
    const location = useLocation();

    return (
        <li className="nav-item">
            <Link className={` nav-link ${location.pathname === props.link && 'active'}`} to={props.link}>{props.text}</Link>
        </li>
    )
}

export default NavItem