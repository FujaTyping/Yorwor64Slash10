function NotOP () {
    swal("❌ ผิดผลาด", "ตอนนี้ระเบียนผลการเรียนยังไม่เปิดนะ", "error");
};

function ClassWhite () {
    swal("❌ ผิดผลาด", "ยังไม่มีข้อมูลห้องเรียนสีข้าวเลย", "error");
};

function NoticeLog () {
    swal("ℹ ข้อมูล", "ล็อกอินสำหรับผู้ดูและระบบเท่านั้น", "info");
};

document.onreadystatechange = function () {
    window.scrollTo(0, 0);
}

window.beforeunload = function () {
    window.scrollTo(0, 0);
}