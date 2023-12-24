const loginForm = document.querySelector(".login-form");

const validateInput = (inputObj) => {
    const { username, password } = inputObj;

    if (username.trim() === "" || password.trim() === "") {
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("password").style.borderColor = "red";
        return "โปรดกรอกทั้งชื่อผู้ใช้และรหัสผ่าน";
    }

    const checkusername = username.trim();
    if (checkusername.length <= 3) {
        document.getElementById("username").style.borderColor = "red";
        return "ชื่อผู้ใช้ต้องมีอย่างน้อย 4 ตัวอักษร";
    }

    const checkpassword = password.trim();
    if (checkpassword.length < 4 || !/[a-zA-Z]/.test(checkpassword)) {
        document.getElementById("password").style.borderColor = "red";
        return "รหัสผ่านต้องมีอย่างน้อย 4 ตัวอักษร และต้องมีอักษรอย่างน้อย 1 ตัว";
    }

    
    const correctUsername = "testcode";
    const correctPassword = "codetest1234";

    if (username !== correctUsername || password !== correctPassword) {
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("password").style.borderColor = "red";
        return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง โปรดลองอีกครั้ง";
    }

    document.getElementById("username").style.borderColor = "";
    document.getElementById("password").style.borderColor = "";

    return ""; 
};

const redirecttoexampIecom = () => {
    window.location.href = "https://www.example.com";
};

const loginSuccesssful = () => {
    alert("เข้าสู่ระบบสำเร็จ");
    redirecttoexampIecom();
};

const hdlLogin = (e) => {
    e.preventDefault();

    let allInput = loginForm.elements;
    let inputObj = {};
    for (let el of loginForm.elements) {
        inputObj[el.id] = el.value;
    }

    const validationError = validateInput(inputObj);

    if (validationError) {
        alert(validationError);
    } else {
        loginSuccesssful();
    }
};

loginForm.addEventListener("submit", hdlLogin);
