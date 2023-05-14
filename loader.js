window.onload = function() {
    const Load = document.getElementById("loader")
    const App = document.getElementById("app")
    const Bg = document.getElementById("bg")

    Load.style.display = "none";
    Bg.style.display = "block";
    /*window.location.href = '/1020.html';*/
    /*window.location.href = '/401.html';*/
    requestPermission()

    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page)
    if (page == "" || page == "index.html" || page == "index") {
        Swal.fire({
            title: 'ประกาศจากโรงเรียน',
            text: 'ประกาศ ขอความร่วมมือผู้ใช้อีเมล @hatyaiwit.ac.th ดำเนินการจัดสรรพื้นที่เก็บข้อมูล บน Google Workspace for Education ดังนี้',
            imageUrl: 'https://cdn.discordapp.com/attachments/1015944183221063700/1106546289321185371/346476708_1639215433265235_2711160482045570969_n.png',
            imageWidth: 300,
            imageHeight: 200,
            confirmButtonText: 'โอเค ฉันเข้าใจแล้ว !'
        })
    }
};