function sendWebhook() {
    const Want = document.getElementById("floatingInputVa").value;
    const Name = document.getElementById("floatingInputName").value;
    const Email = document.getElementById("floatingInputEmail").value;

    var key = decodeshif("myyux://inxhtwi.htr/fun/bjgmttpx/1123943885098450944/YDec2uXH15H3ys3ij8gLjbUXvcYWourlGoIIR6cJdAvkyUQnZSCCUYzJQfwXxsPJSsxL", "5")
    const webhookUrl = `${key}`;
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
        icon: 'warning',
        title: 'กำลังส่งข้อมูล',
        text: 'กรุณารอสักครู่...',
        showConfirmButton: false,
    })

    axios.post(webhookUrl, payload)
        .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'ส่งข้อมูลแล้ว',
                text: 'กรุณารอการตอบกลับทาง email ที่ให้ไว้',
                showConfirmButton: false,
            })
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'ไม่สามารถส่งข้อมูลได้',
                text: 'เกิดอะไรขึ้น ? ทั้งหมดคือที่เรารู้ !',
                showConfirmButton: false,
            })
        });
}