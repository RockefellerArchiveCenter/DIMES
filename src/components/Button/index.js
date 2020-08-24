import React from "react";
import PropTypes from "prop-types";
import MaterialIcon from "../MaterialIcon";
import "./styles.scss"


const Button = (props) => (
  <button
    type={props.type}
    className={`btn ${props.className}`}
    onClick={props.handleClick}
    aria-label={props.ariaLabel}
    aria-haspopup={props.ariaHasPopup}
    aria-expanded={props.ariaExpanded}
    disabled={props.disabled} >
      {props.iconBefore && <MaterialIcon icon={props.iconBefore} />} {props.label} {props.iconAfter && <MaterialIcon icon={props.iconAfter} />}
  </button>)

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  iconAfter: PropTypes.string,
  iconBefore: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
