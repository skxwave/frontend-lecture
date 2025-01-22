function createStudent(name, age, grades) {
    return {
        name: name,
        age: age,
        grades: grades
    };
}

function printData(student) {
    console.log("Name:", student.name, "| Type:", typeof student.name);
    console.log("Age:", student.age, "| Type:", typeof student.age);
    console.log("Grades:", student.grades.join(", "), "| Type:", Array.isArray(student.grades) ? "array" : typeof student.grades);
}

function calculateAverageGrade(student) {
    const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    console.log("Average grade:", average.toFixed(2));
}

const student = createStudent("Student", 20, [85, 90, 78]);
printData(student);
calculateAverageGrade(student);
