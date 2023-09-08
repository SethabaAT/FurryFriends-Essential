import { verifyToken } from "../auth.js";

// Check whether it is user or not
function isUser(req, res, next) {
  //Verify token
  let token = req.header("authorization");

  // Filter the token
  token = token.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = verifyToken(token);
  if (user && user.user_type === 0) {
    next();
  } else {
    // User is not authorized to access this route
    res.status(403).json({ message: "Access forbidden" });
  }
}

// Check whether is admin or not
function isAdmin(req, res, next) {
  //Verify token
  let token = req.header("authorization");

  // Filter the token
  token = token.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = verifyToken(token);
  if (user && user.user_type === 1) {
    next();
  } else {
    // User is not authorized to access this route
    res.status(403).json({ message: "Access forbidden" });
  }
}

export { isUser, isAdmin };
