const core = require('../core/core');
const schemas = require('../core/schemas/schemas');


// apply for a job
core.app.post('/api/task', async function (req, resp) {
    try {
        schemas.TaskModel.create(req.body)
            .then(result => {
                resp.status(200).json(result);
            })
            .catch(error => {
                resp.status('200').json(error);
            })
    }
    catch {
        resp.status('200').json('error')
    }
});

// get all jobs
core.app.get('/api/tasks', async function (req, resp) {
    try {
        const tasks = await schemas.TaskModel.find();
        resp.status(200).json(tasks);
    }
    catch {
        resp.status('200').json('error')
    }
});

// get a task
core.app.get('/api/tasks/:uid', async function (req, resp) {
    try {
        const task = schemas.TaskModel.findById(resp.params.uid);
        resp.status(200).json(task)
    }
    catch {
        resp.status('404').json('error');
    }
});
