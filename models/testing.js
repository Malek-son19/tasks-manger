import Tasks from './task.js';

const DummyTasks = [
    {
        title: "Update Resume",
        description: "Revamp the resume to include the latest job experiences and skills acquired over the last year.",
        completed: false,
    },
    {
        title: "Call the Vet",
        description: "Schedule a check-up appointment for the cat, ensuring all vaccinations are up to date.",
        completed: true,
    },
    {
        title: "Research new smartphones",
        description: "Compare the latest models to find a suitable upgrade with a focus on camera and battery life.",
        completed: false,
    },
    {
        title: "Jogging",
        description: "Go for a 30-minute jogging session in the park to maintain physical fitness.",
        completed: true,
    },
    {
        title: "Read a book",
        description: "Finish reading 'Educated' by Tara Westover to better understand different educational experiences.",
        completed: false,
    },
    {
        title: "Family dinner planning",
        description: "Plan a menu and prepare a shopping list for Sunday's family dinner.",
        completed: true,
    },
    {
        title: "Monthly budget review",
        description: "Review and adjust the monthly budget to account for unexpected expenses.",
        completed: false,
    },
    {
        title: "Backup computer files",
        description: "Perform a full backup of the computer to ensure data security.",
        completed: true,
    },
    {
        title: "Garden maintenance",
        description: "Weed the garden and plant some new flowers for the upcoming spring.",
        completed: false,
    },
    {
        title: "Explore Python libraries",
        description: "Experiment with new Python libraries to enhance data analysis skills.",
        completed: false,
    }
];


(async () => {
    await Promise.all(dummyTasks.map(task => Tasks.create(task)));  
})();