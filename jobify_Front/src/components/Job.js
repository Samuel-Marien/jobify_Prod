import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job'
import JobInfo from './JobInfo'

import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaLink
} from 'react-icons/fa'

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
  companyWebSite,
  positionUrl
}) => {
  const { setEditJob, deleteJob } = useAppContext()

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <div className="subtitleGroup">
            <div>{company}</div>
            {/* test new fields  */}
            <div className="linksGroup">
              {companyWebSite && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="jobLinks"
                  href={companyWebSite}
                >
                  <span className="icon">
                    <FaLink />
                  </span>
                  Company
                </a>
              )}
              {positionUrl && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="jobLinks"
                  href={positionUrl}
                >
                  <span className="icon">
                    <FaLink />
                  </span>
                  position
                </a>
              )}
            </div>

            {/* test new fields end */}
          </div>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>

        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              onClick={() => setEditJob(_id)}
              className="btn edit-btn"
            >
              Edit
            </Link>
            <button className="btn delete-btn" onClick={() => deleteJob(_id)}>
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

Job.propTypes = {
  _id: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  jobLocation: PropTypes.string,
  jobType: PropTypes.string,
  createdAt: PropTypes.string,
  status: PropTypes.string,
  companyWebSite: PropTypes.string,
  positionUrl: PropTypes.string
}
export default Job
