function NotOP () {
    Swal.fire({
        icon: 'error',
        title: '❌ ผิดผลาด',
        text: 'ตอนนี้ระเบียนผลการเรียนยังไม่เปิดนะ',
        confirmButtonText: 'แย่จัง !'
    })
};

function ClassWhite () {
    Swal.fire({
        icon: 'error',
        title: '❌ ผิดผลาด',
        text: 'ยังไม่มีข้อมูลห้องเรียนสีข้าวเลย',
        confirmButtonText: 'โอเค !'
    })
};

function NoClass () {
    Swal.fire({
        icon: 'error',
        title: '❌ ผิดผลาด',
        text: 'ยังไม่เปิดเทอมเลย จะมีรหัส Classroom ได้ไง',
        confirmButtonText: 'โอเค !'
    })
};

function LoginNotopen () {
    Swal.fire({
        icon: 'error',
        title: '❌ ผิดผลาด',
        text: 'ตอนนี้ระบบ ล็อกอิน ยังไม่เปิดนะ !',
        confirmButtonText: 'แย่จัง !'
    })
};

function NoticeLog () {
    Swal.fire({
        icon: 'info',
        title: 'ℹ ข้อมูล',
        text: 'ล็อกอินสำหรับผู้ดูและระบบเท่านั้น',
        confirmButtonText: 'โอเค เข้าใจแล้ว !'
    })
};

function requestPermission() {  
    console.log('Requesting permission...');
    Notification.requestPermission().then(
        (permission) => {
        if (permission === 'granted') {
        console.log('Notification permission granted.');
        }
    }
    )
}

document.onreadystatechange = function () {
    window.scrollTo(0, 0);
}

window.beforeunload = function () {
    window.scrollTo(0, 0);
}