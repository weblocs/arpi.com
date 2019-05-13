import React from "react";
import { Link } from "gatsby";
const Hamburger = props => {

  return (
    <React.Fragment>
    
    <Link to='/menu'>
      <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
      </div>
    </Link>

      <style jsx>{`
        .hamburger {
            @media(max-width: 800px) {
                position: fixed;
                top: 55px;
                cursor:pointer;
                z-index:3;
                right: 20px;
                padding: 20px;
                span {
                    display: block;
                    position: relative;
                    height: 2px;
                    width: 18px;
                    margin-bottom: 4px;
                    background: #434343;
                }
            }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Hamburger;
