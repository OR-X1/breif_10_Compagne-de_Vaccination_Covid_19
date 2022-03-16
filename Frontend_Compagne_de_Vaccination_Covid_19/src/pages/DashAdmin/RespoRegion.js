import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeaderDash from "../../components/layouts/HeaderDash";
import SideBar from "../../components/layouts/SideBar";

const RespoRegion = () => {

    const [data, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect( () => {
        setTimeout(() => {
        // fetch(`${process.env.REACT_APP_API_URL}manager/getAllmanagers`)
        fetch('http://localhost:3000/api/resporegion/allRespos')
        .then(async response =>{
            
            const varr = await response.json()
            
            setDatas(varr.result);
            setIsLoading(false);
            console.log(varr);
        }).catch(err=>{
            setIsLoading(false);
            console.log('faild to fetch');
        })

        }, 1000);
    },[]);


    const [name_manager, setName_manager] = useState([]);
    const [lastname_manager, setLastname_manager] = useState([]);
    const [email_manager, setEmail_manager] = useState([]);
    const [password_manager, setPassword_manager] = useState([]);
    const [passwordconfirm, setPasswordconfirm] = useState([]);

    const [isloadingsubmit, setIsLoadingsubmit] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();
        setIsLoadingsubmit(true);

        // const fd = new FormData();
        // fd.append('name_manager',name_manager)
        // fd.append('lastname_manager',lastname_manager)
        // fd.append('email_manager',email_manager)
        // fd.append('password_manager',password_manager)
        // fd.append('passwordconfirm',passwordconfirm)

        const form_data = {
            name_manager: name_manager,
            lastname_manager: lastname_manager,
            email_manager: email_manager,
            password_manager: password_manager,
            passwordconfirm: passwordconfirm,
          }
        
        console.log(form_data);
        setTimeout(() => {
        axios.post('http://localhost:3000/api/resporegion/allRespos',form_data
            ).then(response => {
                
                if(response.data.result){
                    console.log('good')
                        setIsLoadingsubmit(false);
                        window.location.reload()
                        console.log(response.data.msg);
                }else{
                    console.log(response.data.msg);
                    setIsLoadingsubmit(false);
                    //setError(response.data.msg)
                }
                
            }).catch(error =>{
                
                
                console.log("error"+error);
                // setIsLoadingsubmit(false);
                // if(error.response.data.errors){
                //     setErrorphoto(error.response.data.errors.photo)
                //     setErrorname(error.response.data.errors.name_en)
                //     setErrorcategory(error.response.data.errors.category)
                //     setErrorprice(error.response.data.errors.price)
                //     setErrorcurrency(error.response.data.errors.currency)
                //     setErrordescription(error.response.data.errors.description_en)
                //     setErroruser(error.response.data.errors.user_id)
                //     setErroringredients(error.response.data.errors.ingredients_en)
                   
                // }else{
                //     setErrorgenerale('something went wrong')
                // }
            }
            )
        }, 1000);

    }



    return (
<div className="flex h-full">
    

    <HeaderDash></HeaderDash>
<div id="dashboard" class="">
        <div class="container">
            <div class="dashboard-main">
                <div class="row">
                    
                    <SideBar></SideBar>
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="dashboard-content">
                            <div class="row mb-4">
                                <div class="col-lg-12">
                                <div className="d-flex justify-content-end">
                                    <a href="#" class="btn btn-na "  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add new conter</a>
                                </div>




                                </div>
                            </div>

                            <div class="row mb-4">
                                <div class="col-lg-12 col-md-12 col-xs-12">
                                    <div class="dashboard-list-box with-icons">
                                        <div class="dashboard-title">
                                            <h4 class="mb-0">Address Campaigns</h4>
                                            <p class="mb-0">Our client locations</p>
                                        </div>
                                        <div class="table-responsive table-desi">
                                            <table class="basic-table table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>nom</th>
                                                        <th>prenom</th>
                                                        <th>cin</th>
                                                        <th>tele</th>
                                                        <th>email</th>
                                                        <th>ville</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {data.map((ithem) => (
                                                    <tr key={ithem._id}>
                                                        <td>{ithem.nom}</td>
                                                        <td>
                                                            <span class="txt-success"><span>{ithem.prenom}</span></span>
                                                        </td>
                                                        <td>
                                                            <span class="txt-success"><span>{ithem.cin}</span></span>
                                                        </td>
                                                        <td>
                                                            <span class="txt-success"><span>{ithem.tele}</span></span>
                                                        </td>
                                                        <td>
                                                            <span class="txt-success"><span>{ithem.email}</span></span>
                                                        </td>
                                                    </tr>
                                                    )) 
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit"  disabled={isloadingsubmit} class="btn btn-primary">{isloadingsubmit ? 'loading...' : 'Save Data'}</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
}

export default RespoRegion;