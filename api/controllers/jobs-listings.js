
const { StringDecoder } = require('string_decoder');
const core = require('../core/core');

const JobSchema = new core.Schema({
  vacancyTitle: String,
  companyName: String,
  salary: String,
  street: String,
  town: String,
  city: String,
  postcode: String,
  description: String,
  isDeleted: false
});
const JobModel = core.mongoose.model("jobs", JobSchema);


// Get all jobs
core.app.get('/api/jobs', async function (req, resp) {
  try {
    const jobs = await JobModel.find({isDeleted: true});
    resp.status(200).json(jobs);
  }
  catch {
    resp.status('404').json('error')
  }
});

// Get a single job
core.app.get('/api/job/:uid', async function (req, resp) {
  try {
    const job = await JobModel.findById(req.params.uid)
    resp.status(200).json(job);
  }
  catch {
    resp.status('404').json('error')
  }
});

// Create Job
core.app.post('/api/job', async function (req, resp) {
  JobModel.create(req.body)
    .then(result => {
      console.log(result);
      resp.status(200).json(result);
    })
    .catch(error => {
      resp.status('404').json('error');
    })
});


// TODO

// Update Job
core.app.put('/api/job/:uid', async function (req, resp) {
  try {
    const idToUpdate = JobModel.updateOne( 
      {_id: req.params.uid },
      {$set: { vacancyTitle: req.body.vacancyTitle } },
      {$set: { companyName: req.body.companyName } }
    );
    resp.json(idToUpdate);
  } 
  catch {
    resp.status('404').json('error');
  } 
});


// Delete job
core.app.delete('/api/job/:uid', async function (req, resp) {
  try {
    const deleteJob = await JobModel.remove({_id: req.params.uid});
    resp.json(deleteJob);
  }
  catch {
    resp.status('404').json('error');
  }
});


