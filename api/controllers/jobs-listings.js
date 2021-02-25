
const { authenticateToken } = require('../core/authentication/authentication');
const core = require('../core/core');
const schemas = require('../core/schemas/schemas');


// Get all jobs
core.app.get('/api/jobsAuth', authenticateToken, async function (req, resp) {
  try {
    const jobs = await schemas.JobModel.find({ isDeleted: false || null });
    resp.status(200).json(jobs);
  }
  catch {
    resp.status('404').json('error')
  }
});



// Get all jobs
core.app.get('/api/jobs', async function (req, resp) {
  try {
    const jobs = await schemas.JobModel.find({ isDeleted: false || null });
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


// TODO
// Update Job
core.app.put('/api/job/:uid', async function (req, resp) {
  try {
    const idToUpdate = await schemas.JobModel.updateOne(
      { _id: req.params.uid },
      { $set: { vacancyTitle: req.body.vacancyTitle } }
    );
    resp.status(200).json(idToUpdate);
  }
  catch {
    resp.status('404').json('error');
  }
});


// Delete job
core.app.delete('/api/job/:uid', async function (req, resp) {
  try {
    const id = req.params.uid;

    let job = await schemas.JobModel.findById(id);
    job.isDeleted = true;
    job.save();
    
    resp.status(204).json();
  }
  catch {
    resp.status('404').json('error');
  }

});


// Gets a job with all of the applications
// core.app.delete('/api/job/:uid', async function (req, resp) {
//   try {
//     const deleteJob = await schemas.JobModel.aggregate([
//       {
//         $match:
//         {
//           _id: core.mongoose.Types.ObjectId(req.params.uid)
//         }
//       },
//       {
//         $lookup:
//         {
//           from: "applicants",
//           localField: "_id",
//           foreignField: "jobid",
//           as: "applicants"
//         }
//       }
//     ]);
//     resp.status(200).json(deleteJob);
//   }
//   catch {
//     resp.status('404').json('error')
//   }
// });



