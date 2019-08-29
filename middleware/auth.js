//  import jwt (JSON Web Token)
const jwt = require('jsonwebtoken');
// Import Config npm
const config = require('config');

//  export function 
module.exports = function (req, res, next) {

  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token - if there is no token sent back from JWT respond with status 401 and message
  if (!token) {
    return res.status(401).json({
      msg: 'No token, authorization denied'
    });
  }

  // Verify Token with try/catch
  try {
    // decoded variable jwt method .verify, pass in token and use config to get jwtSecrect from default.json
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // request user 
    req.user = decoded.user;
    // once completed move to next (is this required with a try/catch??)
    next();
  } catch (err) {
    res.status(401).json({
      msg: 'Token is not valid'
    });
  }
}
