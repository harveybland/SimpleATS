const core = require('../core/core');
const schemas = require('../core/schemas/schemas');


// apply for a job
core.app.post('/api/apply/:jobid', async function (req, resp) {
    try {
        schemas.applicantsModel.create(req.body)
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


// Gets all applications for a jobid
core.app.get('/api/applications/:jobid', async function (req, resp) {
    try {
        schemas.applicantsModel.find({ jobid: req.params.jobid }).then(result => {
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