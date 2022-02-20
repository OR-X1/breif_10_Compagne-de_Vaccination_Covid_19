import { Link } from "react-router-dom";

const Header = () => {

    return (

        
        <header class="main_header_area position-relative ">

        <div class="header_menu">
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-flex d-flex align-items-center justify-content-between w-100">

                        <div class="navbar-header">
                            <Link to="/" class="navbar-brand text-center" >
                                <img src="/assets/images/logo.png" alt="image" />
                            </Link>
                        </div>

                        <div class="navbar-collapse1" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav" id="responsive-menu">
                                <li>
                                    <Link to="/" >Home</Link>
                                </li>
                                <li>
                                    <Link to="/contact" >Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="header-btn">
                            <Link to="/vaccination" class="btn">Get Started</Link>
                        </div>

                        <div id="slicknav-mobile"></div>
                    </div>
                </div>

            </nav>
        </div>

    </header>

    );
}

export default Header;


