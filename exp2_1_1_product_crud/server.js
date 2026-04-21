// ============================================================
// EXPERIMENT 2.1.1 — Product CRUD Operations with Mongoose
// CONT_24CSP-293 :: FULL STACK-I
// ============================================================

const express  = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();

// ✅ Render + Local compatible PORT
const PORT = process.env.PORT || 3000;

// ── MIDDLEWARE ──────────────────────────────────────────────
app.use(express.json());

// ── ASYNC STARTUP ───────────────────────────────────────────
const startServer = async () => {
  try {

    // ✅ MongoDB Atlas Connection (UPDATED)
    await mongoose.connect(
      "mongodb+srv://raghavtiwari2424_db_user:Sp8Y4GL8UtHwcWKh@cluster0.ejzxm75.mongodb.net/productDB"
    );

    console.log("✅ MongoDB Atlas connected → productDB");

    // ── ROUTES ───────────────────────────────────────────────
    app.use("/api/products", productRoutes);

    // Root route
    app.get("/", (req, res) => {
      res.json({
        experiment: "2.1.1 - Product CRUD",
        endpoints: {
          "POST   /api/products":      "Create a product",
          "GET    /api/products":      "Get all products",
          "GET    /api/products/:id":  "Get one product",
          "PUT    /api/products/:id":  "Update a product",
          "DELETE /api/products/:id":  "Delete a product"
        }
      });
    });

    // 404 handler
    app.use((req, res) => {
      res.status(404).json({ message: "Route not found" });
    });

    // Global error handler
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({
        message: "Server error",
        error: err.message
      });
    });

    // ── START SERVER ─────────────────────────────────────────
    app.listen(PORT, () => {
      console.log(`🚀 Server running → http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

startServer();