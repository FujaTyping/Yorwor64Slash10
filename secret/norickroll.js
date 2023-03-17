function FoundSEA () {
    const rick = document.getElementById('notrickaudio')
    rick.play()
    Swal.fire({
        title: 'ไม่นะะะะะะะ คุณโดน rick roll ละ',
        imageUrl: 'https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif',
        imageWidth: 320,
        imageHeight: 320,
        text: 'เจอความลับได้ไงเนี้ย !!!',
        confirmButtonText: 'ก็บอกแล้วว่าอย่าเลื่อนลงมา'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'question',
                title: 'คุณแน่นใจนะว่าจะไม่กดปุ่มนั้นอีกแล้ว ?',
                showCancelButton: true,
                confirmButtonText: 'แน่นใจ',
                cancelButtonText: 'ไม่มีทาง !'
            }).then((result) => {
                if (result.isConfirmed) {
                    rick.pause()
                }
            })
        }
    })
};