import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Auth/context/Authcontext';


export const Navbar = () => {

    const {logout}=useContext(Authcontext);
    const navigate=useNavigate();
    const onLogout=()=>{
        logout();
        navigate('/',);
    }   


    const {user}=useContext(Authcontext);
    console.log(user)

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/login"
            >
                Independencia
            </Link>


            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <button className="navbar-nav ml-auto"
                onClick={onLogout}>
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