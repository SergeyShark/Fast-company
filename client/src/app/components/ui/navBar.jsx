import React from "react";
import { Link } from "react-router-dom";
import NavProfile from "./navProfile";
import { useSelector } from "react-redux";
import { getisLoggedIn } from "../../store/users";

const NavBar = () => {
    const isLoggedIn = useSelector(getisLoggedIn());
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light mb-3">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item me-4">
                            <Link className="nav-link text-dark" to="/">
                                Main
                            </Link>
                        </li>
                        {isLoggedIn && (
                            <li className="nav-item me-4">
                                <Link
                                    className="nav-link text-dark"
                                    to="/users"
                                >
                                    Users
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div className="d-flex">
                        {isLoggedIn ? (
                            <NavProfile />
                        ) : (
                            <Link className="nav-link text-dark" to="/login">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
