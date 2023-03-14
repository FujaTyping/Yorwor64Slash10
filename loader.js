window.onload = function() {
    const Load = document.getElementById("loader")
    const App = document.getElementById("app")
    const Bg = document.getElementById("bg")

    Load.style.display = "none";
    Bg.style.display = "block";
    swal("📢 ประกาศ", "ตอนนี้เว็ปยังทำไม่เสร็จทีนะ !", "info");
};