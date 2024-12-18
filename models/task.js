// Import the DataTypes object from the sequelize package to define model types
import { DataTypes } from "sequelize";
// Import the sequelize instance configured in the "../config/dbnonn.js" file
import Sequelize from "../config/dbnonn.js";

// Define the Task model with its schema using sequelize.define
const Task = Sequelize.define('task', {
    title: {
        type: DataTypes.STRING, // giving title a data type string 
        allowNull: false 
    },
    description: {
        type: DataTypes.TEXT, //giving description a data type text for long text 
    },
    completed: {
        type: DataTypes.BOOLEAN, //giving completed a data type BOOLEAN for long text 
        defaultValue: false
    }
});

// Export the Task model so it can be used in a other part of the app
export default Task;
