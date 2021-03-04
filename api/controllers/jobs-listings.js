const { authenticateToken } = require('../core/authentication/authentication');
const core = require('../core/core');
const schemas = require('../core/schemas/schemas');


// Get all jobs
// core.app.get('/api/jobsAuth', authenticateToken, async function (req, resp) {
//   try {
//     const jobs = await schemas.JobModel.find({ isDeleted: false });
//     resp.status(200).json(jobs);
//   }
//   catch {
//     resp.status('404').json('error')
//   }
// });

// Get all jobs
core.app.get('/api/jobs', async function (req, resp) {
  try {
    const jobs = await schemas.JobModel.find({ isDeleted: false });
    resp.status(200).json(jobs);
  }
  catch {
    resp.status('404').json('error')
  }
});

// Get all closed jobs
core.app.get('/api/closedJobs', async function (req, resp) {
  try {
    const jobs = await schemas.JobModel.find({ isDeleted: true });
    resp.status(200).json(jobs);
  }
  catch {
    resp.status('404').json('error')
  }
});


// Gets a job with all of the applications
core.app.get('/api/job/:uid', async function (req, resp) {
  try {

    const jobwithApplicants = await schemas.JobModel.aggregate([
      {
        $match:
        {
          _id: core.mongoose.Types.ObjectId(req.params.uid)
        }
      },
      {
        $lookup:
        {
          from: "applicants",
          localField: "_id",
          foreignField: "jobid",
          as: "applicants"
        }
      }
    ]);
    resp.status(200).json(jobwithApplicants);
  }
  catch {
    resp.status('404').json('error')
  }
});


// Create Job
core.app.post('/api/job', async function (req, resp) {
  schemas.JobModel.create(req.body)
  try {
    console.log(result);
    resp.status(200).json(result);
  }
  catch {
    resp.status('404').json('error');
  };
});


//Update job
core.app.put('/api/updateJob/:uid', async (req, resp) => {
  try {
    const id = req.params.uid;
    let j = await schemas.JobModel.findOne({ _id: id })
    j.vacancyTitle = req.body.vacancyTitle,
    j.companyName = req.body.companyName,
    j.salary = req.body.salary,
    j.street = req.body.street,
    j.town = req.body.town,
    j.city = req.body.city,
    j.postcode = req.body.postcode,
    j.save();
    resp.status(200).json('ok')
  }
  catch {
    resp.status('404').json('error');
  }

});

// Delete job
core.app.delete('/api/job/:uid', async function (req, resp) {
  try {
    const id = req.params.uid;
    let job = await schemas.JobModel.findOne({ _id: id })
    job.isDeleted = true;
    job.save();
    resp.status(200).json('ok')
  }
  catch {
    resp.status('404').json('error');
  }
});

//undelete job
core.app.put('/api/undelete/:uid', async (req, resp) => {
  try {
    const isDeletedUpdate = await schemas.JobModel.findByIdAndUpdate(
      { _id: req.params.uid },
      { isDeleted: false }
    );
    resp.status(200).json(isDeletedUpdate);
  }
  catch {
    resp.status('404').json('error');
  }
})
