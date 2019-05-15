import React, {Component} from "react";
import PropTypes from "prop-types";

class SubItem extends Component {
    constructor(props) {
        super(props);
        this.state = {black: true };
    }
    changeColor(){
        this.setState({black: !this.state.black})
     }
  
  render() {
    const { link, text, color } = this.props;
    let btn_class = this.state.black ? "blackButton" : "colorButton";
  return (
    <React.Fragment>
        <li>
            <a style={{color: color}} onMouseEnter={this.changeColor.bind(this)} onMouseLeave={this.changeColor.bind(this)} className={btn_class} href={link}>
                {text}
            </a>
        </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        .blackButton {
            color: #000 !important;
        }
      `}</style>
    </React.Fragment>
  );
}
  }


export default SubItem;
