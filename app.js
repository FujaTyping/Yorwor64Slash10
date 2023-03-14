function NotOP () {
    swal("❌ ผิดผลาด", "ตอนนี้ระเบียนผลการเรียนยังไม่เปิดนะ", "error");
};

document.onreadystatechange = function () {
    window.scrollTo(0, 0);
}

window.beforeunload = function () {
    window.scrollTo(0, 0);
}