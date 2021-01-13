const jwt = require("jsonwebtoken");
const secret = '66b1526cc945ff63784f7d40e1b8825a72c5db3423ab7eb83975702d554597ed';



function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secret, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function generateAccessToken(username) {
  return jwt.sign(username, secret, { expiresIn: '1800s' });
}


module.exports.authenticateToken = authenticateToken;
module.exports.generateAccessToken = generateAccessToken;