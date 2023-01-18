import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Auth/context/Authcontext';
import Button from 'react-bootstrap/Button';


export const Navbar = () => {

    const { logout } = useContext(Authcontext);
    const navigate = useNavigate();
    const onLogout = () => {
        logout();
        navigate('/',);
    }


    const { user } = useContext(Authcontext);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">

            <img src="https://www.cindependencia.cl/wp-content//themes/independencia/assets/img/logo-new-independencia.png" width="270" height="60" />
            <div className="button-navbar">
                <Button variant="danger" onClick={onLogout}>
                    Logout
                </Button>
            </div>


        </nav>
    )
}