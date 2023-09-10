import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

// Generate token when a user logs in
function generateToken(user) {
  // Create a JWT token with user data
  return jwt.sign(user, secretKey, { expiresIn: "1h" }); // Adjust the expiration as needed
}

// verifies when user makes a requests
function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

export { generateToken, verifyToken };
