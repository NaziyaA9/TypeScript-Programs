const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

// Configure Template Engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Maintain Sessions
app.use(session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// Protect private routes
const authMiddleware = (req, res, next) => {
    if (req.session.isLoggedIn) {
        next(); // User is authenticated
    } else {
        res.redirect("/login"); // Redirect to login
    }
};

// Public Route: Login Page
app.get("/login", (req, res) => {
    res.render("login", { error: null });
});

// Implement Login
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    // Basic hardcoded check
    if (username === "admin" && password === "123") {

        req.session.isLoggedIn = true;
        req.session.username = username;

        // Create a custom cookie
        res.cookie("lastVisit", new Date().toLocaleTimeString());

        res.redirect("/dashboard");

    } else {

        res.render("login", {
            error: "Invalid credentials!"
        });

    }
});

// Private Route: Dashboard
app.get("/dashboard", authMiddleware, (req, res) => {

    // Read cookies and access session
    const lastVisit = req.cookies.lastVisit || "First time!";

    res.render("dashboard", {
        user: req.session.username,
        lastVisit: lastVisit
    });

});

// Implement Logout
app.get("/logout", (req, res) => {

    req.session.destroy(() => {

        res.clearCookie("connect.sid");
        res.redirect("/login");

    });

});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});