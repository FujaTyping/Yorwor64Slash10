function APIhomework() {
    const Pass = SF("RlRTRlM=")
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
    }).then(async (result) => {
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
                                                await portwork(Subject, Alt, Time)
                                            } catch (error) {
                                                Swal.showValidationMessage(`ต้องมีอะไรผิดผลาดตรงไหน : ${error}`);
                                            }
                                        },
                                    })
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
        .then(async (response) => {
            /*console.log(response.data)*/
            Swal.fire({
                title: "ส่งข้อมูลสำเร็จ !!",
                html: `กรุณาไปดูข้อมูลในหน้าการบ้าน :D<br>ข้อมูลที่ส่งไปคือ : ${Hw} , ${De} , ${Ti}`,
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

            await HwpushNoti(Hw)
            /*new Notification('Yorwor64Slash10', { body: `วันนี้มีการบ้านวิชา ${Hw} ด้วยละ ~ อย่าลืมทำกันน้า!!` });*/
        })
        .catch((error) => {
            /*console.error(error)*/
            Swal.fire({
                title: "ไม่สามารถส่งข้อมูลได้ :(",
                html: `ต้องมีอะไรผิดผลาดตรงไหน : ${error}`,
                icon: "error",
                confirmButtonText: "แย่จัง !",
                /* Custom animation */
                showClass: {
                    popup: 'animate__animated animate__shakeX'
                },
                hideClass: {
                    popup: 'animate__animated animate__flipOutX'
                },
            });
        });
}

async function HwpushNoti(Hw) {
    const apiKey = decodeshif("87s1r12676wt0rtu418sw6153v4v5v5w", 17);
    const apiUrl = 'https://api.pushalert.co/rest/v1/send';

    const data = {
        data: [
            {
                title: 'Yorwor64Slash10',
                message: `ตอนนี้มีการบ้านวิชา ${Hw} มาใหม่ละ ~~ อย่าลืมทำกันน้า >-<`,
                icon: 'https://yorwor.fujatyping.dev/cdn/Yorwor.png',
                url: 'https://yorwor.fujatyping.dev/page/homework'
            }
        ]
    };

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `api_key=${apiKey}`
    };

    await axios.post(apiUrl, data, { headers })
        .then(response => {
            console.log('Push notification : send !');
        })
        .catch(error => {
            console.error(`Push notification error : ${error}`);
        });

}