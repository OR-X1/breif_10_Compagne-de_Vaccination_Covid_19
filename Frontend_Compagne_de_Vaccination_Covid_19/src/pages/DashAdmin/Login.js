import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { isExpired, decodeToken } from "react-jwt";

// import './Login.css';
const Login = () => {
    let navigate= useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [errormail, setErrormail] = useState('');
    const [error, setError] = useState('');
    const [errorpass, setErrorpass] = useState('');

    // const history = useHistory()
    const [isloadingsubmit, setIsLoadingsubmit] = useState(false);
            const handleSubmit = e => {
                e.preventDefault();
                // setIsLoadingsubmit(true);
                // axios.defaults.withCredentials = true;
                // axios.get('http://localhost:8000/sanctum/csrf-cookie')
                // .then(response => {
                    axios.post('http://localhost:3000/api/admin_natinal/login', {
                        email: email,
                        password: password,
                    }).then(response => {
                            if(response.data.token){
                                // setErrormail('')
                            // setErrorpass('')
                            setError('')
                            localStorage.setItem('auth_token',response.data.token)
                            localStorage.setItem('datau_user',JSON.stringify(response.data.data_login_respo))

                            const data_login_respo = {
                                email: response.data.data_login_respo.email,
                                prenom: response.data.data_login_respo.prenom,
                                nom: response.data.data_login_respo.nom,
                                id: response.data.data_login_respo._id
                            }
                            console.log(data_login_respo);
                            localStorage.setItem('datau_user',JSON.stringify(data_login_respo))

                            console.log("token : ");
                            console.log(JSON.parse(localStorage.getItem('datau_user')).email);
                            console.log(response.data.data_login_respo);
                            // localStorage.setItem('auth_user',response.data.user)
                            // localStorage.setItem('auth_user', JSON.stringify(response.data.user))
                            setIsLoadingsubmit(false);
                            console.log("good");
                            navigate('/dashregion')
                            }else{
                                setIsLoadingsubmit(false);
                                setError(response.data.err)
                                console.log(response.data.err);
                                // console.log("error");
                            }

                    }).catch(error =>{
                        setIsLoadingsubmit(false);
                        // console.log(error);
                        console.log("error");
                    }
                    )
                // });
            }

    return (

        <section className="v-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
          alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          {error && <p className="bg-danger px-5 py-2 mb-2 text-light rounded">{error}</p> }

          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" value={email}  onChange={e => setEmail(e.target.value)} className="form-control form-control-lg"
              placeholder="Enter a valid email address"  />
            <label className="form-label" for="form3Example3">Email address</label>
          </div>

          <div className="form-outline mb-3">
            <input type="password" value={password}  onChange={e => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label"  for="form3Example4">Password</label>
          </div>


          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg"
              >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>





        
    );
}
 
export default Login;