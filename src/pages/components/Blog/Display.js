import React from "react"

const Display = ({Data}) => (
  <div>
    {Data.map(({ id, title, body }) => (
      <li key={id}>
        <h4>title</h4><br />
        {body}
      </li>
    ))}
  </div>
)

export default Display
