const schemas = require('../core/schemas/schemas');
const core = require('../core/core');
const { generateAccessToken } = require('../core/authentication/authentication');
// main account controller


// create account
core.app.post('/api/user/create', async function (req, resp) {
    schemas.UserModel.create(req.body)
        .then(result => {
            console.log(result);
            resp.status(200).json('User Created');
        })
        .catch(error => {
            resp.status('401').json(error);
        });
});


// login
core.app.post('/api/login', async function (req, resp) {
    const username = req.body.username;
    try {
        const user = await schemas.UserModel.findOne({ username: username });
        const isValid = await user.comparePassword(req.body.password);
        if (isValid) {
            const token = await generateAccessToken(req.body.username );
            const ob = {
                token: token
            };
            resp.status(200).json(ob);
        } else {
            resp.status(401).json('Invalid username or password');
        }
    } catch (e) {
        resp.status(401).json(e);
    }
});





