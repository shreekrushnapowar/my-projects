const jwt = require('jsonwebtoken');

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');

    console.log('auth token',token)
    if (!token) {
            res.status(200).send({
            error: "please authnticate"
        })
    }
    try 
    {
       
        const data = jwt.verify(token,process.env.JWT_SECRET);
        req.user = data._id;
        next();
    } catch (error) {
        res.status(400).send({
            error: "error"
        })
    }
}
module.exports = fetchuser;