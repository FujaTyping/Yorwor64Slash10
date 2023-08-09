function Indev() {
    Swal.fire({
        icon: 'question',
        title: 'ช้าก่อน !!',
        html: '<p>ก่อนที่จะเข้าหลังบ้าน เราต้องตรวจสอบว่า <b>คุณเป็นหุ่นยนต์รึเปล่า ?</b></p><div style="display: flex;justify-content: center;" id="Witturnstile"></div>',
        showConfirmButton: false,
        /* Custom animation */
        showClass: {
            popup: 'animate__animated animate__bounceInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__bounceOutDown'
        },
    })
}
