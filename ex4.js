var students = [ 
    { name: 'Bill Gates', grade: 10},
    { name: 'Steve Jobs', grade : 8},
    { name: 'Suzanne Collins', grade : 9}
    ];


    students.sort((a, b) => b.grade - a.grade);

    students.forEach((students) => {
    console.log(students.name ,students.grade);
});