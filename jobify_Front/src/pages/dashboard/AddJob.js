import React from 'react'

import { FormRow, Alert, FormRowSelect } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    companyWebSite,
    positionUrl,
    handleChange,
    clearValues,
    createJob,
    editJob
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      displayAlert()
      return
    }
    if (isEditing) {
      editJob()
      return
    }
    createJob()
    console.log('create job')
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}

        {/* position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            onChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            onChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="location"
            name="jobLocation"
            value={jobLocation}
            onChange={handleJobInput}
          />

          {/* job type */}
          <FormRowSelect
            labelText="job type"
            name="jobType"
            value={jobType}
            onChange={handleJobInput}
            list={jobTypeOptions}
          />

          {/* job status */}
          <FormRowSelect
            labelText="Status"
            name="status"
            value={status}
            onChange={handleJobInput}
            list={statusOptions}
          />

          {/* test area  */}
          <FormRow
            type="text"
            labelText="Company Web site"
            name="companyWebSite"
            value={companyWebSite}
            onChange={handleJobInput}
          />
          <FormRow
            type="text"
            labelText="position Url"
            name="positionUrl"
            value={positionUrl}
            onChange={handleJobInput}
          />
          {/* <FormRow
            type="text"
            labelText="compay link"
            name="compayLink"
            value={position}
            onChange={handleJobInput}
          />
          <FormRow
            type="text"
            labelText="adress"
            name="adress"
            value={position}
            onChange={handleJobInput}
          />
          <FormRow
            type="text"
            labelText="contact"
            name="contact"
            value={position}
            onChange={handleJobInput}
          />
          <FormRow
            type="textarea"
            name="comment"
            value={position}
            onChange={handleJobInput}
          /> */}
          {/* test area end */}

          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>

            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
