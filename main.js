let studentList = new StudentList();
let validate = new Validation();


const getEle = (id) => {
    return document.getElementById(id);
}
var calAverageScore = (math, physic, chemical) => {
    let averageScore = (Number(math) + Number(physic) + Number(chemical)) / 3;
    averageScore = (Math.round(averageScore * 100) / 100);
    return averageScore;
}
var ranked = function (value) {
    if (value <= 10 && value >= 8) {
        return "Giỏi";
    } else if (value < 8 && value >= 6.5) {
        return "Khá";
    } else if (value < 6.5 && value >= 5) {
        return "TB Khá";
    } else {
        return "Yếu";
    }
}
const getStudentInfo = () => {
    let studentID = getEle("masv").value;
    let studentName = getEle("hoten").value;
    let studentCMND = getEle("cmnd").value;
    let studentPhone = getEle("sdt").value;
    let studentEmail = getEle("email").value;
    let mathScore = getEle("Toan").value;
    let physicScore = getEle("Ly").value;
    let chemicalScore = getEle("Hoa").value;
    var averageScore = calAverageScore(mathScore, physicScore, chemicalScore);
    var title = ranked(averageScore);
    let infoList = [studentID, studentName, studentCMND, studentPhone, studentEmail, mathScore, physicScore, chemicalScore, averageScore, title];
    return infoList;
}
const showInfo = (list) => {
    getEle("tbodySinhVien").innerHTML = list.renderList();
}
const eraseInput = () => {
    getEle("masv").value = "";
    getEle("hoten").value = "";
    getEle("cmnd").value = "";
    getEle("sdt").value = "";
    getEle("email").value = "";
    getEle("Toan").value = "";
    getEle("Ly").value = "";
    getEle("Hoa").value = "";
}
const validateID = () => {
    let infoList = getStudentInfo();
    validate.isEmpty(infoList[0], getEle("masv"), getEle("ID__isEmpty"));
    validate.isAllNumber(infoList[0], getEle("masv"), getEle("ID__isNumber"));
}
const validateName = () => {
    let infoList = getStudentInfo();
    validate.isEmpty(infoList[1], getEle("hoten"), getEle("name__isEmpty"));
    validate.isAllLetters(infoList[1], getEle("hoten"), getEle("name__isLetters"));
}
const validateCMND = () => {
    let infoList = getStudentInfo();
    validate.isEmpty(infoList[2], getEle("cmnd"), getEle("cmnd__isEmpty"));
    validate.isAllNumber(infoList[2], getEle("cmnd"), getEle("cmnd__isNumber"));
}
const validatePhone = () => {
    let infoList = getStudentInfo();
    validate.isEmpty(infoList[3], getEle("sdt"), getEle("phone__isEmpty"));
    validate.isAllNumber(infoList[3], getEle("sdt"), getEle("phone__isNumber"));
}
const addStudent = () => {
    let infoList = getStudentInfo();
    let student = new Student(infoList[0], infoList[1], infoList[2], infoList[3], infoList[4], infoList[5], infoList[6], infoList[7], infoList[8], infoList[9]);
    //Check empty value
    let valid = validate.isEmpty(infoList[0], getEle("masv"), getEle("ID__isEmpty"))
        & validate.isEmpty(infoList[1], getEle("hoten"), getEle("name__isEmpty"))
        & validate.isEmpty(infoList[2], getEle("cmnd"), getEle("cmnd__isEmpty"))
        & validate.isEmpty(infoList[3], getEle("sdt"), getEle("phone__isEmpty"))
        & validate.isEmpty(infoList[5], getEle("Toan"), getEle("math__isEmpty"))
        & validate.isEmpty(infoList[6], getEle("Ly"), getEle("physic__isEmpty"))
        & validate.isEmpty(infoList[7], getEle("Hoa"), getEle("chemical__isEmpty"));
    //Check number
    valid &= validate.isAllNumber(infoList[3], getEle("sdt"), getEle("phone__isNumber")) & validate.isAllNumber(infoList[2], getEle("cmnd"), getEle("cmnd__isNumber")) & validate.isAllNumber(infoList[0], getEle("masv"), getEle("ID__isNumber"));
    //Check letter
    valid &= validate.isAllLetters(infoList[1].trim(), getEle("hoten"), getEle("name__isLetters"))
    //Check email
    valid &= validate.isEmail(infoList[4], getEle("email"), getEle("email__isEmpty"))
    //Check length
    valid &= validate.lengthVerify(infoList[0], getEle("masv"), getEle("ID__length"));
    if (!valid) {
        alert("Một trường nào đó nhập sai");
        return false;
    }
    studentList.addStudent(student);
    showInfo(studentList);
    eraseInput();
}

