document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // ยกเลิกการส่งฟอร์มเริ่มต้น

    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat-password").value;

    if (password !== repeatPassword) {
        alert("Password และ Repeat Password ต้องตรงกัน!");
    } else {
        // แสดงอนิเมชันการโหลด
        document.getElementById("loading").style.display = "flex";
        
        // หลังจากแสดงอนิเมชัน โหลด 2 วินาทีแล้วเปลี่ยนไปยัง welcome.html
        setTimeout(function() {
            window.location.href = "welcome.html";
        }, 2000);
    }
});
