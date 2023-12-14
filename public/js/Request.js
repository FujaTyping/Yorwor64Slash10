function sendWebhook() {
    const Want = document.getElementById("floatingInputVa").value;
    const Name = document.getElementById("floatingInputName").value;
    const Email = document.getElementById("floatingInputEmail").value;
    var key = decodeshif("myyux://inxhtwi.htr/fun/bjgmttpx/1123943885098450944/YDec2uXH15H3ys3ij8gLjbUXvcYWourlGoIIR6cJdAvkyUQnZSCCUYzJQfwXxsPJSsxL", "5")
    const webhookUrl = `${key}`;

    const Sent = document.getElementById("warninfo");
    if (Name == "" || Email == "" || Want == "") {
        Sent.style.display = "block";
    } else {
        Sent.style.display = "none";
        const payload = {
            "embeds": [
                {
                    "title": "Yw64Sl10 - Feedback  📩",
                    "description": `${Want}`,
                    "color": 36863,
                    "fields": [
                        {
                            "name": "คำขอโดย",
                            "value": `${Name}`,
                            "inline": true
                        },
                        {
                            "name": "อีเมล",
                            "value": `${Email}`,
                            "inline": true
                        }
                    ]
                }
            ],
        };

        Swal.fire({
            icon: 'question',
            title: 'ต้องการส่งจริงๆใช่ไหม ?',
            text: "ถ้ากดส่งแล้วจะแก้คำขอไม่ได้นะ !",
            showDenyButton: true,
            confirmButtonText: "ส่งเลย",
            denyButtonText: `คิดดูก่อน`,
            /* Custom animation */
            showClass: {
                popup: 'animate__animated animate__rollIn'
            },
            hideClass: {
                popup: 'animate__animated animate__hinge'
            },
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'warning',
                    title: 'กำลังส่งข้อมูล',
                    text: 'กรุณารอสักครู่...',
                    showConfirmButton: false,
                    /* Custom animation */
                    showClass: {
                        popup: 'animate__animated animate__rollIn'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__hinge'
                    },
                })

                axios.post(webhookUrl, payload)
                    .then(response => {
                        Swal.fire({
                            icon: 'success',
                            title: 'ส่งข้อมูลแล้ว',
                            text: 'กรุณารอการตอบกลับทาง email ที่ให้ไว้',
                            showConfirmButton: false,
                            /* Custom animation */
                            showClass: {
                                popup: 'animate__animated animate__rollIn'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__hinge'
                            },
                        })
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'ไม่สามารถส่งข้อมูลได้',
                            text: `เกิดอะไรขึ้น ? ทั้งหมดคือที่เรารู้ ! : ${error}`,
                            showConfirmButton: false,
                            /* Custom animation */
                            showClass: {
                                popup: 'animate__animated animate__rollIn'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__hinge'
                            },
                        })
                    });
            }
        })
    }

}