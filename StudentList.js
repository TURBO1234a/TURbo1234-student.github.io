class StudentList {
    constructor() {
        this.stdList = [];
    }
    addStudent(std) {
        this.stdList.push(std);
    }
    renderList() {
        let content = "";
        content = this.stdList.reduce(function (stdInfo, item, index) {
            stdInfo += `
            <tr onclick="showInfoToChange(${item.id})" class="hover">
                <td>
                <input class="tdCheckBox" type="checkbox" id="${item.id}">
                </td>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.cmnd}</td>
                <td>${item.phone}</td>
                <td>${item.averageScore}</td>
                <td>${item.status}</td>
			</tr>
            `
            return stdInfo;
        }, "")
        return content;
    }
    deleteStudents(list) {
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < this.stdList.length; j++) {
                if (list[i] === this.stdList[j].id) {
                    this.stdList.splice(j, 1);
                }
            }
        }
    }
    findStudentsID(target) {
        let deleteList = [];
        let list = document.getElementsByClassName(target);
        for (let i = 0; i < list.length; i++) {
            if (list[i].checked) {
                deleteList.push(list[i].id);
            }
        }
        return deleteList;
    }
    findID(target) {
        for (let i = 0; i < this.stdList.length; i++) {
            let stdCurrent = this.stdList[i];
            if (stdCurrent.id == target) {
                return stdCurrent;
            }
        }
    }
    searchByName(value) {
        let list = [];
        for (let i = 0; i < this.stdList.length; i++) {
            let name = this.stdList[i].name.trim().toLowerCase();
            let check = name.search(value);
            if (check != -1) {
                list.push(this.stdList[i]);
            }
        }
        return list;
    }
    changeStudentInfo(stdUpdate) {
        for (let i = 0; i < this.stdList.length; i++) {
            let stdCurrent = this.stdList[i];
            if (stdCurrent.id == stdUpdate.id) {
                stdCurrent.id = stdUpdate.id;
                stdCurrent.name = stdUpdate.name;
                stdCurrent.cmnd = stdUpdate.cmnd;
                stdCurrent.phone = stdUpdate.phone;
                stdCurrent.email = stdUpdate.email;
                stdCurrent.math = stdUpdate.math;
                stdCurrent.chemical = stdUpdate.chemical;
                stdCurrent.physic = stdUpdate.physic;
                stdCurrent.averageScore = stdUpdate.averageScore;
                stdCurrent.status = stdUpdate.status;
            }
        }
    }
    isUnique(value) {
        var count = 0;
        for (let i = 0; i < this.stdList.length; i++) {
            let stdCurrent = this.stdList[i];
            if (stdCurrent.id == value) {
                alert("A student already has that ID");
                return false;
            } 
            
        }
        return true;
    }
}