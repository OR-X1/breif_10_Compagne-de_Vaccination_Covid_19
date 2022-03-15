import HorizontalLinearStepper from "../components/elements/HorizontalLinearStepper";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const Vaccination = () => {

    return ( 
        <>
            <Header></Header>
        <div className="container my-5">
            <HorizontalLinearStepper></HorizontalLinearStepper>
        </div>
            <Footer></Footer>
        
        </>
     );
}

export default Vaccination;