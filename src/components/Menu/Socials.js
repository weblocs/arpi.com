import React from "react";

import Facebook from "../../images/svg-icons/facebook.svg";
import Linkedin from "../../images/svg-icons/linkedin.svg";

const Socials = props => {
  return (
    <React.Fragment>
        <div className="socials">
          <a target="_blank" href="https://www.facebook.com/ArpiGroup/">
            <span className="socialIcon">
              <Facebook />
            </span>
          </a>
          <a target="_blank" href="https://pl.linkedin.com/company/arpi-group">
            <span className="socialIcon">
              <Linkedin />
            </span>
          </a>
        </div>

      <style jsx>{`
        .socialIcon {
          margin-left: 20px;
          opacity: 0.6;
          transition: 0.2s;
          :hover {
            opacity: 1;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Socials;
