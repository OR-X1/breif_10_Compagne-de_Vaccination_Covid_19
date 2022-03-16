import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeaderDash from "../../components/layouts/HeaderDash";
import SideBar from "../../components/layouts/SideBar";

const Ville = () => {

    const [data, setDatas] = useState([]);
    const [dataRegion, setDatasRegion] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");



    useEffect( () => {
        setTimeout(() => {
        // fetch(`${process.env.REACT_APP_API_URL}manager/getAllmanagers`)
        fetch('http://localhost:3000/api/ville/allCities')
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


    useEffect( () => {
        setTimeout(() => {
        // fetch(`${process.env.REACT_APP_API_URL}manager/getAllmanagers`)
        fetch('http://localhost:3000/api/region/allRegions')
        .then(async response =>{
            
            const varr = await response.json()
            
            setDatasRegion(varr.result);
            setIsLoading(false);
            console.log(varr);
        }).catch(err=>{
            setIsLoading(false);
            console.log('faild to fetch');
        })

        }, 1000);
    },[]);


    const [ville, setVille] = useState([]);
    const [region, setRegion] = useState([]);

    const [isloadingsubmit, setIsLoadingsubmit] = useState(false);




    const handleSubmit = e => {
        e.preventDefault();
        setIsLoadingsubmit(true);

        const form_data = {
            ville: ville,
            idregion: region,
          }

        console.log(form_data);
        setTimeout(() => {
        axios.post('http://localhost:3000/api/ville/createCitie',form_data
            ).then(response => {
                
                if(response.data.result){
                    console.log('good')
                        setIsLoadingsubmit(false);
                        window.location.reload()
                        console.log(response.data.msg);
                }else{
                    console.log(response.data.msg);
                    setIsLoadingsubmit(false);
                    setError(response.data.msg)
                }
                        
            }).catch(error =>{
                
                console.log("error"+error);
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
                                                        <th>ville</th>
                                                        <th>region</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {data.map((ithem) => (
                                                    <tr key={ithem._id}>
                                                        <td>{ithem.ville}</td>
                                                        <td>
                                                            <span class="txt-success"><span>{ithem.region_id}</span></span>
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
        <form onSubmit={handleSubmit}>
      <div class="modal-body">

          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">ville:</label>
            <input type="text" value={ville}  onChange={e => setVille(e.target.value)} class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Region:</label>
            <select value={region}  onChange={e => setRegion(e.target.value)} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {dataRegion.map((ithem) => (
                <option key={ithem._id} value={ithem._id} >{ithem.region}</option> 
                ))
                } 
            </select>
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit"  disabled={isloadingsubmit} class="btn btn-primary">{isloadingsubmit ? 'loading...' : 'Save Data'}</button>
      </div>
        </form>
    </div>
  </div>
</div>
</div>
    );
}

export default Ville;