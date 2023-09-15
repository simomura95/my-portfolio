// import { useLocation } from 'react-router-dom';

function Footer() {
    // const location = useLocation();

    // if (location.pathname !== '/') { // nascondo il footer nella home
        return (
            <footer className="footer mt-auto py-3">
                <div className="container text-center">
                    © Simone Muraro. All rights reserved.
                </div>
            </footer>
        )
    // } else {
    //     return null
    // }
}

export default Footer