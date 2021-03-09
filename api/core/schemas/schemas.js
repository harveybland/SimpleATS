const { Schema } = require('mongoose');
const core = require('../core');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const applicantSchema = new core.Schema({
    jobid: { type: core.mongoose.Schema.ObjectId, required: true },
    firstname: String,
    surname: String,
    postcode: String,
    mobile: String,
    emailaddress: String,
    currentEmployer: String,
    currentJobTitle: String
});

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

// const combinedSchema = new core.Schema({
//     applicant: applicantSchema,
//     jobs: JobSchema
// })


const UserSchema = new core.Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});


const taskSchema = new core.Schema({
    questions: []
});

UserSchema.pre('save', function (next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});


UserSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);;
};


const ApplicantsModel = core.mongoose.model("applicants", applicantSchema);
const JobModel = core.mongoose.model("jobs", JobSchema);
const UserModel = core.mongoose.model('user', UserSchema);
const TaskModel = core.mongoose.model('task', taskSchema);
// const combinedModel = core.mongoose.model('combined', combinedSchema);


module.exports.JobModel = JobModel;
module.exports.ApplicantsModel = ApplicantsModel;
module.exports.UserModel = UserModel;
module.exports.TaskModel = TaskModel;
// module.exports.combinedModel = combinedModel;