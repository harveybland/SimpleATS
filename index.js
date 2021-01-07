
const core = require('./core/core');
require('./controllers/jobs-listings');

// start server from core import
core.app.listen(4000, () => { console.log('server started') })