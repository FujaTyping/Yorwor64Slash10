window.onload = function() {
    const Load = document.getElementById("loader")
    const App = document.getElementById("app")
    const Bg = document.getElementById("bg")

    Load.style.display = "none";
    Bg.style.display = "block";
    /*window.location.href = '/1020.html';*/
    /*window.location.href = '/401.html';*/
    requestPermission()

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    var time = hours + ":" + minutes;
    
    if (time >= "16:00" && time <= "19:00") {
        console.log('In time')
        window.location.href = '/custom/401.html';
    } else {
        console.log('Not in time')
    }

    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page)
    if (page == "" || page == "index.html" || page == "index") {
        var currentDate = new Date();

        var startDate = new Date("2023-05-19");
        var endDate = new Date("2023-05-31");

        if (currentDate >= startDate && currentDate <= endDate) {
            Swal.fire({
                title: 'เตือนล่วงหน้า 2 สัปดาห์',
                text: 'การเลือกชุมนม และ ภาษาที่ 3\nเลือกที่เว็ป : http://backend.zchoolmate.com/c/yorwor/login/auth',
                imageUrl: 'https://cdn.discordapp.com/attachments/1099034836628410398/1109139652419526666/image.png',
                imageWidth: 300,
                imageHeight: 150,
                confirmButtonText: 'โอเค ไปที่เว็ปเลย !',
                showCancelButton: true,
                cancelButtonText: "ไม่ละ ขอบคุณ",
                footer: '<e style="color: red;text-align: center;">ข้อมูลอาจจะมีการเปลื่ยนแปลงได้ตลอดเวลา</e><a style="color: gray;text-align: center;" href="https://www.hatyaiwit.ac.th/files/com_news/2023-05_5a239cf8f719dc9.pdf">กดที่นี้เพื่อดูรายวิชาทั้งหมดในชุมนม</a><a style="color: gray;text-align: center;" href="https://www.hatyaiwit.ac.th/files/com_news/2022-05_680c37bad1cc0f3.pdf">กดที่นี้เพื่อดูวิธีการเลือกชุมนม</a>'
            }).then((result) => {
                if (result.isConfirmed) {
                    alert('ลิ้งค์นี้จะพาคุณไปที่ backend.zchoolmate.com (เว็ปภายนอก)\nหากคุณต้องการไปที่นั้นกด OK')
                    window.location.href = 'http://backend.zchoolmate.com/c/yorwor/login/auth';
                }
            })
            console.log("In date");
        } else {
            console.log("Not in date");
        }
    }

    var decoded = caesar_decode("Esvw oalz DGNW tq : Kajshzgh Kmcuzm","18")
    console.log(decoded)
};