const core = require('../core/core');
const schemas = require('../core/schemas/schemas');


// Gets all applications for a jobid
core.app.get('/api/applications/:jobid', async function (req, resp) {
    try {
        schemas.ApplicantsModel.find({ jobid: req.params.jobid }).then(result => {
            resp.status(200).json(result);
        })
        .catch(error => {
            resp.status('200').json('error');
        })
    }
    catch {
        resp.status('200').json('error')
    }
});


// apply for a job
core.app.post('/api/apply/:jobid', async function (req, resp) {
    try {
        schemas.ApplicantsModel.create(req.body)
            .then(result => {
                resp.status(200).json(result);
            })
            .catch(error => {
                resp.status('200').json('error');
            })
    }
    catch {
        resp.status('200').json('error')
    }
});


//delete applicant
core.app.delete('/api/applicant/:uid', async function (req, resp) {
    try {
      const id = req.params.uid;
      let applicant = await schemas.ApplicantsModel.findOne({ _id: id })
      applicant.isDeleted = true;
      applicant.save();
      resp.status(200).json('ok')
    }
    catch {
      resp.status('404').json('error');
    }
  });