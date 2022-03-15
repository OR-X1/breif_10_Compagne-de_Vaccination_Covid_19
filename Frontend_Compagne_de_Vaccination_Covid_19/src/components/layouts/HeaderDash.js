import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HeaderDash = () => {

    let navigate= useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem('auth_token')
      localStorage.removeItem('datau_user')
      navigate('/')
    // axios.get('http://localhost:3000/api/logout')
    // .then(response => {
    //   localStorage.removeItem('auth_token')
    //   localStorage.removeItem('datau_user')
    //   navigate('/dashboard/manager')
    // }).catch(error =>{
    //   console.log("error logout");
    // })
  }

    return (


        <header class="main_header_area">

        <div class="header_menu">
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-flex d-flex align-items-center justify-content-between w-100">

                        <div class="navbar-header">
                            <a class="navbar-brand text-center" href="index.html">
                                <img src="images/logo.png" alt="image" />
                            </a>
                        </div>

                        
                        <div class="register-login">
                            <div class="dropdown">
                                <button class="btn-dash dropdown-toggle" type="button" id="dropdownMenuButton11"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-user-circle"></i> {JSON.parse(localStorage.getItem('datau_user')).email}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton11">
                                    <p class="dropdown-item" onClick={handleLogout}><i class="sl sl-icon-power"></i> Logout</p>
                                </div>
                            </div>
                        </div>

                        <div id="slicknav-mobile"></div>
                    </div>
                </div>

            </nav>
        </div>

    </header>


    );
}

export default HeaderDash;


