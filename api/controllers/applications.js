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
