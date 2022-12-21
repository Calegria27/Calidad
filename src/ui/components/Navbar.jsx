import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Independencia
            </Link>


            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <button className="navbar-nav ml-auto">
                    <span 
                        className="nav-item nav-link" 
                        
                    >
                        Logout
                    </span>
                </button>
            </div>
        </nav>
    )
}