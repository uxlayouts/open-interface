import React from "react"
import { NavLink } from "react-router-dom"

const MenuDisplay = ({ handleToggle, menuStatus }) => (
  <div>
    <div onClick={handleToggle}>Toggle</div>
    <div onClick={handleToggle}>X</div>
    {menuObject.map(({ Name, URL }) => (
      <NavLink to={URL}>{Name}</NavLink>
    ))}
  </div>
)

export default MenuDisplay
