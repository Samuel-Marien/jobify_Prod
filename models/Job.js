import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company'],
      maxlenght: 50
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlenght: 100
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending'
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time'
    },
    feeling: {
      type: String,
      enum: ['Neutral', 'Very borred', 'Borred', 'Nice', 'Very nice', 'Lovely'],
      default: 'Neutral'
    },
    jobLocation: {
      type: String,
      default: 'my city',
      required: true
    },
    companyWebSite: {
      type: String
    },
    positionUrl: {
      type: String
    },
    comment: {
      type: String
    },
    adress: {
      type: String
    },
    contact: {
      type: String
    },
    contact2: {
      type: String
    },
    targetSource: {
      type: String,
      enum: [
        'targeted by a recruiter',
        'spontaneous application',
        'job advertisement',
        'cooptation'
      ]
    },
    jobSearchSite: {
      type: String,
      enum: [
        'Welcome to the Jungle',
        'We love dev',
        'Linkedin',
        'indeed',
        'talent.io',
        'Viadeo',
        'Dev & Connect',
        'Other'
      ],
      default: 'Other'
    },
    salary: {
      type: Number
    },
    salary2: {
      type: Number
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user']
    }
  },
  { timestamps: true }
)

export default mongoose.model('Job', JobSchema)
