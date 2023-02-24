import React from 'react'

import {
  FormRow,
  Alert,
  FormRowSelect,
  FormRowTextArea
} from '../../components'
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
    comment,
    positionUrl,
    handleChange,
    clearValues,
    createJob,
    editJob,
    adress,
    contact,
    contact2,
    targetSource,
    targetSourceOptions,
    salary,
    salary2,
    jobSearchSite,
    jobSearchSiteOptions,
    feelingOptions,
    feeling
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
            required
            type="text"
            name="position"
            value={position}
            onChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            required
            type="text"
            name="company"
            value={company}
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
          <FormRow
            type="text"
            labelText="position Url"
            name="positionUrl"
            value={positionUrl}
            onChange={handleJobInput}
          />
          <FormRow
            type="text"
            labelText="Company Web site"
            name="companyWebSite"
            value={companyWebSite}
            onChange={handleJobInput}
          />
          {/* job status */}
          <FormRowSelect
            labelText="Status"
            name="status"
            value={status}
            onChange={handleJobInput}
            list={statusOptions}
          />
          {/* location */}
          <FormRow
            required
            type="text"
            labelText="location"
            name="jobLocation"
            value={jobLocation}
            onChange={handleJobInput}
          />
          {/* adress  */}
          <FormRow
            type="text"
            labelText="adress"
            name="adress"
            value={adress}
            onChange={handleJobInput}
          />
          {/* target source  */}
          <FormRowSelect
            labelText="target source"
            name="targetSource"
            value={targetSource}
            onChange={handleJobInput}
            list={targetSourceOptions}
          />
          {/* contact 1  */}
          <FormRow
            type="text"
            labelText="contact 1"
            name="contact"
            value={contact}
            onChange={handleJobInput}
          />
          {/* contact 2  */}
          <FormRow
            type="text"
            labelText="contact 2"
            name="contact2"
            value={contact2}
            onChange={handleJobInput}
          />
          {/* job search site  */}
          <FormRowSelect
            labelText="job search site"
            name="jobSearchSite"
            value={jobSearchSite}
            onChange={handleJobInput}
            list={jobSearchSiteOptions}
          />
          {/* salary  */}
          <FormRow
            type="number"
            labelText="salary min (/Years)"
            name="salary"
            value={salary}
            onChange={handleJobInput}
          />
          <FormRow
            type="number"
            labelText="salary max (/Years)"
            name="salary2"
            value={salary2}
            onChange={handleJobInput}
          />
          {/* Feeling  */}

          <FormRowSelect
            labelText="Feeling"
            name="feeling"
            value={feeling}
            onChange={handleJobInput}
            list={feelingOptions}
          />
          {/* comment  */}
          <FormRowTextArea
            type="text"
            labelText="comment"
            name="comment"
            value={comment}
            onChange={handleJobInput}
          />
          <br />
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
