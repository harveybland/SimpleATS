const { Schema } = require('mongoose');
const { stringify } = require('querystring');
const core = require('../core');

const applicantSchema = new core.Schema({
    jobid: { type: core.mongoose.Schema.ObjectId, required: true },
    firstname: String,
    surname: String,
    postcode: String,
    emailaddress: String
});

const applicantsModel = core.mongoose.model("applicants", applicantSchema);

const JobSchema = new core.Schema({
    vacancyTitle: String,
    companyName: String,
    salary: String,
    street: String,
    town: String,
    city: String,
    postcode: String,
    description: String,
    isDeleted: { type: Boolean, default: false },
    applicants: [{ type: Schema.Types.ObjectId, ref: 'applicants' }]
});
const JobModel = core.mongoose.model("jobs", JobSchema);

const UserSchema = new core.Schema({
    username: String,
    emailAddress: String,
    password: String
});

const UserModel = core.mongoose.model('user', UserSchema);

module.exports.JobModel = JobModel;
module.exports.applicantsModel = applicantsModel;
