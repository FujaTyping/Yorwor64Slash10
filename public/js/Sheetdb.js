function APIhomework() {
    const Pass = decodeshif("KYXKX", 5)
    let Subject = ""
    let Alt = ""
    let Time = ""

    Swal.fire({
        icon: 'warning',
        title: "รหัสผ่านเพื่อแก้ไข้ฐานข้อมูล !!",
        text: "ถ้าไม่รู้ / จำไม่ได้ ลองถามรองฝ่ายการเรียนดูสิ !!",
        input: "password",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "ยืนยัน !",
        cancelButtonText: "ฉันมาทำอะไรที่นี้ ?",
        showLoaderOnConfirm: true,
        /* Custom animation */
        showClass: {
            popup: 'animate__animated animate__backInLeft'
        },
        hideClass: {
            popup: 'animate__animated animate__backOutRight'
        },
        preConfirm: (login) => {
            if (login !== Pass) {
                Swal.showValidationMessage(
                    `คิดจะทำอะไรหนะ ??`
                )
            }
        },
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'question',
                title: "ใส่วิชาของการบ้าน",
                text: "ตัวอย่าง : ชื่อวิชา (วันที่)",
                input: "text",
                inputAttributes: {
                    autocapitalize: "off"
                },
                showCancelButton: true,
                confirmButtonText: "ไปต่อๆ",
                cancelButtonText: "กดผิดๆ",
                showLoaderOnConfirm: true,
                /* Custom animation */
                showClass: {
                    popup: 'animate__animated animate__backInLeft'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutRight'
                },
                preConfirm: (subject) => {
                    if (subject == "") {
                        Swal.showValidationMessage(
                            `เขียนดีๆ สิ :(`
                        )
                    } else {
                        Subject = subject
                    }
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'question',
                        title: "ใส่รายละเอียดของงาน",
                        text: "เว้นวรรคให้ดีละ :D",
                        input: "text",
                        inputAttributes: {
                            autocapitalize: "off"
                        },
                        confirmButtonText: "ไปต่อๆ",
                        showLoaderOnConfirm: true,
                        /* Custom animation */
                        showClass: {
                            popup: 'animate__animated animate__backInLeft'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__backOutRight'
                        },
                        preConfirm: (alt) => {
                            if (alt == "") {
                                Swal.showValidationMessage(
                                    `เขียนดีๆ สิ :(`
                                )
                            } else {
                                Alt = alt
                            }
                        },
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                icon: 'question',
                                title: "ใส่วันกำหนดส่งของงาน",
                                text: "ตัวอย่าง : วว / ดด / ปป",
                                input: "text",
                                inputAttributes: {
                                    autocapitalize: "off"
                                },
                                confirmButtonText: "ส่งรายงานการบ้าน",
                                showLoaderOnConfirm: true,
                                /* Custom animation */
                                showClass: {
                                    popup: 'animate__animated animate__backInLeft'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__backOutRight'
                                },
                                preConfirm: (time) => {
                                    if (time == "") {
                                        Swal.showValidationMessage(
                                            `เขียนดีๆ สิ :(`
                                        )
                                    } else {
                                        Time = time
                                    }
                                },
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire({
                                        title: "ต้องการส่งจริงๆใช่ไหม ?",
                                        text: "ถ้าส่งแล้วแก้คำขอไม่ได้นะ !!",
                                        icon: "warning",
                                        showCancelButton: true,
                                        cancelButtonText: "คิดดูก่อนนะ",
                                        confirmButtonText: "โอเค ส่งเลย !",
                                        showLoaderOnConfirm: true,
                                        /* Custom animation */
                                        showClass: {
                                            popup: 'animate__animated animate__backInLeft'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__flipOutX'
                                        },
                                        preConfirm: async (Send) => {
                                            try {
                                                portwork(Subject, Alt, Time)
                                            } catch (error) {
                                                Swal.showValidationMessage(`ต้องมีอะไรผิดผลาดตรงไหน : ${error}`);
                                            }
                                        },
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                title: "ส่งข้อมูลสำเร็จ !!",
                                                html: `กรุณาไปดูข้อมูลในหน้าการบ้าน :D<br>ข้อมูลที่ส่งไปคือ : ${Subject} , ${Alt} , ${Time}`,
                                                icon: "success",
                                                confirmButtonText: "ใช่เลย !",
                                                /* Custom animation */
                                                showClass: {
                                                    popup: 'animate__animated animate__backInLeft'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__flipOutX'
                                                },
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });

}

async function portwork(Hw, De, Ti) {
    const url = decodeshif("oaawz://zollaki.pv/hwp/c1/ths42yf2evvdr", 7);

    await axios.post(url, {
        data: [
            {
                'วิชา': Hw,
                'การบ้าน': De,
                'วันกำหนดส่ง': Ti
            }
        ]
    }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
}