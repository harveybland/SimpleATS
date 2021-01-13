const schemas = require('../core/schemas/schemas');
const core = require('../core/core');
const { generateAccessToken } = require('../core/authentication/authentication');
// main account controller


// login
core.app.get('/api/login', async function (req, resp) {
    const username = req.body.username;
    try {
        const user = await schemas.UserModel.findOne({ username: username });
        const isValid = await user.comparePassword(req.body.password);
        if (isValid) {
            const token = generateAccessToken({ username: req.body.username });
            resp.status(200).json(token);
        } else {
            resp.status(401).json('Invalid username or password');
        }
    } catch (e) {
        resp.status(401).json(e);
    }
});

core.app.post('/api/user/create', async function (req, resp) {
    schemas.UserModel.create(req.body)
        .then(result => {
            console.log(result);
            resp.status(200).json('User Created');
        })
        .catch(error => {
            resp.status('200').json(error);
        });
});




// create account