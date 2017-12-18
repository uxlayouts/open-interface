import React from "react" // eslint-disable-line no-unused-vars
import PropTypes from "prop-types"

const Display = ({ peopleFiltered, onKeyPress, term }) => (
  <div>
    <input
      type="text"
      placeholder="Search"
      onKeyDown={onKeyPress}
    />
    <h1>Results for {term}</h1>

    {peopleFiltered.map(({
      _id, picture, name,
    }) => (
      <tr key={_id}>
        <td>
          <img
            width="60"
            height="60"
            src={picture.thumbnail}
            alt={name.last_name}
            className="round-img"
          />
        </td>
        <td>{name.first} {name.last}</td>
        <td style={{ textAlign: "right" }}><button className="btn">Profile</button></td>
      </tr>
    ))}
  </div>
)

Display.propTypes = {
  peopleFiltered: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onKeyPress: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  term: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

Display.defaultProps = {
  peopleFiltered: [],
  onKeyPress: [],
  term: [],
}

export default Display
