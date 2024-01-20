// Change to ES6 module syntax
import userModel from "../models/userModel.js";

const adminMiddleware = async (req, res, next) => {
  try {
    const { userId } = req.body; // Destructuring
    const user = await userModel.findById(userId);

    // Check admin
    if (!user || user.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Auth Failed",
      });
    }
    next();
  } catch (error) {
    console.error(`Error in admin middleware: ${error.message}`); // Template literal
    return res.status(401).send({
      success: false,
      message: "Auth Failed, ADMIN API",
      error, // Object shorthand
    });
  }
};

// Use export default for ES6 module syntax
export { adminMiddleware };
