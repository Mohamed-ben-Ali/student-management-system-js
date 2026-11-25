const students = [
    { id: 1, name: "Alice", age: 20, grade: [85, 75, 95] },
    { id: 2, name: "Bob", age: 22, grade: [80, 85, 90] },
    { id: 3, name: "Charlie", age: 19, grade: [70, 75, 80] },
    { id: 4, name: "David", age: 21, grade: [85, 90, 95] },
    { id: 5, name: "Eva", age: 23, grade: [90, 95, 100] },
    { id: 6, name: "Frank", age: 20, grade: [75, 80, 85] },
    { id: 7, name: "Grace", age: 22, grade: [85, 90, 95] },
    { id: 8, name: "Hannah", age: 19, grade: [70, 75, 80] },
    { id: 9, name: "Ian", age: 21, grade: [80, 85, 90] },
    { id: 10, name: "Jack", age: 23, grade: [90, 95, 100] },
];

/*
==================================================
PHASE 1: LOOPS & CONDITIONS
==================================================
*/

// 1. Print names of students using for loop

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

// 2. Print successful and unsuccessful students
// Passing average >= 85

for (let i = 0; i < students.length; i++) {
    let sum = 0;

    for (let j = 0; j < students[i].grade.length; j++) {
        sum += students[i].grade[j];
    }

    const avg = sum / students[i].grade.length;

    if (avg >= 85) {
        console.log(`Successful: ${students[i].name}, Average: ${avg}`);
    } else {
        console.log(`Unsuccessful: ${students[i].name}, Average: ${avg}`);
    }
}

// 3. Print all grades using nested loops

for (let i = 0; i < students.length; i++) {
    console.log(`Grades for ${students[i].name}:`);

    for (let j = 0; j < students[i].grade.length; j++) {
        console.log(`Grade ${j + 1}: ${students[i].grade[j]}`);
    }
}

// 4. Calculate sum of grades for each student

for (let i = 0; i < students.length; i++) {
    let sum = 0;

    for (let j = 0; j < students[i].grade.length; j++) {
        sum += students[i].grade[j];
    }

    console.log(`Sum of grades for ${students[i].name}: ${sum}`);
}

// 5. Count successful and unsuccessful students

let successfulCount = 0;
let unsuccessfulCount = 0;

for (let i = 0; i < students.length; i++) {
    let sum = 0;

    for (let j = 0; j < students[i].grade.length; j++) {
        sum += students[i].grade[j];
    }

    const avg = sum / students[i].grade.length;

    if (avg >= 85) {
        successfulCount++;
    } else {
        unsuccessfulCount++;
    }
}

console.log(`Total Students: ${students.length}`);
console.log(`Successful Students: ${successfulCount}`);
console.log(`Unsuccessful Students: ${unsuccessfulCount}`);

/*
==================================================
END OF PHASE 1
==================================================
*/

/*
==================================================
PHASE 2: FUNCTIONS & ARROW FUNCTIONS
==================================================
*/

// 1. Function to calculate average grade

function calculateAverage(grades) {
    // Check if the array is empty to avoid division by zero.
    if (grades.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }

    return sum / grades.length;
}

for (let i = 0; i < students.length; i++) {
    console.log(
        `The average of grades for ${students[i].name} is ${calculateAverage(students[i].grade)}`
    );
}

// 2. Arrow function to check if a student is successful

const isSuccessful = (student) => {
    return calculateAverage(student.grade) >= 85;
};

for (let i = 0; i < students.length; i++) {
    console.log("--------------------------------------------");

    console.log(
        students[i].name,
        "status:",
        isSuccessful(students[i]) ? "Successful" : "Unsuccessful"
    );
}

// 3. Get student by ID

function getStudentById(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return students[i];
        }
    }

    return undefined;
}

console.log("--------------------------------------------");
console.table(getStudentById(3));

// 4. Get student status

function getStudentStatus(id) {
    const student = getStudentById(id);

    // Return undefined if no student matches the given ID.
    if (!student) {
        return undefined;
    }

    return isSuccessful(student) ? "Successful" : "Unsuccessful";
}

students.forEach((student) => {
    console.log("--------------------------------------------");

    console.log(
        `Student ${student.name} is ${getStudentStatus(student.id)}`
    );
});

// 5. Get student information

function getStudentInfo(id) {
    const student = getStudentById(id);

    // IMPORTANT:
    // Check whether the student exists BEFORE accessing student.grade.
    // Otherwise, an invalid ID would cause a TypeError.
    if (!student) {
        return undefined;
    }

    const avg = calculateAverage(student.grade);

    return `Name: ${student.name}, Age: ${student.age}, Average: ${avg}`;
}

students.forEach((student) => {
    console.log("--------------------------------------------");
    console.log(getStudentInfo(student.id));
});

/*
==================================================
END OF PHASE 2
==================================================
*/

/*
==================================================
PHASE 3: ARRAY METHODS
==================================================
*/

// 1. Using forEach() to print names and averages

students.forEach((student) => {
    console.log("==============================");

    const avg = calculateAverage(student.grade);

    console.log(`Student Name: ${student.name}, Average: ${avg}`);
});

// 2. Using map() to create a new array of names and averages

const studentAverages = students.map((student) => {
    const avg = calculateAverage(student.grade);

    return {
        name: student.name,
        average: avg
    };
});

console.log(studentAverages);

// 3.a. Using filter() to get successful students

const successfulStudents = students.filter((student) => {
    return isSuccessful(student);
});

console.log("===============Successful Students===============");
console.log(successfulStudents);

// 3.b. Using filter() to get unsuccessful students

const unsuccessfulStudents = students.filter((student) => {
    return !isSuccessful(student);
});

console.log("===============Unsuccessful Students===============");
console.log(unsuccessfulStudents);

// 4. Using reduce() to calculate the class average

const totalAverage = students.reduce((total, student) => {
    return total + calculateAverage(student.grade);
}, 0) / students.length;

console.log("****************************************");
console.log(`The class average is: ${totalAverage}`);

// 5. Using find() to find Eva

const findStudent = students.find((student) => {
    return student.name === "Eva";
});

console.log("====================================");
console.table(findStudent);

// 6. Using findIndex() to find Charlie's index

const studentIndex = students.findIndex((student) => {
    return student.name === "Charlie";
});

console.log("====================================");
console.log(`Charlie's index is: ${studentIndex}`);

// 7. Using some() to check if any student has an average below 60

const hasLowAverage = students.some((student) => {
    return calculateAverage(student.grade) < 60;
});

console.log("====================================");
console.log(
    `Is there at least one student whose average is below 60? ${hasLowAverage}`
);

// 8. Using every() to check if all students are older than 18

const allOlderThan18 = students.every((student) => {
    return student.age > 18;
});

console.log("====================================");
console.log(`Are all students older than 18? ${allOlderThan18}`);

// 9. Using sort() to sort students by average in descending order

// Create a copy first because sort() modifies the original array.

const sortedStudents = [...students].sort((a, b) => {
    return calculateAverage(b.grade) - calculateAverage(a.grade);
});

console.log("====================================");
console.log("Students sorted by their averages:");

sortedStudents.forEach((student) => {
    console.log(
        `${student.name}: ${calculateAverage(student.grade)}`
    );
});

console.log("************* Thanks Eng. Muhammed Ali *************");