
const core = require('../core/core');

const ItemSchema = new core.Schema({
  vacancyTitle: String,
  companyName: String,
  salary: String,
  street: String,
  town: String,
  city: String,
  postcode: String
});

const JobModel = core.mongoose.model("jobs", ItemSchema);

// Get all jobs
core.app.get('/', async function (req, resp) {
  try {
    const jobs = await JobModel.find();
    resp.status(200).json(jobs);
  }
  catch {
    resp.status('200').json('error')
  }
});

// Create Job
core.app.post('/', async function (req, resp) {
  JobModel.create(req.body)
    .then(result => {
      resp.status(200).json(req.body);
    })
    .catch(error => {
      resp.status('200').json('error');
    })
});


// TODO
// Update Job
core.app.put('/', async function (req, resp) {
  let idToUpdate = req.body._id;

  resp.status('200').json(idToUpdate + ' NOT IMPLEMENTED');
});


// TODO
core.app.delete('/', async function (req, resp) {
  let idToUpdate = req.body._id;

  resp.status('200').json(idToUpdate + ' NOT IMPLEMENTED');
});



