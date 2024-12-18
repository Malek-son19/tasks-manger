// Import what we need from express and taskRoutes
import express from "express";
import taskRoutes from "./routes/tasks.js";
import path from "path" 
// Create a new Express application
const app = express();

// Middleware to parse JSON bodeis
app.set(express.json());
app.set('view engine', "ejs")


app.set("views", "./views")

app.use(express.static('public'))

// Mount the task routes at the "/tasks.js" path
app.use("/api", taskRoutes);

// Set the default port or use the PORT environment variable
const PORT = process.env.PORT || 3000; 

// Start the server on the  a PORT and log a message to the console
app.listen(PORT, () => {
    // Use template literals correctly to include the variable value
    console.log(`Server is running on port http://localhost:${PORT}/api`);
});
