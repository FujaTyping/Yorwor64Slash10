function Indev() {
    Swal.fire({
        icon: 'question',
        title: 'ช้าก่อน !!',
        html: '<p>ก่อนที่จะเข้าหลังบ้าน เราต้องตรวจสอบว่า <b>คุณเป็นหุ่นยนต์รึเปล่า ?</b></p><div style="text-align: center; display: inline-block;" class="g-recaptcha" data-sitekey="6Le3IbkmAAAAAORT2eVeQmU6_kl1ryfnIQqX9oy7"></div>',
        confirmButtonColor: 'rgb(45, 118, 255)',
        confirmButtonText: 'ฉันเป็นหุ่นยนต์ !',
        /* Custom animation */
        showClass: {
            popup: 'animate__animated animate__bounceInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__bounceOutDown'
        },
        preConfirm: () => {
            return new Promise((resolve) => {
                const checkbox = document.querySelector('.g-recaptcha');
                const sitekey = checkbox.getAttribute('data-sitekey');
                const response = grecaptcha.getResponse();

                if (response.length === 0) {
                    Swal.showValidationMessage('ห๊ะ ! คุณเป็นหุ่นยนต์ละ');
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'ยืนยันเรียบร้อย !',
                text: 'กำลัง Redriect ไปยังหลังบ้าน',
                confirmButtonColor: 'rgb(45, 118, 255)',
                confirmButtonText: "Let's go !",
                /* Custom animation */
                showClass: {
                    popup: 'animate__animated animate__bounceInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__bounceOutDown'
                },
            }).then((result) => {
                window.location.href = '/backend.html/?Backend=Confirmed';
            });
        }
    });
}
