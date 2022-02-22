class Validation {
    constructor() {

    }
    isEmpty(value, targetDom, tagNotice) {
        if (value === "") {
            targetDom.style.borderColor = "red";
            tagNotice.style.display = "block";
            tagNotice.style.color = "red";
            tagNotice.innerHTML = targetDom.name + "must be filled in";
            return false;
        } else {
            targetDom.style.borderColor = "green";
            tagNotice.style.display = "none"
            return true;
        }
    }
    isAllNumber(value, targetDom, tagNotice) {
        let regex = /^[0-9]+$/;
        if (!regex.test(value)) {
            targetDom.style.borderColor = "red";
            tagNotice.style.display = "block";
            tagNotice.style.color = "red";
            tagNotice.innerHTML = targetDom.name + "must be number";
            return false;
        } else {
            targetDom.style.borderColor = "green";
            tagNotice.style.display = "none"
            return true;
        }
    }
    isAllLetters(value, targetDom, tagNotice) {
        let regex = /^[a-zA-Z ]+$/;
        if (!regex.test(value)) {
            targetDom.style.borderColor = "red";
            tagNotice.style.display = "block";
            tagNotice.style.color = "red";
            tagNotice.innerHTML = targetDom.name + "must be letters";
            return false;
        } else {
            targetDom.style.borderColor = "green";
            tagNotice.style.display = "none"
            return true;
        }
    }
    isEmail(value, targetDom, tagNotice) {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(value)) {
            targetDom.style.borderColor = "red";
            tagNotice.style.display = "block";
            tagNotice.style.color = "red";
            tagNotice.innerHTML = targetDom.name + "isn't available";
            return false;
        } else {
            targetDom.style.borderColor = "green";
            tagNotice.style.display = "none"
            return true;
        }
    }
    lengthVerify(value, targetDom, tagNotice) {
        if (value.length != 4) {
            targetDom.style.borderColor = "red";
            tagNotice.style.display = "block";
            tagNotice.style.color = "red";
            tagNotice.innerHTML = targetDom.name + "has 4 digits only";
            return false;
        } else {
            targetDom.style.borderColor = "green";
            tagNotice.style.display = "none"
            return true;
        }
    }
}