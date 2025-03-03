function saveName() {
    var username = document.getElementById("username").value;
    if (username.trim() !== "") {
        localStorage.setItem("visitorName", username);
        window.location.href = "home.html"; // Chuyển hướng sang trang chính
    } else {
        alert("Vui lòng nhập tên!");
    }
}