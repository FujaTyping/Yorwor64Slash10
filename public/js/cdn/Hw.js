function NoCsv() {
    Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดผลาด',
        text: 'ดูเหมือนว่าจะไม่มีข้อมูลในฐานข้อมูลนะ :(',
        confirmButtonText: 'แย่จัง !',
        /* Custom animation */
        showClass: {
            popup: 'animate__animated animate__rubberBand'
        },
        hideClass: {
            popup: 'animate__animated animate__backOutDown'
        },
    })
}