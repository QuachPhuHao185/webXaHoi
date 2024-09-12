// Lấy username từ localStorage hoặc sessionStorage
var username = localStorage.getItem("currentUser");

// Lấy thông tin người dùng từ localStorage
var user = JSON.parse(localStorage.getItem(username));

// Hiển thị thông tin trên trang hồ sơ
if (user) {
    document.getElementById("usernameDisplay").textContent = user.usernames;
    document.getElementById("usernameInfo").textContent = user.usernames;
    document.getElementById("emailInfo").textContent = user.email;
    document.getElementById("genderInfo").textContent = user.gender;
    document.getElementById("birthdayInfo").textContent = user.birthday;
} else {
    alert("Không tìm thấy thông tin người dùng.");
}