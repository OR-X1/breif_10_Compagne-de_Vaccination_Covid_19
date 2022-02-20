import { Link } from "react-router-dom";

const SectionFooter = () => {

    return (


        <section class="call-to p-5 bg-green">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-12">
                    <div class="call-contact d-flex align-items-center">
                        <i class="fas fa-phone-alt display-6 cl-white"></i>
                        <div class="pl-3">
                            <h4 class="cl-white">Looking For Consultation?</h4>
                            <p class="m-0 cl-white">(+212) 612 345 678</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <p class="call-to-mid cl-white">Contact us for all questions and thinks those. We will proud to you
                    </p>
                </div>
                <div class="col-lg-4 col-md-12 text-center">
                    <Link to="/vaccination" class="btn btn-white">Get Started</Link>
                </div>
            </div>
        </div>
    </section>


    );
}

export default SectionFooter;


