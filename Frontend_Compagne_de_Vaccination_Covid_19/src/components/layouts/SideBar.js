import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import jwt_decode from "jwt-decode";

const SideBar = () => {

    const token = localStorage.getItem('auth_token');
    var decoded = jwt_decode(token);
    
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


  let authbnts = ''
    if(decoded.role === "admin"){
        authbnts= (
            <>
                <li class="active">
                                            <Link to="/dashregion"><i class="sl sl-icon-settings"></i> Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to="/resporegion"><i class="sl sl-icon-user"></i>
                                                Responsable region</Link>
                                        </li>
                                        <li>
                                            <Link to="/region"><i class="sl sl-icon-user"></i>
                                            Region</Link>
                                        </li>
            </>
            )
    }else if(decoded.role === "respo_region"){
        authbnts= (
        <>
        <li>
                                            <Link to="/conter"><i class="sl sl-icon-layers"></i> Center</Link>
                                        </li>
                                        <li>
                                            <Link to="/ville"><i class="sl sl-icon-layers"></i> Ville</Link>
                                        </li>
        </>
        )
    }

    return (


        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="dashboard-sidebar">
                            <div class="profile-sec">
                                <div class="author-news mb-3">
                                    <div class="author-news-content text-center p-3">
                                        <div class="author-thumb mt-0">
                                            <img src="assets/images/team/user-1.jpg" alt="author" />
                                        </div>
                                        <div class="author-content pt-2 p-0">
                                            <h3 class="mb-1 white"><a href="#" class="white">{JSON.parse(localStorage.getItem('datau_user')).nom+" "+JSON.parse(localStorage.getItem('datau_user')).prenom}</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="#" class="dashboard-responsive-nav-trigger"><i class="fa fa-reorder"></i> Dashboard
                                Navigation</a>
                            <div class="dashboard-nav">
                                <div class="dashboard-nav-inner">
                                    <ul>
                                    
                                    {authbnts}
                                        
                                        <li>
                                            <a href="#" onClick={handleLogout}><i class="sl sl-icon-power"></i> Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


    );
}

export default SideBar;


