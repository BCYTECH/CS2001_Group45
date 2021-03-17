import {NavLink} from "react-router-dom";

function Homepage() {
    return (
        <div className="container h-100">
            <div className="donate-content">
               <h1 className="donate-title">DonationGram</h1>
               <h3 className="donate-price">Provide a helping hand!</h3>
               <div className="donate-btn-wrap">
                  <NavLink to="/">Read more</NavLink>
               </div>
            </div>
         </div>

    );
  }

  export default Homepage;