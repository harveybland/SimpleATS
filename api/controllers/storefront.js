const core = require('../core/core');
const schemas = require('../core/schemas/schemas');


// Get all favourite jobs
core.app.get('/api/favJobs', async function (req, resp) {
  try {
    const favJob = await schemas.JobModel.find({ favourite: true });
    resp.status(200).json(favJob);
  }
  catch {
    resp.status('404').json('error')
  }
});
  

// favourite job
core.app.put('/api/favJob/:uid', async function (req, resp) {
    try {
      const id = req.params.uid;
      let job = await schemas.JobModel.findOne({ _id: id })
      job.favourite = true;
      job.save();
      resp.status(200).json('ok')
    }
    catch {
      resp.status('404').json('error');
    }
  });

// Remove favourite job
core.app.put('/api/unfavJob/:uid', async function (req, resp) {
  try {
    const id = req.params.uid;
    let job = await schemas.JobModel.findOne({ _id: id })
    job.favourite = false;
    job.save();
    resp.status(200).json('ok')
  }
  catch {
    resp.status('404').json('error');
  }
});