const { Schema } = require('mongoose');
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
    applicants: [{ type: Schema.Types.ObjectId, ref: 'applicants' }]
});
const JobModel = core.mongoose.model("jobs", JobSchema);

module.exports.JobModel = JobModel;
module.exports.applicantsModel = applicantsModel;