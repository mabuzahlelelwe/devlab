let student_mark = Number(prompt("Enter your final mark:"));

if (student_mark >= 90) {
    console.log("You got Very High Placement!");
} else if (student_mark >= 70) {
    console.log("You got High Placement!");
} else if (student_mark >= 50) {
    console.log("You got Low Placement!");
} else {
    console.log("No Placements");
}