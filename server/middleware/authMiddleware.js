const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // const token = req.headers.authorization;
    // if(!token) return res.status(403).json({ error: 'No token provided'});

    // try{
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     req.user = decoded;
    //     next();
    // }catch (err){
    //     res.status(401).json({ error: 'Invalid token'});
    // }

    const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

