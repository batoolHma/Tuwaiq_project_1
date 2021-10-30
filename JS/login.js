function store() {
    let name = document.getElementById('name');
    let pw = document.getElementById('pw');
   
    if (name.value.length == 0) {
        alert('Please fill in email');

    } else if (pw.value.length == 0) {
        alert('Please fill in password');

    } else if (name.value.length == 0 && pw.value.length == 0) {
        alert('Please fill in email and password');

    }
    
    else {
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//checking
function check() {
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    let userName = document.getElementById('name');
    let userPw = document.getElementById('pw');
    console.log(userName.value);
    console.log(userPw)

    if (userName.value == storedName && userPw.value == storedPw) {
        console.log("passed");
        window.location.href = "./homepage.html"; //"../HTML/homepage.html";
    } else {
        alert('Error on login');

    }
}