import React from 'react'

export default function MovieSearchBox() {
  return (
    <div className="MovieSearchBoxinput-group flex-nowrap">
      <div className="input-group-prepend">
        <span className="input-group-text" id="addon-wrapping">@</span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
    </div>
  )
}
