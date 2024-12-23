import jwt from 'jsonwebtoken'
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "Access denied. No token provided." });
    }
    try {
      const decoded = jwt.verify(token, "secretKey");
      req.user = decoded; // Attach user info for further use
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid or expired token." });
    }
  };
  