const deleteStudents = () => {
    let listDelete = studentList.findStudentsID("tdCheckBox");
    studentList.deleteStudents(listDelete);
    showInfo(studentList);
}
const searchByName = () => {
    let keyWord = getEle("tukhoa").value;
    let searchList = new StudentList()
    searchList.stdList = studentList.searchByName(keyWord);
    showInfo(searchList);
}
const showInfoToChange = (id) => {
    let stdCurrent = studentList.findID(id);
    getEle("masv").value = stdCurrent.id;
    getEle("hoten").value = stdCurrent.name;
    getEle("cmnd").value = stdCurrent.cmnd;
    getEle("sdt").value = stdCurrent.phone;
    getEle("email").value = stdCurrent.email;
    getEle("Toan").value = stdCurrent.math;
    getEle("Ly").value = stdCurrent.physic;
    getEle("Hoa").value = stdCurrent.chemical;
}

const saveNewInfo = () => {
    let infoList = getStudentInfo();
    let student = new Student(infoList[0], infoList[1], infoList[2], infoList[3], infoList[4], infoList[5], infoList[6], infoList[7], infoList[8], infoList[9]);
    //Check empty value
    let valid = validate.isEmpty(infoList[0], getEle("masv"), getEle("ID__isEmpty"))
        & validate.isEmpty(infoList[1], getEle("hoten"), getEle("name__isEmpty"))
        & validate.isEmpty(infoList[2], getEle("cmnd"), getEle("cmnd__isEmpty"))
        & validate.isEmpty(infoList[3], getEle("sdt"), getEle("phone__isEmpty"))
        & validate.isEmpty(infoList[5], getEle("Toan"), getEle("math__isEmpty"))
        & validate.isEmpty(infoList[6], getEle("Ly"), getEle("physic__isEmpty"))
        & validate.isEmpty(infoList[7], getEle("Hoa"), getEle("chemical__isEmpty"));
    //Check number
    valid &= validate.isAllNumber(infoList[3], getEle("sdt"), getEle("phone__isNumber")) & validate.isAllNumber(infoList[2], getEle("cmnd"), getEle("cmnd__isNumber")) & validate.isAllNumber(infoList[0], getEle("masv"), getEle("ID__isNumber"));
    //Check letter
    valid &= validate.isAllLetters(infoList[1].trim(), getEle("hoten"), getEle("name__isLetters"))
    //Check email
    valid &= validate.isEmail(infoList[4], getEle("email"), getEle("email__isEmpty"))
    //Check length
    valid &= validate.lengthVerify(infoList[0], getEle("masv"), getEle("ID__length"))
    if (!valid) {
        alert("Một trường nào đó nhập sai");
        return false;
    }
    studentList.changeStudentInfo(student);
    showInfo(studentList);
    eraseInput();
}
const SetStorage = () => {
    var JSONlist = JSON.stringify(studentList.stdList);
    localStorage.setItem("list", JSONlist);
}
const GetStorage = () => {
    var JSONList = localStorage.getItem("list");
    var listOb = JSON.parse(JSONList);
    studentList.stdList = listOb;
    showInfo(studentList);
}

GetStorage();


