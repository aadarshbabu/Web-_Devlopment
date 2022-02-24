import React, { useEffect, useState } from 'react';
import "../css/Header.css"
function Header(props) {
    const [user, setUser] = useState(null);
    const getuserData = () => {
        if (props.value) {
            const { name, email } = props.value;
            return {
                name, email
            }
        }
        return null;
    }
    useEffect(() => {
        setUser(getuserData());
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Expence Manager</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" aria-disabled="true">Dashboard</a>
                            </li>
                        </ul>
                        {!user ? (
                            <form className="d-flex">
                                <a href="/login" id="login" className="btn btn-outline-success" > Login </a>
                                <a href="/register" className="btn btn-outline-success" > Regiser </a>
                            </form>)
                            :
                            (<form className="d-flex">
                                <h5> Welcome <span className="me-3"> {user.name} </span> </h5>
                                <a href="/logout" id="login" className="btn btn-outline-danger" > Log Out </a>
                            </form>)
                        }

                    </div>
                </div>
            </nav>
        </>
    );

}

export default Header
