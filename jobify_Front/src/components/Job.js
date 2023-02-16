import React, { useState } from 'react'
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
  FaLink,
  FaCommentAlt,
  FaUserTie,
  FaStoreAlt,
  FaUser,
  FaSearchPlus,
  FaEuroSign,
  FaWindowClose,
  FaInfoCircle
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
  positionUrl,
  comment,
  adress,
  contact,
  contact2,
  targetSource,
  salary
}) => {
  const { setEditJob, deleteJob } = useAppContext()
  const [show, setShow] = useState(false)

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <div className="subtitleGroup">
            <div>{company}</div>
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

        {show ? (
          <div className="subInfosContent">
            <div className="subInfosContent_header">
              <span className="closedLogo">
                <FaInfoCircle />
              </span>
              <p>Detailed infos</p>
              <span className="closedButton" onClick={handleShow}>
                <FaWindowClose />
              </span>
            </div>
            {contact && (
              <div className="contact">
                <span>
                  <FaUserTie />
                </span>

                <p>{contact}</p>
              </div>
            )}
            {contact2 && (
              <div className="contact">
                <span>
                  <FaUser />
                </span>

                <p>{contact2}</p>
              </div>
            )}
            {adress && (
              <div className="contact">
                <span>
                  <FaStoreAlt />
                </span>
                <p>
                  {jobLocation} - {adress}
                </p>
              </div>
            )}
            {targetSource && (
              <div className="contact">
                <span>
                  <FaSearchPlus />
                </span>
                <p>{targetSource}</p>
              </div>
            )}
            {salary && (
              <div className="contact">
                <span>
                  <FaEuroSign />
                </span>
                <p>{salary} € / years</p>
              </div>
            )}
            {comment && (
              <div className="comment">
                <span>
                  <FaCommentAlt />
                </span>

                <p>{comment}</p>
              </div>
            )}
          </div>
        ) : (
          (contact ||
            contact2 ||
            adress ||
            targetSource ||
            salary ||
            comment) && (
            <div className="btn_show btn" onClick={handleShow}>
              <span>
                <FaInfoCircle />
              </span>
              <p>show details</p>
            </div>
          )
        )}

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
  positionUrl: PropTypes.string,
  comment: PropTypes.string,
  adress: PropTypes.string,
  contact: PropTypes.string,
  contact2: PropTypes.string,
  targetSource: PropTypes.string,
  salary: PropTypes.number
}
export default Job
