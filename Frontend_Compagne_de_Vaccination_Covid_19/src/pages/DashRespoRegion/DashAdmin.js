import { Link } from "react-router-dom";
import HeaderDash from "../../components/layouts/HeaderDash";
import SideBar from "../../components/layouts/SideBar";


const DashAdmin = () => {

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
                            {/* <div class="row mb-4">
                                <div class="col-lg-12">
                                    <div class="notification success">
                                        <p class="m-0">Your listing Nelson Center Restro has been approved!</p>
                                        <a class="notification-close" href="#"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div> */}

                            {/* <!-- statistique --> */}
                            <div class="row">

                                <div class="col-lg-4 col-md-12 col-xs-12">
                                    <div class="dashboard-stat mb-4">
                                        <div class="dashboard-stat-content">
                                            <h4>6</h4>
                                            <span>Active Patients</span>
                                        </div>
                                        <div class="dashboard-stat-icon"><i class="im im-icon-Map2"></i></div>
                                        <div class="dashboard-stat-item">
                                            <p>Someone bookmarked your listing!</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-xs-12">
                                    <div class="dashboard-stat mb-4">
                                        <div class="dashboard-stat-content">
                                            <h4>726</h4>
                                            <span>Total Appointments</span>
                                        </div>
                                        <div class="dashboard-stat-icon"><i class="im im-icon-Line-Chart"></i></div>
                                        <div class="dashboard-stat-item">
                                            <p>Someone bookmarked your listing!</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-xs-12">
                                    <div class="dashboard-stat mb-4">
                                        <div class="dashboard-stat-content">
                                            <h4>95</h4>
                                            <span>Total Reviews</span>
                                        </div>
                                        <div class="dashboard-stat-icon"><i class="im im-icon-Add-UserStar"></i></div>
                                        <div class="dashboard-stat-item">
                                            <p>Someone bookmarked your listing!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="row mb-4">
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
                                                        <th>Address</th>
                                                        <th>Client</th>
                                                        <th>Visits</th>
                                                        <th>Budget</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><span class="">NY</span></td>
                                                        <td>Beavis</td>
                                                        <td>
                                                            <span class="txt-success"><i class="fa fa-angle-up"
                                                                    aria-hidden="true"></i><span>2.43%</span></span>
                                                        </td>
                                                        <td>
                                                            <span class="">$1478</span>
                                                        </td>
                                                        <td>
                                                            <span class="label text-success">Active</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span class="">Oklahoma</span></td>
                                                        <td>Felix</td>
                                                        <td>
                                                            <span class="txt-success"><i class="fa fa-angle-up"
                                                                    aria-hidden="true"></i><span>1.43%</span></span>
                                                        </td>
                                                        <td>
                                                            <span class="">$951</span>
                                                        </td>
                                                        <td>
                                                            <span class="label text-danger">Closed</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span class="">California</span></td>
                                                        <td>Cannibus</td>
                                                        <td>
                                                            <span class="txt-success"><i class="fa fa-angle-up"
                                                                    aria-hidden="true"></i><span>8.43%</span></span>
                                                        </td>
                                                        <td>
                                                            <span class="">$632</span>
                                                        </td>
                                                        <td>
                                                            <span class="label text-primary">Hold</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span class="">Florida</span></td>
                                                        <td>Neosoft</td>
                                                        <td>
                                                            <span class="txt-success"><i class="fa fa-angle-up"
                                                                    aria-hidden="true"></i><span>7.43%</span></span>
                                                        </td>
                                                        <td>
                                                            <span class="">$325</span>
                                                        </td>
                                                        <td>
                                                            <span class="label text-primary">Hold</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span class="">DC</span></td>
                                                        <td>Hencework</td>
                                                        <td>
                                                            <span class="txt-success"><i class="fa fa-angle-up"
                                                                    aria-hidden="true"></i><span>9.43%</span></span>
                                                        </td>
                                                        <td>
                                                            <span>$258</span>
                                                        </td>
                                                        <td>
                                                            <span class="label text-success">Active</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
    );
}

export default DashAdmin;