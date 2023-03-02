import Image from '../../../media/logo/Logo - sign.png';
import { SearchBar } from '../atoms/';
import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-fluid container">
                    <Link to="/" style={{ display: "flex", alignItems: 'center' }} class="navbar-brand">
                        <img src={Image} alt="Logo" width="30" height="24" class="d-inline-block align-text-top me-2" />
                        MyPet
                    </Link>
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                    <SearchBar />

                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                            </svg>
                        </button>
                        <button type="button" class="btn dropdown-toggle btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                        </button>

                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><Link to="challenge/login" class="dropdown-item">Login</Link></li>
                            <li><hr class="dropdown-divider"></hr></li>
                            <li><Link to="challenge/signup" class="dropdown-item">Create account</Link></li>
                        </ul>
                    </div>

                </div>
            </nav>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid container">
                    <Link to="/home" style={{ textTransform: "uppercase" }} > Home </Link>
                    <Link to="/how_it_wroks" style={{ textTransform: "uppercase" }} > How it works </Link>
                    <Link to="/features" style={{ textTransform: "uppercase" }} > Features </Link>
                    <Link to="/pricing" style={{ textTransform: "uppercase" }} > pricing </Link>
                    <Link to="/press" style={{ textTransform: "uppercase" }} > press </Link>
                    <Link to="/testimonials" style={{ textTransform: "uppercase" }} > Testimonials </Link>
                </div >

            </nav >

        </>

    )
}


function HeaderSecondary() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-fluid container">
                    <Link to="/" style={{ display: "flex", alignItems: 'center' }} class="navbar-brand">
                        <img src={Image} alt="Logo" width="30" height="24" class="d-inline-block align-text-top me-2" />
                        MyPet
                    </Link>
                </div>
            </nav>

        </>

    )
}


export { HeaderSecondary, Header };

