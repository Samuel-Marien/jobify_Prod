import React from 'react'
import PropTypes from 'prop-types'

const FormRowTextArea = ({ type, name, value, onChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <textarea
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="form-textarea"
      />
    </div>
  )
}
FormRowTextArea.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  labelText: PropTypes.string
}

export default FormRowTextArea
