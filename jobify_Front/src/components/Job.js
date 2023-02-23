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

import logoWelcome from '../assets/images/faviconWelcome.png'
import logoWLD from '../assets/images/faviconWLD.ico'
import logoLinkedin from '../assets/images/LinkedIn-Symbole.png'
import logoIndeed from '../assets/images/indeed_logo.png'
import logoTalent from '../assets/images/talentLogo.png'
import logoViadeo from '../assets/images/logo_Viadeo.png'
import logoDevConnect from '../assets/images/devandConect_logo.jpeg'
import logoOther from '../assets/images/other.png'

const textToIcon = (key) => {
  switch (key) {
    case 'Welcome to the Jungle':
      return <img style={{ height: '20px' }} src={logoWelcome} />
    case 'We love dev':
      return <img style={{ height: '30px' }} src={logoWLD} />
    case 'Linkedin':
      return <img style={{ height: '22px' }} src={logoLinkedin} />
    case 'indeed':
      return <img style={{ height: '15px' }} src={logoIndeed} />
    case 'talent.io':
      return <img style={{ height: '13px' }} src={logoTalent} />
    case 'Viadeo':
      return <img style={{ height: '23px' }} src={logoViadeo} />
    case 'Dev & Connect':
      return <img style={{ height: '23px' }} src={logoDevConnect} />
    case 'Other':
      return <img style={{ height: '23px' }} src={logoOther} />
  }
}

const textToEmoji = (key) => {
  switch (key) {
    case 'Neutral':
      return ''
    case 'Very borred':
      return '😡'
    case 'Borred':
      return '😠'
    case 'Nice':
      return '🙂'
    case 'Very nice':
      return '😁'
    case 'Lovely':
      return '😍'
  }
}

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
  salary,
  salary2,
  jobSearchSite,
  feeling
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
          <div className="info_title">
            <h5>{position}</h5>{' '}
            <h5 className="info_title_emoji">
              {feeling && textToEmoji(feeling)}
            </h5>
          </div>
          <div className="subtitleGroup">
            {companyWebSite ? (
              <>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="jobLinks"
                  href={companyWebSite}
                >
                  <span className="icon">
                    <FaLink />
                  </span>
                  {company}
                </a>
                {positionUrl && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="jobLinks"
                    href={positionUrl}
                  >
                    {textToIcon(jobSearchSite)}
                  </a>
                )}
              </>
            ) : (
              <div>
                {company}{' '}
                {positionUrl && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="jobLinks"
                    href={positionUrl}
                  >
                    {textToIcon(jobSearchSite)}
                  </a>
                )}
              </div>
            )}

            <div className="linksGroup"></div>
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
                <p>
                  {salary} {salary2 && `to ${salary2} `}€/years
                </p>
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
  jobSearchSite: PropTypes.string,
  salary: PropTypes.number,
  salary2: PropTypes.number,
  feeling: PropTypes.string
}
export default Job
