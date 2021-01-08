
const core = require('./core/core');
require('./controllers/jobs-listings');
require('./controllers/applications');
const port = process.env.PORT || 4000
// start server from core import
core.app.listen(port, () => { console.log('server started') })