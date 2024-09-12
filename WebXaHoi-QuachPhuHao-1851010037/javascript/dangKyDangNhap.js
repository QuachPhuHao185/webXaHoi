function DK(){
    event.preventDefault();
    var usernames = document.getElementById("usernames").value;
    var pwd = document.getElementById("pwd").value;
    var repwd = document.getElementById("repwd").value;
    var gender = document.getElementById("gender").value;
    var birthday = document.getElementById("birthday").value;
    var email = document.getElementById("email").value;
    if (pwd !== repwd) {
        alert("Mật khẩu không khớp. Vui lòng kiểm tra lại.");
        return;
    }
    var user = {
        usernames : usernames,
        pwd : pwd,
        gender : gender,
        birthday : birthday,
        email : email,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(usernames, json); 
    alert("Đăng ký thành công!");
    window.location.href="index.html";
}
function DN(){
    event.preventDefault() // Ngăn chặn hành động mặc định của biểu mẫu
    var usernames = document.getElementById("usernames").value;
    var pwd = document.getElementById("pwd").value;
    var user = localStorage.getItem(usernames);
    var data = JSON.parse(user);
    if(user == null){
        alert("vui lòng nhập tên tài khoản hoặt pass!");
    }else if(usernames == data.usernames && pwd == data.pwd){        
        localStorage.setItem("currentUser", usernames);
        alert("đăng nhập thành công");
        window.location.href = "homePage.html"; // Chuyển hướng sau khi đăng nhập thành công
    }else{
        alert("Đăng Nhập thất bại");
    }
}
