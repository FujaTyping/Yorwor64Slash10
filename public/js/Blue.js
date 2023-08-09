function IsYou() {
    var key = decodeshif("Nbibsbk#1", "1")
    const BT = document.getElementById('Permission')
    const ElementCon = document.getElementById('Content')

    Swal.fire({
        icon: 'question',
        title: 'ขอสิทธ์เข้าถึง ?',
        text: "รหัสสำหรับการเข้าถึงเนื้อหา",
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        confirmButtonText: 'ยืนยัน',
        showDenyButton: true,
        denyButtonText: `เราอยู่สีอื่นหนะ`,
        preConfirm: (login) => {
            if (login !== key) {
                Swal.showValidationMessage(
                    `อืม.. spy นี่หว่า`
                )
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            BT.style.display = 'none'
            ElementCon.style.display = 'block'
            Swal.fire({
                icon: 'success',
                title: 'ยืนยันสำเร็จ',
                text: "ยืนดีต้อนรับสมาชิกสีน้ำเงินมหาราช",
                confirmButtonText: 'โอเคร',
            })
        }
    })
}