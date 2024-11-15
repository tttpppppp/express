const listStudent = [
    {
        id: 1,
        username: "Trần Tiến Phúc",
        age: 20,
        class: "CNTT-2"
    },
    {
        id: 2,
        username: "Trần Thị Mỹ Quỳnh",
        age: 21,
        class: "CNTT-1"
    },
    {
        id: 3,
        username: "Nguyễn Thị Thu Hà",
        age: 22,
        class: "CNTT-3"
    },
];
const getList = () =>{
    if(listStudent){
        return listStudent;
    }
    return false;
}

const getDetailsById = (id) =>{
    const index = listStudent.findIndex((student) => {
        return student.id == id;
    })
    if (index != -1) {
        const student = listStudent[index];
        return student;
    } 
    return false;
}
const create = (student) =>{
    student = {
        id: Math.random(),
        ...student
    }
    listStudent.push(student);
    return student;
}
const update = (id , student) =>{
    const index = listStudent.findIndex((student) => {
        return student.id == id;
    })
    if (index == -1) {
        return false;
    }
    const oldStudent = listStudent[index];
    const newStudent = { ...oldStudent, ...student}
    listStudent[index] = newStudent;
    return newStudent;
}
const deleteStudentById = (id) =>{
    const index = listStudent.findIndex((student) => {
        return student.id == id;
    })
    if (index == -1) {
       return false;
    }
    listStudent.splice(index, 1);
    return true;
}
module.exports = {getList , getDetailsById , create , update , deleteStudentById}