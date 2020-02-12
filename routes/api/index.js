const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./users");

// routes
router.use("/products", productRoutes);
router.use("/users", userRoutes);

module.exports = router;
