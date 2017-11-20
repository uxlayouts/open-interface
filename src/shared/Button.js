import React from "react"
import classnames from "classnames"
import propTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Button = (props) => {
  const {
    text, type, path, size, paddRight, invert, onClick, fullWidth, submitting, buttonStyle, buttonFixed,
  } = props
  const buttonClasses = classnames({
    "btn-fixed": buttonFixed,
    "btn-hollow": buttonStyle === "hollow",
    "btn-sm": size === "small",
    "btn-invert": invert,
    "margin-right-2": paddRight,
    "btn-block": fullWidth,
  })

  if (path !== "") {
    return (
      <NavLink to={path}>
        <button
          className={buttonClasses}
          title={text}
          onClick={onClick}
          disabled={submitting}
          type={type}
        >{text}
        </button>
      </NavLink>
    )
  }
  return (
    <button className={buttonClasses} title={text} onClick={onClick} disabled={submitting} type={type}>{text}</button>
  )
}

Button.defaultProps = {
  text: "",
  buttonStyle: "primary",
  type: null,
  path: "",
  size: "",
  buttonFixed: false,
  paddRight: false,
  fullWidth: false,
  invert: false,
  onClick: () => {
  },
  submitting: false,
}

Button.propTypes = {
  text: propTypes.string,
  type: propTypes.string,
  path: propTypes.string,
  size: propTypes.string,
  buttonStyle: propTypes.string,
  buttonFixed: propTypes.bool,
  paddRight: propTypes.bool,
  invert: propTypes.bool,
  fullWidth: propTypes.bool,
  submitting: propTypes.bool,
  onClick: propTypes.func,
}

export default Button
