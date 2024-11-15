const {getList , getDetailsById , create , update , deleteStudentById} = require("../services/student.services")
const getListStudent = (req, res) => {
    const studentList = getList();
    if(studentList){
        return res.status(200).send(studentList)
    }
    return res.status(404).send("Not Found")
};

const getDetails = (req, res) => {
    const { id } = req.params;
    const student = getDetailsById(id);
    if(student){
        return res.status(200).send(student)
    }
    return res.status(404).send("Not Found")
};

const createStudent = (req, res) => {
    let student = req.body;
    const newStudent = create(student);
    return res.status(201).send(newStudent);
}
const updateStudent = (req, res) => {
    const { id } = req.params
    const student = req.body
    const updateStudent = update(id , student);
    if(updateStudent){
        return res.status(200).send(updateStudent);
    }
    return res.status(404).send("Not Found")
}
const deleteStudent = (req, res) => {
    const { id } = req.params
    const isSucess = deleteStudentById(id);
    if(isSucess){
        return res.status(200).send("Delete success student " + id);
    }
    return res.status(404).send("Not Found")
}
module.exports = {getListStudent , getDetails ,
     createStudent , updateStudent , deleteStudent}